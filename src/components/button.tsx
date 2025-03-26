import { ButtonHTMLAttributes, FC } from "react";

type IButton = ButtonHTMLAttributes<HTMLButtonElement>;

export const PersonButton: FC<IButton> = ({ children }) => {
  return (
    <button className="text-sm px-3.5 py-1.5 bg-slate-300/20 border border-[#0A0D17] rounded-full hover:bg-secondary/30 transition-all delay-75 active:bg-gradient-to-r from-secondary to-primary">
      {children}
    </button>
  );
};

export const Button: FC<IButton> = ({ children }) => {
  return (
    <button className="w-full rounded-[5px] bg-gradient-to-r from-secondary to-primary py-3 text-lg font-semibold leading-[21.78px] tracking-[-1%]">
      {children}
    </button>
  );
};
