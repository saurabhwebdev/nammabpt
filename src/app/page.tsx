import { colors } from "@/lib/colors";
import SubscriptionForm from '@/components/SubscriptionForm';
import { generateMetadata } from '@/lib/seo-config';
import MapWrapper from '@/components/MapWrapper';

export const metadata = generateMetadata('home');

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left Half - Map */}
        <div className="w-1/2 p-6">
          <div style={{ height: 'calc(100vh - 64px)' }} className="rounded-xl overflow-hidden shadow-lg">
            <MapWrapper />
          </div>
        </div>

        {/* Right Half - Info Content */}
        <div className="w-1/2 p-6 flex items-center">
          <div className="max-w-lg mx-auto space-y-6">
            <div className="text-center space-y-3">
              <h1
                className="text-4xl lg:text-5xl font-cedarville font-bold"
                style={{ color: colors.special.comingSoon }}
              >
                Fretso
              </h1>
              <p className="text-lg text-muted-foreground font-medium">
                ನಮ್ಮ ಬೆಂಗಳೂರಿಗೆ ಒಂದು ಹೊಸ ಆರಂಭ!
              </p>
            </div>

            <div className="space-y-5">
              <div className="p-6 rounded-xl shadow-lg border" style={{ backgroundColor: colors.background.card, borderColor: colors.border.muted }}>
                <h2 className="text-xl font-bold mb-3 flex items-center" style={{ color: colors.text.primary }}>
                  Take Control, Bengaluru!
                  <span className="ml-2">💪</span>
                </h2>
                <p className="text-base leading-relaxed mb-3" style={{ color: colors.text.secondary }}>
                  Tired of dodging potholes on your daily commute? <strong style={{ color: colors.text.primary }}>ಸಾಕು ಅಂತ ಅನ್ನಿಸುತ್ತಾ?</strong>
                </p>
                <p className="text-base leading-relaxed mb-3" style={{ color: colors.text.secondary }}>
                  Mark every pothole, crack, and road issue in our beautiful city. Show the authorities exactly where action is needed.
                </p>
                <p className="text-base font-semibold" style={{ color: colors.special.comingSoon }}>
                  ಒಂದೇ ಕ್ಲಿಕ್‌ನಲ್ಲಿ ಬದಲಾವಣೆ ತರೋಣ!
                </p>
              </div>

              <div className="p-6 rounded-xl border" style={{ backgroundColor: colors.background.accent, borderColor: colors.border.accent }}>
                <h3 className="text-lg font-bold mb-4" style={{ color: colors.text.primary }}>
                  How it works:
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">📍</span>
                    <div>
                      <p className="font-medium text-sm" style={{ color: colors.text.primary }}>Spot & Mark</p>
                      <p className="text-xs" style={{ color: colors.text.secondary }}>Mark potholes instantly</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">📸</span>
                    <div>
                      <p className="font-medium text-sm" style={{ color: colors.text.primary }}>Add Details</p>
                      <p className="text-xs" style={{ color: colors.text.secondary }}>Photos and descriptions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">🚀</span>
                    <div>
                      <p className="font-medium text-sm" style={{ color: colors.text.primary }}>Auto Notify</p>
                      <p className="text-xs" style={{ color: colors.text.secondary }}>We alert authorities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">✅</span>
                    <div>
                      <p className="font-medium text-sm" style={{ color: colors.text.primary }}>Track Progress</p>
                      <p className="text-xs" style={{ color: colors.text.secondary }}>Until it's fixed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center p-6 rounded-xl" style={{ backgroundColor: colors.special.comingSoon, color: colors.text.white }}>
                <p className="text-lg font-bold mb-4">
                  Get Notified When We Launch! 🔥
                </p>
                <SubscriptionForm 
                  source="Home Page Desktop"
                  layout="horizontal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <div className="p-6 text-center" style={{ backgroundColor: colors.background.accent }}>
          <h1
            className="text-3xl sm:text-4xl font-cedarville font-bold mb-2"
            style={{ color: colors.special.comingSoon }}
          >
            Fretso
          </h1>
          <p className="text-base font-medium" style={{ color: colors.text.secondary }}>
            ನಮ್ಮ ಬೆಂಗಳೂರಿಗೆ ಒಂದು ಹೊಸ ಆರಂಭ!
          </p>
        </div>

        {/* Mobile Map */}
        <div className="p-4">
          <div className="h-64 sm:h-80 rounded-xl overflow-hidden shadow-lg">
            <MapWrapper />
          </div>
        </div>

        {/* Mobile Content */}
        <div className="p-6 space-y-5">
          <div className="p-5 rounded-xl shadow-lg border" style={{ backgroundColor: colors.background.card, borderColor: colors.border.muted }}>
            <h2 className="text-lg font-bold mb-3 flex items-center justify-center" style={{ color: colors.text.primary }}>
              Take Control, Bengaluru!
              <span className="ml-2">💪</span>
            </h2>
            <p className="text-sm leading-relaxed mb-3 text-center" style={{ color: colors.text.secondary }}>
              Tired of dodging potholes? <strong style={{ color: colors.text.primary }}>ಸಾಕು ಅಂತ ಅನ್ನಿಸುತ್ತಾ?</strong>
            </p>
            <p className="text-sm leading-relaxed mb-3 text-center" style={{ color: colors.text.secondary }}>
              Mark road issues and show authorities exactly where action is needed.
            </p>
            <p className="text-sm font-semibold text-center" style={{ color: colors.special.comingSoon }}>
              ಒಂದೇ ಕ್ಲಿಕ್‌ನಲ್ಲಿ ಬದಲಾವಣೆ ತರೋಣ!
            </p>
          </div>

          <div className="p-5 rounded-xl border" style={{ backgroundColor: colors.background.accent, borderColor: colors.border.accent }}>
            <h3 className="text-base font-bold mb-4 text-center" style={{ color: colors.text.primary }}>
              How it works:
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 rounded-lg" style={{ backgroundColor: colors.background.card }}>
                <span className="text-lg">📍</span>
                <div>
                  <p className="font-medium text-sm" style={{ color: colors.text.primary }}>Spot & Mark</p>
                  <p className="text-xs" style={{ color: colors.text.secondary }}>Mark potholes instantly</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg" style={{ backgroundColor: colors.background.card }}>
                <span className="text-lg">📸</span>
                <div>
                  <p className="font-medium text-sm" style={{ color: colors.text.primary }}>Add Details</p>
                  <p className="text-xs" style={{ color: colors.text.secondary }}>Photos and descriptions</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg" style={{ backgroundColor: colors.background.card }}>
                <span className="text-lg">🚀</span>
                <div>
                  <p className="font-medium text-sm" style={{ color: colors.text.primary }}>Auto Notify</p>
                  <p className="text-xs" style={{ color: colors.text.secondary }}>We alert authorities</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg" style={{ backgroundColor: colors.background.card }}>
                <span className="text-lg">✅</span>
                <div>
                  <p className="font-medium text-sm" style={{ color: colors.text.primary }}>Track Progress</p>
                  <p className="text-xs" style={{ color: colors.text.secondary }}>Until it's fixed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center p-5 rounded-xl" style={{ backgroundColor: colors.special.comingSoon, color: colors.text.white }}>
            <p className="text-base font-bold mb-3">
              Get Notified When We Launch! 🔥
            </p>
            <SubscriptionForm 
              source="Home Page Mobile"
              layout="vertical"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
