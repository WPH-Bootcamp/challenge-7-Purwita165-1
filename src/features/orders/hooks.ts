import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/store"
import { addOrder, clearOrders } from "./orderSlice"
import { Order } from "./orderSlice"

export function useOrders() {
  const dispatch = useDispatch()
  const orders = useSelector((state: RootState) => state.orders.orders)

  return {
    orders,
    addOrder: (order: Order) => dispatch(addOrder(order)),
    clearOrders: () => dispatch(clearOrders()),
  }
}
