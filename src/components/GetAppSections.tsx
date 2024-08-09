import mockup2 from "../assets/mockup2.png";
import mockup3 from "../assets/mockup3.png";
import googleplay from "../assets/googleplay.png";
import appstore from "../assets/appstore.png";

const GetAppSection = () => {
  return (
    <div className="bg-secondary-600 flex w-full">
      <div className="max-container padding-container mb-[48px] mt-[80px] flex flex-col gap-8 lg:my-0 lg:flex-row">
        <div className="flex flex-col justify-center gap-2 lg:max-w-[592px]">
          <h1 className="text-3xl font-extrabold text-neutral-900 md:text-4xl lg:text-5xl lg:leading-[60px] lg:-tracking-wide">
            Manage all projects from your mobile
          </h1>
          <p className="text-lg text-neutral-900">
            Download the app to manage your projects, keep track of the progress
            and complete tasks without procastinating. Stay on track and
            complete on time!
          </p>
          <div className="flex flex-col items-center gap-y-4 md:items-start">
            <p className="mt-10 text-lg font-medium text-neutral-900">
              Get the App
            </p>
            <div className="flex flex-col items-start gap-3 md:flex-row">
              <img src={googleplay} className="h-[40px]" />
              <img src={appstore} className="h-[40px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between md:flex-row md:px-8">
          <img src={mockup2} className="max-w-[232px] md:mb-[174px]" />
          <img src={mockup3} className="max-w-[260px] md:mt-[174px]" />
        </div>
      </div>
    </div>
  );
};

export default GetAppSection;
