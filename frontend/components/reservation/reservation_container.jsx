import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  createReservation,
  clearReservationErrors,
  clearReservationConfirmation,
} from '../../actions/reservation_actions';
import { openModal } from '../../actions/modal_actions';
import ReservationForm from './reservation_form';

const mapStateToProps = ({ entities, session, errors, ui }, { match }) => {
  return ({
    restaurant: entities.restaurants[match.params.id],
    currentUser: session.id,
    errors: errors.reservation,
    confirmation: ui.reservation.confirmation,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    createReservation: reservation => dispatch(createReservation(reservation)),
    clearReservationErrors: () => dispatch(clearReservationErrors()),
    clearReservationConfirmation: () => dispatch(clearReservationConfirmation()),
    openLogin: () => dispatch(openModal('login')),
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReservationForm));