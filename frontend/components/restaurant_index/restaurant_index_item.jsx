import React from 'react';
import { Link } from 'react-router-dom';
import { priceConvert } from './restaurant_index_helper';

class RestaurantIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { id, name, address, city, price, photoURL } = this.props.restaurant;
    const linkPath = "/restaurants/" + id;
    return (
      <li className="restaurant-index-item">
        <div className="rii-col-1">
          <Link to={`/restaurants/${id}`} className="rii-thumbnail" >
            <img className="img-thumbnail" src={ photoURL } alt="test_thumbnail"/>
          </Link>
        </div> 
        <div className="rii-col-2">
          <Link
          className="rii-name"
            to={linkPath}>
            {name}
          </Link>
          <div className="rii-row-1">
            Address: {address}
          </div>
          <div className="rii-row-2">
            City: {city}
          </div>
          <div className="rii-row-3">
            Price: {priceConvert(price)}
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