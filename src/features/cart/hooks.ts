import { useDispatch, useSelector } from "react-redux"
import type { RootState, AppDispatch } from "../../store"
import type { Product } from "@/types/product"
import {
  addToCart,
  removeFromCart,
  incrementQty,
  decrementQty,
  clearCart,
} from "./cartSlice"
import type { CartItem } from "./cartSlice"

export function useCart() {
  // 1. alat untuk kirim action ke Redux
  const dispatch = useDispatch<AppDispatch>()

  // 2. ambil items dari Redux store
  const items = useSelector(
  (state: RootState) => state.cart.items
) as CartItem[]


  // 3. derived state (SUDAH BENAR punyamu 👍)
  const totalQty = items.reduce((sum, i) => sum + i.qty, 0)
  const totalPrice = items.reduce((sum, i) => sum + i.qty * i.price, 0)

  // 4. bungkus dispatch jadi fungsi ramah-UI
  const handleAddToCart = (product: CartItem | Product) => {
  dispatch(addToCart(product))
}
  const handleIncreaseQty = (id: number) => {
  dispatch(incrementQty(id))
}
  const handleDecreaseQty = (id: number) => {
  dispatch(decrementQty(id))
}

  const handleRemoveItem = (id: number) => {
  dispatch(removeFromCart(id))
}

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  // 5. expose ke UI
  return {
    items,
    totalQty,
    totalPrice,
    increaseQty: handleIncreaseQty,
    decreaseQty: handleDecreaseQty,
    removeItem: handleRemoveItem,
    clearCart: handleClearCart,
    addToCart: handleAddToCart,
  }
}
