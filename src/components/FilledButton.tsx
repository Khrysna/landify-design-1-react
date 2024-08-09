import React from "react";
import { twMerge } from "tailwind-merge";

const FilledButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={twMerge(
        className,
        "rounded-lg bg-primary-600 px-6 py-4 text-base font-semibold text-white",
      )}
    >
      {children}
    </button>
  );
};

export default FilledButton;
