import { createAsyncThunk } from '@reduxjs/toolkit';

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