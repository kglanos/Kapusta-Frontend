export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUserName = state => state.auth.user.name;

export const selectUserEmail = state => state.auth.user.email;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIncomeSummary = store => store.transactions.incomes.monthsStats;

export const selectExpensesSummary = store => store.transactions.expences.monthsStats;