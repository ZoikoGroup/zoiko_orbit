import { CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import Layout from "./Layout/layout";
import theme from "./theme";
import { AppRoutes } from "./Routes";

function App() {
  return <RouterProvider router={AppRoutes} />;
}

export default App;
