import { combineReducers } from "redux";
import seatsReducer from "../../containers/Seats/reducer";
import cartReducer from "../../containers/Cart/reducer";

const reducers = combineReducers({
  seatsReducer,
  cartReducer
});

export default reducers;
