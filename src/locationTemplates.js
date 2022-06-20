import Home from "./modules/home/location";

export { default as Home } from "./modules/home/location";
export { default as News } from "./modules/news/location";
export { default as Search } from "./modules/search/location";

export const defaultLocation = Home.home();
