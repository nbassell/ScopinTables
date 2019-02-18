import { connect } from 'react-redux';
import { updateReview, clearReviewErrors } from '../../actions/review_actions';
import { closeModal } from '../../actions/modal_actions';
import ReviewForm from './review_form';

const mapStateToProps = ({ entities, session, errors }, ownProps) => {
  const review = entities.reviews[ownProps.reviewId];
  return ({
    formType: 'edit',
    review,
    errors: errors.review,
    restaurant: entities.restaurants[review.restaurant_id],
    currentUser: entities.users[session.id]
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    processForm: review => dispatch(updateReview(review)),
    clearReviewErrors: () => dispatch(clearReviewErrors()),
    closeModal: () => dispatch(closeModal())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)