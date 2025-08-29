import { colors } from "@/lib/colors";
import SubscriptionForm from '@/components/SubscriptionForm';
import { generateMetadata } from '@/lib/seo-config';
import MapSection from '@/components/MapSection';
import '../styles/hero-animations.css';

export const metadata = generateMetadata('home');

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background.main }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden" style={{ backgroundColor: colors.primary[700] }}>
        {/* Indian Palace Architecture Background with Effects */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 hero-bg-animate transform scale-105 hover:scale-110 transition-transform duration-[3000ms] ease-out"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/4124381/pexels-photo-4124381.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
            filter: 'sepia(10%) saturate(120%) hue-rotate(15deg) brightness(1.1) contrast(1.05)',
            backgroundAttachment: 'fixed'
          }}
        />

        {/* Animated gradient overlay */}
        <div
          className="absolute inset-0 opacity-0 hero-gradient-animate"
          style={{
            background: `linear-gradient(135deg, ${colors.primary[600]}35 0%, ${colors.primary[800]}20 50%, transparent 100%)`
          }}
        />

        {/* Shimmer effect overlay */}
        <div
          className="absolute inset-0 opacity-0 hero-shimmer-animate"
          style={{
            background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`,
            backgroundSize: '200% 200%'
          }}
        />

        {/* Intricate pattern overlay with pulse */}
        <div
          className="absolute inset-0 opacity-0 hero-pattern-animate"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z' opacity='0.3'/%3E%3Ccircle cx='40' cy='40' r='2' opacity='0.8'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-8">
            {/* Main heading */}
            <div className="space-y-4">
              <h1
                className="text-5xl lg:text-7xl font-cedarville font-bold tracking-tight"
                style={{ color: colors.text.white }}
              >
                Fretso
              </h1>
              <p
                className="text-xl lg:text-2xl font-medium max-w-2xl mx-auto"
                style={{ color: colors.text.white }}
              >
                Report road issues. Build better Bengaluru.
              </p>
              <p
                className="text-lg opacity-80"
                style={{ color: colors.text.white }}
              >
                ನಮ್ಮ ಬೆಂಗಳೂರಿಗೆ ಒಂದು ಹೊಸ ಆರಂಭ
              </p>
            </div>

            {/* CTA Section */}
            <div className="max-w-md mx-auto">
              <div
                className="p-8 rounded-2xl backdrop-blur-sm border"
                style={{
                  backgroundColor: `rgba(255, 255, 255, 0.1)`,
                  borderColor: 'rgba(255, 255, 255, 0.2)'
                }}
              >
                <p
                  className="text-lg font-semibold mb-6"
                  style={{ color: colors.text.white }}
                >
                  Be the first to know when we launch
                </p>
                <SubscriptionForm
                  source="Home Hero"
                  layout="vertical"
                  inputClassName="w-full px-4 py-3 rounded-xl border-2 text-gray-700 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-white focus:border-white text-base"
                  buttonClassName="w-full px-6 py-3 bg-white/20 text-white rounded-xl font-semibold hover:bg-white/30 transition-all duration-200 disabled:opacity-50 text-base border border-white/30"
                  showLabels={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: colors.text.primary }}
            >
              Simple. Powerful. Effective.
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: colors.text.secondary }}
            >
              One click to report. Automatic notifications to authorities. Real progress tracking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "📍",
                title: "Spot & Mark",
                description: "Instantly mark potholes and road issues with precise location"
              },
              {
                icon: "📸",
                title: "Add Context",
                description: "Upload photos and descriptions to provide clear evidence"
              },
              {
                icon: "🚀",
                title: "Auto Notify",
                description: "We automatically alert the relevant authorities for you"
              },
              {
                icon: "✅",
                title: "Track Progress",
                description: "Monitor the status until the issue is completely resolved"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl border hover:shadow-lg transition-all duration-300"
                style={{
                  backgroundColor: colors.background.card,
                  borderColor: colors.border.muted
                }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ color: colors.text.primary }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: colors.text.secondary }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Map Section */}
      <MapSection />

      {/* Impact Section */}
      <div
        className="py-20"
        style={{ backgroundColor: colors.background.accent }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-8"
            style={{ color: colors.text.primary }}
          >
            Ready to make a difference?
          </h2>
          <p
            className="text-xl mb-8 max-w-2xl mx-auto"
            style={{ color: colors.text.secondary }}
          >
            Join thousands of Bengaluru citizens working together to build better roads for everyone.
          </p>
          <p
            className="text-lg font-semibold"
            style={{ color: colors.special.comingSoon }}
          >
            ಒಂದೇ ಕ್ಲಿಕ್‌ನಲ್ಲಿ ಬದಲಾವಣೆ ತರೋಣ!
          </p>
        </div>
      </div>
    </div>
  );
}
