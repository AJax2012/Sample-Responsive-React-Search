import React from "react";
import cn from "classnames";

export type SearchIconProps = {
  align: "left" | "right" | "center";
};

export const SearchIcon: React.FC<SearchIconProps> = ({ align }) => (
  <div
    className={cn(
      "absolute flex inset-y-0 items-center pointer-events-none px-3",
      {
        "left-0": align === "left",
        "right-0": align === "right",
        "justify-center": align === "center",
      }
    )}
  >
    <svg
      aria-hidden="true"
      className="w-5 h-5 text-gray-500 dark:text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>
  </div>
);
