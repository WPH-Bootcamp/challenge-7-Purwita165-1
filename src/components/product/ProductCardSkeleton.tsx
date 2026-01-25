export default function ProductCardSkeleton() {
  return (
    <div className="w-full rounded-2xl border border-gray-200 p-4 bg-white flex flex-col">
      <div className="w-full aspect-[4/3] rounded-xl bg-gray-200 animate-pulse" />

      <div className="mt-4 space-y-3">
        <div className="h-4 w-3/4 rounded bg-gray-200 animate-pulse" />
        <div className="h-3 w-1/2 rounded bg-gray-200 animate-pulse" />
        <div className="h-3 w-1/3 rounded bg-gray-200 animate-pulse" />
      </div>
    </div>
  );
}
