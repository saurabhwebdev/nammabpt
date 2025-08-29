import { colors } from "@/lib/colors";
import { generateMetadata } from '@/lib/seo-config';

export const metadata = generateMetadata('terms');

export default function Terms() {
  return (
    <div className="bg-background min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className="text-4xl md:text-5xl font-cedarville font-bold mb-4"
            style={{ color: colors.special.comingSoon }}
          >
            Terms of Service
          </h1>
          <p className="text-xl" style={{ color: colors.text.secondary }}>
            ಸೇವೆಯ ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <div className="p-8 rounded-xl shadow-lg border" style={{ backgroundColor: colors.background.card, borderColor: colors.border.muted }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text.primary }}>
              Welcome to Fretso
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: colors.text.secondary }}>
              These Terms of Service govern your use of Fretso, a civic engagement platform designed to help Bengaluru citizens 
              report and track road infrastructure issues.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: colors.text.secondary }}>
              By using Fretso, you agree to these terms. <strong style={{ color: colors.text.primary }}>ಫ್ರೆಟ್ಸೋ ಬಳಸುವ ಮೂಲಕ ನೀವು ಈ ನಿಯಮಗಳನ್ನು ಒಪ್ಪುತ್ತೀರಿ.</strong>
            </p>
          </div>

          {/* Service Description */}
          <div className="p-8 rounded-xl border" style={{ backgroundColor: colors.background.accent, borderColor: colors.border.accent }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text.primary }}>
              Our Service
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: colors.text.primary }}>🛣️ Road Issue Reporting</h3>
                <p style={{ color: colors.text.secondary }}>
                  Fretso allows you to report potholes, road damage, and other infrastructure issues in Bengaluru.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: colors.text.primary }}>📍 Location-Based Services</h3>
                <p style={{ color: colors.text.secondary }}>
                  Our platform uses your location to accurately map and report issues to the relevant authorities.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: colors.text.primary }}>📊 Progress Tracking</h3>
                <p style={{ color: colors.text.secondary }}>
                  Track the status of reported issues from submission to resolution.
                </p>
              </div>
            </div>
          </div>

          {/* User Responsibilities */}
          <div className="p-8 rounded-xl shadow-lg border" style={{ backgroundColor: colors.background.card, borderColor: colors.border.muted }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text.primary }}>
              Your Responsibilities
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h3 className="font-semibold" style={{ color: colors.text.primary }}>Accurate Reporting</h3>
                  <p className="text-sm" style={{ color: colors.text.secondary }}>Provide truthful and accurate information when reporting issues</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🚫</span>
                <div>
                  <h3 className="font-semibold" style={{ color: colors.text.primary }}>No Misuse</h3>
                  <p className="text-sm" style={{ color: colors.text.secondary }}>Don't submit false reports or spam the system</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🤝</span>
                <div>
                  <h3 className="font-semibold" style={{ color: colors.text.primary }}>Respectful Conduct</h3>
                  <p className="text-sm" style={{ color: colors.text.secondary }}>Maintain respectful communication and civic responsibility</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">📱</span>
                <div>
                  <h3 className="font-semibold" style={{ color: colors.text.primary }}>Account Security</h3>
                  <p className="text-sm" style={{ color: colors.text.secondary }}>Keep your account credentials secure and report any unauthorized access</p>
                </div>
              </div>
            </div>
          </div>

          {/* Prohibited Uses */}
          <div className="p-8 rounded-xl border" style={{ backgroundColor: colors.background.muted, borderColor: colors.border.muted }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text.primary }}>
              Prohibited Uses
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p style={{ color: colors.text.secondary }}>❌ Submitting false or misleading reports</p>
                <p style={{ color: colors.text.secondary }}>❌ Harassment or abusive behavior</p>
                <p style={{ color: colors.text.secondary }}>❌ Attempting to hack or disrupt the service</p>
              </div>
              <div className="space-y-2">
                <p style={{ color: colors.text.secondary }}>❌ Sharing inappropriate content</p>
                <p style={{ color: colors.text.secondary }}>❌ Commercial use without permission</p>
                <p style={{ color: colors.text.secondary }}>❌ Violating local laws or regulations</p>
              </div>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="p-8 rounded-xl shadow-lg border" style={{ backgroundColor: colors.background.card, borderColor: colors.border.muted }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text.primary }}>
              Service Availability & Limitations
            </h2>
            <div className="space-y-4">
              <p style={{ color: colors.text.secondary }}>
                🔧 <strong style={{ color: colors.text.primary }}>Service Availability:</strong> We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service.
              </p>
              <p style={{ color: colors.text.secondary }}>
                🏛️ <strong style={{ color: colors.text.primary }}>Authority Response:</strong> We facilitate reporting to authorities but cannot guarantee their response time or actions.
              </p>
              <p style={{ color: colors.text.secondary }}>
                📱 <strong style={{ color: colors.text.primary }}>Platform Changes:</strong> We may update or modify the platform to improve functionality.
              </p>
              <p style={{ color: colors.text.secondary }}>
                ⚖️ <strong style={{ color: colors.text.primary }}>Legal Compliance:</strong> Our service operates within Indian laws and Bengaluru municipal regulations.
              </p>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="p-8 rounded-xl border" style={{ backgroundColor: colors.background.accent, borderColor: colors.border.accent }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text.primary }}>
              Intellectual Property
            </h2>
            <p className="mb-4" style={{ color: colors.text.secondary }}>
              The Fretso platform, including its design, features, and content, is protected by intellectual property laws. 
              You may use our service for its intended civic purposes but may not:
            </p>
            <ul className="space-y-2" style={{ color: colors.text.secondary }}>
              <li>• Copy or reproduce our platform design</li>
              <li>• Use our branding without permission</li>
              <li>• Reverse engineer our technology</li>
              <li>• Create derivative works without authorization</li>
            </ul>
          </div>

          {/* Changes to Terms */}
          <div className="p-8 rounded-xl shadow-lg border" style={{ backgroundColor: colors.background.card, borderColor: colors.border.muted }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text.primary }}>
              Changes to These Terms
            </h2>
            <p style={{ color: colors.text.secondary }}>
              We may update these Terms of Service from time to time. We'll notify you of any significant changes 
              via email or through the app. Continued use of Fretso after changes constitutes acceptance of the new terms.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center p-8 rounded-xl" style={{ backgroundColor: colors.special.comingSoon, color: colors.text.white }}>
            <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
            <p className="text-lg mb-4">
              We're here to clarify any questions you may have about our Terms of Service.
            </p>
            <p className="text-sm opacity-90">
              ನಿಯಮಗಳ ಬಗ್ಗೆ ಪ್ರಶ್ನೆಗಳಿದ್ದರೆ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}