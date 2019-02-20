import React, { Component } from 'react';
import { IconStar } from 'react-icons/fa';
import { IconStarEmpty } from 'react-icons/fa';
import { IconHalfStar } from 'react-icons/fa';
import { FaRegDotCircle } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa';

class ReviewIndexItem extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false }
    this.ratingStars = this.ratingStars.bind(this);
    this.roundRating = this.roundRating.bind(this);
  }

  ratingStars(rating) {
    let stars = [];

    for (let i = 1; i <= 5; i++) {
      let status = (i <= rating) ? "full-star" : "";
        stars.push(
          <i key={ i } className="fa fa-star" id={ status } aria-hidden="true">
        </i>);
        }
    return stars;
  }

  roundRating(rating) {
    return rating.toFixed(1);
  }

  showReadMoreBtn() {
    if (this.props.review.body === undefined ||
       this.props.review.body.length < 200) {
      return false;
    }
    return true;
  }

  render() {
    const { review } = this.props;
    const { expanded } = this.state;
    const toggledClass = expanded ? 'expanded' : 'collapsed';
    return (
      <div className="review-item-container">
        <div className="review-item-sidebar">
          <div className="review-stars">
            <FaRegDotCircle size={30} color="#da3743" className="user-icon" />
          </div>
        </div>
        <div className="review-details">
          <div className="review-stars">
            {this.ratingStars(review.overall_rating)}
          </div>
          {/* <div className="review-detail">
            {review.user_id}
          </div> */}
          <div className="review-item-ratings">
            <li><p>Overall <span>{review.overall_rating}</span></p></li>
            <li><p> &#183; Food <span>{review.food_rating}</span></p></li>
            <li><p> &#183; Value <span>{review.value_rating}</span></p></li>
            <li><p> &#183; Service <span>{review.service_rating}</span></p></li>
            <li><p> &#183; Ambience <span>{review.ambience_rating}</span></p></li>
          </div>
          <div className={`review-response ${toggledClass}`}>
            {review.body}
          </div>
          <div className="review-footer">
            { this.showReadMoreBtn() &&
                <button className="read-more" onClick={() => this.setState({ expanded: !expanded })}>
                {expanded ? '- Read Less' : '+ Read More'}
                </button>
            }
            {
              this.props.currentUserId !== null && this.props.currentUserId === this.props.review.user_id &&
              <div className="footer-icon" onClick={() => this.props.deleteReview(review.id)}>
                <FaRegTrashAlt size={20} /> Delete
              </div>
            }
            {/* {
              this.props.currentUserId !== null && this.props.currentUserId === this.props.review.user_id &&
              <div className="footer-icon" onClick={this.props.editReview}>
                <FaRegEdit size={20} /> Edit
              </div>
            } */}
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewIndexItem;

// import React from "react";

// export default ({ review, currentUserId, deleteReview }) => {

//   const handleDelete = (id) => {
//     return () => deleteReview(id);
//   };

//   const deleteButton = () => {
//     return currentUserId === review.user_id ?
//       <button
//         onClick={ handleDelete(review.id) }
//         className="review-item-delete-button">
//         Delete Review
//       </button> : null;
//   };

//   return (
//     <div className="review-item-container">
//       <div className="review-item-top">
//         <p className="review-item-author">{ `${review.author} says:`}</p>
//         { deleteButton() }
//       </div>
//       <div className="review-item-ratings">
//         <li>{`Overall: ${ review.overall_rating }` }</li>
//         <li>{`Food: ${ review.food_rating }` }</li>
//         <li>{`Value: ${ review.value_rating }` }</li>
//         <li>{`Service: ${ review.service_rating }` }</li>
//         <li>{`Ambience: ${ review.ambience_rating }` }</li>
//       </div>
//       <p className="review-item-body">{ review.body }</p>
//     </div>
//   );
// };
