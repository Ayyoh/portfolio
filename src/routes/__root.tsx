import { Outlet, createRootRoute } from '@tanstack/react-router'

import '../styles.css'
import { IndexRoute } from "./index"

export const BaseRoute = createRootRoute({
  component: Outlet,
})

export const routeTree = BaseRoute.addChildren([
  IndexRoute
])