import AchivementsSection from "./sections/AchivementsSection";
import CompaniesSection from "./sections/CompaniesSection";
import FeaturesSection from "./sections/FeaturesSection";
import FooterSection from "./sections/FooterSection";
import GetAppSection from "./sections/GetAppSections";
import IntegrationsSection from "./sections/IntegrationsSection";
import MainSection from "./sections/MainSection";
import StoriesSection from "./sections/StoriesSection";

function App() {
  return (
    <div className="flex flex-col">
      <MainSection />
      <CompaniesSection />
      <FeaturesSection />
      <StoriesSection />
      <AchivementsSection />
      <IntegrationsSection />
      <GetAppSection />
      <FooterSection />
    </div>
  );
}

export default App;
