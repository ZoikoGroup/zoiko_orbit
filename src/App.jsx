import { CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { AppRoutes } from "./Routes";

function App() {
  return <RouterProvider router={AppRoutes} />;
}

export default App;
