import integrations from "../assets/integrations.png";

const IntegrationsSection = () => {
  return (
    <div className="max-container padding-container w-full">
      <div className="my-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold text-neutral-900 md:text-4xl lg:text-5xl lg:leading-[60px] lg:-tracking-wide">
            Easy integrations with 170+ tools
          </h1>
          <p className="text-lg text-neutral-900">
            Connect Landify with your favourite tools that you use daily and
            keep things on track.
          </p>
        </div>
        <img src={integrations} className="w-full lg:w-1/2" />
      </div>
    </div>
  );
};

export default IntegrationsSection;
