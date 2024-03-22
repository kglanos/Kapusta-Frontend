import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, currentUser } from './operations';

const initialState = {
  isLoggedIn: false,
  user: { email: null, name: null },
  token: null,
  isRefreshing: false,
  isLoadingCurrentUser: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
      if (action.payload && action.payload.user) {
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
      }

    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.token = action.payload.token;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
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
