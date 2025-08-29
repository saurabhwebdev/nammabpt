import { colors } from "@/lib/colors";
import { generateMetadata } from '@/lib/seo-config';

export const metadata = generateMetadata('services');

export default function Services() {
  return (
    <div className="bg-background min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 p-12 rounded-2xl" style={{ backgroundColor: colors.primary[700] }}>
          <h1
            className="text-4xl md:text-5xl font-cedarville font-bold mb-4"
            style={{ color: colors.text.white }}
          >
            Our Services
          </h1>
          <p className="text-xl" style={{ color: colors.text.white }}>
            ಬೆಂಗಳೂರಿನ ರಸ್ತೆಗಳನ್ನು ಸುಧಾರಿಸಲು ನಮ್ಮ ಸೇವೆಗಳು
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Pothole Reporting */}
          <div className="p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow" style={{ backgroundColor: colors.background.card, borderColor: colors.border.muted }}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.primary[700] }}>
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-bold" style={{ color: colors.text.primary }}>Pothole Reporting</h3>
            </div>
            <ul className="space-y-3" style={{ color: colors.text.secondary }}>
              <li className="flex items-start space-x-2">
                <span className="mt-1" style={{ color: colors.status.success }}>✓</span>
                <span>One-tap reporting with GPS location</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1" style={{ color: colors.status.success }}>✓</span>
                <span>Photo and video documentation</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1" style={{ color: colors.status.success }}>✓</span>
                <span>Severity level assessment</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1" style={{ color: colors.status.success }}>✓</span>
                <span>Real-time status updates</span>
              </li>
            </ul>
          </div>

          {/* Authority Integration */}
          <div className="p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow" style={{ backgroundColor: colors.background.card, borderColor: colors.border.muted }}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.primary[700] }}>
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold" style={{ color: colors.text.primary }}>Authority Integration</h3>
            </div>
            <ul className="space-y-3" style={{ color: colors.text.secondary }}>
              <li className="flex items-start space-x-2">
                <span className="mt-1" style={{ color: colors.status.success }}>✓</span>
                <span>Direct BBMP integration</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1" style={{ color: colors.status.success }}>✓</span>
                <span>Automated ticket generation</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1" style={{ color: colors.status.success }}>✓</span>
                <span>Priority-based routing</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1" style={{ color: colors.status.success }}>✓</span>
                <span>Response time tracking</span>
              </li>
            </ul>
          </div>

          {/* Community Features */}
          <div className="p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow" style={{ backgroundColor: colors.background.card, borderColor: colors.border.muted }}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.primary[700] }}>
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold" style={{ color: colors.text.primary }}>Community Power</h3>
            </div>
            <ul className="space-y-3" style={{ color: colors.text.secondary }}>
              <li className="flex items-start space-x-2">
                <span className="mt-1" style={{ color: colors.status.success }}>✓</span>
                <span>Upvote critical issues</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1" style={{ color: colors.status.success }}>✓</span>
                <span>Community verification</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1" style={{ color: colors.status.success }}>✓</span>
                <span>Local area insights</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1" style={{ color: colors.status.success }}>✓</span>
                <span>Civic hero leaderboard</span>
              </li>
            </ul>
          </div>

          {/* Analytics Dashboard */}
          <div className="p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow" style={{ backgroundColor: colors.background.card, borderColor: colors.border.muted }}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.primary[700] }}>
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold" style={{ color: colors.text.primary }}>Smart Analytics</h3>
            </div>
            <ul className="space-y-3" style={{ color: colors.text.secondary }}>
              <li className="flex items-start space-x-2">
                <span className="mt-1" style={{ color: colors.status.success }}>✓</span>
                <span>Ward-wise issue mapping</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1" style={{ color: colors.status.success }}>✓</span>
                <span>Resolution time analytics</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1" style={{ color: colors.status.success }}>✓</span>
                <span>Seasonal pattern analysis</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1" style={{ color: colors.status.success }}>✓</span>
                <span>Public transparency reports</span>
              </li>
            </ul>
          </div>

          {/* Mobile App */}
          <div className="p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow" style={{ backgroundColor: colors.background.card, borderColor: colors.border.muted }}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.primary[700] }}>
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold" style={{ color: colors.text.primary }}>Mobile First</h3>
            </div>
            <ul className="space-y-3" style={{ color: colors.text.secondary }}>
              <li className="flex items-start space-x-2">
                <span className="mt-1" style={{ color: colors.status.success }}>✓</span>
                <span>Native iOS & Android apps</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1" style={{ color: colors.status.success }}>✓</span>
                <span>Offline reporting capability</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1" style={{ color: colors.status.success }}>✓</span>
                <span>Push notifications</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1" style={{ color: colors.status.success }}>✓</span>
                <span>Dark mode support</span>
              </li>
            </ul>
          </div>

          {/* API & Integration */}
          <div className="p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow" style={{ backgroundColor: colors.background.card, borderColor: colors.border.muted }}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.primary[700] }}>
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-bold" style={{ color: colors.text.primary }}>Open Platform</h3>
            </div>
            <ul className="space-y-3" style={{ color: colors.text.secondary }}>
              <li className="flex items-start space-x-2">
                <span className="mt-1" style={{ color: colors.status.success }}>✓</span>
                <span>Public API access</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1" style={{ color: colors.status.success }}>✓</span>
                <span>Third-party integrations</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1" style={{ color: colors.status.success }}>✓</span>
                <span>Developer documentation</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1" style={{ color: colors.status.success }}>✓</span>
                <span>Webhook notifications</span>
              </li>
            </ul>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="p-8 rounded-xl border mb-12" style={{ backgroundColor: colors.background.accent, borderColor: colors.border.muted }}>
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: colors.text.primary }}>
            How Fretso Works
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 text-white rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: colors.primary[700] }}>
                1
              </div>
              <h3 className="font-semibold mb-2" style={{ color: colors.text.primary }}>Spot Issue</h3>
              <p className="text-sm" style={{ color: colors.text.secondary }}>See a pothole? Open the app and tap to report</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 text-white rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: colors.primary[700] }}>
                2
              </div>
              <h3 className="font-semibold mb-2" style={{ color: colors.text.primary }}>Add Details</h3>
              <p className="text-sm" style={{ color: colors.text.secondary }}>Take photos, add description, mark severity</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 text-white rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: colors.primary[700] }}>
                3
              </div>
              <h3 className="font-semibold mb-2" style={{ color: colors.text.primary }}>Auto Submit</h3>
              <p className="text-sm" style={{ color: colors.text.secondary }}>We automatically notify relevant authorities</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 text-white rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: colors.primary[700] }}>
                4
              </div>
              <h3 className="font-semibold mb-2" style={{ color: colors.text.primary }}>Track Progress</h3>
              <p className="text-sm" style={{ color: colors.text.secondary }}>Get updates until the issue is resolved</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center text-white p-8 rounded-xl" style={{ backgroundColor: colors.primary[700] }}>
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Bengaluru?</h2>
          <p className="text-lg mb-6">
            Join the movement to make our city's roads safer and smoother for everyone.
          </p>
          <p className="text-xl font-bold">
            Coming Soon - ಬೇಗನೇ ಬರುತ್ತಿದೆ! 🚀
          </p>
          <p className="text-sm mt-4 opacity-90">
            Be among the first to know when we launch. Sign up for early access!
          </p>
        </div>
      </div>
    </div>
  );
}