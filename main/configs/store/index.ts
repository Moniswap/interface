import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import themesReducer from "./slices/themeSlice";
import rpcNodeReducer from "./slices/rpcNodeSlice";
import customRPCUrlReducer from "./slices/customRPCUrlSlice";
import executionDeadlineReducer from "./slices/executionDeadlineSlice";
import slippageToleranceReducer from "@/configs/store/slices/slippageToleranceSlice";
import allowUnsafeTradesReducer from "@/configs/store/slices/allowUnsafeTradesSlice";

import storage from "./storage";

const persistConfig = {
  key: "root",
  storage
};

const persistedThemeReducer = persistReducer(persistConfig, themesReducer);
const persistedRPCNodeReducer = persistReducer(persistConfig, rpcNodeReducer);
const persistedCustomRPCUrlReducer = persistReducer(persistConfig, customRPCUrlReducer);
const persistedExecutionDeadlineReducer = persistReducer(persistConfig, executionDeadlineReducer);
const persistedSlippageToleranceReducer = persistReducer(persistConfig, slippageToleranceReducer);
const persistedAllowUnsafeTradesReducer = persistReducer(persistConfig, allowUnsafeTradesReducer);

export const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    theme: persistedThemeReducer,
    rpcNode: persistedRPCNodeReducer,
    customRPCUrl: persistedCustomRPCUrlReducer,
    executionDeadline: persistedExecutionDeadlineReducer,
    slippageTolerance: persistedSlippageToleranceReducer,
    allowUnsafeTrades: persistedAllowUnsafeTradesReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export const getCustomRPCUrl = (state: RootState) => state.customRPCUrl;

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
