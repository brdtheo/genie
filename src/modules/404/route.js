/* eslint-disable import/no-anonymous-default-export */
import * as L from "../../locationTemplates";
import NotFound from "./components/NotFound";
import SearchLayout from "../../ui/SearchLayout";

export default [
  {
    template: L.NotFound.notFound,
    title: "Not Found",
    requiresAuth: false, // Access option
    components: {
      layout: SearchLayout,
      main: NotFound,
    },
  },
];
