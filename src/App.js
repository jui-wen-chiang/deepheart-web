import * as React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import { Box } from "src/components/mui";
import Appbar from './components/tools/app_bar.tsx';
import AppRoutes from "./routers/app_routers.tsx";


function AppLayout() {
  const theme = useTheme();

  // Automatically adapt to the height of AppBar
  const autoHeight = {
    ...theme.mixins.toolbar,
    padding: '1.5rem',
  };

  return (
    <React.Fragment> {/* JSX expressions must have one parent element. */}
      <Appbar />
      <Box sx={autoHeight} />
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