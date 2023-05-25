import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";
import { CartProvider } from './CartContext';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CartProvider>
      <Router>
        <App />
        </Router>
        </CartProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
