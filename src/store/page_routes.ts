import * as React from 'react';
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import DashboardPage from "../pages/dashboard";

import TestPage from "../pages/test";

export interface RouteConfig {
  path: string;
  name: string;
  element: React.ReactNode;
}

export const ROUTES: RouteConfig[] = [
  {
    path: "/",
    name: "Home",
    element: React.createElement(HomePage)
  },
  {
    path: "/about",
    name: "About",
    element: React.createElement(AboutPage)
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    element: React.createElement(DashboardPage)
  },
  {
    path: "/test",
    name: "TestPage",
    element: React.createElement(TestPage)
  }
];

export default ROUTES;