import { colors } from '@/lib/colors';
import SubscriptionForm from './SubscriptionForm';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: colors.status.info }} className="mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Email Subscription Section */}
        <div className="text-center mb-8 pb-8 border-b border-white/20">
          <h3 className="text-lg font-bold mb-2" style={{ color: colors.text.white }}>
            Stay Updated with Fretso
          </h3>
          <p className="text-sm mb-4 opacity-90" style={{ color: colors.text.white }}>
            Get notified when we launch.
          </p>
          <div className="max-w-md mx-auto">
            <SubscriptionForm 
              source="Footer"
              layout="horizontal"
              inputClassName="flex-1 px-3 py-2 rounded-lg text-gray-700 placeholder-gray-400 bg-white border-2 border-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:border-white text-sm"
              buttonClassName="px-4 py-2 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors border-2 border-white/30 text-sm disabled:opacity-50"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Company info */}
          <div className="mb-4 md:mb-0">
            <p className="text-sm font-medium" style={{ color: colors.text.white }}>
              © 2024 Fretso. All rights reserved.
            </p>
          </div>

          {/* Right side - Links */}
          <div className="flex space-x-6">
            <Link 
              href="/privacy" 
              className="text-sm hover:opacity-80 transition-opacity"
              style={{ color: colors.text.white }}
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-sm hover:opacity-80 transition-opacity"
              style={{ color: colors.text.white }}
            >
              Terms of Service
            </Link>
            <Link 
              href="/support" 
              className="text-sm hover:opacity-80 transition-opacity"
              style={{ color: colors.text.white }}
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}