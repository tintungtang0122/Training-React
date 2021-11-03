
import { createSlice } from '@reduxjs/toolkit';
const productSlice = createSlice({
  name: 'product',
  initialState: {
    dataFavorite: [],
    dataCart: []
  },
  reducers: {
    favorite: (state, action) => {
      state.dataFavorite = action.payload;
      state.type = 'FAVORITE_SUCCESS';
    },
    addToCart: (state, action) => {
      state.dataCart = action.payload;
      state.type = 'ADD_TO_CART_SUCCESS';
    }
  }
});

const { actions, reducer } = productSlice;

export const {
  favorite,
  addToCart
} = actions;

export default reducer;
