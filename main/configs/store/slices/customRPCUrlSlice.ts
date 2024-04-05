import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: { customRPCUrl: string } = {
  customRPCUrl: ""
};

export const createCustomRPCUrlSlice = createSlice({
  name: "Custom RPC Url",
  initialState,
  reducers: {
    changeCustomRPCUrl: (state, action: PayloadAction<string>) => {
      state.customRPCUrl = action.payload;
    }
  }
});

export const { changeCustomRPCUrl } = createCustomRPCUrlSlice.actions;
export default createCustomRPCUrlSlice.reducer;
