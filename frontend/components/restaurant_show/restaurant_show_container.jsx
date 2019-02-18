import React from "react";
import { connect } from "react-redux";
import { fetchRestaurant } from '../../actions/restaurant_actions';
import RestaurantShow from "./restaurant_show";

const mapStateToProps = (state, ownProps) => {
  debugger
  return ({
    restaurant: state.entities.restaurants[ownProps.match.params.id],
    errors: state.errors.restaurant,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, { match }) => {
  return ({
    fetchRestaurant: () => dispatch(fetchRestaurant(match.params.id)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);