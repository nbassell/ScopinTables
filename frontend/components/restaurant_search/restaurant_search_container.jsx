import { connect } from 'react-redux';
import RestaurantSearch from './restaurant_search';
import { searchRestaurants } from '../../actions/restaurant_actions';
import { withRouter } from 'react-router-dom';
import { preSearch } from '../../actions/restaurant_actions';
import { cuisineSearch } from '../../actions/restaurant_actions';

const mapStateToProps = state => {
  return {
    restaurants: Object.values(state.entities.restaurants)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchRestaurants: query => dispatch(searchRestaurants(query)),
    preSearch: () => dispatch(preSearch()),
    cuisineSearch: (cuisine) => dispatch(cuisineSearch(cuisine)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RestaurantSearch));