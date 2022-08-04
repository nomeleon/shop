import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "nomel", age: 20 },
  reducers: {
    changeName(state) {
      state.name = "nomeleon";
    },
    increaseAge(state, action) {
      state.age += action.payload;
    },
  },
});

export let { changeName, increaseAge } = user.actions;

export default user;
