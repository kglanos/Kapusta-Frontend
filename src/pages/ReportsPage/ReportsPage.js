import { Helmet, HelmetProvider } from 'react-helmet-async';

const Reports = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Reports</title>
        </Helmet>
      </div>
    </HelmetProvider>
  );
};

export default Reports;
