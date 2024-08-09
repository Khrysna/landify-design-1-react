import logoMini from "../assets/logo-mini.png";
import googleplay from "../assets/googleplay.png";
import appstore from "../assets/appstore.png";

const Label = ({ label }: { label: string }) => {
  return <p className="text-base text-white">{label}</p>;
};
const FooterSection = () => {
  return (
    <div className="bg-black">
      <div className="max-container padding-container flex flex-col justify-between gap-4 py-16 md:flex-row">
        <div>
          <img src={logoMini} className="h-[32px] w-[32px]" />
          <div className="mt-6 flex gap-6">
            <Label label="Download Now" />
            <Label label="License" />
          </div>
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3">
            <Label label="About" />
            <Label label="Features" />
            <Label label="Pricing" />
            <Label label="News" />
            <Label label="Help" />
            <Label label="Contact" />
          </div>
          <p className="mt-6 text-sm text-neutral-300">
            © 2021 Landify UI Kit. All rights reserved
          </p>
        </div>
        <div className="mt-8 flex flex-col items-start gap-4 md:mt-0">
          <p className="text-lg font-medium text-neutral-300">Get the App</p>
          <img src={googleplay} className="h-[40px]" />
          <img src={appstore} className="h-[40px]" />
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
