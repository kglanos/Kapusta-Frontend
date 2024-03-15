import { LoginForm } from '../../components/LoginForm/LoginForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useScreenSize } from '../../hooks/useScreenSize'

const Login = () => {
  const { mobileScreen, tabletScreen, desktopScreen } = useScreenSize(); 

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LoginForm screenSize={{ mobileScreen, tabletScreen, desktopScreen }} /> 
      </div>
    </HelmetProvider>
  );
};

export default Login;
