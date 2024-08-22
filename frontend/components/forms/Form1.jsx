import { formInputs } from "../../constants";
import { handleInputChange } from "../Form"

const Form1 = ({state, dispatch}) => {
  return (
    <div className="text-white px-10 md:px-[100px]  mt-[30px]">
      <h1 className="font-bold text-[30px] text-center mb-10">Coin Setup</h1>

      <div className="grid grid-cols-1 min-[700px]:grid-cols-2 md:grid-cols-3 justify-items-center gap-x-5 gap-y-10">
        {formInputs.map((formInput) => (
          <InputForm1
            key={formInput.id}
            label={formInput.label}
            id={formInput.id}
            placeholder={formInput.placeholder}
            isRequired={formInput.isRequired}
            type = {formInput.id}
            inputType = {formInput.inputType}
            state = {state}
            dispatch = {dispatch}
          />
        ))}

        <div className=" w-[100%] col-span-1 min-[700px]:col-span-2 md:col-span-3">
          <label htmlFor="description" className="block text-sm mb-1">
            Description <span className="text-red-700 ">*</span>
          </label>
          <textarea
            id="description"
            cols="30"
            rows="5"
            placeholder="describe your project to your audience"
            className="bg-[#262626] py-3  w-[100%] rounded-md px-3 ring-1 ring-gray-700 focus:outline focus:outline-[#28a0f0]"
            value={state.description}
            onChange={e => dispatch({type: "description", payload: e.target.value})}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Form1;

// eslint-disable-next-line react/prop-types
const InputForm1 = ({ inputType="text", label, id, placeholder, isRequired, type, state, dispatch }) => {
  return (
    <div className=" w-[100%]">
      <label htmlFor={id} className="block text-sm mb-1">
        {label} {isRequired && <span className="text-red-700 ">*</span>}
      </label>
      <input
        type={inputType}
        id={id}
        placeholder={placeholder}
        className="bg-[#262626] h-[40px] w-[100%] rounded-md px-3 ring-1 ring-gray-700 focus:outline focus:outline-[#28a0f0]"
        value={state[type]}
        onChange={e => dispatch({type, payload: e.target.value})}
      />
    </div>
  );
};
