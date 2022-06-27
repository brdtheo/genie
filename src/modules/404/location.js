/* eslint-disable import/no-anonymous-default-export */
import { createLocationTemplate } from "../../lib/redux-saga-router";

export default {
  notFound: createLocationTemplate({
    name: "notfound",
    path: "/notfound",
  }),
};
