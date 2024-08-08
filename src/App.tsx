import AchivementsSection from "./components/AchivementsSection";
import CompaniesSection from "./components/CompaniesSection";
import FeaturesSection from "./components/FeaturesSection";
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
    </div>
  );
}

export default App;
