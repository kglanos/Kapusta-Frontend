import React from 'react';
import { ReportsLogic } from '../Reports/ReportsLogic';
import {
  ReportsSummaryWrapper,
  ReportsSummaryList,
  ReportsSummaryListItem,
  ReportsSummaryExpenses,
  ReportsSummaryIncome,
  ReportsSummaryIncomeMinus,
  LineVertical, Currency
} from './ReportsSummary.styled';

export const ReportsSummary = () => {
  const { totalValue, income, currency } = ReportsLogic();

  return (
    <ReportsSummaryWrapper>
      <ReportsSummaryList>
        <ReportsSummaryListItem>
          <p>Expenses:</p>
          <ReportsSummaryExpenses>
            <span>-</span>
            <span>{totalValue}</span>
            <Currency>{currency}</Currency>
          </ReportsSummaryExpenses>
        </ReportsSummaryListItem>
        <li>
          <LineVertical/>
        </li>
        <ReportsSummaryListItem>
          <p>Income:</p>
          {income >= 0 ? (
            <ReportsSummaryIncome>
              <span>+</span>
              <span>{income}</span>
              <Currency>{currency}</Currency>
            </ReportsSummaryIncome>
          ) : (
            <ReportsSummaryIncomeMinus>
              <span>{income}</span>
              <Currency>{currency}</Currency>
            </ReportsSummaryIncomeMinus>
          )}
        </ReportsSummaryListItem>
      </ReportsSummaryList>
    </ReportsSummaryWrapper>
  );
};
