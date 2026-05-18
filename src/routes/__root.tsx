import { Outlet, createRootRoute } from "@tanstack/react-router";

import "../styles.css";
import { IndexRoute } from "./index";
import { TechStackRoute } from "./authenticated/tech-stack";
import { ProjectsRoute } from "./authenticated/projects";

export const BaseRoute = createRootRoute({
  component: Outlet,
});

export const routeTree = BaseRoute.addChildren([
  IndexRoute,
  TechStackRoute,
  ProjectsRoute,
]);
