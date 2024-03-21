import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateBalance } from '../../redux/Transactions/operations';
import axios from 'axios';
const userBalance = '/users/balance ';

export const setUserBalance = createAsyncThunk(
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

export const userPutBalance = createAsyncThunk(
  'users/balance',
  async (ballance, { rejectWithValue, getState }) => {
    const state = getState();
    if (state.auth.token) {
      try {
        const data = await axios.put(userBalance, {
          id: state.auth.id,
          balance: ballance,
        });
        return data.data;
      } catch (error) {
        return rejectWithValue({
          error: error.message,
        });
      }
    }
  }
);

// export default { setUserBalance, userPutBalance };
