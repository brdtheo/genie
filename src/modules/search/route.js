/* eslint-disable import/no-anonymous-default-export */
import * as L from "../../locationTemplates";
import SearchLayout from "../../ui/SearchLayout";
import SearchPage from "./components/SearchPage";

export default [
  {
    template: L.Search.search,
    title: "Search",
    requiresAuth: false, // Access option
    components: {
      layout: SearchLayout,
      main: SearchPage,
    },
  },
];
