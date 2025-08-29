'use client';

import dynamic from 'next/dynamic';

// Dynamically import Map component to avoid SSR issues
const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-gradient-to-br from-purple-50 to-purple-100 animate-pulse rounded-lg flex items-center justify-center">
      <div className="text-center space-y-3">
        <div className="w-8 h-8 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto"></div>
        <p className="text-purple-600 font-medium">Loading Interactive Map...</p>
        <p className="text-sm text-purple-500">🗺️ Preparing Bengaluru view</p>
      </div>
    </div>
  )
});

export default function MapWrapper() {
  return (
    <div className="h-full w-full">
      <Map />
    </div>
  );
}