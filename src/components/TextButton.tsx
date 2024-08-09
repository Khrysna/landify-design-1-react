import React from "react";
import { twMerge } from "tailwind-merge";

const TextButton = ({
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
        "flex items-center px-6 py-4 text-base font-semibold text-primary-600",
      )}
    >
      {children}
    </button>
  );
};

export default TextButton;
