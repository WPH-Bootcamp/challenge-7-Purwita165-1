'use client'

import type { CartItem } from '@/features/cart/cartSlice'
import { useCart } from '@/features/cart/hooks'
import { formatRupiah } from '@/lib/format'

interface Props {
  item: CartItem
}

export default function CartItemRow({ item }: Props) {
  const { inc, dec, remove } = useCart()

  return (
    <div className="flex items-center gap-4 border-b py-4">
      {/* Image */}
      <div className="h-20 w-24 overflow-hidden rounded bg-gray-100">
        {item.imageUrl && (
          <img
            src={item.imageUrl}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {/* Info */}
      <div className="flex-1">
        <h3 className="font-medium">{item.title}</h3>
        <p className="text-sm text-gray-600">
          {formatRupiah(item.price)}
        </p>
      </div>

      {/* Qty Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => dec(item.id)}
          className="h-7 w-7 rounded border"
        >
          −
        </button>

        <span className="w-6 text-center">{item.qty}</span>

        <button
          onClick={() => inc(item.id)}
          className="h-7 w-7 rounded border"
        >
          +
        </button>
      </div>

      {/* Subtotal */}
      <div className="w-28 text-right text-sm">
        {formatRupiah(item.price * item.qty)}
      </div>

      {/* Remove */}
      <button
        onClick={() => remove(item.id)}
        className="ml-2 text-sm text-red-500 hover:underline"
      >
        Remove
      </button>
    </div>
  )
}
