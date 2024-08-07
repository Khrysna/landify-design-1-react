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

export default Navbar;
