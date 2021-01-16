import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./components/App";

import { createGlobalStyle } from "styled-components";

import myBg from "../src/assets/images.png";

const GlobalStyle = createGlobalStyle`
  body {
    // background-image: url(${myBg});
    // background-repeat: no-repeat;
    background-color: #F8f9fa;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
