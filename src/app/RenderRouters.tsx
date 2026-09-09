import { Route } from "react-router";
import { RouteConfig } from "./router/routes";

export default function renderRoutes(routes: RouteConfig[]) {
  return routes.map((route) => (
    <Route key={route.path} path={route.path} element={route.element}>
      {route.children && renderRoutes(route.children)}
    </Route>
  ));
}
