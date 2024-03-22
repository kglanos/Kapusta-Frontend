import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import css from './Reports.module.scss';
import { BalanceConfirm } from '../BalanceConfirm/BalanceConfirm';
import { DateComponent } from '../../components/Date/Date';
import { Summary } from '../SummaryComponent/SummaryComponent';
import { ButtonToHome } from '../ButtonToHome/ButtonToHome';
import { CategoriesListIcon } from '../CategoriesIconsList/CategoriesIconsList';
// import { ReportsChart } from './ReportsChart';

export const ReportsPage = () => {
  return (
    <HelmetProvider>
      <div className={css.ReportsPageContainer}>
        <ButtonToHome />
        <DateComponent />
        <BalanceConfirm />
        <Summary />
        <CategoriesListIcon />
        {/* <ReportsChart /> */}
      </div>
    </HelmetProvider>
  );
};
