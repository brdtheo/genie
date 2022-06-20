import { prepareRoutes } from "./lib/redux-saga-router";

import homeRoutes from "./modules/home/route";
import newsRoutes from "./modules/news/route";
import searchRoutes from "./modules/search/route";

export default prepareRoutes([...homeRoutes, ...newsRoutes, ...searchRoutes]);
