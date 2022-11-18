import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";
import { createAPI } from "../services/api";
import appDataReducer from "./reducer";

export const persistConfig = {
  key: "root",
  storage,
};

export const persistedReducer = persistReducer(persistConfig, appDataReducer);

export const api = createAPI(() => undefined);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
