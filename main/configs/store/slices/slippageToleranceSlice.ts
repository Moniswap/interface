import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: { slippageTolerance: string } = {
  slippageTolerance: "0.01%"
};

export const createSlippageToleranceSlice = createSlice({
  name: "Slippage Tolerance",
  initialState,
  reducers: {
    changeSlippageTolerance: (state, action: PayloadAction<string>) => {
      state.slippageTolerance = action.payload;
    }
  }
});

export const { changeSlippageTolerance } = createSlippageToleranceSlice.actions;
export default createSlippageToleranceSlice.reducer;
