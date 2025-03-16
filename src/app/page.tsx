import React from "react";

const HomePage = () => {
  return (
    <div className="flex justify-start items-center h-svh flex-col w-full bg-background text-foreground">
      <div className="text-center py-[67px]">
        <h1 className="text-[81.85px] font-extrabold leading-[99.06px] tracking-[-3%]">
          Get in{" "}
          <span className="bg-gradient-to-r from-foreground from-10% via-secondary via-85% to-primary to-100% bg-clip-text text-transparent">
            touch
          </span>
        </h1>
        <p className="text-[22px] font-medium leading-[26.63px] tracking-[-2%]">
          Contact the Hablu Programmer team!
        </p>
      </div>

      <div className="w-full max-w-[1092px] mx-auto bg-[#FFFFFF0A] border-2 rounded-[20px] border-[#0A0D170D] relative">
        <div className="left-0 top-0 absolute size-[152px] rounded-full blur-[200px] bg-primary" />
        <div className="right-0 top-0 absolute size-[152px] rounded-full blur-[200px] bg-secondary" />
        <div className="left-0 bottom-0 absolute size-[152px] rounded-full blur-[200px] bg-secondary" />

        <div className="w-full h-full p-5 flex justify-between items-start relative z-20">
          <div>{/* Form */}</div>

          <div className="w-full max-w-[516px] relative">
            <img
              src="/contact-form.png"
              alt="Hablu Contact Form Image"
              width={516}
              height={536}
              className="w-full h-auto rounded-xl"
            />
            
            <div className="space-y-1.5 px-7 absolute bottom-10 w-full">
              <p className="opacity-70">
                For any problems or assistance, please contact the Hablu
                programmer team. We are always ready to help! 😊
              </p>
              <p className="font-medium opacity-80">Hablu Programmer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
