import { useEffect, useRef } from "react";

const FormHero = () => {
  return (
    <div className="text-white  px-10">
      <div className="mt-[200px] flex justify-center text-center">
        <h1 className=" mr-2 font-bold text-[15px] lg:text-[20px]">
          Deploy Your Own Token Using{" "}
          <span
            className="block overflow-hidden text-[20px] lg:text-[25px] text-[#28a0f0] font-bold relative my-[5px] mx-0  after:absolute after:left-0 after:bottom-0 after:h-[100%] after:w-[100%] after:bg-black after:border-l-2 after:border-[#28a0f0] after:animate-typing_anim "
          >Token Wizard</span>
        </h1>
      </div>
      <p className="text-center mt-3">
        Create your token for your dream project with just few clicks
      </p>
    </div>
  );
};

export default FormHero;
