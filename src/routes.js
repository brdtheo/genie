import { prepareRoutes } from "./lib/redux-saga-router";

import homeRoutes from "./modules/home/route";
import newsRoutes from "./modules/news/route";
import searchRoutes from "./modules/search/route";
import notFoundRoute from "./modules/404/route";

export default prepareRoutes([
  ...homeRoutes,
  ...newsRoutes,
  ...searchRoutes,
  ...notFoundRoute,
]);
