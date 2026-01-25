'use client';

import { useParams } from 'next/navigation';
import { useMenu } from '@/services/api/queries/useMenu';
import ProductGrid from '@/components/product/ProductGrid';
import ProductGridSkeleton from '@/components/product/ProductGridSkeleton';
import ProductEmptyState from '@/components/product/ProductEmptyState';

export default function RestaurantDetailPage() {
  const params = useParams<{ id: string }>();
  const restaurantId = params.id;

  const { isLoading, error, products, query, setQuery, isEmpty, retry } =
    useMenu(restaurantId);

  return (
    <main className='min-h-screen'>
      {/* Header */}
      <section className='max-w-7xl mx-auto px-6 py-12'>
        <h1 className='text-4xl font-bold mb-2'>Menu</h1>
        <p className='text-gray-500'>Choose your favorite food & drinks</p>
        <div className='mt-6 h-1 w-24 bg-black rounded' />
      </section>

      {/* Search */}
      <section className='max-w-7xl mx-auto px-6 pb-8'>
        <div className='relative max-w-xl'>
          <input
            type='text'
            placeholder='Search menu...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={isLoading}
            className='
              w-full border border-gray-300 rounded-xl
              py-3 pl-4 pr-10 text-sm
              focus:outline-none focus:ring-2 focus:ring-black
              disabled:opacity-50
            '
          />
          <span className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400'>
            🔍
          </span>
        </div>
      </section>

      {/* Content */}
      <section className='max-w-7xl mx-auto px-6 pb-16'>
        {isLoading && (
          <p className='mb-4 text-sm text-gray-500'>
            Loading menu, please wait a moment…
          </p>
        )}

        {error && (
          <div className='rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700'>
            <p className='mb-2'>{error}</p>
            <button
              onClick={retry}
              className='
                rounded-lg border border-red-300 bg-white px-4 py-1.5 text-sm
                hover:bg-red-600 hover:text-white
              '
            >
              Try again
            </button>
          </div>
        )}

        {isLoading && <ProductGridSkeleton count={8} />}

        {!isLoading && isEmpty && <ProductEmptyState />}

        {!isLoading && !error && !isEmpty && (
          <ProductGrid products={products} />
        )}
      </section>
    </main>
  );
}
