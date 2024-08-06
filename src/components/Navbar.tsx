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

function Navbar({ className }: { className?: string }) {
  return (
    <>
      <div
        className={twMerge(
          className,
          "flex h-20 items-center justify-between padding-container"
        )}
      >
        <div className="flex">
          <img src={logo} className="h-[32px] w-[128px] mr-8" />
          <ul className="lg:flex gap-2 hidden">
            {navigations.map((navigation) => (
              <li className="py-1 px-2 font-body-small font-semibold">
                {navigation.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-3 items-center">
          <img
            src={googleplay}
            className="h-[40px] w-[136px] hidden md:block"
          />
          <img src={appstore} className="h-[40px] w-[136px] hidden md:block" />
          <RxHamburgerMenu size={24} className="m-4 lg:hidden" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
