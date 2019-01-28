import React from "react";
import { connect } from "react-redux";
import { fetchRestaurant } from '../../actions/restaurant_actions';
import RestaurantShow from "./show";

const mapStateToProps = ({ entities, errors, session, ui }, { match }) => {
  return ({
    restaurant: entities.restaurants[match.params.id],
    errors: errors.restaurant,
    // loading: ui.loading.showLoading,
    currentUser: session.currentUser
  });
};

const mapDispatchToProps = (dispatch, { match }) => {
  return ({
    fetchRestaurant: () => dispatch(fetchRestaurant(match.params.id)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);