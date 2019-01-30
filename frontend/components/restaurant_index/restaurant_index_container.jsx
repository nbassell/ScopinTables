import { connect } from 'react-redux';
import RestaurantIndex from './restaurant_index';

const mapStateToProps = state => {
  return {
    restaurants: Object.values(state.entities.restaurants)
  };
};


export default connect(mapStateToProps, null)(RestaurantIndex);