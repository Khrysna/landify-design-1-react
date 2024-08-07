import background from "./assets/background.png";
import mockup from "./assets/mockup.png";
import Navbar from "./components/Navbar";
import { FiPlayCircle } from "react-icons/fi";

function App() {
  return (
    <>
      <div className="relative">
        <div className="flex flex-col max-container padding-container">
          <Navbar className="relative z-10" />
          <div className="flex flex-col relative z-10 h-screen lg:py-[72px] lg:flex-row">
            <div className="flex flex-col flex-none w-full lg:w-[55%] mr-8 pr-12 py-10 md:py-20 lg:py-24">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 -tracking-wide leading-tight">
                The easiest way to manage projects
              </h1>
              <p className="text-lg font-normal mt-4 text-neutral-700">
                From the small stuff to the big picture, organizes the work so
                teams know what to do, why it matters, and how to get it done.
              </p>
              <div className="flex mt-8 gap-4">
                <button className="bg-primary-600 rounded-lg py-4 px-6 text-white text-base font-semibold ">
                  Get Started
                </button>
                <button className="py-4 px-6 text-primary-600 text-base font-semibold flex items-center">
                  <FiPlayCircle size={24} className="text-primary-600 mr-2" />{" "}
                  Watch Video
                </button>
              </div>
            </div>
            <div className="flex flex-none lg:w-[45%] w-full h-full justify-center">
              <img src={mockup} />
            </div>
          </div>
        </div>
        <img src={background} className="w-full h-screen z-0 absolute top-0" />
      </div>
    </>
  );
}

export default App;
