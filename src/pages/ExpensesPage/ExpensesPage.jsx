import { ReportsLink } from '../../components/ReportsLink/ReportsLink';
import { ToTransactionButton } from '../../components/ToTransactionButton/ToTransactionButton';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Form from 'components/Expenses/Form';
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
        <Form />
        {/* <ModalConfirm /> */}
        <CabbagesBottom />
        <DatePicker />
        {/* <BalanceForm /> */}
      </div>
    </HelmetProvider>
  );
};

export default Expenses;
