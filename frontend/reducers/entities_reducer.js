import { combineReducers } from 'redux';

import users from './users_reducer';
import restaurants from './restaurants_reducer';
import reservations from './reservations_reducer';
import reviews from './reviews_reducer';

const entitiesReducer = combineReducers({
  users,
  restaurants,
  reservations,
  reviews,
  // favorites,
});

export default entitiesReducer;