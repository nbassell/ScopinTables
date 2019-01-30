import { connect } from 'react-redux';
import RestaurantSearch from './restaurant_search';
import { searchRestaurants } from '../../actions/restaurant_actions';
import { withRouter } from 'react-router-dom';

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RestaurantSearch));