import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// Main
import Home from "./pages/Home";
import AboutUs from "./pages/About-us/aboutus.jsx";
import Plans from "./pages/plans";
import Support from "./pages/support";

// Solutions
import PersonalTravelers from "./pages/solutions/PersonalTravelers/personal-travelers";
import Enterprises from "./pages/solutions/Enterprises/enterprises";
import EcosystemPartners from "./pages/solutions/EcosystemPartners/ecosystem-partners.jsx";

// Ecosystem
import Travelers from "./pages/ecosystems/travelers";
import TravelPartner from "./pages/ecosystems/travel-partner";
import Impact from "./pages/ecosystems/our-impact";

// Get In Touch Pages
import Coverage from "./pages/Coverage";
import RefundReturns from "./pages/Refund_returns";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Myaccount from "./pages/Myaccount";


import Layout from "./layout/layout.jsx";
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
        {/* Get In Touch */}
        <Route path="/coverage" element={<Coverage />} />
        <Route path="/refund-returns" element={<RefundReturns />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myaccount" element={<Myaccount />} />

      </Route>
    </>,
  ),
);
