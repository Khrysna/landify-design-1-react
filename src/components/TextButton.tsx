import React from "react";

const TextButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="flex items-center px-6 py-4 text-base font-semibold text-primary-600">
      {children}
    </button>
  );
};

export default TextButton;
