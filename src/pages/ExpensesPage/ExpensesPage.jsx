import { Helmet, HelmetProvider } from 'react-helmet-async';

const Expenses = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Expenses</title>
        </Helmet>
      </div>
    </HelmetProvider>
  );
};

export default Expenses;
