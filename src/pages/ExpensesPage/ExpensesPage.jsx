import { ReportsLink } from '../../components/ReportsLink/ReportsLink';
import { ToTransactionButton } from '../../components/ToTransactionButton/ToTransactionButton';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import { ModalConfirm } from 'components/ModalConfirm/ModalConfirm';
// import { Summary } from '../../components/Summary/Summary';
import { CabbagesBottom } from '../../components/Background/Authorized/CabbagesBottom';

const Expenses = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Expenses</title>
        </Helmet>
        <ToTransactionButton />
        <ReportsLink />
        {/* <ModalConfirm /> */}
        <CabbagesBottom />
      </div>
    </HelmetProvider>
  );
};

export default Expenses;
