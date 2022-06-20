/* eslint-disable import/no-anonymous-default-export */
import * as L from "../../locationTemplates";
import HomePage from "./components/HomePage";
import HomeLayout from "../../ui/HomeLayout";

export default [
  {
    template: L.Home.home,
    title: "Home",
    requiresAuth: false, // Access option
    components: {
      layout: HomeLayout,
      main: HomePage,
    },
  },
];
