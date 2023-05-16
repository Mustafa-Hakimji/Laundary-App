import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: [],
  },
  reducers: {
    getProducts(state, action) {
      state.product.push(action.payload);
    },
    incrementQuantity(state, action) {
      const itemPresent = state.product.find(
        item => item.id === action.payload.id,
      );
      itemPresent.quantity++;
    },
    decrementQuantity(state, action) {
      const itemPresent = state.product.find(
        item => item.id === action.payload.id,
      );
      if (itemPresent.quantity === 1) {
        itemPresent.quantity = 0;
        const removeItem = state.product.filter(
          item => item.id !== action.payload.id,
        );
        state.cart = removeItem;
      } else {
        itemPresent.quantity--;
      }
    },
  },
});

export const {getProducts, incrementQuantity, decrementQuantity} =
  productSlice.actions;

export default productSlice.reducer;