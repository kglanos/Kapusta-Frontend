import { useDispatch } from 'react-redux';
import googleIcon from '../../icons/Google.png';
import { register } from '../../redux/Auth/operations';
import { useNavigate } from 'react-router-dom';
import {
  FormContainer,
  FormForm,
  FormAdvice,
  FormAdviceSecond,
  GoogleButton,
  GoogleText,
  FormLabel,
  FormInput,
  FormButtons,
  FormButton,
} from '../RegistrationForm/RegistrationForm.styled';
export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegistration = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(register({ name, email, password }));
    
    form.reset();
    navigate('/login');
  };
  const handleLoginClick = () => {
    navigate('/login');
  };

  // const handleNavigationToLogin = () => {
  //   navigate('/login');
  // };


  return (
    <FormContainer>
      <FormAdvice>You can log in with your Google Account:</FormAdvice>
      <GoogleButton>
        <img src={googleIcon} alt="Google Icon" />
        <GoogleText>Google</GoogleText>
      </GoogleButton>
      <FormAdviceSecond>
        Or log in using an email and password, after registering:
      </FormAdviceSecond>
      <FormForm onSubmit={handleRegistration}>
        <FormLabel htmlFor="registrationUsername">Name: </FormLabel>
        <FormInput
          id="registrationUsername"
          name="name"
          placeholder="Enter your name"
          autoComplete="name"
        />
        <FormLabel htmlFor="registrationEmail">Email: </FormLabel>
        <FormInput
          id="registrationEmail"
          name="email"
          type="email"
          placeholder="your@email.com"
          autoComplete="email"
        />
        <FormLabel htmlFor="registrationPassword">Password:</FormLabel>
        <FormInput
          id="registrationPassword"
          name="password"
          type="password"
          placeholder="enter password"
        />
        <FormButtons>
          <FormButton type="button" onClick={handleLoginClick}>
            LOG IN
          </FormButton>{' '}
          <FormButton type="submit"  >REGISTRATION</FormButton>
        </FormButtons>
      </FormForm>
    </FormContainer>
  );
};

// import css from './RegistrationForm.module.css';
// import { useDispatch } from 'react-redux';
// import googleIcon from '../../icons/Google.png';
// import { register } from '../../redux/Auth/operations';
// import { useNavigate } from 'react-router-dom';

// export const RegistrationForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleRegistration = event => {
//     event.preventDefault();

//     const form = event.target;
//     const name = form.elements.name.value;
//     const email = form.elements.email.value;
//     const password = form.elements.password.value;

//     dispatch(register({ name, email, password }));
//     form.reset();
//   };
//   const handleLoginClick = () => {
//     navigate('/login');
//   };
//   return (
//     <div className={css.form}>
//       <p className={css.form__advice}>
//         You can log in with your Google Account:
//       </p>
//       <button className={css.form__googleButton}>
//         <img
//           className={css.form__googleIcon}
//           src={googleIcon}
//           alt="Google Icon"
//         />
//         <span className={css.form__googleText}>Google</span>
//       </button>
//       <p className={css.form__second}>
//         Or log in using an email and password, after registering:
//       </p>
//       <form className={css.form__form} onSubmit={handleRegistration}>
//         <label htmlFor="registrationUsername" className={css.form__label}>
//           Name:{' '}
//         </label>
//         <input
//           id="registrationUsername"
//           className={css.form__input}
//           name="name"
//           placeholder="Enter your name"
//           autoComplete="name"
//         ></input>
//         <label htmlFor="registrationEmail" className={css.form__label}>
//           Email:{' '}
//         </label>
//         <input
//           id="registrationEmail"
//           className={css.form__input}
//           name="email"
//           type="email"
//           placeholder="your@email.com"
//           autoComplete="email"
//         ></input>
//         <label htmlFor="registrationPassword" className={css.form__label}>
//           Password:
//         </label>
//         <input
//           id="registrationPassword"
//           className={css.form__input}
//           name="password"
//           type="password"
//           placeholder="enter password"
//         ></input>
//         <div className={css.form__buttons}>
//           <button
//             className={css.form__button}
//             type="button"
//             onClick={handleLoginClick}
//           >
//             LOG IN
//           </button>{' '}
//           <button className={css.form__button} type="submit">
//             REGISTRATION
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };
