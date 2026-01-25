import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CartItem } from "@/features/cart/cartSlice"

export type Order = {
  id: string
  customerName: string
  tableNumber: string
  note?: string
  items: CartItem[]
  total: number
  createdAt: string
}

type OrdersState = {
  orders: Order[]
}

const initialState: OrdersState = {
  orders: [],
}

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder(state, action: PayloadAction<Order>) {
      state.orders.unshift(action.payload)
    },
    clearOrders(state) {
      state.orders = []
    },
  },
})

export const { addOrder, clearOrders } = ordersSlice.actions
export default ordersSlice.reducer
