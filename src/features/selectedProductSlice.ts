import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../models/products.models'

export interface selectedProduct {
  value: Product|{}
}

const initialState: selectedProduct = {
  value: {},
}

export const selectedProduct = createSlice({
  name: 'selectedProduct',
  initialState,
  reducers: {
    selectProduct: (state, action: PayloadAction<Product>) => {
        
      state.value=action.payload
      console.log(state.value)
    }
  },
})

// Action creators are generated for each case reducer function
export const { selectProduct} = selectedProduct.actions

export default selectedProduct.reducer