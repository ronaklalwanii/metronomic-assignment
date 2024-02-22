import ThemeWrapper from "./mui";

import store from "./store";
import { Provider } from "react-redux";

import Router from "./routes";

import "./db";

import "./app.css";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeWrapper>
        <Router />
      </ThemeWrapper>
    </Provider>
  );
};

export default App;
