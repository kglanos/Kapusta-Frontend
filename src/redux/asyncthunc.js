// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:5000';

// const userBalance = '/users/balance ';

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
