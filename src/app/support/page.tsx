import { colors } from "@/lib/colors";
import { generateMetadata } from '@/lib/seo-config';

export const metadata = generateMetadata('support');

export default function Support() {
  return (
    <div className="bg-background min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className="text-4xl md:text-5xl font-cedarville font-bold mb-4"
            style={{ color: colors.special.comingSoon }}
          >
            Support
          </h1>
          <p className="text-xl" style={{ color: colors.text.secondary }}>
            ಸಹಾಯ ಮತ್ತು ಬೆಂಬಲ
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Coming Soon Message */}
          <div className="text-center p-12 rounded-xl shadow-lg border" style={{ backgroundColor: colors.background.card, borderColor: colors.border.muted }}>
            <div className="mb-8">
              <div 
                className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: colors.special.comingSoon }}
              >
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 110 19.5 9.75 9.75 0 010-19.5z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: colors.text.primary }}>
                Support Coming Soon! 🚀
              </h2>
              <p className="text-xl mb-6" style={{ color: colors.text.secondary }}>
                <strong style={{ color: colors.special.comingSoon }}>ಆಪ್ ಲೈವ್ ಆದ ತಕ್ಷಣ ಸಪೋರ್ಟ್ ಸಿಗುತ್ತದೆ!</strong>
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <p className="text-lg leading-relaxed mb-6" style={{ color: colors.text.secondary }}>
                We will enable comprehensive support services as soon as the Fretso app goes live. 
                Our dedicated support team will be ready to assist you with any questions, issues, or feedback.
              </p>
              <p className="text-base" style={{ color: colors.text.secondary }}>
                Until then, stay tuned for updates about our launch!
              </p>
            </div>
          </div>

          {/* What Support Will Include */}
          <div className="p-8 rounded-xl border" style={{ backgroundColor: colors.background.accent, borderColor: colors.border.accent }}>
            <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: colors.text.primary }}>
              What Our Support Will Include
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">💬</span>
                  <div>
                    <h3 className="font-semibold" style={{ color: colors.text.primary }}>Live Chat Support</h3>
                    <p className="text-sm" style={{ color: colors.text.secondary }}>Real-time assistance for urgent issues</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <h3 className="font-semibold" style={{ color: colors.text.primary }}>Email Support</h3>
                    <p className="text-sm" style={{ color: colors.text.secondary }}>Detailed help via email within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <h3 className="font-semibold" style={{ color: colors.text.primary }}>App Tutorials</h3>
                    <p className="text-sm" style={{ color: colors.text.secondary }}>Step-by-step guides for using Fretso</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🛠️</span>
                  <div>
                    <h3 className="font-semibold" style={{ color: colors.text.primary }}>Technical Support</h3>
                    <p className="text-sm" style={{ color: colors.text.secondary }}>Help with app issues and bugs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">❓</span>
                  <div>
                    <h3 className="font-semibold" style={{ color: colors.text.primary }}>FAQ Section</h3>
                    <p className="text-sm" style={{ color: colors.text.secondary }}>Common questions and answers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <h3 className="font-semibold" style={{ color: colors.text.primary }}>Multilingual Support</h3>
                    <p className="text-sm" style={{ color: colors.text.secondary }}>Support in English and Kannada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Support Hours */}
          <div className="p-8 rounded-xl shadow-lg border" style={{ backgroundColor: colors.background.card, borderColor: colors.border.muted }}>
            <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: colors.text.primary }}>
              Planned Support Hours
            </h2>
            <div className="text-center space-y-4">
              <div className="p-4 rounded-lg" style={{ backgroundColor: colors.background.accent }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: colors.text.primary }}>
                  🕘 Monday - Friday
                </h3>
                <p style={{ color: colors.text.secondary }}>9:00 AM - 7:00 PM IST</p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: colors.background.accent }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: colors.text.primary }}>
                  🕘 Saturday - Sunday
                </h3>
                <p style={{ color: colors.text.secondary }}>10:00 AM - 5:00 PM IST</p>
              </div>
              <p className="text-sm mt-4" style={{ color: colors.text.secondary }}>
                <strong style={{ color: colors.text.primary }}>Emergency Issues:</strong> 24/7 support for critical app problems
              </p>
            </div>
          </div>

          {/* Community Support */}
          <div className="p-8 rounded-xl border" style={{ backgroundColor: colors.background.muted, borderColor: colors.border.muted }}>
            <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: colors.text.primary }}>
              Community Support
            </h2>
            <p className="text-center mb-6" style={{ color: colors.text.secondary }}>
              Join our community of Bengaluru citizens working together to improve our city's infrastructure!
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg" style={{ backgroundColor: colors.background.card }}>
                <span className="text-3xl mb-2 block">👥</span>
                <h3 className="font-semibold mb-1" style={{ color: colors.text.primary }}>User Forums</h3>
                <p className="text-sm" style={{ color: colors.text.secondary }}>Connect with other users</p>
              </div>
              <div className="text-center p-4 rounded-lg" style={{ backgroundColor: colors.background.card }}>
                <span className="text-3xl mb-2 block">📚</span>
                <h3 className="font-semibold mb-1" style={{ color: colors.text.primary }}>Knowledge Base</h3>
                <p className="text-sm" style={{ color: colors.text.secondary }}>Self-help resources</p>
              </div>
              <div className="text-center p-4 rounded-lg" style={{ backgroundColor: colors.background.card }}>
                <span className="text-3xl mb-2 block">💡</span>
                <h3 className="font-semibold mb-1" style={{ color: colors.text.primary }}>Feature Requests</h3>
                <p className="text-sm" style={{ color: colors.text.secondary }}>Suggest improvements</p>
              </div>
            </div>
          </div>

          {/* Stay Updated */}
          <div className="text-center p-8 rounded-xl" style={{ backgroundColor: colors.special.comingSoon, color: colors.text.white }}>
            <h2 className="text-2xl font-bold mb-4">Stay Updated on Support Launch! 📢</h2>
            <p className="text-lg mb-4">
              Be the first to know when our support services go live.
            </p>
            <p className="text-sm opacity-90">
              ಸಪೋರ್ಟ್ ಸೇವೆ ಶುರುವಾದಾಗ ತಿಳಿಸುತ್ತೇವೆ!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}