import { connect } from 'react-redux';
import RestaurantIndex from './restaurant_index';
import { searchRestaurants } from '../../actions/restaurant_actions';

const mapStateToProps = state => {
  return {
    restaurants: Object.values(state.entities.restaurants),
    errors: state.errors.restaurant,
  };
};

const mapDispatchToProps = dispatch => {
  return ({
    searchRestaurants: (query) => dispatch(searchRestaurants(query)),
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex);