import { combineReducers } from 'redux';

import users from './users_reducer';
import restaurants from './restaurants_reducer';

export default combineReducers({
  users,
  restaurants,
  // reservations,
  // reviews,
  // favorites,
});