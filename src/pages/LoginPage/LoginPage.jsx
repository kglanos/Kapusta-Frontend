import { LoginForm } from '../../components/LoginForm/LoginForm';
import { CabbageGroup } from '../../components/CabbageGroup/CabbageGroup.';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { CabbageCouple } from '../../components/CabbageCouple/CabbageCouple';
import { MainLogo } from '../../components/MainLogo/MainLogo';
const Login = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <CabbageGroup />
        <MainLogo />
        <LoginForm />
        <CabbageCouple />
      </div>
    </HelmetProvider>
  );
};
export default Login;
