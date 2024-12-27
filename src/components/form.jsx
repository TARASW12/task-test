import { Input } from './input';
import user from '../assets/icons/user-id-verification-solid-rounded.png';
import lock from '../assets/icons/lock-password-solid-rounded.png';
import profile from '../assets/icons/user-solid-rounded.png';
import mail from '../assets/icons/mail-02-solid-rounded.png';
import { Checkbox } from './checkbox';

export const Form = () => {
  return (
    <>
      <form className={'mb-[13px] 2xl:mb-[19px]'}>
        <Input img={user} name={'User ID'} />
        <Input
          img={lock}
          name={'Password'}
          additionalText={'8 characters minimun'}
        />
        <Input
          img={profile}
          name={'Account Name'}
          additionalText={'Visible nickname for your profile'}
        />
        <Input
          img={mail}
          styles={'mb-[42px] 2xl:mb-[60px]'}
          resend
          name={'Email'}
        />
        <Input img={mail} name={'Verification Code'} />

        <Checkbox
          firstText={'[Required] I read the '}
          link={'Terms of Service'}
          secondText={' and I agree to the terms.'}
        />
        <Checkbox
          firstText={'[Required] I read the '}
          link={'Privacy Policy'}
          secondText={' and I agree to the terms.'}
        />
        <Checkbox
          firstText={'[Optional] I would like to receive promotional emails.'}
        />
      </form>

      <button
        className={
          'mb-[40px] 2xl:mb-[57px] w-full bg-[#E80004] flex justify-center items-center py-[10px] text-white font-lato font-bold text-[14px] 2xl:text-[19px]'
        }
      >
        Create Account
      </button>
    </>
  );
};
