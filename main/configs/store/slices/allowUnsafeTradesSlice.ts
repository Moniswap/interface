import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: { allowUnsafeTrades: boolean } = {
  allowUnsafeTrades: false
};

export const createAllowUnsafeTradesSlice = createSlice({
  name: "Allow Unsafe Trades",
  initialState,
  reducers: {
    changeAllowUnsafeTrades: (state, action: PayloadAction<boolean>) => {
      state.allowUnsafeTrades = action.payload;
    }
  }
});

export const { changeAllowUnsafeTrades } = createAllowUnsafeTradesSlice.actions;
export default createAllowUnsafeTradesSlice.reducer;
