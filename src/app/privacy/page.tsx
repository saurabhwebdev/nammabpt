import { colors } from "@/lib/colors";
import { generateMetadata } from '@/lib/seo-config';

export const metadata = generateMetadata('privacy');

export default function Privacy() {
  return (
    <div className="bg-background min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className="text-4xl md:text-5xl font-cedarville font-bold mb-4"
            style={{ color: colors.special.comingSoon }}
          >
            Privacy Policy
          </h1>
          <p className="text-xl" style={{ color: colors.text.secondary }}>
            ನಿಮ್ಮ ಗೌಪ್ಯತೆ ನಮ್ಮ ಆದ್ಯತೆ
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <div className="p-8 rounded-xl shadow-lg border" style={{ backgroundColor: colors.background.card, borderColor: colors.border.muted }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text.primary }}>
              Our Commitment to Your Privacy
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: colors.text.secondary }}>
              At Fretso, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: colors.text.secondary }}>
              <strong style={{ color: colors.text.primary }}>ನಿಮ್ಮ ಮಾಹಿತಿಯ ಸುರಕ್ಷತೆ ನಮ್ಮ ಮುಖ್ಯ ಗುರಿ!</strong>
            </p>
          </div>

          {/* Information We Collect */}
          <div className="p-8 rounded-xl border" style={{ backgroundColor: colors.background.accent, borderColor: colors.border.accent }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text.primary }}>
              Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: colors.text.primary }}>📧 Email Addresses</h3>
                <p style={{ color: colors.text.secondary }}>
                  We collect email addresses when you subscribe to our launch notifications. This helps us keep you informed about Fretso's availability.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: colors.text.primary }}>📍 Location Data</h3>
                <p style={{ color: colors.text.secondary }}>
                  When the app launches, we'll collect location data to help you report potholes and road issues accurately. This data is used solely for civic improvement purposes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: colors.text.primary }}>📱 Usage Information</h3>
                <p style={{ color: colors.text.secondary }}>
                  We may collect information about how you use our app to improve our services and user experience.
                </p>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="p-8 rounded-xl shadow-lg border" style={{ backgroundColor: colors.background.card, borderColor: colors.border.muted }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text.primary }}>
              How We Use Your Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🔔</span>
                  <div>
                    <h3 className="font-semibold" style={{ color: colors.text.primary }}>Launch Notifications</h3>
                    <p className="text-sm" style={{ color: colors.text.secondary }}>Send you updates about Fretso's launch and new features</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🛠️</span>
                  <div>
                    <h3 className="font-semibold" style={{ color: colors.text.primary }}>Service Improvement</h3>
                    <p className="text-sm" style={{ color: colors.text.secondary }}>Analyze usage patterns to enhance our platform</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🏛️</span>
                  <div>
                    <h3 className="font-semibold" style={{ color: colors.text.primary }}>Civic Reporting</h3>
                    <p className="text-sm" style={{ color: colors.text.secondary }}>Forward road issue reports to relevant authorities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">📊</span>
                  <div>
                    <h3 className="font-semibold" style={{ color: colors.text.primary }}>Analytics</h3>
                    <p className="text-sm" style={{ color: colors.text.secondary }}>Generate insights for better city infrastructure planning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Protection */}
          <div className="p-8 rounded-xl border" style={{ backgroundColor: colors.background.muted, borderColor: colors.border.muted }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text.primary }}>
              Data Protection & Security
            </h2>
            <div className="space-y-4">
              <p style={{ color: colors.text.secondary }}>
                🔒 <strong style={{ color: colors.text.primary }}>Encryption:</strong> All data is encrypted in transit and at rest using industry-standard protocols.
              </p>
              <p style={{ color: colors.text.secondary }}>
                🚫 <strong style={{ color: colors.text.primary }}>No Selling:</strong> We never sell, rent, or share your personal information with third parties for marketing purposes.
              </p>
              <p style={{ color: colors.text.secondary }}>
                🎯 <strong style={{ color: colors.text.primary }}>Purpose Limitation:</strong> Your data is used only for the purposes stated in this policy.
              </p>
              <p style={{ color: colors.text.secondary }}>
                ⏰ <strong style={{ color: colors.text.primary }}>Data Retention:</strong> We retain your data only as long as necessary to provide our services.
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div className="p-8 rounded-xl shadow-lg border" style={{ backgroundColor: colors.background.card, borderColor: colors.border.muted }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text.primary }}>
              Your Rights
            </h2>
            <p className="mb-4" style={{ color: colors.text.secondary }}>
              You have the right to:
            </p>
            <ul className="space-y-2" style={{ color: colors.text.secondary }}>
              <li>✅ Access your personal data</li>
              <li>✅ Correct inaccurate information</li>
              <li>✅ Delete your data (right to be forgotten)</li>
              <li>✅ Opt-out of communications</li>
              <li>✅ Data portability</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center p-8 rounded-xl" style={{ backgroundColor: colors.special.comingSoon, color: colors.text.white }}>
            <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
            <p className="text-lg mb-4">
              We're here to help! Contact us for any privacy-related concerns.
            </p>
            <p className="text-sm opacity-90">
              ಗೌಪ್ಯತೆ ಬಗ್ಗೆ ಪ್ರಶ್ನೆಗಳಿದ್ದರೆ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}