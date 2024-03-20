import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/authSlice';
import { transactionsReduser } from './Transactions/TransactionsSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { reportsReducer } from './reports/reports.slice';
import { reportsQueryReducer } from './reportsQuery/reportsQuery.slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    transactions: transactionsReduser,
    reports: reportsReducer,
    reportsQuery: reportsQueryReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
