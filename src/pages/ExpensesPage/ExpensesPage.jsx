import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useScreenSize } from 'hooks/useScreenSize';
import { ReportsLink } from 'components/ReportsLink/ReportsLink';
import BalanceForm from 'components/BalanceForm/BalanceForm';
import { StyledHomePage, ReportsAndBalanceContainer } from './Home.styled';
import { TransactionsList } from '../../components/Expenses/TransactionsList/TransactionsList';
import {
  TransactionNavMobile,
  TransactionNavDesktop,
} from 'components/Expenses/TransactionCategoryNav/TransactionCategoryNav';
// import { TotalTransactionsData } from '../../components/Expenses/TransactionCategoryNav/TransactionCategoryNav';

import Form from 'components/Expenses/Form';
import { Summary } from 'components/Summary/Summary';
import { TransactionListDesktop } from 'components/TransactionListDesktop/TransactionListDesktop';
import { ToTransactionButton } from 'components/ToTransactionButton/ToTransactionButton';
import {
  selectBalance,
  selectExpenseTransactions,
  selectIsLoggedIn,
} from '../../redux/selectors';
import { getExpenses } from '../../redux/Transactions/operations';
import {
  FrameContainer,
  TableAndSummaryContainer,
} from './ExpensesPage.styled';
import { CabbagesBottom } from '../../components/Background/Authorized/CabbagesBottom';

const Expenses = () => {
  const dispatch = useDispatch();

  const allExpenses = useSelector(selectExpenseTransactions);
  const user = useSelector(selectIsLoggedIn);
  const balance = useSelector(selectBalance);
  const color = 'red';

  const { mobileScreen, tabletScreen, desktopScreen } = useScreenSize();

  const location = useLocation();

  useEffect(() => {
    if (user) {
      dispatch(getExpenses());
    }
  }, [dispatch, user, balance]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Expenses</title>
      </Helmet>
      <CabbagesBottom />
      {/* {mobileScreen && <BackgroundContainer />} */}
      {mobileScreen && <ToTransactionButton />}
      <StyledHomePage>
        <ReportsAndBalanceContainer>
          {mobileScreen && (
            <ReportsLink to="/reports" state={{ from: location }} />
          )}
          <BalanceForm />
          {!mobileScreen && (
            <ReportsLink to="/reports" state={{ from: location }} />
          )}
        </ReportsAndBalanceContainer>
        {mobileScreen && <TransactionNavMobile />}
        {!mobileScreen && <TransactionNavDesktop />}
        {mobileScreen && <TransactionsList />}
      </StyledHomePage>
      <FrameContainer>
        <Form />
        <TableAndSummaryContainer>
          <TransactionListDesktop>
            {allExpenses}
            {color}
          </TransactionListDesktop>
          {desktopScreen && <Summary />}
        </TableAndSummaryContainer>
      </FrameContainer>
      {tabletScreen && <Summary />}
    </HelmetProvider>
  );
};

export default Expenses;

// import { ReportsLink } from '../../components/ReportsLink/ReportsLink';
// import { ToTransactionButton } from '../../components/ToTransactionButton/ToTransactionButton';
// import { Helmet, HelmetProvider } from 'react-helmet-async';
// import Form from '../../components/Expenses/Form';
// import { Summary } from '../../components/Summary/Summary';
// // import { DatePicker } from '../../components/Calendar/calendar';
// import BalanceForm from '../../components/BalanceForm/BalanceForm';
// import { CabbagesBottom } from '../../components/Background/Authorized/CabbagesBottom';
// import { TransactionListDesktop } from 'components/TransactionListDesktop/TransactionListDesktop';

// import { useSelector } from 'react-redux';
// import { selectExpenseTransactions } from '../../redux/selectors';
// import {
//   FrameContainer,
//   TableAndSummaryContainer,
// } from './ExpensesPage.styled';

// const Expenses = () => {
//   const allExpenses = useSelector(selectExpenseTransactions);
//   const color = 'red';

//   return (
//     <HelmetProvider>
//       <div>
//         <Helmet>
//           <title>Expenses</title>
//         </Helmet>
//         <ToTransactionButton />
//         <ReportsLink />
//         <BalanceForm />
//         <FrameContainer>
//           <Form />
//           <TableAndSummaryContainer>
//             <TransactionListDesktop>
//               {allExpenses}
//               {color}
//             </TransactionListDesktop>
//             <Summary />
//           </TableAndSummaryContainer>
//         </FrameContainer>
//         ;
//         <CabbagesBottom />
//         {/* <DatePicker /> */}
//       </div>
//     </HelmetProvider>
//   );
// };

// export default Expenses;

// to muszę jeszcze przemyśleć bo coś mi wywala błędy, potem poprawię jak wszystkie komponenty będą działać

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Helmet, HelmetProvider } from 'react-helmet-async';
// import Form from '../../components/Expenses/Form';
// import { Summary } from '../../components/Summary/Summary';
// import { TransactionListDesktop } from 'components/TransactionListDesktop/TransactionListDesktop';
// import { selectBalance, selectExpenseTransactions, selectIsLoggedIn } from '../../redux/selectors';
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
