import { createSlice } from "@reduxjs/toolkit";

import appConfig from "../configs/app-config";

const initialState = {
  mode:
    typeof window !== "undefined" && localStorage.getItem("mode")
      ? localStorage.getItem("mode")
      : appConfig.mode,
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateMode: (state, action) => {
      state.mode = action.payload;
      localStorage.setItem("mode", action.payload);
    },
  },
});

export const { updateMode } = themeSlice.actions;

export default themeSlice.reducer;
