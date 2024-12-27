export const Checkbox = ({ firstText, secondText, link }) => {
  return (
    <label className="flex py-[5px] 2xl:py-[7px] items-center cursor-pointer">
      <div className="w-[11px] h-[11px] 2xl:w-[15px] 2xl:h-[15px]  mr-[7px] 2xl:mr-[9px] bg-[#7E6969]   flex items-center justify-center transition-all duration-300 relative">
        <input type="checkbox" className="peer hidden" />

        <div className="peer-checked:bg-amber-500 peer-checked:border-amber-500 peer-checked:flex w-[11px] h-[11px] 2xl:w-[15px] 2xl:h-[15px] justify-center items-center absolute" />
        <div
          className={`peer-checked:border-l-2 peer-checked:border-b-2 border-white w-[7px] h-[4px] 2xl:w-[12px] 2xl:h-[5px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] `}
        />
      </div>

      <p className="font-lato font-normal text-[#504242] text-[11px] inline 2xl:text-[15px]">
        {firstText}
        {link && (
          <p className="text-[#C9B1B1] inline font-lato font-normal text-[11px] 2xl:text-[15px]">
            {link}
          </p>
        )}
        {secondText}
      </p>
    </label>
  );
};
