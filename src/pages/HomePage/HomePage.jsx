import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Kapusta</title>
        </Helmet>
      </div>
    </HelmetProvider>
  );
};

export default Home;
