import logo from "../assets/logo.png";
import googleplay from "../assets/googleplay.png";
import appstore from "../assets/appstore.png";
import { twMerge } from "tailwind-merge";

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
          <img src={logo} className="h-[32px] w-[128px] mr-8" />
          <ul className="flex gap-2">
            {navigations.map((navigation) => (
              <li className="py-1 px-2 font-body-small font-semibold">
                {navigation.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-3">
          <img src={googleplay} className="h-[40px] w-[136px]" />
          <img src={appstore} className="h-[40px] w-[136px]" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
