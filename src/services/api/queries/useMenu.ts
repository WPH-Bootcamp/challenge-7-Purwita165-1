import { useCallback, useEffect, useMemo, useState } from 'react';
import { api } from '@/services/api/axios';
import type { Product } from '@/types/product';

export function useMenu(restaurantId: string) {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState<string | null>(null);

  const fetchMenu = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const start = Date.now();

      const res = await api.get(`/api/resto/${restaurantId}`);

      const rawMenus =
        res.data?.data?.menus || res.data?.data?.restaurant?.menus || [];

      type RawMenu = {
        id: number;
        foodName: string;
        price: number;
        type: string;
        image: string;
      };

      const menus: Product[] = rawMenus.map((m: RawMenu) => ({
        id: m.id,
        title: m.foodName || 'Untitled Menu',
        price: m.price,
        rating: 4.5, // backend menu tidak punya rating → kasih default human
        imageUrl: m.image || '',
      }));

      const elapsed = Date.now() - start;
      const MIN_LOADING_MS = 500;

      if (elapsed < MIN_LOADING_MS) {
        await new Promise((r) => setTimeout(r, MIN_LOADING_MS - elapsed));
      }

      setProducts(menus);
    } catch (err) {
      console.error(err);
      setError('Failed to load menu.');
    } finally {
      setIsLoading(false);
    }
  }, [restaurantId]);

  useEffect(() => {
    if (!restaurantId) return;
    fetchMenu();
  }, [restaurantId, fetchMenu]);

  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      (p.title || '').toLowerCase().includes(query.toLowerCase())
    );
  }, [products, query]);

  const isEmpty = !isLoading && filteredProducts.length === 0;

  const retry = () => fetchMenu();

  return {
    isLoading,
    error,
    products: filteredProducts,
    query,
    setQuery,
    isEmpty,
    retry,
  };
}
