import React from "react";

import { configureStore } from "@reduxjs/toolkit";
// import { configureStore } from "redux";

import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import AppNavigator from "./navigator/AppNavigator";

// import { ApolloClient, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://graphql.contentful.com/content/v1/spaces/z7agl3sey1zb/",
    credentials: "same-origin",
    headers: {
      Authorization: `Bearer 0O0XuVfTwFGfvRywj-ahkaMPHSn6fEOz5k_TDZxjBdM`,
    },
  }),
  cache: new InMemoryCache(),
});
const initialState = {
  action: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return { action: "openMenu" };
    case "CLOSE_MENU":
      return { action: "closeMenu" };
    case "OPEN_CARD":
      return { action: "openCard" };
    case "CLOSE_CARD":
      return { action: "closeCard" };
    default:
      return state;
  }
};

const store = configureStore({ reducer: reducer });

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  </ApolloProvider>
);

export default App;
