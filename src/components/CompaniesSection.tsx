import React from "react";
import airbnb from "../assets/logo-airbnb.png";
import hubspot from "../assets/logo-hubspot.png";
import google from "../assets/logo-google.png";
import microsoft from "../assets/logo-microsoft.png";
import walmart from "../assets/logo-walmart.png";
import fedex from "../assets/logo-fedex.png";

const companies: Array<string> = [
  airbnb,
  hubspot,
  google,
  microsoft,
  walmart,
  fedex,
];

const CompaniesSection = () => {
  return (
    <div className="my-10">
      <div className="flex flex-wrap justify-center gap-16 p-4">
        {companies.map((company) => (
          <img src={company} className="h-6" />
        ))}
      </div>
    </div>
  );
};

export default CompaniesSection;
