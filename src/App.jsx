import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import theme from "./theme";

// Main
import Home from "./pages/Home";
import AboutUs from "./pages/aboutus";
import Plans from "./pages/plans";
import Support from "./pages/support";

// Solutions
import PersonalTravelers from "./pages/solutions/personal-travelers";
import Enterprises from "./pages/solutions/enterprises";
import EcosystemPartners from "./pages/solutions/ecosystem-partners";

// Ecosystem
import Travelers from "./pages/ecosystems/travelers";
import TravelPartner from "./pages/ecosystems/travel-partner";
import Impact from "./pages/ecosystems/our-impact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Routes>
          {/* Main */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/support" element={<Support />} />

          {/* Solutions */}
          <Route path="/solutions/personal" element={<PersonalTravelers />} />
          <Route path="/solutions/enterprises" element={<Enterprises />} />
          <Route path="/solutions/partners" element={<EcosystemPartners />} />

          {/* Ecosystem */}
          <Route path="/ecosystem/travelers" element={<Travelers />} />
          <Route path="/ecosystem/business" element={<Enterprises />} />
          <Route path="/ecosystem/agencies" element={<TravelPartner />} />
          <Route path="/ecosystem/impact" element={<Impact />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
