import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Product } from '@/types/product'

export type CartItem = Product & { qty: number }

type CartState = {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const existing = state.items.find(i => i.id === action.payload.id)

      if (existing) {
        existing.qty += 1
      } else {
        state.items.push({ ...action.payload, qty: 1 })
      }
    },

    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(i => i.id !== action.payload)
    },

    incrementQty(state, action: PayloadAction<number>) {
      const item = state.items.find(i => i.id === action.payload)
      if (item) item.qty += 1
    },

    decrementQty(state, action: PayloadAction<number>) {
      const item = state.items.find(i => i.id === action.payload)
      if (item && item.qty > 1) item.qty -= 1
    },

    clearCart(state) {
      state.items = []
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  incrementQty,
  decrementQty,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer
