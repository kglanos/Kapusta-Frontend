import { createSlice } from '@reduxjs/toolkit';

const year = String(new Date().getFullYear());
const month = String(new Date().getMonth() + 1);
const day = String(new Date().getDate());
// Store można jakoś ujednolicić, np tutaj jest ExtraDataReducer ale jest tworzony slice.
// W innym miejscu jest to nazwane slice, np authSlice
// Czy potrzebny jest faktycznie slice dla tak małego zakresu?
const extraDataSlice = createSlice({
  name: 'extraData',
  initialState: {
    date: { day, month, year },
  },
  reducers: {
    initDate: (state, action) => {
      return { ...state, date: action.payload };
    },
  },
  extraReducers: {},
});

export const { initDate } = extraDataSlice.actions;
export default extraDataSlice.reducer;
