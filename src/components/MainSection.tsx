import background from "../assets/background.png";
import mockup from "../assets/mockup.png";
import FilledButton from "../components/FilledButton";
import { FiPlayCircle } from "react-icons/fi";
import TextButton from "../components/TextButton";
import logo from "../assets/logo.png";
import googleplay from "../assets/googleplay.png";
import appstore from "../assets/appstore.png";
import { twMerge } from "tailwind-merge";
import { RxHamburgerMenu } from "react-icons/rx";

interface NavigationBarProps {
  title: string;
}

const navigations: Array<NavigationBarProps> = [
  { title: "Features" },
  { title: "Pricing" },
  { title: "Careers" },
  { title: "Help" },
];

const MainSection = () => {
  return (
    <>
      <div className="relative">
        <div className="max-container padding-container flex flex-col">
          <Navbar className="relative z-10" />
          <div className="relative z-10 flex h-screen flex-col gap-8 lg:flex-row lg:py-[72px]">
            <InstructionSection />
            <MockupSection />
          </div>
        </div>
        <img src={background} className="absolute top-0 z-0 h-screen w-full" />
      </div>
    </>
  );
};

function Navbar({ className }: { className?: string }) {
  return (
    <>
      <div
        className={twMerge(className, "flex h-20 items-center justify-between")}
      >
        <div className="flex">
          <img src={logo} className="mr-8 h-[32px] w-[128px]" />
          <ul className="hidden items-center gap-2 lg:flex">
            {navigations.map((navigation) => (
              <li className="px-2 py-1 text-sm font-semibold text-neutral-900">
                {navigation.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <img
            src={googleplay}
            className="hidden h-[40px] w-[136px] md:block"
          />
          <img src={appstore} className="hidden h-[40px] w-[136px] md:block" />
          <RxHamburgerMenu size={24} className="m-4 lg:hidden" />
        </div>
      </div>
    </>
  );
}

const InstructionSection = () => {
  return (
    <div className="flex w-full flex-col py-10 pr-12 md:py-20 lg:w-[55%] lg:py-24">
      <h1 className="text-4xl font-bold leading-tight -tracking-wide text-neutral-900 md:text-5xl lg:text-6xl">
        The easiest way to manage projects
      </h1>
      <p className="mt-4 text-lg font-normal text-neutral-700">
        From the small stuff to the big picture, organizes the work so teams
        know what to do, why it matters, and how to get it done.
      </p>
      <div className="mt-8 flex gap-4">
        <FilledButton>Get Started</FilledButton>
        <TextButton>
          <FiPlayCircle size={24} className="mr-2 text-primary-600" /> Watch
          Video
        </TextButton>
      </div>
    </div>
  );
};

const MockupSection = () => {
  return (
    <div className="flex h-full w-full justify-center lg:w-[45%]">
      <img src={mockup} />
    </div>
  );
};

export default MainSection;
