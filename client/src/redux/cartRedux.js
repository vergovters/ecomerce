import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteProduct: (state, action) => {
      const productId = action.payload;
      console.log('Deleting product with ID:', productId);
      console.log('Current cart state before deletion:', state.products);
      const productIndex = state.products.findIndex(product => product._id === productId);

      if (productIndex !== -1) {
        const product = state.products[productIndex];
        state.quantity -= 1;
        state.total -= product.price * product.quantity;
        state.products.splice(productIndex, 1);
        console.log('Product deleted successfully');
      } else {
        console.error(`Product with ID ${productId} not found in cart`);
      }
      console.log('Current cart state after deletion:', state.products);
    },
    clearProducts: (state) => {
       state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
  },
});

export const { addProduct, deleteProduct, clearProducts } = cartSlice.actions;
export default cartSlice.reducer;