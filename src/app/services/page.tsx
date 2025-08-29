import { colors } from "@/lib/colors";
import { generateMetadata } from '@/lib/seo-config';

export const metadata = generateMetadata('services');

export default function Services() {
  return (
    <div className="bg-background min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className="text-4xl md:text-5xl font-cedarville font-bold mb-4"
            style={{ color: colors.special.comingSoon }}
          >
            Our Services
          </h1>
          <p className="text-xl" style={{ color: colors.text.secondary }}>
            ಬೆಂಗಳೂರಿನ ರಸ್ತೆಗಳನ್ನು ಸುಧಾರಿಸಲು ನಮ್ಮ ಸೇವೆಗಳು
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Pothole Reporting */}
          <div className="p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow" style={{ backgroundColor: colors.background.card, borderColor: colors.border.muted }}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.special.comingSoon }}>
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
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Authority Integration</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Direct BBMP integration</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Automated ticket generation</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Priority-based routing</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Response time tracking</span>
              </li>
            </ul>
          </div>

          {/* Community Features */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Community Power</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Upvote critical issues</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Community verification</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Local area insights</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Civic hero leaderboard</span>
              </li>
            </ul>
          </div>

          {/* Analytics Dashboard */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Smart Analytics</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Ward-wise issue mapping</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Resolution time analytics</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Seasonal pattern analysis</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Public transparency reports</span>
              </li>
            </ul>
          </div>

          {/* Mobile App */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Mobile First</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Native iOS & Android apps</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Offline reporting capability</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Push notifications</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Dark mode support</span>
              </li>
            </ul>
          </div>

          {/* API & Integration */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Open Platform</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Public API access</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Third-party integrations</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Developer documentation</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Webhook notifications</span>
              </li>
            </ul>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-100 mb-12">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            How Fretso Works
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="font-semibold text-foreground mb-2">Spot Issue</h3>
              <p className="text-sm text-muted-foreground">See a pothole? Open the app and tap to report</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-semibold text-foreground mb-2">Add Details</h3>
              <p className="text-sm text-muted-foreground">Take photos, add description, mark severity</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-semibold text-foreground mb-2">Auto Submit</h3>
              <p className="text-sm text-muted-foreground">We automatically notify relevant authorities</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="font-semibold text-foreground mb-2">Track Progress</h3>
              <p className="text-sm text-muted-foreground">Get updates until the issue is resolved</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-pink-500 to-red-500 text-white p-8 rounded-xl">
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