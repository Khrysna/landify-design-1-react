import CompaniesSection from "./components/CompaniesSection";
import FeaturesSection from "./components/FeaturesSection";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="flex flex-col">
      <MainSection />
      <CompaniesSection />
      <FeaturesSection />
    </div>
  );
}

export default App;
