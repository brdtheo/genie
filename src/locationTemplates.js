import Home from "./modules/home/location";
import NotFound from './modules/404/location'

export { default as Home } from "./modules/home/location";
export { default as News } from "./modules/news/location";
export { default as Search } from "./modules/search/location";
export { default as NotFound } from "./modules/404/location";

export const defaultLocation = Home.home();
export const notFoundLocation = NotFound.notFound()
