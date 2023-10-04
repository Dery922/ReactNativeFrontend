import React from "react";

import { configureStore } from "@reduxjs/toolkit";
// import { configureStore } from "redux";

import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import AppNavigator from "./navigator/AppNavigator";

const initialState = {
  action: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return { action: "openMenu" };
    case "CLOSE_MENU":
      return { action: "closeMenu" };
    default:
      return state;
  }
};

const store = configureStore({ reducer: reducer });

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
