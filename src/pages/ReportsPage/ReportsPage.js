import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ReportsPage } from '../../components/Reports/Reports';

const Reports = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Reports</title>
      </Helmet>
      <ReportsPage/>
    </HelmetProvider>
  );
};
export default Reports;