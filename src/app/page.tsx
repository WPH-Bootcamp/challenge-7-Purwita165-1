'use client';

import { useRestaurants } from '@/services/api/queries/useRestaurants';
import RestaurantGrid from '@/components/RestaurantGrid';
import ProductGridSkeleton from '@/components/product/ProductGridSkeleton';
import ProductEmptyState from '@/components/product/ProductEmptyState';


export default function Page() {
  const { isLoading, restaurants, error, retry } = useRestaurants();

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2">Explore Restaurants</h1>
        <p className="text-gray-500">
          Choose a restaurant to see their menu
        </p>
        <div className="mt-6 h-1 w-24 bg-black rounded" />
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        {isLoading && (
          <p className="mb-4 text-sm text-gray-500">
            Loading restaurants, please wait a moment…
          </p>
        )}

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            <p className="mb-2">{error}</p>
            <button
              onClick={retry}
              className="
                rounded-lg border border-red-300 bg-white px-4 py-1.5 text-sm
                hover:bg-red-600 hover:text-white
              "
            >
              Try again
            </button>
          </div>
        )}

        {isLoading && <ProductGridSkeleton count={8} />}

        {!isLoading && restaurants.length === 0 && (
          <ProductEmptyState />
        )}

        {!isLoading && !error && restaurants.length > 0 && (
          <RestaurantGrid restaurants={restaurants} />
        )}
      </section>
    </main>
  );
}
