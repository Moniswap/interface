import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import themesReducer from "./slices/themeSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage
};

const persistedThemeReducer = persistReducer(persistConfig, themesReducer);

export const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    theme: persistedThemeReducer
  }
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
