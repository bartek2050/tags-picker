import { ReactNode } from "react";

export const IconWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="hover:bg-gray-500/20 rounded w-12 h-12 flex justify-center items-center">
      {children}
    </div>
  );
};
