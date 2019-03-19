import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    const restaurants = this.props.restaurants.map((restaurant) => {
      return <RestaurantIndexItem
      key={restaurant.id}
      restaurant={restaurant} />
    });
    return (
      <div className="restaurant-index-wrapper">
        <ul className="restaurant-index-list">
          {restaurants}
        </ul>
      </div>
    )
  }

}

export default RestaurantIndex;