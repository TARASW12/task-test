import './App.css';
import { Picture } from './components/picture';
import { FormWrapper } from './components/formWrapper';
import { Form } from './components/form';
import { FormFooter } from './components/formFooter';
function App() {
  return (
    <div className={'h-screen w-full m-auto flex justify-center items-center'}>
      <div
        className={
          'flex justify-center items-stretch gap-[90px] 2xl:gap-[126px]'
        }
      >
        <Picture />

        <FormWrapper>
          <Form />

          <FormFooter />
        </FormWrapper>
      </div>
    </div>
  );
}

export default App;
