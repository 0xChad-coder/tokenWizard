/* eslint-disable react/prop-types */
// import { useState } from "react";
import InputSlider from "../InputSlider";
import InputFeature from "../InputFeature";


const Form3 = ({ state, dispatch }) => {
  return (
    <div className="text-white px-10 md:px-[100px] mt-[30px]">
      <h1 className="font-bold text-[30px] text-center">Bot Protection</h1>
      <div className="flex justify-center item-center">
        <p className="w-[600px] text-center text-sm text-gray-400">
          Enable these features if you want to protect your token launch from
          bots and snipers. You can not change these settings after contract has
          been renounced
        </p>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-full flex justify-center items-center md:w-fit md:px-20 py-8 rounded-xl mt-5 ">
          <div className="w-full min-[600px]:w-fit px-2">
            <InputFeature
              feature={"Limit per wallet"}
              label={"Max tokens per wallet"}
              slider={state.sliderState1}
              state={state.limitPerWallet}
              dispatch={dispatch}
              type="limitPerWallet"
            >
              <InputSlider
                slider={state.sliderState1}
                dispatch={dispatch}
                type="slider1"
              />
            </InputFeature>
            <InputFeature
              feature={"Max per transaction"}
              label={"Max tokens per trade"}
              slider={state.sliderState2}
              state = {state.maxPerTx}
              dispatch={dispatch}
              type="maxPerTx"
            >
              <InputSlider
                slider={state.sliderState2}
                dispatch={dispatch}
                type="slider2"
              />
            </InputFeature>
            <SniperAutoBurnFeature
              feature={"Sniper auto-burn"}
              slider={state.sliderState3}
            >
              <InputSlider
                slider={state.sliderState3}
                dispatch={dispatch}
                type="slider3"
              />
            </SniperAutoBurnFeature>
          </div>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const SniperAutoBurnFeature = ({ feature, slider, children }) => {
  return (
    <div className="border-2 border-white/40 md:border-2  mb-3 rounded-lg w-full min-[600px]:w-[500px] px-4 min-[400px]:px-8 py-3 text-[12px] md:text-base">
      <div className="flex justify-between items-center">
        <p>{feature}</p>
        {children}
      </div>
      <div
        className={`${
          slider ? "h-auto" : "h-0"
        } transition-height duration-300 mt-3 mb-3`}
      >
        <p className={`${slider ? "block" : "hidden"}`}>
        When you buy in the first block, there's a 20% extra tax. It decreases to 13.33% in the second block, 6.66% in the third, and no tax from the fourth block onwards. The extra tax money is burned right away, reducing the total supply. Remember, this feature is just to stop snipers, not to make extra money.
        </p>
      </div>
    </div>
  );
};

export default Form3;
