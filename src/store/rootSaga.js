/* eslint-disable import/no-anonymous-default-export */
import { call, fork } from "redux-saga/effects";

import {
  watchers as routerWatchers,
  initializeRouteSaga,
} from "../lib/redux-saga-router";
import { notFoundLocation } from "../locationTemplates";

export default (routes) =>
  function* rootSaga() {
    yield fork(routerWatchers, routes);
    yield call(initializeRouteSaga, routes, undefined, notFoundLocation);
  };
