/* eslint-disable import/no-anonymous-default-export */
import { createLocationTemplate } from "../../lib/redux-saga-router";

export default {
  home: createLocationTemplate({
    name: "home",
    path: "/",
  }),
};
