import { combineReducers } from "redux";
import { createRouterReducer } from "../lib/redux-saga-router";
import { defaultLocation } from "../locationTemplates";
import homeReducer from "../modules/home/homeReducer";

const rootReducer = combineReducers({
  router: createRouterReducer(defaultLocation),
  homeReducer,
});

export default rootReducer;
