import { ReportsLink } from '../../components/ReportsLink/ReportsLink';
import { ToTransactionButton } from '../../components/ToTransactionButton/ToTransactionButton';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import { ModalConfirm } from 'components/ModalConfirm/ModalConfirm';
// import { Summary } from '../../components/Summary/Summary';
import { DatePicker } from '../../components/Calendar/calendar';
// import { BalanceForm } from '../../components/BalanceForm/BalanceForm';
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
        <DatePicker />
        {/* <BalanceForm /> */}
      </div>
    </HelmetProvider>
  );
};

export default Expenses;
