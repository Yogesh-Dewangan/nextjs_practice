import { createSlice } from "@reduxjs/toolkit";

const catogorySlice = createSlice({
  name: "category",
  initialState: [],
  reducers: {
    updateCategory: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateCategory } = catogorySlice.actions;
export default catogorySlice.reducer;
