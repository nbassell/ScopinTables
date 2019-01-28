import React from 'react';
import { connect } from 'react-redux';
import RestaurantSearch from './restaurant_search';
import { searchRestaurants } from '../../actions/restaurant_actions';

const mapStateToProps = state => {
  return {
    restaurants: Object.values(state.entities.restaurants)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchRestaurants: query => dispatch(searchRestaurants(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantSearch);