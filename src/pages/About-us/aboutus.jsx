// export default function AboutUs() {
//   return <div><h1>About Us Page</h1></div>;
// }


import AboutHero from "./components/AboutHero";
import AboutWhoWeAre from "./components/AboutWhoWeAre";
import AboutWhyWeExist from "./components/AboutWhyWeExist";
import AboutEcosystem from "./components/AboutEcosystem";
import AboutJoinUs from "./components/AboutJoinUs";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutWhoWeAre />
      <AboutWhyWeExist />
      <AboutEcosystem />
      <AboutJoinUs />
    </main>
  );
}