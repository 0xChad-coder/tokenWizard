/* eslint-disable react/prop-types */

const Button = ({ currStep, onNextStep, onPreviousStep, onHandleCreateToken, isLoading }) => {
  
  return (
    <div className="text-white text-center px-10  mt-8 md:px-[100px]">
      {currStep > 1 && (
        <button
          onClick={onPreviousStep}
          className="relative bottom-[-15%] bg-[#262626] hover:bg-[#28a0f0] px-5 py-2 w-[100px] rounded-lg transition ease-in duration-300"
        >
          Previous
        </button>
      )}
      {currStep <= 5 && (
        <button
          onClick={currStep === 5 ? onHandleCreateToken : onNextStep}
          className="relative ml-5 bottom-[-15%] bg-[#262626] hover:bg-[#28a0f0] px-5 py-2 w-[100px] rounded-lg transition ease-in duration-300"
          disabled = {isLoading}
        >
          {currStep < 4 && "Next"}
          {currStep === 4 && "Review"}
          {currStep === 5 && ( isLoading ? "Token Creating...": "Wizard")}
        </button>
      )}
    </div>
  );
};

export default Button;
