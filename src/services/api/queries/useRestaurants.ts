'use client';

import { useEffect, useState } from 'react';
import { api } from '@/services/api/axios';
import type { Restaurant } from '@/types/restaurant';

export function useRestaurants() {
  const [isLoading, setIsLoading] = useState(true);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [error, setError] = useState<string | null>(null);

  async function fetchRestaurants() {
    try {
      setIsLoading(true);
      setError(null);

      const res = await api.get('/api/resto');

      const raw = res.data?.data?.restaurants || [];

      const data: Restaurant[] = raw.map(
        (r: { id: number; name: string; star: number; logo?: string }) => ({
          id: String(r.id),
          name: r.name,
          rating: r.star,
          logoUrl: r.logo,
        })
      );

      setRestaurants(data);
    } catch (err) {
      console.error('fetchRestaurants error:', err);
      setError('Failed to load restaurants.');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const retry = () => fetchRestaurants();

  return {
    isLoading,
    restaurants,
    error,
    retry,
  };
}
