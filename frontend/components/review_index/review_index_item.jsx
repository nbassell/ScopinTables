import React, { Component } from 'react';
import { IconStar } from 'react-icons/fa';
import { IconStarEmpty } from 'react-icons/fa';
import { IconHalfStar } from 'react-icons/fa';
import { IconUser } from 'react-icons/fa';
import { IconDelete } from 'react-icons/fa';
import { IconEdit } from 'react-icons/fa';

class ReviewIndexItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }

    this.renderStars = this.renderStars.bind(this);
    this.roundRating = this.roundRating.bind(this);
  }

  renderStars(rating) {
    let stars = [];
    let ratingNum = Math.round(rating * 10) / 10;
    let halfStar = ratingNum;

    for (let i = 0; i < Math.floor(ratingNum); i++ ) {
      stars.push(<IconStar key={i} color="#da3743" />)
      halfStar--;
    }
    if (halfStar >= 0.5) {
      stars.push(<IconHalfStar key={avg} color="#da3743" />)
    }
    while (stars.length < 5) {
      stars.push(<IconStarEmpty key={stars.length} color="#da3743" />)
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
    const review = this.props.review;
    const { expanded } = this.state;
    const toggledClass = expanded ? 'expanded' : 'collapsed';

    return (
      <div>
        <div className="review-details">
          <div className="review-detail">
            <IconUser size={30} color="#D3D3D3" className="user-icon" />
          </div>
          <div className="review-detail">
            {this.renderStars(review.rating)}
          </div>
          <div className="review-detail">
            {this.roundRating(review.rating)}
          </div>
          <div className="review-detail">
            {review.username}
          </div>
          <div className="review-detail">
            {review.date_created}
          </div>
        </div>
        <div className="review-item-ratings">
          <li>{`Overall: ${ review.overall_rating }` }</li>
          <li>{`Food: ${ review.food_rating }` }</li>
          <li>{`Value: ${ review.value_rating }` }</li>
          <li>{`Service: ${ review.service_rating }` }</li>
          <li>{`Ambience: ${ review.ambience_rating }` }</li>
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
            this.props.currentUser !== null && this.props.currentUser.username === this.props.review.username &&
            <div className="footer-icon" onClick={() => this.props.deleteReview(review.id)}>
              <IconDelete size={20} /> Delete
            </div>
          }
          {
            this.props.currentUser !== null && this.props.currentUser.username === this.props.review.username &&
            <div className="footer-icon" onClick={this.props.editReview}>
              <IconEdit size={20} /> Edit
            </div>
          }
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
