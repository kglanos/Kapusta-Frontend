import { createSlice } from '@reduxjs/toolkit';
import { refreshUser, login } from '../../redux/Auth/operations';
import {
  addIncome,
  getIncome,
  addExpense,
  getExpenses,
  deleteTransaction,
  getAllTransactions,
} from './operations';

const initialState = {
  newBalance: 0,
  isLoading: false,
  error: null,
  incomes: {
    incomeTransactions: [],
    monthsStats: {}, // to można obliczać podczas pobierania danych
  },
  expences: {
    expenseTransactions: [],
    monthsStats: {}, // to można obliczać podczas pobierania danych.
  },
  allTransactions: [], // czym się to różni od income czy expenses
};
/*
 * Często można mieć dylemat czy robić pewne rzeczy na froncie czy backendzie.
 * Wtedy warto pamiętać że BE jest tylko jeden a FE już nie. I czasem niektóre obliczenia
 * można przeżucić na FE jak np obliczanie statystyki itp
 * Dane potrzebne do wyswietlenia można obliczyć już podczas pobierania ich z store.
const initialState = {
  newBalance: 0,
  isLoading: false,
  error: null,
  incomes: [],
  expences: [],
};
*/

export const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    updateAuthBalance: (state, action) => {
      console('test');
      console.log(action.payload);
      state.newBalance = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addIncome.pending, handlePending)
      .addCase(addIncome.fulfilled, (state, action) => {
        state.newBalance = action.payload.newBalance;
        state.incomes.incomeTransactions.push(action.payload.data);
        state.allTransactions.push(action.payload.transaction);
        state.isLoading = false;
      })
      .addCase(addIncome.rejected, handleRejected)

      .addCase(getIncome.pending, handlePending)
      .addCase(getIncome.fulfilled, (state, action) => {
        state.incomes.incomeTransactions = action.payload;
        state.incomes.monthsStats = action.payload.monthsStats;
        state.isLoading = false;
      })
      .addCase(getIncome.rejected, handleRejected)

      .addCase(addExpense.pending, handlePending)
      .addCase(addExpense.fulfilled, (state, action) => {
        state.newBalance = action.payload.newBalance;
        state.expences.expenseTransactions.push(action.payload.data);
        state.allTransactions.push(action.payload.transaction);
        state.isLoading = false;
      })
      .addCase(addExpense.rejected, handleRejected)

      .addCase(getExpenses.pending, handlePending)
      .addCase(getExpenses.fulfilled, (state, action) => {
        state.expences.expenseTransactions = action.payload;
        state.expences.monthsStats = action.payload.monthsStats;
        state.isLoading = false;
      })
      .addCase(getExpenses.rejected, handleRejected)

      // .addCase(updateBalance.pending, handlePending)
      // .addCase(updateBalance.fulfilled, (state, action) => {
      //   state.newBalance = action.payload.newBalance;
      //   state.isLoading = false;
      // })
      // .addCase(updateBalance.rejected, handleRejected)

      .addCase(deleteTransaction.pending, handlePending)
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.newBalance = action.payload.newBalance;
        state.isLoading = false;
        state.allTransactions = state.allTransactions.filter(
          el => el._id !== action.payload.id
        );
        state.incomes.incomeTransactions =
          state.incomes.incomeTransactions.filter(
            el => el._id !== action.payload.id
          );
        state.expences.expenseTransactions =
          state.expences.expenseTransactions.filter(
            el => el._id !== action.payload.id
          );
      })

      .addCase(deleteTransaction.rejected, handleRejected)

      .addCase(getAllTransactions.pending, handlePending)
      .addCase(getAllTransactions.fulfilled, (state, action) => {
        state.newBalance = action.payload.balance;
        state.allTransactions = action.payload.transactions;
        state.isLoading = false;
      })
      .addCase(getAllTransactions.rejected, handleRejected)

      .addCase(refreshUser.fulfilled, (state, action) => {
        const { balance, transactions } = action?.payload;
        state.newBalance = balance;
        state.allTransactions = transactions;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, handleRejected)

      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, action) => {
        state.newBalance = action.payload.balance;
      })
      .addCase(login.rejected, handleRejected);
  },
});

export const transactionsReduser = transactionsSlice.reducer;
export const { updateAuthBalance } = transactionsSlice.actions;
