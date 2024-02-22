import { configureStore } from "@reduxjs/toolkit";

import lab from "./lab";
import theme from "./theme";

const store = configureStore({
  reducer: {
    lab,
    theme,
  },
});

export const storeState = store.getState();

// Store types
export type DispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;

export default store;
