import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    updateProducts: (state, action) => {
      console.log("product reducer", action);
      return action.payload;
    },
  },
});

export const { updateProducts } = productSlice.actions;
export default productSlice.reducer;
