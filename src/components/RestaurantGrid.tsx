import type { Restaurant } from '@/types/restaurant';
import RestaurantCard from './RestaurantCard';

type Props = {
  restaurants: Restaurant[];
};

export default function RestaurantGrid({ restaurants }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {restaurants.map((r) => (
        <RestaurantCard key={r.id} restaurant={r} />
      ))}
    </div>
  );
}
