import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import googleIcon from '../../icons/Google.png';
import { login } from '../../redux/Auth/operations';
import { useNavigate } from 'react-router-dom';

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
    <div className={css.form}>
      <p className={css.form__advice}>
        You can log in with your Google Account:
      </p>
      <button className={css.form__googleButton}>
        <img
          className={css.form__googleIcon}
          src={googleIcon}
          alt="Google Icon"
        />
        <span className={css.form__googleText}>Google</span>
      </button>
      <p className={css.form__advice}>
        Or log in using an email and password, after registering:
      </p>
      <form className={css.form__form} onSubmit={handleLogin}>
        <label htmlFor="loginEmail" className={css.form__label}>
          Email:{' '}
        </label>
        <input
          id="loginEmail"
          className={css.form__input}
          name="email"
          type="email"
          placeholder="your@email.com"
          autoComplete="email"
        ></input>
        <label htmlFor="loginPassword" className={css.form__label}>
          Password:
        </label>
        <input
          id="loginPassword"
          className={css.form__input}
          name="password"
          type="password"
          placeholder="enter password"
        ></input>
        <div className={css.form__buttons}>
          <button className={css.form__button} type="submit">
            LOG IN
          </button>{' '}
          <button
            className={css.form__button}
            type="button"
            onClick={handleRegistrationClick}
          >
            REGISTRATION
          </button>
        </div>
      </form>
    </div>
  );
};
