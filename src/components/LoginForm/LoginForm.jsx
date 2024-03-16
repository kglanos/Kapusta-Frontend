import { useDispatch } from 'react-redux';
import googleIcon from '../../icons/Google.png';
import { login } from '../../redux/Auth/operations';
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
} from '../LoginForm/LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(login({ email, password }));
    form.reset();
  };

  const handleRegistrationClick = () => {
    navigate('/register');
  };

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
      <FormForm onSubmit={handleLogin}>
        <FormLabel htmlFor="loginEmail">Email: </FormLabel>
        <FormInput
          id="loginEmail"
          name="email"
          type="email"
          placeholder="your@email.com"
          autoComplete="email"
        />
        <FormLabel htmlFor="loginPassword">Password:</FormLabel>
        <FormInput
          id="loginPassword"
          name="password"
          type="password"
          placeholder="enter password"
        />
        <FormButtons>
          <FormButton type="submit">LOG IN</FormButton>{' '}
          <FormButton type="button" onClick={handleRegistrationClick}>
            REGISTRATION
          </FormButton>
        </FormButtons>
      </FormForm>
    </FormContainer>
  );
};



// import { useDispatch } from 'react-redux';
// import googleIcon from '../../icons/Google.png';
// import { login } from '../../redux/Auth/operations';
// import { useNavigate } from 'react-router-dom';
// import { useMediaQuery } from 'react-responsive'; // Import hooka useMediaQuery
// import css from './LoginForm.module.css'; // Importować CSS jako 'styles'

// export const LoginForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const mobileScreen = useMediaQuery({
//     query: '(min-width: 320px) and (max-width: 767px)',
//   });
//   const tabletScreen = useMediaQuery({
//     query: '(min-width: 768px) and (max-width: 1279px)',
//   });
//   const desktopScreen = useMediaQuery({ query: '(min-width: 1280px)' });

//   const handleLogin = event => {
//     event.preventDefault();

//     const form = event.target;
//     const email = form.elements.email.value;
//     const password = form.elements.password.value;

//     dispatch(login({ email, password }));
//     form.reset();
//   };

//   const handleRegistrationClick = () => {
//     navigate('/register');
//   };

//   return (
//     <div className={form()}>
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
//       <p className={css.form__advice}>
//         Or log in using an email and password, after registering:
//       </p>
//       <form className={css.form__form} onSubmit={handleLogin}>
//         <label htmlFor="loginEmail" className={css.form_label}>
//           Email:{' '}
//         </label>
//         <input
//           id="loginEmail"
//           className={css.form__input}
//           name="email"
//           type="email"
//           placeholder="your@email.com"
//           autoComplete="email"
//         ></input>
//         <label htmlFor="loginPassword" className={css.form__label}>
//           Password:
//         </label>
//         <input
//           id="loginPassword"
//           className={css.form__input}
//           name="password"
//           type="password"
//           placeholder="enter password"
//         ></input>
//         <div className={css.form__buttons}>
//           <button className={css.form__button} type="submit">
//             LOG IN
//           </button>{' '}
//           <button
//             className={css.form__button}
//             type="button"
//             onClick={handleRegistrationClick}
//           >
//             REGISTRATION
//           </button>
//         </div>
//       </form>
//     </div>
//   );

//   function form() {
//     if (mobileScreen) {
//       return css.mobileForm;
//     } else if (tabletScreen) {
//       return css.tabletForm;
//     } else {
//       return css.desktopForm;
//     }
//   }
// };
