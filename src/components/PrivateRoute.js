import { selectIsLoggedIn } from '../redux/Auth/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export const PrivateRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/expenses" replace />;
  }

  return <Navigate to="/login" replace />;
};
