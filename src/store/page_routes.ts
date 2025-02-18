import * as React from 'react';
import HomePage from "../pages/home";
import AboutPage from "../pages/about";

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
];

export default ROUTES;