import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';
import { CabbageGroup } from '../../components/CabbageGroup/CabbageGroup.';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { CabbageCouple } from '../../components/CabbageCouple/CabbageCouple';
import { MainLogo } from '../../components/MainLogo/MainLogo';

const Register = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <CabbageGroup />
        <MainLogo />
        <RegistrationForm />
        <CabbageCouple />
      </div>
    </HelmetProvider>
  );
};
export default Register;
