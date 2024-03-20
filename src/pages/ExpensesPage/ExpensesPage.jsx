import { ReportsLink } from '../../components/ReportsLink/ReportsLink';
import { ToTransactionButton } from '../../components/ToTransactionButton/ToTransactionButton';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Form from '../../components/Expenses/Form';
// import { ModalConfirm } from 'components/ModalConfirm/ModalConfirm';
import { Summary } from '../../components/Summary/Summary';
// import { DatePicker } from '../../components/Calendar/calendar';
// import BalanceForm from '../../components/BalanceForm/BalanceForm';
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
        <Summary />
        <CabbagesBottom />
        {/* <DatePicker /> */}
        {/* <BalanceForm /> */}
        <Summary />
      </div>
    </HelmetProvider>
  );
};

export default Expenses;

// to muszę jeszcze przemyśleć bo coś mi wywala błędy, potem poprawię jak wszystkie komponenty będą działać

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Helmet, HelmetProvider } from 'react-helmet-async';
// import Form from '../../components/Expenses/Form';
// import { Summary } from '../../components/Summary/Summary';
// import { TransactionListDesktop } from 'components/TransactionListDesktop/TransactionListDesktop';
// // import selectBalance from '../../redux/Balance/selectBalance';
// import { selectExpenseTransactions } from '../../redux/Transactions/selectors';
// import { selectIsLoggedIn } from '../../redux/Auth/selectors';
// import { getExpenses } from '../../redux/Transactions/operations';
// import {
//   BackgroundContainer,
//   FrameContainer,
//   TableAndSummaryContainer,
// } from './ExpensesPage.styled';
// import { useScreenSize } from '../../hooks/useScreenSize';
// import { CabbagesBottom } from '../../components/Background/Authorized/CabbagesBottom';
// import { ToTransactionButton } from '../../components/ToTransactionButton/ToTransactionButton';

// import { ReportsLink } from '../../components/ReportsLink/ReportsLink';
// import { ModalConfirm } from 'components/ModalConfirm/ModalConfirm';
// import { DatePicker } from '../../components/Calendar/calendar';
// import BalanceForm from '../../components/BalanceForm/BalanceForm';

// const Expenses = () => {
//   const dispatch = useDispatch();
//   const allExpenses = useSelector(selectExpenseTransactions);
//   const user = useSelector(selectIsLoggedIn);
//   const balance = useSelector(selectBalance);
//   const color = 'red';

//   const { mobileScreen, tabletScreen, desktopScreen } = useScreenSize();

//   useEffect(() => {
//     if (user) {
//       dispatch(getExpenses());
//     }
//   }, [dispatch, user, balance]);

//   return (
//     <HelmetProvider>
//       <div>
//         <Helmet>
//           <title>Expenses</title>
//         </Helmet>
//         <CabbagesBottom />
//         {mobileScreen && (
//           <>
//             <BackgroundContainer />
//             <ToTransactionButton />
//           </>
//         )}
//         <FrameContainer>
//           <Form />
//           <TableAndSummaryContainer>
//             <TransactionListDesktop>
//               {allExpenses}
//               {color}
//             </TransactionListDesktop>
//             {desktopScreen && <Summary />}
//           </TableAndSummaryContainer>
//         </FrameContainer>
//         {tabletScreen && <Summary />}
//       </div>
//     </HelmetProvider>
//   );
// };

// export default Expenses;
