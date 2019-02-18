import { combineReducers } from "redux";
import modal from "./modal_reducer";
import reservation from './reservation_confirmations_reducer';
import review from './review_confirmations_reducer';

export default combineReducers({
  modal,
  reservation,
  review
});
