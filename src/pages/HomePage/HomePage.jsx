import { LoginForm } from '../../components/LoginForm/LoginForm';
import { CabbagesTop } from '../../components/Background/Unauthorized/CabbagesTop/CabbagesTop';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { CabbagesBottom } from '../../components/Background/Unauthorized/CabbagesBottom/CabbagesBottom';
import { MainLogo } from '../../components/MainLogo/MainLogo';

const Home = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Kapusta</title>
        </Helmet>
        <CabbagesTop />
        <MainLogo />
        <LoginForm />
        <CabbagesBottom />
      </div>
    </HelmetProvider>
  );
};

export default Home;
