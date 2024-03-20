import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, currentUser } from './operations';

const initialState = {
  // isRegisteredIn:false,
  isLoggedIn: false,
  user: { email: null, name: null },
  token: null,
  isRefreshing: false,
  isLoadingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
      // state.isRegisteredIn = true;
      if (action.payload && action.payload.user) {
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
      }
      // state.token = action.payload.token;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.token = action.payload.token;
    });
    builder.addCase(logout.fulfilled, () => initialState);

    builder.addCase(currentUser.pending, state => {
      state.isRefreshing = true;
    });

    builder.addCase(currentUser.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.isRefreshing = false;
    });
    builder.addCase(currentUser.rejected, state => {
      state.isRefreshing = false;
    });
  },
});

export const authReducer = authSlice.reducer;
