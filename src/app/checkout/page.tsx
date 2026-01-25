"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/features/cart/hooks"
import { useOrders } from "@/features/orders/hooks"
import { nanoid } from "@reduxjs/toolkit"
import { formatRupiah } from "@/lib/format"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, totalPrice, clearCart } = useCart()
  const { addOrder } = useOrders()

  const [name, setName] = useState("")
  const [tableNumber, setTableNumber] = useState("")
  const [note, setNote] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    if (!name || !tableNumber) {
      alert("Nama dan nomor meja wajib diisi 🙏")
      return
    }

    if (items.length === 0) {
      alert("Keranjang masih kosong 😅")
      return
    }

    const order = {
      id: nanoid(),
      customerName: name,
      tableNumber,
      note,
      items,
      total: totalPrice,
      createdAt: new Date().toISOString(),
    }

    setLoading(true)

    // simulate API delay (optional UX realism 😄)
    setTimeout(() => {
      addOrder(order)
      clearCart()
      router.push("/orders")
    }, 500)
  }

  if (items.length === 0) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">
          Keranjang masih kosong
        </h2>
        <p className="mb-4">Yuk pilih menu dulu 😊</p>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => router.push("/restaurants")}
        >
          Kembali ke Menu
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Checkout</h1>

      {/* Ringkasan order */}
      <div className="border rounded p-4 space-y-2">
        {items.map((i) => (
          <div key={i.id} className="flex justify-between">
            <span>
              {i.title} × {i.qty}
            </span>
            <span>{formatRupiah(i.price * i.qty)}</span>
          </div>
        ))}

        <hr />

        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>{formatRupiah(totalPrice)}</span>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium">
            Nama Pemesan
          </label>
          <input
            className="border rounded px-3 py-2 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">
            Nomor Meja
          </label>
          <input
            className="border rounded px-3 py-2 w-full"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">
            Catatan (opsional)
          </label>
          <textarea
            className="border rounded px-3 py-2 w-full"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
      </div>

      <button
        className="w-full py-3 bg-green-600 text-white rounded font-semibold disabled:opacity-60"
        disabled={loading}
        onClick={handleSubmit}
      >
        {loading ? "Memproses..." : "Buat Pesanan"}
      </button>
    </div>
  )
}
