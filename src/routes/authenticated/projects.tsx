import { createRoute } from "@tanstack/react-router";
import { BaseRoute } from "../__root";
import ProjectsPage from "#/pages/home/projects-page";

export const ProjectsRoute = createRoute({
  getParentRoute: () => BaseRoute,
  path: "projects",
  component: ProjectsPage,
});
