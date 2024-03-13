import { useDispatch } from 'react-redux';
import { login } from '../../redux/Auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleLogin = event => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    dispatch(
      login({
        email,
        password,
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input name="email" type="email" />

        <label>Password</label>
        <input name="password" type="password" autoComplete="off" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
