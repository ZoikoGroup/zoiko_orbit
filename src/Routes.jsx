import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
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
import Layout from "./layout/layout";
export const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        {/* Main */}
        <Route index element={<Home />} />
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
      </Route>
    </>,
  ),
);
