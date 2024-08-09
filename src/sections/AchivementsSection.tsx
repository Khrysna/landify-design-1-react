import userFriendly from "../assets/user_friendly.png";
import workflow from "../assets/robust_workflow.png";
import multiple from "../assets/multiple_layouts.png";
import betterComponents from "../assets/better_components.png";

interface AchivementProps {
  icon: string;
  title: string;
  description: string;
}

const achivements = [
  {
    icon: workflow,
    title: "10,000+",
    description: "Downloads per day",
  },
  {
    icon: multiple,
    title: "2 Million",
    description: "Users",
  },
  {
    icon: betterComponents,
    title: "500+",
    description: "Clients",
  },
  {
    icon: userFriendly,
    title: "140",
    description: "Countries",
  },
];

const AchivementItem = ({ achivement }: { achivement: AchivementProps }) => {
  return (
    <div className="flex items-center gap-4 xl:w-[280px]">
      <img src={achivement.icon} className="h-[32px] w-[32px]" />
      <div className="flex flex-col">
        <p className="text-2xl font-bold leading-[45px] -tracking-wide text-neutral-900 lg:text-3xl xl:text-4xl">
          {achivement.title}
        </p>
        <p className="text-base text-neutral-900">{achivement.description}</p>
      </div>
    </div>
  );
};

const AchivementsSection = () => {
  return (
    <div className="max-container padding-container w-full">
      <div className="my-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-extrabold text-neutral-900 lg:text-5xl lg:leading-[60px] lg:-tracking-wide">
            Our 18 years of achivements
          </h1>
          <p className="text-lg text-neutral-900">
            With our super powers we have reached this
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          {achivements.map((achivement) => (
            <AchivementItem achivement={achivement} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchivementsSection;
