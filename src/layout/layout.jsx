import Header from "../components/Header";
import Footer from "../components/Footer";
import GetInTouch from "../components/GetInTouch";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Outlet />
      <Footer />
      <GetInTouch />
    </Box>
  );
}
