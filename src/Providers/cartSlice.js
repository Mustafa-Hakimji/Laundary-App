import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    loading: false,
  },
  reducers: {
    addToCart(state, action) {
      const itemPresent = state.cart.find(
        item => item.id === action.payload.id,
      );
      if (itemPresent) {
        itemPresent.quantity++;
      } else {
        state.cart.push({...action.payload, quantity: 1});
      }
    },
    removeFromCart(state, action) {
      const removeItem = state.cart.filter(
        item => item.id !== action.payload.id,
      );
      state.cart = removeItem;
    },
    incrementQuantityCart(state, action) {
      const itemPresent = state.cart.find(
        item => item.id === action.payload.id,
      );
      itemPresent.quantity++;
    },
    decrementQuantityCart(state, action) {
      const itemPresent = state.cart.find(
        item => item.id === action.payload.id,
      );
      if (itemPresent.quantity === 1) {
        itemPresent.quantity = 0;
        const removeItem = state.cart.filter(
          item => item.id !== action.payload.id,
        );
        state.cart = removeItem;
      } else {
        itemPresent.quantity--;
      }
    },
    resetAllCart(state) {
      state.cart.map(item => (item.quantity = 0));
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantityCart,
  decrementQuantityCart,
  resetAllCart,
} = cartSlice.actions;

export default cartSlice.reducer;
