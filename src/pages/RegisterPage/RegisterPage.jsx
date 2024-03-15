import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useScreenSize } from '../../hooks/useScreenSize'

const Register = () => {
  const { mobileScreen, tabletScreen, desktopScreen } = useScreenSize();

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegistrationForm screenSize={{ mobileScreen, tabletScreen, desktopScreen }} />
      </div>
    </HelmetProvider>
  );
};
export default Register;
