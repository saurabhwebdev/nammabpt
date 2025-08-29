import { colors } from "@/lib/colors";
import { generateMetadata } from '@/lib/seo-config';
import ContactForm from '@/components/ContactForm';

export const metadata = generateMetadata('contact');

export default function Contact() {
  return (
    <div className="bg-background min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className="text-4xl md:text-5xl font-cedarville font-bold mb-4"
            style={{ color: colors.special.comingSoon }}
          >
            Contact Us
          </h1>
          <p className="text-xl" style={{ color: colors.text.secondary }}>
            ನಮ್ಮೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಿ - Let's build better roads together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="p-8 rounded-xl border" style={{ backgroundColor: colors.background.accent, borderColor: colors.border.accent }}>
              <h2 className="text-2xl font-bold mb-6 flex items-center" style={{ color: colors.text.primary }}>
                Reach Out 
                <span className="ml-3">📱</span>
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">📧</span>
                  <div>
                    <h3 className="font-semibold" style={{ color: colors.text.primary }}>Email</h3>
                    <p style={{ color: colors.text.secondary }}>hello@fretso.com</p>
                    <p className="text-sm" style={{ color: colors.text.secondary }}>We'll get back to you within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h3 className="font-semibold" style={{ color: colors.text.primary }}>Location</h3>
                    <p style={{ color: colors.text.secondary }}>Bengaluru, Karnataka</p>
                    <p className="text-sm" style={{ color: colors.text.secondary }}>ನಮ್ಮ ಪ್ರೀತಿಯ ಬೆಂಗಳೂರು</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <h3 className="font-semibold" style={{ color: colors.text.primary }}>Response Time</h3>
                    <p style={{ color: colors.text.secondary }}>24-48 hours</p>
                    <p className="text-sm" style={{ color: colors.text.secondary }}>Monday to Friday, 9 AM - 6 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-8 rounded-xl shadow-lg border" style={{ backgroundColor: colors.background.card, borderColor: colors.border.muted }}>
              <h2 className="text-xl font-bold mb-4 flex items-center" style={{ color: colors.text.primary }}>
                Follow Our Journey 
                <span className="ml-3">🌟</span>
              </h2>
              <p className="mb-6" style={{ color: colors.text.secondary }}>
                Stay updated on our progress and be the first to know when we launch!
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="#" 
                  className="flex items-center justify-center space-x-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                >
                  <span>📘</span>
                  <span className="font-medium text-blue-700">Facebook</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center space-x-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                >
                  <span>🐦</span>
                  <span className="font-medium text-blue-700">Twitter</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center space-x-2 p-3 bg-pink-50 hover:bg-pink-100 rounded-lg transition-colors"
                >
                  <span>📷</span>
                  <span className="font-medium text-pink-700">Instagram</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center space-x-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                >
                  <span>💼</span>
                  <span className="font-medium text-blue-700">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* FAQ Teaser */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: colors.special.comingSoon, color: colors.text.white }}>
              <h3 className="text-lg font-bold mb-2">Have Questions?</h3>
              <p className="mb-4">
                Check out our FAQ section or drop us a message. We're here to help!
              </p>
              <p className="text-sm opacity-90">
                ಪ್ರಶ್ನೆಗಳಿವೆಯೇ? ನಮಗೆ ಬರೆಯಿರಿ! 💌
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}