export const FormWrapper = ({ children }) => {
  return (
    <div className={'  py-[75px] 2xl:py-[105px] justify-center'}>
      <h1
        className={'font-lato font-bold text-white text-[26px] 2xl:text-[36px]'}
      >
        Create an account
        <span className={'text-[36px] text-red-500'}>.</span>
      </h1>
      <div className={'mb-[46px] 2xl:mb-[65px]'}>
        <div
          className={
            'font-lato font-normal inline mr-[8px] text-[11px] 2xl:text-[15px] text-[#7E6969]'
          }
        >
          Already have an account?
        </div>
        <div
          className={
            'inline font-lato font-normal text-[11px] 2xl:text-[15px] text-[#E80004]'
          }
        >
          Sign in
        </div>
      </div>
      {children}
    </div>
  );
};
