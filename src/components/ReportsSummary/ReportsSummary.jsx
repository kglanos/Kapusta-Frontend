import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/selectors';
import { getTotalExpense } from '../../redux/Transactions/apiTransactions';
import { fetchTotalExpense } from '../../redux/Transactions/operations';
import {
  ReportsSummaryWrapper,
  ReportsSummaryList,
  ReportsSummaryListItem,
  ReportsSummaryExpenses,
  ReportsSummaryIncome,
  LineVertical,
  Currency,
} from './ReportsSummary.styled';

export const ReportsSummary = () => {
  const dispatch = useDispatch();
  const totalExpense = useSelector(state => state.transactions.totalExpense);

  const isLoading = useSelector(state => state.transactions.loading);
  //  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchTotalExpense());

    // const fetchTotalExpense = async () => {
    //   const expense = await getTotalExpense();
    //   setTotalExpense(expense);
    // };
  }, [dispatch]);

  return (
    !isLoading && (
      <ReportsSummaryWrapper>
        <ReportsSummaryList>
          <ReportsSummaryListItem>
            <p>Expenses:</p>
            <ReportsSummaryExpenses>
              <span>-</span>
              <span>
                {totalExpense !== null ? totalExpense : 'Ładowanie...'}
              </span>{' '}
              <Currency>usd</Currency>
            </ReportsSummaryExpenses>
          </ReportsSummaryListItem>
          <li>
            <LineVertical />
          </li>
          <ReportsSummaryListItem>
            <p>Income:</p>
            <ReportsSummaryIncome>
              <span>+</span>
              <span>{}</span>
              <Currency>usd</Currency>
            </ReportsSummaryIncome>
          </ReportsSummaryListItem>
        </ReportsSummaryList>
      </ReportsSummaryWrapper>
    )
  );
};
