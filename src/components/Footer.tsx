import { colors } from '@/lib/colors';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: colors.status.info }} className="mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 text-center sm:text-left">
          {/* Copyright */}
          <p className="text-xs opacity-80" style={{ color: colors.text.white }}>
            © 2024 Fretso
          </p>

          {/* Links */}
          <div className="flex space-x-6">
            <Link 
              href="/privacy" 
              className="text-xs opacity-80 hover:opacity-100 transition-opacity"
              style={{ color: colors.text.white }}
            >
              Privacy
            </Link>
            <Link 
              href="/terms" 
              className="text-xs opacity-80 hover:opacity-100 transition-opacity"
              style={{ color: colors.text.white }}
            >
              Terms
            </Link>
            <Link 
              href="/support" 
              className="text-xs opacity-80 hover:opacity-100 transition-opacity"
              style={{ color: colors.text.white }}
            >
              Support
            </Link>
            <Link 
              href="/contact" 
              className="text-xs opacity-80 hover:opacity-100 transition-opacity"
              style={{ color: colors.text.white }}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}