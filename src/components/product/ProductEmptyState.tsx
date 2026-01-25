export default function ProductEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="text-4xl mb-4">🍽️</div>
      <h3 className="text-lg font-semibold text-gray-900">
        No menu found
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        Try adjusting your search or filters.
      </p>
    </div>
  );
}
