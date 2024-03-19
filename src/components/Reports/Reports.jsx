import React from 'react';
import { ReportsLogic } from './ReportsLogic';
import css from './Reports.module.scss';
import Back from '../../icons/back.svg';
import ArrowL from '../../icons/arrow-l.svg';
import ArrowR from '../../icons/arrow-r.svg';
import { Link } from 'react-router-dom';
// import { ReportsChart } from './ReportsChart';

export const ReportsPage = () => {
  const { categories, totalValue, income, balance, currency } = ReportsLogic();

  return (
    <div className={css.ReportsPageContainer}>
      <div className={css.ReportsPageContainer}>
        <div className={css.ReportsBalanceWrapper}>
          <div className={css.ReportsBalanceWrapperTabletDesk}>
            <Link to="/expenses">
              <div className={css.ArrowBack}>
                <img src={Back} alt="arrow" />
                <p className={css.ArrowBackDesk}>Main Page</p>
              </div>
            </Link>
            <div className={css.DateBalanceWrapper}>
              <div className={css.DateSelectWrapper}>
                <h3>Current period:</h3>
                <div className={css.DateSelect}>
                  <img src={ArrowL} alt="arrow" />
                  <h2>miesiac rok</h2>
                  <img src={ArrowR} alt="arrow" />
                </div>
              </div>
              <div className={css.BalanceConfirmWrapperDesk}>
                <div className={css.BalanceWrapper}>
                  <h3>Balance:</h3>
                  <p className={css.Balance}>
                    <span>{balance}</span>
                    <span>{currency}</span>
                  </p>
                </div>
                <div className={css.ConfirmWrapper}>
                  <h3>Confirm</h3>
                </div>
              </div>
            </div>
          </div>
          <div className={css.BalanceSummaryWrapper}>
            <ul className={css.BalanceSummaryList}>
              <li className={css.BalanceSummaryListItem}>
                <p>Expenses:</p>
                <span className={css.BalanceSummaryExpenses}>
                  <span>-</span>
                  <span>{totalValue}</span>
                  <span className={css.Currency}>{currency}</span>
                </span>
              </li>
              <li>
                <span className={css.LineVertical}></span>
              </li>
              <li className={css.BalanceSummaryListItem}>
                <p>Income:</p>
                {income >= 0 ? (
                  <span className={css.BalanceSummaryIncome}>
                    <span>+</span>
                    <span>{income}</span>
                    <span className={css.Currency}>{currency}</span>
                  </span>
                ) : (
                  <span className={css.BalanceSummaryIncomeMinus}>
                    <span>{income}</span>
                    <span className={css.Currency}>{currency}</span>
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>
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
    </div>
  );
};
