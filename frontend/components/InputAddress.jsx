/* eslint-disable react/prop-types */
const InputAddress = ({ label, slider, state, dispatch, type }) => {
  return (
    <div
      className={`${
        slider
          ? "h-[120px] border-2 md:border-2 border-white/40"
          : "h-0 border-none"
      }  rounded-lg w-full min-[600px]:w-[500px] px-4 min-[400px]:px-8 py-3 text-[12px] md:text-base transition-height duration-300`}
    >
      <div className={`${slider ? "block" : "hidden"}`}>
        <div className="flex justify-between items-center mb-2">
          <p>{label}</p>
        </div>
        <input
          className={`bg-[#262626] h-[40px] w-[100%] rounded-md px-3 ring-1 ring-gray-700 focus:outline focus:outline-[#28a0f0]`}
          type="text"
          id="max-token"
          value={state}
          onChange={e => dispatch({type, payload: e.target.value})}
        />
      </div>
    </div>
  );
};

export default InputAddress;
