import { combineReducers } from "redux";
import amountReaducer from "./amountReaducer";

const reducers = combineReducers({
  amount: amountReaducer
})

export default reducers;
