import { colors } from "@/lib/colors";
import SubscriptionForm from '@/components/SubscriptionForm';
import { generateMetadata } from '@/lib/seo-config';

export const metadata = generateMetadata('about');

export default function About() {
  return (
    <div className="bg-background min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 p-12 rounded-2xl" style={{ backgroundColor: colors.primary[700] }}>
          <h1 
            className="text-4xl md:text-5xl font-cedarville font-bold mb-4"
            style={{ color: colors.text.white }}
          >
            About Fretso
          </h1>
          <p className="text-xl" style={{ color: colors.text.white }}>
            ನಮ್ಮ ಕನಸು - ಸುಂದರವಾದ ಬೆಂಗಳೂರು
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Mission Section */}
          <div className="p-8 rounded-xl shadow-lg border" style={{ backgroundColor: colors.background.card, borderColor: colors.border.muted }}>
            <h2 className="text-2xl font-bold mb-4 flex items-center" style={{ color: colors.text.primary }}>
              Our Mission 
              <span className="ml-3">🎯</span>
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: colors.text.secondary }}>
              Fretso is born from the frustration every Bengaluru citizen feels when navigating our beloved city's roads. 
              <strong style={{ color: colors.text.primary }}> ಪ್ರತಿದಿನ ಗುಂಡಿಗಳನ್ನು ತಪ್ಪಿಸುವ ಕಷ್ಟ ಸಾಕು!</strong>
            </p>
            <p className="text-lg leading-relaxed" style={{ color: colors.text.secondary }}>
              We're building a platform that empowers every citizen to be part of the solution. Report potholes, 
              track repairs, and hold authorities accountable - all with a simple tap on your phone.
            </p>
          </div>

          {/* Vision Section */}
          <div className="p-8 rounded-xl border" style={{ backgroundColor: colors.background.accent, borderColor: colors.border.accent }}>
            <h2 className="text-2xl font-bold mb-4 flex items-center" style={{ color: colors.text.primary }}>
              Our Vision 
              <span className="ml-3">🌟</span>
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: colors.text.secondary }}>
              Imagine a Bengaluru where every road is smooth, every commute is safe, and every citizen has a voice 
              in making their city better. <strong style={{ color: colors.text.primary }}>ಅದೇ ನಮ್ಮ ಕನಸು!</strong>
            </p>
            <p className="text-lg leading-relaxed" style={{ color: colors.text.secondary }}>
              Through technology and community participation, we're creating a transparent system where 
              civic issues are addressed promptly and efficiently.
            </p>
          </div>

          {/* How We're Different */}
          <div className="p-8 rounded-xl shadow-lg border" style={{ backgroundColor: colors.background.card, borderColor: colors.border.muted }}>
            <h2 className="text-2xl font-bold mb-6 flex items-center" style={{ color: colors.text.primary }}>
              Why Fretso? 
              <span className="ml-3">💡</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <h3 className="font-semibold" style={{ color: colors.text.primary }}>Hyper-Local Focus</h3>
                    <p className="text-sm" style={{ color: colors.text.secondary }}>Built specifically for Bengaluru, understanding our unique challenges</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h3 className="font-semibold" style={{ color: colors.text.primary }}>Lightning Fast</h3>
                    <p className="text-sm" style={{ color: colors.text.secondary }}>Report issues in seconds, not minutes</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🔍</span>
                  <div>
                    <h3 className="font-semibold" style={{ color: colors.text.primary }}>Full Transparency</h3>
                    <p className="text-sm" style={{ color: colors.text.secondary }}>Track every report from submission to resolution</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <h3 className="font-semibold" style={{ color: colors.text.primary }}>Community Driven</h3>
                    <p className="text-sm" style={{ color: colors.text.secondary }}>Every citizen is a civic hero</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="p-8 rounded-xl border" style={{ backgroundColor: colors.background.muted, borderColor: colors.border.muted }}>
            <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: colors.text.primary }}>
              Built by Bengaluru, for Bengaluru 💜
            </h2>
            <p className="text-lg text-center leading-relaxed" style={{ color: colors.text.secondary }}>
              We're a team of passionate Bengaluru residents who believe in the power of technology 
              to solve real-world problems. <strong style={{ color: colors.text.primary }}>ನಮ್ಮ ಊರು, ನಮ್ಮ ಜವಾಬ್ದಾರಿ!</strong>
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center p-8 rounded-xl" style={{ backgroundColor: colors.primary[700], color: colors.text.white }}>
            <h2 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-lg mb-6">
              Join thousands of Bengaluru citizens who are taking action!
            </p>
            <p className="text-lg font-bold mb-4">
              Get Notified When We Launch! 🚀
            </p>
            <div className="max-w-md mx-auto">
              <SubscriptionForm 
                source="About Page"
                layout="horizontal"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}