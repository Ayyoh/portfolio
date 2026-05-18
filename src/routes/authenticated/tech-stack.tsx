import { createRoute } from "@tanstack/react-router";
import { BaseRoute } from "../__root";
import TechStackPage from "#/pages/home/techstack-page";

export const TechStackRoute = createRoute({
  getParentRoute: () => BaseRoute,
  path: "tech-stack",
  component: TechStackPage,
});
