import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const newProductsAdapter = createEntityAdapter();

const initialState = newProductsAdapter.getInitialState();

const newProductsSlice = createSlice({
  name: "newProducts",
  initialState,
  reducers: {
    addNewProduct: newProductsAdapter.addOne,
    addNewProducts: newProductsAdapter.addMany,
    updateNewProduct: newProductsAdapter.updateOne,
    removeNewProduct: (state, { payload }) =>
      newProductsAdapter.removeOne(state, payload.id),
  },
});

export const selectors = newProductsAdapter.getSelectors(
  (state) => state.newProducts
);
export const { actions } = newProductsSlice;
export default newProductsSlice.reducer;
