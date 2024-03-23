import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-a0a137454a45.herokuapp.com/';
// axios.defaults.baseURL = 'http://localhost:4000'

export const addExpenseTransaction = async info => {
  const { data } = await axios.post('/transaction/expenses', info);

  return data;
};

export const getExpenseTransactions = async () => {
  const { data } = await axios.get('/transaction/expenses');
  return data;
};

// --- dwa pierwsze działaja

export const addIncomeTransaction = async info => {
  const { data } = await axios.post('/transaction/income', info);
  return data;
};

export const getIncomeTransactions = async () => {
  const { data } = await axios.get('/transaction/income');
  return data;
};

export const deleteTransactionById = async id => {
  const { data } = await axios.delete(`/transaction/${id}`);
  return data;
};

export const getIncomeCategories = async () => {
  const { data } = await axios.get('/transaction/income-categories');
  return data;
};

export const getExpenseCategories = async () => {
  const { data } = await axios.get('/transaction/expense-categories');
  return data;
};

export const getPeriodData = async date => {
  const { data } = await axios.get(`/transaction/period-data?date=${date}`);
  return data;
};

export const getUserInfo = async () => {
  const { data } = await axios.get('user');
  return data;
};

export const updateUserBalance = async value => {
  const { data } = await axios.patch('/user/balance', value);
  return data;
};

export const getTotalExpense = async () => {
  const { data } = await axios.get('/transaction/total-expenses');
  return data;
};
