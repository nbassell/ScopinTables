import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewIndex from './review_index';
import { clearReviewConfirmation, deleteReview, clearReviewErrors } from '../../actions/review_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ entities, session, ui }, { match }) => {
  return ({
    restaurant: entities.restaurants[match.params.id],
    reviews: entities.reviews,
    currentUserId: session.id,
    reviewConfirmation: ui.review.confirmation
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    openCreateReview: () => dispatch(openModal('create review')),
    openEditReview: (id) => dispatch(openModal('edit review', id)),
    openLogin: () => dispatch(openModal('login')),
    clearReviewConfirmation: () => dispatch(clearReviewConfirmation()),
    clearReviewErrors: () => dispatch(clearReviewErrors()),
    deleteReview: (id) => dispatch(deleteReview(id))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewIndex));
