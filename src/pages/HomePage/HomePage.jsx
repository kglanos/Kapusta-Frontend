import { LoginForm } from '../../components/LoginForm/LoginForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Kapusta</title>
        </Helmet>
        <LoginForm />
      </div>
    </HelmetProvider>
  );
};

export default Home;
