import { colors } from "@/lib/colors";
import SubscriptionForm from '@/components/SubscriptionForm';
import { generateMetadata } from '@/lib/seo-config';
import MapSection from '@/components/MapSection';
import '../styles/hero-animations.css';

export const metadata = generateMetadata('home');

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background.main }}>
      {/* Hero Section - Full Screen Purple */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ backgroundColor: colors.primary[700] }}>
        {/* Animated Background Pattern */}
        <div
          className="absolute inset-0 opacity-0 hero-pattern-animate"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M60 60c0-16.569-13.431-30-30-30s-30 13.431-30 30 13.431 30 30 30 30-13.431 30-30zm30 0c0-16.569-13.431-30-30-30s-30 13.431-30 30 13.431 30 30 30 30-13.431 30-30z'/%3E%3Ccircle cx='60' cy='60' r='3' opacity='0.6'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 opacity-0 hero-gradient-animate"
          style={{
            background: `radial-gradient(circle at 30% 70%, ${colors.primary[600]}40 0%, transparent 50%), radial-gradient(circle at 70% 30%, ${colors.primary[800]}30 0%, transparent 50%)`
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center py-8">
          <div className="space-y-16">
            {/* Brand & Tagline */}
            <div className="space-y-6">
              <h1
                className="text-6xl lg:text-8xl font-cedarville font-bold tracking-tight"
                style={{ color: colors.text.white }}
              >
                Fretso
              </h1>
              <div className="space-y-4">
                <p
                  className="text-2xl lg:text-3xl font-medium max-w-4xl mx-auto leading-tight"
                  style={{ color: colors.text.white }}
                >
                  Report road issues. Build better Bengaluru.
                </p>
                <p
                  className="text-xl lg:text-2xl opacity-90 font-medium"
                  style={{ color: colors.text.white }}
                >
                  ನಮ್ಮ ಬೆಂಗಳೂರಿಗೆ ಒಂದು ಹೊಸ ಆರಂಭ
                </p>
              </div>
            </div>

            {/* Key Value Props */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-3">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="text-xl font-semibold" style={{ color: colors.text.white }}>
                  One-Tap Reporting
                </h3>
                <p className="text-sm opacity-80" style={{ color: colors.text.white }}>
                  Spot a pothole? Report it instantly with GPS precision
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold" style={{ color: colors.text.white }}>
                  Auto-Notify Authorities
                </h3>
                <p className="text-sm opacity-80" style={{ color: colors.text.white }}>
                  We handle the bureaucracy - direct alerts to BBMP
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-xl font-semibold" style={{ color: colors.text.white }}>
                  Track Real Progress
                </h3>
                <p className="text-sm opacity-80" style={{ color: colors.text.white }}>
                  Full transparency from report to resolution
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="max-w-lg mx-auto mt-8">
              <div
                className="p-10 rounded-3xl backdrop-blur-sm border-2 shadow-2xl"
                style={{
                  backgroundColor: `rgba(255, 255, 255, 0.15)`,
                  borderColor: 'rgba(255, 255, 255, 0.3)'
                }}
              >
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ color: colors.text.white }}
                >
                  Join the Movement 🚀
                </h3>
                <p
                  className="text-lg mb-8 opacity-90"
                  style={{ color: colors.text.white }}
                >
                  Be among the first to transform Bengaluru's roads
                </p>
                <SubscriptionForm
                  source="Home Hero"
                  layout="vertical"
                  inputClassName="w-full px-5 py-4 rounded-2xl border-2 text-gray-700 placeholder-gray-500 bg-white/95 focus:outline-none focus:ring-4 focus:ring-white/50 focus:border-white text-lg font-medium"
                  buttonClassName="w-full px-6 py-4 bg-white text-purple-700 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-200 disabled:opacity-50 shadow-lg"
                  showLabels={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Problem Statement Section */}
      <div className="py-24" style={{ backgroundColor: colors.background.main }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: colors.text.primary }}
            >
              Every Bengaluru Citizen Knows This Pain
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: colors.text.secondary }}
            >
              ಪ್ರತಿದಿನ ಗುಂಡಿಗಳನ್ನು ತಪ್ಪಿಸುವ ಕಷ್ಟ, ಟ್ರಾಫಿಕ್ ಜಾಮ್, ಮತ್ತು ಹಾನಿಯಾದ ವಾಹನಗಳು - ಇದೆಲ್ಲ ಬದಲಾಗಬೇಕು!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl border" style={{ backgroundColor: colors.background.card, borderColor: colors.border.muted }}>
              <div className="text-6xl mb-6">😤</div>
              <h3 className="text-xl font-bold mb-4" style={{ color: colors.text.primary }}>
                Frustrated Commuters
              </h3>
              <p style={{ color: colors.text.secondary }}>
                Daily navigation around potholes, damaged vehicles, and wasted time in traffic
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl border" style={{ backgroundColor: colors.background.card, borderColor: colors.border.muted }}>
              <div className="text-6xl mb-6">📞</div>
              <h3 className="text-xl font-bold mb-4" style={{ color: colors.text.primary }}>
                Ignored Complaints
              </h3>
              <p style={{ color: colors.text.secondary }}>
                Traditional reporting methods are slow, bureaucratic, and often go unheard
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl border" style={{ backgroundColor: colors.background.card, borderColor: colors.border.muted }}>
              <div className="text-6xl mb-6">🔄</div>
              <h3 className="text-xl font-bold mb-4" style={{ color: colors.text.primary }}>
                No Accountability
              </h3>
              <p style={{ color: colors.text.secondary }}>
                Zero visibility into whether issues are being addressed or just forgotten
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="py-24" style={{ backgroundColor: colors.primary[700] }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: colors.text.white }}
            >
              The Fretso Solution
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90"
              style={{ color: colors.text.white }}
            >
              Technology-powered civic engagement that actually works
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: "📱",
                title: "Spot & Snap",
                description: "See a pothole? Open Fretso, tap location, take photo. Done in 10 seconds."
              },
              {
                step: "02",
                icon: "🎯",
                title: "Smart Routing",
                description: "AI categorizes severity and routes to the right BBMP department automatically."
              },
              {
                step: "03",
                icon: "📢",
                title: "Community Power",
                description: "Other citizens can upvote critical issues, creating democratic prioritization."
              },
              {
                step: "04",
                icon: "✅",
                title: "Real Tracking",
                description: "Get updates from 'Reported' to 'In Progress' to 'Resolved' with photos."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-2xl font-bold"
                  style={{ backgroundColor: colors.text.white, color: colors.primary[700] }}
                >
                  {item.step}
                </div>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: colors.text.white }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed opacity-90"
                  style={{ color: colors.text.white }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Map Section */}
      <MapSection />

      {/* Impact Vision Section */}
      <div className="py-24" style={{ backgroundColor: colors.background.accent }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: colors.text.primary }}
            >
              Imagine Bengaluru in 2025
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: colors.text.secondary }}
            >
              ಕನಸು ಕಾಣೋಣ - ಸುಂದರವಾದ, ಸುರಕ್ಷಿತವಾದ ರಸ್ತೆಗಳೊಂದಿಗೆ ನಮ್ಮ ಬೆಂಗಳೂರು
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.primary[700] }}>
                  <span className="text-white text-xl">🛣️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: colors.text.primary }}>
                    Smooth Roads Everywhere
                  </h3>
                  <p style={{ color: colors.text.secondary }}>
                    Potholes reported and fixed within 48 hours. No more vehicle damage or dangerous rides.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.primary[700] }}>
                  <span className="text-white text-xl">👥</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: colors.text.primary }}>
                    Empowered Citizens
                  </h3>
                  <p style={{ color: colors.text.secondary }}>
                    Every citizen becomes a civic hero, actively participating in city improvement.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.primary[700] }}>
                  <span className="text-white text-xl">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: colors.text.primary }}>
                    Transparent Governance
                  </h3>
                  <p style={{ color: colors.text.secondary }}>
                    Real-time data on city infrastructure, public accountability, and measurable progress.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-6">🌟</div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: colors.text.primary }}>
                Be Part of the Change
              </h3>
              <p className="text-lg mb-10" style={{ color: colors.text.secondary }}>
                Join 10,000+ Bengaluru citizens already signed up to make this vision reality
              </p>
              <div className="max-w-md mx-auto">
                <div className="p-6 rounded-2xl border-2 shadow-lg" style={{ backgroundColor: colors.background.card, borderColor: colors.border.muted }}>
                  <SubscriptionForm
                    source="Impact Vision"
                    layout="vertical"
                    inputClassName="w-full px-4 py-3 rounded-xl border-2 text-gray-700 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-base"
                    buttonClassName="w-full px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-all duration-200 disabled:opacity-50 text-base"
                    showLabels={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-24" style={{ backgroundColor: colors.primary[700] }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className="text-4xl lg:text-5xl font-bold mb-8"
            style={{ color: colors.text.white }}
          >
            Ready to Transform Bengaluru?
          </h2>
          <p
            className="text-2xl mb-8 opacity-90"
            style={{ color: colors.text.white }}
          >
            ಒಂದೇ ಕ್ಲಿಕ್‌ನಲ್ಲಿ ಬದಲಾವಣೆ ತರೋಣ!
          </p>
          <p
            className="text-lg mb-12 max-w-2xl mx-auto opacity-80"
            style={{ color: colors.text.white }}
          >
            The power to fix our city's roads is in your hands. Be among the first to experience the future of civic engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: colors.text.white }}>Coming Soon</div>
              <div className="text-lg opacity-80" style={{ color: colors.text.white }}>iOS & Android Apps</div>
            </div>
            <div className="text-4xl">📱</div>
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: colors.text.white }}>ಬೇಗನೇ ಬರುತ್ತಿದೆ</div>
              <div className="text-lg opacity-80" style={{ color: colors.text.white }}>Web Platform</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
