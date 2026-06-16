import { Route as rootRouteImport } from "./routes/__root";
import { Route as IndexRouteImport } from "./routes/index";
import { Route as SpasiboRouteImport } from "./routes/spasibo";

const IndexRoute = IndexRouteImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => rootRouteImport,
} as any);

const SpasiboRoute = SpasiboRouteImport.update({
  id: "/spasibo",
  path: "/spasibo",
  getParentRoute: () => rootRouteImport,
} as any);

const rootRouteChildren = {
  IndexRoute: IndexRoute,
  SpasiboRoute: SpasiboRoute,
};

export const routeTree = rootRouteImport._addFileChildren(rootRouteChildren) as any;