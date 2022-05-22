/* eslint-disable import/no-anonymous-default-export */
import { createLocationTemplate } from "../../lib/redux-saga-router";

export default {
  news: createLocationTemplate({
    name: "news",
    path: "/news",
  }),
};
