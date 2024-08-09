import AchivementsSection from "./components/AchivementsSection";
import CompaniesSection from "./components/CompaniesSection";
import FeaturesSection from "./components/FeaturesSection";
import GetAppSection from "./components/GetAppSections";
import IntegrationsSection from "./components/IntegrationsSection";
import MainSection from "./components/MainSection";
import StoriesSection from "./components/StoriesSection";

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
    </div>
  );
}

export default App;
