// redux/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    dataList: [ {
      id:"1",
      productName:"kompor",
      productCategory:"prabot",
      productImage:"-",
      productFreshness:"fresh",
      productDescription:"tahan lama",
      productPrice:"200",
    }]
  },
  reducers: {
    addProducts: (state, action) => {
      state.dataList.push(action.payload);
    },
    updateProducts: (state, action) => {
      const { index, product } = action.payload;
      state.dataList[index] = product;
    },
    deleteLastProducts: (state) => {
      state.dataList.pop();
    },
    deleteByIndex: (state, action) => {
      const {index} = action.payload
      state.dataList.splice(index, 1)
    },
    resetProducts: (state) => {
      state.dataList = [];
    },
  },
});

export const { addProducts, updateProducts, deleteLastProducts, deleteByIndex, resetProducts } = productSlice.actions;
export default productSlice.reducer;
