import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Register = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegistrationForm />
      </div>
    </HelmetProvider>
  );
};
export default Register;
