import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const Url = axios.create({
//   baseURL: 'https://kapusta-a0a137454a45.herokuapp.com/',
// });
// const updateBalance = async request => {
//   const { data } = await Url.patch('/user/balance', request);

//   return data;
// };

const setUserBalance = createAsyncThunk(
  'balance/setBalance',

  async (request, { rejectWithValue }) => {
    try {
      const data = await updateBalance(request);
      return data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);
export default setUserBalance;
