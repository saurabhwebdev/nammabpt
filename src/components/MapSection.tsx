'use client';

import dynamic from 'next/dynamic';
import { colors } from "@/lib/colors";

// Dynamically import MapWrapper to avoid SSR issues
const MapWrapper = dynamic(() => import('@/components/MapWrapper'), {
  ssr: false,
  loading: () => (
    <div className="h-96 lg:h-[500px] bg-gradient-to-br from-purple-50 to-purple-100 animate-pulse rounded-lg flex items-center justify-center">
      <div className="text-center space-y-3">
        <div className="w-8 h-8 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto"></div>
        <p className="text-purple-600 font-medium">Loading Interactive Map...</p>
        <p className="text-sm text-purple-500">🗺️ Preparing Bengaluru view</p>
      </div>
    </div>
  )
});

export default function MapSection() {
  return (
    <div className="py-20" style={{ backgroundColor: colors.primary[700] }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: colors.text.white }}
          >
            Explore Bengaluru
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto opacity-90"
            style={{ color: colors.text.white }}
          >
            Every street, every neighborhood matters. See where you can make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Container */}
          <div className="order-2 lg:order-1">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl border-2"
              style={{ borderColor: colors.border.muted }}
            >
              <div className="h-96 lg:h-[500px]">
                <MapWrapper />
              </div>
              {/* Map Overlay */}
              <div className="absolute top-4 left-4 right-4">
                <div
                  className="px-4 py-2 rounded-xl backdrop-blur-md border"
                  style={{
                    backgroundColor: `${colors.background.card}e6`,
                    borderColor: colors.border.muted
                  }}
                >
                  <p
                    className="text-sm font-medium"
                    style={{ color: colors.text.primary }}
                  >
                    🗺️ Interactive Map • Click to explore
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <div
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: `rgba(255, 255, 255, 0.2)`,
                  color: colors.text.white
                }}
              >
                🌟 Coming Soon
              </div>
              <h3
                className="text-2xl lg:text-3xl font-bold"
                style={{ color: colors.text.white }}
              >
                Your City, Your Voice
              </h3>
              <p
                className="text-lg leading-relaxed opacity-90"
                style={{ color: colors.text.white }}
              >
                Soon you'll be able to click anywhere on this map to report road issues, 
                track repairs, and see real-time updates from your community.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: "🎯",
                  title: "Precise Location Marking",
                  description: "Click exactly where the issue is"
                },
                {
                  icon: "👥",
                  title: "Community Reports",
                  description: "See what others have reported nearby"
                },
                {
                  icon: "📊",
                  title: "Progress Tracking",
                  description: "Watch as issues get resolved in real-time"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <h4
                      className="font-semibold mb-1"
                      style={{ color: colors.text.white }}
                    >
                      {feature.title}
                    </h4>
                    <p
                      className="text-sm opacity-90"
                      style={{ color: colors.text.white }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="p-4 rounded-xl border-l-4"
              style={{
                backgroundColor: `rgba(255, 255, 255, 0.1)`,
                borderLeftColor: colors.text.white
              }}
            >
              <p
                className="text-sm font-medium"
                style={{ color: colors.text.white }}
              >
                💡 Pro Tip: Bookmark this page to be notified when we launch!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}