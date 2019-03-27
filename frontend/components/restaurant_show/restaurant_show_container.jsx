import { connect } from "react-redux";
import { fetchRestaurant } from '../../actions/restaurant_actions';
import { fetchFavorites } from '../../actions/favorite_actions';
import RestaurantShow from "./restaurant_show";

const mapStateToProps = (state, ownProps) => {
  return ({
    restaurant: state.entities.restaurants[ownProps.match.params.id],
    errors: state.errors.restaurant,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchRestaurant: (id) => dispatch(fetchRestaurant(id)),
    fetchFavorites: (userId) => dispatch(fetchFavorites(userId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);