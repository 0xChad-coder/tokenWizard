/* eslint-disable react/prop-types */
import InputFeature from "../InputFeature";
import InputSlider from "../InputSlider";
import InputAddress from "../InputAddress";


const Form2 = ({ state, dispatch }) => {
  return (
    <div className="text-white px-10 md:px-[100px] mt-[30px]">
      <h1 className="font-bold text-[30px] text-center">Distribution</h1>
      <div className="flex justify-center item-center">
        <p className="w-[600px] text-center text-sm text-gray-400">
          Set up how your token should be initially distributed
        </p>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-full flex justify-center items-center md:w-fit md:px-20 py-8 rounded-xl mt-5 ">
          <div className="w-full min-[600px]:w-fit px-2">
            <InputFeature
              feature={"Team Allocation"}
              label={"Amount of tokens for team"}
              slider = {state.sliderState4}
              state={state.teamAllocation}
              dispatch = {dispatch}
              type = "teamAllocation"
            >
              <InputSlider
                slider = {state.sliderState4}
                dispatch={dispatch}
                type="slider4"
              />
            </InputFeature>
            <InputAddress
              label={"Team's payout address"}
              slider = {state.sliderState4}
              state = {state.teamPayoutAddress}
              dispatch = {dispatch}
              type = "teamPayoutAddress"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form2;
