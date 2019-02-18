import React from 'react';
import ReviewIndexItem from './review_index_item';

export default class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleReview = this.handleReview.bind(this);
    this.reviewSubmit = this.reviewSubmit.bind(this);
    this.restaurant = this.props;
  }

  componentWillUnmount() {
    this.props.clearReviewErrors();
    this.props.clearReviewConfirmation();
  }

  handleReview(e) {
    e.preventDefault();
    if (!this.props.currentUserId) {
      this.props.openLogin();
    } else {
      const { reviews, currentUserId } = this.props;
      const reviewId = reviews.review_ids.find(id => currentUserId === reviews[id].user_id);

      if (reviewId) {
        this.props.clearReviewConfirmation();
        this.props.openEditReview(reviewId);
      } else {
        this.props.clearReviewConfirmation();
        this.props.openCreateReview();
      }
    }
  }

  reviewSubmit() {
    const { reviews, currentUserId } = this.props;
    if (reviews.review_ids === undefined) return null;
    const buttonText = reviews.review_ids.some(id => {
      return currentUserId === reviews[id].user_id;
    }) ? "Edit Review" : "Write a Review";

    return (
      <button className="submit-review" onClick={this.handleReview}>
        {buttonText}
      </button>
    )
  }

  reviewConfirmation() {
    if (this.props.reviewConfirmation) {
      return (
        <div className="review-confirmation">Review submitted</div>
      );
    } else {
      return null;
    }
  }

  averageReview() {
    <ul className="average-review">
      <li>{`Overall: ${this.restaurant.overall_rating}`}</li>
      <li>{`Food: ${this.restaurant.food_rating}`}</li>
      <li>{`Value: ${this.restaurant.value_rating}`}</li>
      <li>{`Service: ${this.restaurant.service_rating}`}</li>
      <li>{`Ambience: ${this.restaurant.ambience_rating}`}</li>
    </ul>
  }

  reviewItems() {
    const { reviews, currentUserId, deleteReview } = this.props;
    if (reviews.review_ids === undefined) return null;
    return reviews.review_ids.map(id => (
      <ReviewIndexItem id={id} key={id}
        review={reviews[id]}
        currentUserId={currentUserId}
        deleteReview={deleteReview} />
    ));
  }

  render() {
    // const { restaurant } = this.props;

    return (
      <div className="review-master">
        <header>
          <h3 className="review-master-banner">What People Are Saying</h3>
          {this.reviewConfirmation()}
          {this.reviewSubmit()}
          {this.averageReview()}
        </header>
        <ul className="reviews-container">
          {this.reviewItems()}
        </ul>
      </div>
    );
  }
}