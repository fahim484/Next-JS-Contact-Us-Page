import React from "react";

const HomePage = () => {
  return (
    <div className="flex justify-start items-center h-svh flex-col w-full bg-background text-foreground">
      <div className="text-center py-[67px]">
        <h1 className="text-[81.85px] font-extrabold leading-[99.06px] tracking-[-3%]">
          Get in
          <span className="bg-gradient-to-r from-foreground from-10% via-secondary via-85% to-primary to-100% bg-clip-text text-transparent">
            touch
          </span>
        </h1>
        <p className="text-[22px] font-medium leading-[26.63px] tracking-[-2%]">
          Contact the Hablu Programmer team!
        </p>
      </div>

      <div className="w-full max-w-[1092px] mx-auto bg-[#FFFFFF0A] border-2 rounded-[20px] border-[#0A0D170D] h-[576px] relative">
        <div className="left-0 top-0 absolute size-[152px] rounded-full blur-[200px] bg-primary" />
        <div className="right-0 top-0 absolute size-[152px] rounded-full blur-[200px] bg-secondary" />
        <div className="left-0 bottom-0 absolute size-[152px] rounded-full blur-[200px] bg-secondary" />
      </div>
    </div>
  );
};

export default HomePage;
