import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ReportsLogic } from './ReportsLogic';
import css from './Reports.module.scss';
import ArrowL from '../../icons/arrow-l.svg';
import ArrowR from '../../icons/arrow-r.svg';
import { Link } from 'react-router-dom';
import { BalanceConfirm } from '../BalanceConfirm/BalanceConfirm';
import { Date } from '../../components/Date/Date';
import { Summary } from '../SummaryComponent/SummaryComponent';
import { ButtonToHome } from '../ButtonToHome/ButtonToHome'

// import { ReportsChart } from './ReportsChart';

export const ReportsPage = () => {
  const { categories } = ReportsLogic();

  return (
    <HelmetProvider>
      <div className={css.ReportsPageContainer}>
        <ButtonToHome/>
        <BalanceConfirm />
        <Date />
        <Summary />

        <div className={css.ReportsBalanceWrapper}></div>
        <div className={css.ExpensesWrapper}>
          <Link to="/income" className={css.LinkIncome}>
            <img src={ArrowL} alt="arrow" />
            <h2 className={css.Title}>Expenses</h2>
            <img src={ArrowR} alt="arrow" />
          </Link>
          <div className={css.Categories}>
            <ul className={css.CategoriesList}>
              {categories.map(
                (category, index) =>
                  category.value !== 0 && (
                    <li key={index} className={css.CategoriesListItem}>
                      <p>{category.value}</p>
                      <category.icon className={css.CategoriesListIcon} />
                      <p>{category.name}</p>
                    </li>
                  )
              )}
              <li className={css.LineBottom}></li>
            </ul>
          </div>
        </div>
      </div>
      <div>{/* <ReportsChart /> */}</div>
    </HelmetProvider>
  );
};
