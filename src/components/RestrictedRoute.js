import { selectIsLoggedIn } from '../redux/Auth/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export const RestrictedRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // Jeśli użytkownik jest zalogowany, przekierowuj go na stronę '/expenses'
  if (isLoggedIn) {
    return <Navigate to="/expenses" replace />;
  }

  // Jeśli użytkownik nie jest zalogowany, przekierowuj go na stronę '/login'
  return <Navigate to="/login" replace />;
};
