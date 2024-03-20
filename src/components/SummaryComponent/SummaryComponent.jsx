import React from 'react';
import css from './SummaryComponent.module.scss';
import { ReportsLogic } from '../Reports/ReportsLogic';

export const Summary = () => {
  const { totalValue, income, currency } = ReportsLogic();

  return (
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
  );
};
