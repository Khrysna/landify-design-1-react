import quoteImg from "../assets/quote.png";
import quote2Img from "../assets/quote2.png";
import hubspot from "../assets/logo-hubspot.png";
import airbnb from "../assets/logo-airbnb.png";
import strapi from "../assets/logo-strapi.png";
import { twMerge } from "tailwind-merge";

const StoryItem = ({
  logo,
  quote,
  name,
  position,
  company,
  className,
}: {
  className?: string;
  logo: string;
  quote: string;
  name: string;
  position: string;
  company: string;
}) => {
  return (
    <div className={twMerge(className, "rounded-lg bg-white p-6")}>
      <img src={logo} className="h-[32px] w-[112px]" />
      <div className="mt-8 flex">
        <img src={quote2Img} className="text-secondary-600 h-[12px] w-[16px]" />
        <div className="ml-4">
          <p className="text-lg text-neutral-900">{quote}</p>
          <p className="mt-6 text-lg font-bold text-neutral-900">{name}</p>
          <p className="bold text-sm text-neutral-500">
            {position}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

const StoriesSection = () => {
  return (
    <div className="bg-secondary-100">
      <div className="max-container padding-container relative mb-24 mt-16">
        <img
          src={quoteImg}
          className="absolute top-0 z-0 h-[116px] w-[142px]"
        />
        <div className="z-1 flex flex-col gap-8 pt-[56px] lg:flex-row lg:pl-[104px]">
          <div className="flex flex-col">
            <h1 className="text-3xl font-extrabold text-neutral-900 md:text-4xl lg:text-5xl lg:leading-[60px] lg:-tracking-wide">
              Real Stories from Real Customers
            </h1>
            <p className="mt-2 text-lg text-neutral-900">
              Get inspired by these stories.
            </p>

            <StoryItem
              logo={hubspot}
              quote="To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable."
              name="Floyd Miles"
              position="Vice President"
              company="GoPro"
              className="mt-16 self-end lg:max-w-[384px]"
            />
          </div>
          <div className="flex flex-col gap-8 lg:mt-[76px] lg:w-2/3">
            <StoryItem
              logo={airbnb}
              quote="I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it."
              name="Jane Cooper"
              position="CEO"
              company="Airbnb"
            />
            <StoryItem
              logo={strapi}
              quote="Landify saved our time in designing my company page."
              name="Kristin Watson"
              position="Co-Founder"
              company="Strapi"
              className="lg:max-w-[384px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesSection;
