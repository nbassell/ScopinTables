import React from 'react';
import merge from 'lodash/merge';

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  componentWillUnmount() {
    this.props.clearReviewErrors();
  }

  initialState() {
    if (this.props.formType === 'create') {
      return {
        overall_rating: 0,
        food_rating: 0,
        service_rating: 0,
        ambience_rating: 0,
        value_rating: 0,
        body: "",

        hovering: null,
        hoverValue: null
      };
    } else {
      const review = this.props.review;
      return {
        id: review.id,
        overall_rating: review.overall_rating,
        food_rating: review.food_rating,
        service_rating: review.service_rating,
        ambience_rating: review.ambience_rating,
        value_rating: review.value_rating,
        body: review.body,

        hovering: null,
        hoverValue: null
      };
    }
  }

  updateField(field) {
    return (e) => {
      this.props.clearReviewErrors();
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { currentUser, restaurant, processForm } = this.props;
    const review = merge({}, this.state, {
      user_id: currentUser.id,
      restaurant_id: restaurant.id,
    });
    delete review.hovering;
    delete review.hoverValue;
    processForm(review);
  }

  updateRating(ratingType, newRating) {
    return (e) => {
      this.props.clearReviewErrors();
      this.setState({[ratingType]: newRating });
    }
  }

  handleMouseEnter(ratingType, i) {
    return (e) => this.setState({
      hovering: ratingType,
      hoverValue: i
    });
  }

  handleMouseLeave() {
    this.setState({
      hovering: null,
      hoverValue: null
    });
  }

  errorMessages() {
    const errors = this.props.errors;
    if (errors.length === 0) {
      return null;
    } else {
      const errorLis = errors.map((error, i) => (
        <li className="review-error-text" key={idx}>{error}</li>
      ));
      
      return (
        <ul className="review-error-container">
        {errorLis}
      </ul>
      )
    }
  }

  ratingStars(ratingType) {
    let stars = [];
    for (let i = 1; i < 5; i++) {
      let colorThreshold = this.state.hovering == ratingType ?
        this.state.hoverValue : this.state[ratingType];
      let status = (i <= colorThreshold) ? "full-star" : "";
      stars.push(
        <i key={i} className="fa fa-star" id={status} aria-hidden="true"
           onMouseEnter={this.handleMouseEnter(ratingType, i)}
           onMouseLeave={this.handleMouseLeave}
           onClick={this.updateRating(ratingType, i)}></i>
      );
    }
    return stars;
  }

  render() {
    const { restaurant, currentUser } = this.props;

    return (
      <div className="review-form-container">
        <button onClick={this.props.closeModal}
          className="review-close-button">&times;</button>
        <form className="review-form" onSubmit={ this.handleSubmit }>

          <h3 className="review-header">
            { `${currentUser.fname}, how was your dining experience at ${restaurant.name}?` }
          </h3>
          { this.errorMessages() }
          <div className="ratings-container">
            <label>Overall Rating
              <div className="star-container">
                { this.ratingStars("overall_rating") }
              </div>
            </label>

            <label>Food
              <div className="star-container">
                { this.ratingStars("food_rating") }
              </div>
            </label>

            <label>Service
              <div className="star-container">
                { this.ratingStars("service_rating") }
              </div>
            </label>

            <label>Ambience
              <div className="star-container">
                { this.ratingStars("ambience_rating") }
              </div>
            </label>

            <label>Value
              <div className="value-container">
                { this.ratingStars("value_rating") }
              </div>
            </label>
          </div>

          <div className="review-body-container">
            <textarea
              className="review-body"
              placeholder="Please leave a brief description of your experience."
              value={ this.state.body }
              onChange={this.updateField('body')}
            />
            { this.recommendationCheckbox() }
          </div>

          <input type="submit" value="Submit Review" className="review-submit"/>
        </form>
      </div>
    );
  }

}