'use client'

import { useCart } from '@/features/cart/hooks'
import CartItemRow from '@/components/cart/CartItemRow'
import { formatRupiah } from '@/lib/format'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function CartPage() {
  const { items, totalQty, totalPrice, clearCart } = useCart()
  const router = useRouter()

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-4xl px-6 py-10">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Your Cart</h1>

          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="text-sm text-red-500 hover:underline"
            >
              Clear cart
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="py-20 text-center">
            <p className="mb-4 text-gray-500">Your cart is empty</p>
            <Link href="/" className="rounded bg-black px-4 py-2 text-white">
              Back to restaurants
            </Link>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="divide-y">
              {items.map((item) => (
                <CartItemRow key={item.id} item={item} />
              ))}
            </div>

            {/* Summary */}
            <div className="mt-10 border-t pt-4 text-sm text-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span>Total items</span>
                    <span className="tabular-nums">{totalQty}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span>Total</span>
                    <span className="tabular-nums">
                      {formatRupiah(totalPrice)}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <button
                  disabled={items.length === 0}
                  onClick={() => router.push('/checkout')}
                  className={`rounded-lg px-6 py-3 font-semibold text-white ${
                    items.length === 0
                      ? 'cursor-not-allowed bg-gray-400'
                      : 'bg-green-600 hover:bg-green-700'
                  }`}
                >
                  Lanjut ke Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  )
}
