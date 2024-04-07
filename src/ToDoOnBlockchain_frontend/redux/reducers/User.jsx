import { createSlice } from "@reduxjs/toolkit";

const initState = {
  loged: false,
  principal: "",
};
const User = createSlice({
  name: "user_credentials",
  initialState: initState,
  reducers: {
    Update_Principal: (state, action) => {
      state.principal = action.payload.principal;
      if (action.payload.principal) {
        state.loged = true;
      }
    },
  },
});

export const { Update_Principal } = User.actions;
export default User;
