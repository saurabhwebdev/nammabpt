import { colors } from '@/lib/colors';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto border-t" style={{ backgroundColor: colors.text.white, borderColor: colors.border.muted }}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 text-center sm:text-left">
          {/* Copyright */}
          <p className="text-xs opacity-80" style={{ color: colors.text.secondary }}>
            © 2024 Fretso
          </p>

          {/* Links */}
          <div className="flex space-x-6">
            <Link 
              href="/privacy" 
              className="text-xs opacity-80 hover:opacity-100 transition-opacity"
              style={{ color: colors.primary[700] }}
            >
              Privacy
            </Link>
            <Link 
              href="/terms" 
              className="text-xs opacity-80 hover:opacity-100 transition-opacity"
              style={{ color: colors.primary[700] }}
            >
              Terms
            </Link>
            <Link 
              href="/support" 
              className="text-xs opacity-80 hover:opacity-100 transition-opacity"
              style={{ color: colors.primary[700] }}
            >
              Support
            </Link>
            <Link 
              href="/contact" 
              className="text-xs opacity-80 hover:opacity-100 transition-opacity"
              style={{ color: colors.primary[700] }}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}