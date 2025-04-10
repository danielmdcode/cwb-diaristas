'use client';

import { useEffect } from 'react';

interface Window {
  gtag: (
    command: string,
    action: string,
    params: {
      event_category: string;
      event_label: string;
      error_stack?: string;
      non_interaction: boolean;
    }
  ) => void;
}

declare global {
  interface WindowWithGtag extends globalThis.Window {
    gtag?: Window['gtag'];
  }
}

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to Google Analytics
    const windowWithGtag = window as WindowWithGtag;
    if (typeof window !== 'undefined' && windowWithGtag.gtag) {
      windowWithGtag.gtag('event', 'error', {
        event_category: 'Error Boundary',
        event_label: error.message,
        error_stack: error.stack,
        non_interaction: true,
      });
    }
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Ops! Algo deu errado
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Pedimos desculpas pelo inconveniente. Nossa equipe foi notificada.
          </p>
        </div>
        <div>
          <button
            onClick={reset}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    </div>
  );
} 