import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ThemeType = "dark" | "light";

export interface ThemeState {
  currentTheme: ThemeType;
}

const initialState: ThemeState = {
  currentTheme: "light"
};

export const createThemeSlice = createSlice({
  name: "Theme",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemeType>) => {
      state.currentTheme = action.payload;
    }
  }
});

export const { changeTheme } = createThemeSlice.actions;
export default createThemeSlice.reducer;
