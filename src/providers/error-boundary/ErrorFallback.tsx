import { FallbackProps } from "react-error-boundary";

export default function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Something went wrong
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          {String(error)}
        </p>
        <button
          onClick={resetErrorBoundary}
          className="mt-4 rounded-lg bg-brand-500 px-6 py-2 text-white hover:bg-brand-600"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
