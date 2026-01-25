"use client"

import { useOrders } from "@/features/orders/hooks"
import { formatRupiah } from "@/lib/format"
import { Order } from "@/features/orders/orderSlice"

export default function OrdersPage() {
  const { orders } = useOrders()

  if (orders.length === 0) {
    return (
      <main className="min-h-screen bg-white">
        <section className="mx-auto max-w-4xl px-6 py-10">
          <h1 className="mb-2 text-2xl font-semibold">
            Your Orders
          </h1>
          <p className="text-sm text-gray-600">
            Belum ada pesanan.
          </p>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-4xl px-6 py-10 space-y-6">
        <h1 className="text-2xl font-semibold">
          Your Orders
        </h1>

        {orders.map((order: Order) => (
          <div
            key={order.id}
            className="rounded-xl border p-4 space-y-2"
          >
            <div className="flex justify-between">
              <div>
                <p className="font-medium">
                  {order.customerName}
                </p>
                <p className="text-sm text-gray-500">
                  Meja {order.tableNumber}
                </p>
              </div>

              <p className="text-sm text-gray-500">
                {new Date(order.createdAt).toLocaleString(
                  "id-ID"
                )}
              </p>
            </div>

            <div className="space-y-1">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-sm"
                >
                  <span>
                    {item.title} × {item.qty}
                  </span>
                  <span>
                    {formatRupiah(
                      item.price * item.qty
                    )}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-between border-t pt-2 font-semibold">
              <span>Total</span>
              <span>
                {formatRupiah(order.total)}
              </span>
            </div>

            {order.note && (
              <p className="text-sm text-gray-600">
                Catatan: {order.note}
              </p>
            )}
          </div>
        ))}
      </section>
    </main>
  )
}
