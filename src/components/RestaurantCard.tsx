import type { Restaurant } from '@/types/restaurant';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  restaurant: Restaurant;
};

export default function RestaurantCard({ restaurant }: Props) {
  return (
    <Link href={`/restaurants/${restaurant.id}`}>
      <div className="cursor-pointer rounded-2xl border border-gray-200 bg-white p-4 hover:shadow-md transition">
        {/* Image */}
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
          {restaurant.logoUrl ? (
            <Image
              src={restaurant.logoUrl}
              alt={restaurant.name}
              fill
              className="object-contain"
            />
          ) : (
            <div className="h-full w-full bg-gray-200" />
          )}
        </div>

        {/* Content */}
        <div className="mt-4">
          <h3 className="font-semibold">{restaurant.name}</h3>

          <div className="mt-1 flex items-center gap-1 text-sm text-yellow-500">
            <span>⭐</span>
            <span>{restaurant.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
