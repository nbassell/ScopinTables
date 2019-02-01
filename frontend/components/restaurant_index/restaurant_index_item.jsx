import React from 'react';
import { Link } from 'react-router-dom';

class RestaurantIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { id, name, city, state, price, thumbnailUrl } = this.props.restaurant;
    const linkPath = "restaurants/" + id;
    debugger
    return (
      <li className="restaurant-index-item">
        <div className="rii-col-1">
          <Link to={`/restaurants/${id}`} className="rii-thumbnail" >
            <img className="img-thumbnail" src="https://s3.amazonaws.com/scopin-tables-dev-aa/test_thumbnail.jpg" alt="test_thumbnail"/>
          </Link>
        </div>
        <div className="rii-col-2">
          <Link
          className="rii-name"
            to={linkPath}>
            {name}
          </Link>
          <div className="rii-row-1">
            City: {city}
          </div>
          <div className="rii-row-2">
            State: {state}
          </div>
          <div className="rii-row-3">
            Price: {price}
          </div>
          <div className="rii-row-4">
            <Link
              className="btn-index-reservation"
              to={linkPath}>
              Make a Reservation
            </Link>
          </div>
          {/* <div className="rii-price">Price will go here</div>
          <div className="rii-rating">Rating will go here</div> */}
        </div>
      </li>
    )
  }
}

export default RestaurantIndexItem;