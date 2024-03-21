// export const selectIsRegisteredIn = state => state.auth.isRegisteredIn;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUserName = state => state.auth.user.name;

export const selectUserEmail = state => state.auth.user.email;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIncomeSummary = store =>
  store.transactions.incomes.monthsStats;

export const selectExpensesSummary = store =>
  store.transactions.expences.monthsStats;

export const selectIsLoading = store => store.transactions.isLoading;
// export const selectBalance = store => store.balance.balance;

export const selectBalance = store => store.transactions.newBalance;
export const selectExpenseTransactions = store =>
  store.transactions.expences.expenseTransactions;
const getDate = state => state.extraData.date;

export const extraDataSelectors = {
  getDate,
};


export const selectAllTransactions = store =>
  store.transactions.allTransactions;