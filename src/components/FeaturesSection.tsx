import robustWorkflow from "../assets/robust_workflow.png";
import flexibility from "../assets/flexibility.png";
import userFriendly from "../assets/user_friendly.png";
import multipleLayouts from "../assets/multiple_layouts.png";
import betterComponents from "../assets/better_components.png";
import wellOrganised from "../assets/well_organised.png";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const features: Array<FeatureProps> = [
  {
    icon: robustWorkflow,
    title: "Robust workflow",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
  },
  {
    icon: flexibility,
    title: "Flexibility",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
  },
  {
    icon: userFriendly,
    title: "User friendly",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
  },
  {
    icon: multipleLayouts,
    title: "Multiple layouts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
  },
  {
    icon: betterComponents,
    title: "Better components",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
  },
  {
    icon: wellOrganised,
    title: "Well organised",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
  },
];

const FeatureItem = ({ feature }: { feature: FeatureProps }) => {
  return (
    <div className="mx-4 flex flex-col items-center">
      <img src={feature.icon} className="h-[32px] w-[32px]" />
      <h5 className="mt-6 text-center text-3xl font-bold text-neutral-900">
        {feature.title}
      </h5>
      <p className="mt-2 text-center text-base text-neutral-700">
        {feature.description}
      </p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <>
      <div className="max-container padding-container py-24">
        <div className="flex justify-center">
          <div className="flex flex-col gap-2 pb-16 lg:w-1/2">
            <h1 className="text-center text-5xl font-bold leading-none -tracking-wide text-neutral-900">
              Tailor-made features
            </h1>
            <p className="text-center text-lg text-neutral-900">
              Lorem ipsum is common placeholder text used to demonstrate the
              graphic elements of a document or visual presentation.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureItem feature={feature} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturesSection;
