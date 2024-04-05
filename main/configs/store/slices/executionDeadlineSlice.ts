import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: { executionDeadline: number } = {
  executionDeadline: 10
};

export const createExecutionDeadlineSlice = createSlice({
  name: "Execution Deadline",
  initialState,
  reducers: {
    changeExecutionDeadline: (state, action: PayloadAction<number>) => {
      state.executionDeadline = action.payload;
    }
  }
});

export const { changeExecutionDeadline } = createExecutionDeadlineSlice.actions;
export default createExecutionDeadlineSlice.reducer;
