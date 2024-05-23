import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
  name: "like",
  initialState: {
    likes: [],
  },
  reducers: {
    likeProduct: (state, action) => {
      state.likes.push(action.payload);
    },
  },
});

export const { likeProduct } = likeSlice.actions;
export default likeSlice.reducer;