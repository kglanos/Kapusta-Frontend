import { Helmet, HelmetProvider } from 'react-helmet-async';

const Income = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Income</title>
        </Helmet>
      </div>
    </HelmetProvider>
  );
};

export default Income;
