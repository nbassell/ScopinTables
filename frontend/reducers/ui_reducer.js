import { combineReducers } from "redux";
import modal from "./modal_reducer";
import reservation from './reservation_confirmations_reducer';

export default combineReducers({
  modal,
  reservation,
});
