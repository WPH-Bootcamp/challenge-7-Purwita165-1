import { useState } from 'react';
import type { Product } from '@/types/product';
import { formatRupiah } from '@/lib/format';
import { useCart } from '@/features/cart/hooks';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1200);
  };

  return (
    <div className="w-full rounded-2xl border border-gray-200 p-4 bg-white flex flex-col">
      {/* Image */}
      <div className="w-full aspect-[4/3] rounded-xl bg-gray-200 overflow-hidden">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gray-200" />
        )}
      </div>

      {/* Content */}
      <div className="mt-4 flex flex-col flex-1">
        <h3 className="font-semibold">{product.title}</h3>

        <div className="mt-1 flex items-center justify-between">
          <span className="text-sm text-gray-700">
            {formatRupiah(product.price)}
          </span>

          <div className="flex items-center gap-1 text-sm text-yellow-500">
            <span>⭐</span>
            <span>{product.rating}</span>
          </div>
        </div>

        <button
          onClick={handleAdd}
          className="mt-3 rounded-lg bg-black px-3 py-1.5 text-sm text-white hover:bg-gray-800"
        >
          {added ? 'Added ✓' : 'Add to cart'}
        </button>
      </div>
    </div>
  );
}
