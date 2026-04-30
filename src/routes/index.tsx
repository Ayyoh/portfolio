import { createRoute } from "@tanstack/react-router";
import { BaseRoute } from "./__root";
import HomePage from "#/pages/home/page";

export const IndexRoute = createRoute({
  getParentRoute: () => BaseRoute,
  path: "/",
  component: HomePage,
});
