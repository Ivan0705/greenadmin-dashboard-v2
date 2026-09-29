export function PageLoader() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-green-500 border-t-transparent" />
      <p className="text-sm text-gray-500">Loading...</p>
    </div>
  );
}
