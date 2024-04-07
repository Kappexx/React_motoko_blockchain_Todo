import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

import User from "./reducers/User";
import Balance from "./reducers/Balance";

const Root = combineReducers({
  user: User.reducer,
  balance: Balance.reducer,
});

const store = configureStore({
  reducer: Root,
});

export default store;
