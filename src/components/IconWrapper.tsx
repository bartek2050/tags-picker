import { ReactNode } from "react";

export const IconWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="hover:bg-gray-500/20 rounded p-1 w-9 h-9 flex justify-center items-center">
      {children}
    </div>
  );
};
