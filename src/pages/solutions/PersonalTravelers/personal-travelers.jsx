import PersonalTravelerHero from "./components/PersonalTravelerHero";
import HowItWorks from "./components/HowItWorks";
import Plans from "../../../components/plans";
// import PlansEuropeUK from "./components/PlansEuropeUK";
import WhyChooseZoikoOrbit from "./components/WhyChooseZoikoOrbit";
// import DestinationSelector from "./components/DestinationSelector";
import LovedByTravelers from "./components/LovedByTravelers";
import FAQSection from "./components/FAQSection";
import ExperienceFuture from "./components/ExperienceFuture";

// Note: Import PlanFinder from wherever it lives in your project
// import PlanFinder from "../home/PlanFinder";

export default function PersonalTravelerPage() {
  return (
    <main>
      <PersonalTravelerHero />
      <HowItWorks />

      <Plans />
      {/* <PlansEuropeUK /> */}
      <WhyChooseZoikoOrbit />
      {/* <DestinationSelector /> */}
      <LovedByTravelers />
      <FAQSection />
      <ExperienceFuture />
    </main>
  );
}
