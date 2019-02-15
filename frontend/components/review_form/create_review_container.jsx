import { connect } from 'react-redux';
import { createReview, clearReviewErrors } from '../../actions/review_actions';
import { closeModal } from '../../actions/modal_actions';
import ReviewForm from './review_form';

const mapStateToProps = ({ entities, session, errors }, ownProps) => {
  return ({
    formtype: 'create',
    errors: errors.review,
    restaurant: entities.restaurants[ownProps.match.params.id],
    currentUser: entities.users[session.currentUser]
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    processForm: review => dispatch(createReview(review)),
    clearReviewErrors: () => dispatch(clearReviewErrors()),
    closeModal: () => dispatch(closeModal())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)