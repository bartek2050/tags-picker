import React, { ReactNode } from "react";
import classNames from "classnames";

type IconWrapperProps = {
  children: ReactNode;
  active?: boolean | undefined
}

export const IconWrapper: React.FC<IconWrapperProps> = ({ children, active }) => {
  return (
    <div
      className={classNames("active:bg-gray-600/20 hover:bg-gray-300/20 rounded w-12 h-12 flex justify-center items-center", {
        "bg-gray-900/20": active,
        "hover:bg-gray-900/20": active
      })}
    >
      {children}
    </div>
  );
};
