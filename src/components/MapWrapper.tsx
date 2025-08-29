'use client';

import dynamic from 'next/dynamic';

// Dynamically import Map component to avoid SSR issues
const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">Loading Map...</div>
});

export default function MapWrapper() {
  return <Map />;
}