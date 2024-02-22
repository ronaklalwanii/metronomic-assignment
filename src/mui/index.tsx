import { ReactNode } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import { useSelector } from "react-redux";

import type { RootStateType } from "../store";
import type { AppMode } from "../types/configs";

import theme from "./theme";

type PropsType = {
  children: ReactNode;
};

const ThemeWrapper = ({ children }: PropsType) => {
  const { mode } = useSelector((state: RootStateType) => state.theme);

  return (
    <ThemeProvider theme={theme(mode as AppMode)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
