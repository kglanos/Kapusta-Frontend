import { ReportsLink } from '../../components/ReportsLink/ReportsLink';
import { ToTransactionButton } from '../../components/ToTransactionButton/ToTransactionButton';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ModalConfirm } from 'components/ModalConfirm/ModalConfirm';
// import { ModalLogOut } from 'components/ModalLogOut/ModalLogOut';

// import { Summary } from '../../components/Summary/Summary';

const Expenses = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Expenses</title>
        </Helmet>
        <ToTransactionButton />
        <ReportsLink />
        <ModalConfirm />
        {/* <ModalLogOut /> */}
      </div>
    </HelmetProvider>
  );
};

export default Expenses;
