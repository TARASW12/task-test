export const Input = ({ img, name, additionalText, styles, resend }) => {
  return (
    <>
      <div
        className={`bg-[#2F2424] relative flex py-[8px] 2xl:py-[12px] w-[430px] 2xl:w-[606px] ${!additionalText && `mb-[14px] 2xl:mb-[24px] ${styles}`} `}
      >
        <div
          className={
            'bg-[#1F1818] text-center px-[11px] absolute left-[22px] top-[-10px]'
          }
        >
          <p
            className={
              'font-lato font-normal text-[9px]  text-[#7E6969] 2xl:text-[13px]  '
            }
          >
            {name}
          </p>
        </div>
        <input
          className={
            'border-none text-white px-2 w-full outline-0 bg-transparent'
          }
        />
        {resend && (
          <div
            className={
              'px-[10px] flex justify-center items-center 2xl:px-[14px] whitespace-nowrap bg-[#453535] mr-[15px] 2xl:mr-[21px]'
            }
          >
            <p
              className={
                'font-lato font-normal text-[9px] 2xl:text-[14px] text-[#988080]'
              }
            >
              Resend (60s)
            </p>
          </div>
        )}
        <img
          src={img}
          className={'h-[14px]  w-[14px] mr-[13px] 2xl:h-[20px] 2xl:w-[20px]'}
        />
      </div>
      {additionalText && (
        <div className="flex mt-[7px] 2xl:mt-[10px] mb-[15px] 2xl:mb-[24px] items-center">
          <span className="w-1 h-1 bg-[#5D4D4D] rounded-full mr-2"></span>
          <span className="text-[#5D4D4D] font-normal font-lato text-[10px] 2xl:text-[14px]">
            {additionalText}
          </span>
        </div>
      )}
    </>
  );
};
