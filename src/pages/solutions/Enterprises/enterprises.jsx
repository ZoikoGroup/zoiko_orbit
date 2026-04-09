import EnterpriseHero from "./components/EnterpriseHero";
import WhyEnterprisesChooseZoiko from "./components/WhyEnterprisesChooseZoiko";
import SolutionsBuiltForBusiness from "./components/SolutionsBuiltForBusiness";
import PlugIntoSystems from "./components/PlugIntoSystems";
// import SeamlessIntegration from "./components/SeamlessIntegration";
import ProvenAtScale from "./components/ProvenAtScale";
import ContactSpeak from "./components/ContactSpeak";
import EnterpriseFAQ from "./components/EnterpriseFAQ";

export default function EnterprisePage() {
  return (
    <main>
      <EnterpriseHero />
      <WhyEnterprisesChooseZoiko />
      <SolutionsBuiltForBusiness />
      <PlugIntoSystems />
      {/* <SeamlessIntegration /> */}
      <ProvenAtScale />
      <ContactSpeak />
      <EnterpriseFAQ />
    </main>
  );
}