import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Appbar from './components/tools/app_bar.tsx';
import AppRoutes from "./routers/app_routers.tsx";

function AppLayout() {
  return (
    <React.Fragment> {/* JSX expressions must have one parent element. */}
      <Appbar />
      <AppRoutes />
    </React.Fragment>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}