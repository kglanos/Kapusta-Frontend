import { useDispatch } from 'react-redux';
import { register } from '../../redux/Auth/operations';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleRegistration = event => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    dispatch(
      register({
        email,
        password,
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleRegistration}>
        <label>Email</label>
        <input name="email" type="email" />

        <label>Password</label>
        <input name="password" type="password" autoComplete="off" />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
