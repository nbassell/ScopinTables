import React from 'react';
import { Link } from 'react-router-dom';
import { priceConvert } from './restaurant_index_helper';

class RestaurantIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, name, address, city, price, cuisine, photoURL } = this.props.restaurant;
    const linkPath = "/restaurant/show/" + id;
    return (
      <li className="restaurant-index-item">
        <div className="rii-col-1">
          <Link to={ linkPath } className="rii-thumbnail" >
            <img className="img-thumbnail" src={ photoURL } alt="test_thumbnail"/>
          </Link>
        </div> 
        <div className="rii-col-2">
          <Link
          className="rii-name"
            to={ linkPath }>
            { name }
          </Link>
          <div className="rii-row-1">
            { cuisine }
          </div>
          <div className="rii-row-2">
            Address: { address }
          </div>
          <div className="rii-row-3">
            City: { city }
          </div>
          <div className="rii-row-4">
            Price: { priceConvert(price) }
          </div>
          <div className="rii-row-5">
            <Link
              className="btn-index-reservation"
              to={ linkPath }>
              Make a Reservation
            </Link>
          </div>
        </div>
      </li>
    )
  }
}

export default RestaurantIndexItem;