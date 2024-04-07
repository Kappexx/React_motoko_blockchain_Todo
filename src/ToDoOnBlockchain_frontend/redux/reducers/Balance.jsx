import { createSlice } from "@reduxjs/toolkit";

const initState = {
  balance: 0,
};

const Balance = createSlice({
  name: "User_Balance",
  initialState: initState,
  reducers: {
    Update_Balance: (state, action) => {
      state.balance = action.payload.balance;
    },
  },
});

export const { Update_Balance } = Balance.actions;
export default Balance;
