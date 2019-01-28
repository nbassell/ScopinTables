import React from "react";
import { connect } from "react-redux";
import { fetchRestaurant } from '../../actions/restaurant_actions';
import RestaurantShow from "./restaurant_show";

const mapStateToProps = (oldState, ownProps) => {
  return ({
    restaurant: oldState.entities.restaurants[ownProps.match.params.id],
    errors: oldState.errors.restaurant,
    currentUser: oldState.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchRestaurant: (id) => dispatch(fetchRestaurant(id)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);