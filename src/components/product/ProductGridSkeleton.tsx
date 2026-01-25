import ProductCardSkeleton from "./ProductCardSkeleton";

export default function ProductGridSkeleton({
  count = 4,
}: {
  count?: number;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="w-full rounded-2xl border border-gray-200 p-4 bg-white"
        >
          {/* Image */}
          <div className="w-full aspect-[4/3] rounded-xl shimmer" />

          {/* Text */}
          <div className="mt-4 space-y-3">
            <div className="h-4 w-3/4 rounded shimmer" />
            <div className="h-3 w-1/2 rounded shimmer" />
            <div className="h-3 w-1/3 rounded shimmer" />
          </div>
        </div>
      ))}
    </div>
  );
}
