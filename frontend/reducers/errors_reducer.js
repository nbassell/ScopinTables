import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import reservation from './reservation_errors_reducer';

export default combineReducers({
  session,
  // restaurant,
  reservation,
});
