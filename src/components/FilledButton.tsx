import React from "react";

const FilledButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="rounded-lg bg-primary-600 px-6 py-4 text-base font-semibold text-white">
      {children}
    </button>
  );
};

export default FilledButton;
