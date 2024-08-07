import background from "./assets/background.png";
import mockup from "./assets/mockup.png";
import Navbar from "./components/Navbar";
import { FiPlayCircle } from "react-icons/fi";

function App() {
  return (
    <>
      <div className="relative">
        <div className="max-container padding-container flex flex-col">
          <Navbar className="relative z-10" />
          <div className="relative z-10 flex h-screen flex-col lg:flex-row lg:py-[72px]">
            <div className="mr-8 flex w-full flex-none flex-col py-10 pr-12 md:py-20 lg:w-[55%] lg:py-24">
              <h1 className="text-4xl font-bold leading-tight -tracking-wide text-neutral-900 md:text-5xl lg:text-6xl">
                The easiest way to manage projects
              </h1>
              <p className="mt-4 text-lg font-normal text-neutral-700">
                From the small stuff to the big picture, organizes the work so
                teams know what to do, why it matters, and how to get it done.
              </p>
              <div className="mt-8 flex gap-4">
                <button className="rounded-lg bg-primary-600 px-6 py-4 text-base font-semibold text-white">
                  Get Started
                </button>
                <button className="flex items-center px-6 py-4 text-base font-semibold text-primary-600">
                  <FiPlayCircle size={24} className="mr-2 text-primary-600" />{" "}
                  Watch Video
                </button>
              </div>
            </div>
            <div className="flex h-full w-full flex-none justify-center lg:w-[45%]">
              <img src={mockup} />
            </div>
          </div>
        </div>
        <img src={background} className="absolute top-0 z-0 h-screen w-full" />
      </div>
    </>
  );
}

export default App;
