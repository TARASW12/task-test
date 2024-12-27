import headphones from '../assets/icons/headphones.png';

export const FormFooter = () => {
  return (
    <div className={'flex justify-around items-center'}>
      <div className={'flex gap-[14px] items-center 2xl:gap-[20px]'}>
        <img
          src={headphones}
          className={'w-[12px] h-[12px] 2xl:w-[16px] 2xl:h-[12px]'}
        />
        <p
          className={
            'font-lato font-normal text-[#7E6969] text-[11px] 2xl:text-[15px]'
          }
        >
          Have Promo Code?
        </p>
      </div>
      <p
        className={
          'font-lato font-normal text-[#7E6969] text-[11px] 2xl:text-[15px]'
        }
      >
        Contact Support
      </p>
    </div>
  );
};
