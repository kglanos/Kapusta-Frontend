// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { alert } from '@pnotify/core';
// axios.defaults.baseURL = 'http://localhost:5000';

// const userLogin = '/auth/login';
// const userRegister = '/auth/registration';
// const userLogOut = '/auth/logout';
// const userCurrent = '/users/';
// const userTransaction = '/transactions/';
// const userBalance = '/users/balance ';

// export const registerThunk = createAsyncThunk(
//   'users/register',
//   async (user, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post(userRegister, { ...user });

//       alert({
//         text: 'Registration was successful, click the login button',
//         delay: 1500,
//         hide: true,
//       });
//       return data.data;
//     } catch (error) {
//       alert({
//         text: 'User already exists, try a different name or click the sign in button',
//         delay: 1500,
//         hide: true,
//       });
//       return rejectWithValue(error);
//     }
//   }
// );

// export const loginThunk = createAsyncThunk(
//   'users/login',
//   async (user, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post(userLogin, { ...user });

//       alert({
//         text: `Welcome, ${user.email}`,
//         delay: 1500,
//         hide: true,
//       });

//       return data.data;
//     } catch (error) {
//       alert({
//         text: 'There is no such user, try another one',
//         delay: 1500,
//         hide: true,
//       });
//       return rejectWithValue({
//         error,
//       });
//     }
//   }
// );

// export const currentThunk = createAsyncThunk(
//   'users/current',
//   async (_, { rejectWithValue, getState }) => {
//     const state = getState();
//     if (state.auth.token) {
//       try {
//         const { data } = await axios.get(userCurrent + state.auth.id);
//         return data.data;
//       } catch (error) {
//         return rejectWithValue({
//           error: error.message,
//         });
//       }
//     }
//   }
// );

// export const logOutThunk = createAsyncThunk(
//   'users/logout',
//   async (_, { rejectWithValue, getState }) => {
//     const state = getState();
//     if (state.auth.token) {
//       try {
//         const response = await axios.post(userLogOut);
//         return response.data.statusText;
//       } catch (error) {
//         return rejectWithValue({
//           error: error.message,
//         });
//       }
//     }
//   }
// );

// export const userGetTransaction = createAsyncThunk(
//   'users/transaction',
//   async (transactions, { rejectWithValue, getState }) => {
//     const state = getState();
//     if (state.auth.token) {
//       try {
//         const { data } = await axios.post(userTransaction, { ...transactions });
//         return data.data;
//       } catch (error) {
//         return rejectWithValue({
//           error: error.message,
//         });
//       }
//     }
//   }
// );

// export const userPutBallance = createAsyncThunk(
//   'users/balance',
//   async (ballance, { rejectWithValue, getState }) => {
//     const state = getState();
//     if (state.auth.token) {
//       try {
//         const data = await axios.put(userBalance, {
//           id: state.auth.id,
//           balance: ballance,
//         });
//         return data.data;
//       } catch (error) {
//         return rejectWithValue({
//           error: error.message,
//         });
//       }
//     }
//   }
// );
