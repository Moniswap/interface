import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import themesReducer from "./slices/themeSlice";
import rpcNodeReducer from "./slices/rpcNodeSlice";
import storage from "./storage";

const persistConfig = {
  key: "root",
  storage
};

const persistedThemeReducer = persistReducer(persistConfig, themesReducer);
const persistedRPCNodeReducer = persistReducer(persistConfig, rpcNodeReducer);

export const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    theme: persistedThemeReducer,
    rpcNode: persistedRPCNodeReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
