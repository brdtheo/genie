/* eslint-disable import/no-anonymous-default-export */
import { createLocationTemplate } from "../../lib/redux-saga-router";

export default {
  search: createLocationTemplate({
    name: "search",
    params: ["query"], // Here you can also set up a dynamic params in route
    path: "/search?q=:query",
  }),
};
