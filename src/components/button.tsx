import { FC } from "react";

type IChildren = { children: React.ReactNode };

export const PersonButton: FC<IChildren> = ({ children }) => {
  return (
    <button className="text-sm px-3.5 py-1.5 bg-slate-300/20 border border-[#0A0D17] rounded-full hover:bg-secondary/30 transition-all delay-75">
      {children}
    </button>
  );
};
