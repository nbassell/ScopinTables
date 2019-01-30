import React from 'react';
import { Link } from 'react-router-dom';

class RestaurantIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { restaurant } = this.props;
    
    return (
      <li className="search-result">
        <hr/>
        <Link to={`/restaurants/${restaurant.id}`}>
          <img className="sr-thumbnail" src="https://s3.amazonaws.com/scopin-tables-dev-aa/test_thumbnail.jpg" alt="test_thumbnail"/>
        </Link>
        <div className="sr-restaurant">
          <Link to={`/restaurants/${restaurant.id}`}>
            <div className="sr-restaurant-name">{restaurant.name}</div>
          </Link>
          <div className="sr-price">Price will go here</div>
          <div className="sr-rating">Rating will go here</div>
        </div>
      </li>
    )
  }
}

export default RestaurantIndexItem;