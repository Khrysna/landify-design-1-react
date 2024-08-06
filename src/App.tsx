import background from "./assets/background.png";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="relative">
        <div className="flex flex-col max-w-[1440px] max-container padding-containerr">
          <Navbar className="relative z-10" />
        </div>
        <img src={background} className="w-full h-screen z-0 absolute top-0" />
      </div>
    </>
  );
}

export default App;
