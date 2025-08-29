'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { colors } from '@/lib/colors';
import SubscriptionForm from './SubscriptionForm';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Close mobile menu when clicking outside or pressing escape
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsMobileMenuOpen(false);
            }
        };

        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('keydown', handleEscape);
            document.addEventListener('click', handleClickOutside);
            // Prevent body scroll when menu is open
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.removeEventListener('click', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav style={{ backgroundColor: colors.primary[700] }} className="shadow-lg relative z-[1000]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-3xl font-cedarville font-bold" style={{ color: colors.text.white }}>
                                Fretso
                            </Link>
                        </div>

                        {/* Navigation Links - Desktop */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <Link
                                    href="/"
                                    className="hover:opacity-80 transition-opacity px-3 py-2 rounded-md text-sm font-medium"
                                    style={{ color: colors.text.white }}
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/about"
                                    className="hover:opacity-80 transition-opacity px-3 py-2 rounded-md text-sm font-medium"
                                    style={{ color: colors.text.white }}
                                >
                                    About
                                </Link>
                                <Link
                                    href="/services"
                                    className="hover:opacity-80 transition-opacity px-3 py-2 rounded-md text-sm font-medium"
                                    style={{ color: colors.text.white }}
                                >
                                    Services
                                </Link>
                                <Link
                                    href="/contact"
                                    className="hover:opacity-80 transition-opacity px-3 py-2 rounded-md text-sm font-medium"
                                    style={{ color: colors.text.white }}
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>

                        {/* Auth Buttons - Hidden for now */}
                        <div className="hidden">
                            {/* Sign In/Sign Up buttons temporarily hidden */}
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                type="button"
                                onClick={toggleMobileMenu}
                                className="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md hover:opacity-80 transition-opacity relative z-[1010]"
                                style={{ color: colors.text.white }}
                                aria-label="Toggle mobile menu"
                            >
                                {/* Hamburger/Close Icon with animation */}
                                <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                                    <span
                                        className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45' : '-translate-y-2'
                                            }`}
                                    />
                                    <span
                                        className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                                            }`}
                                    />
                                    <span
                                        className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-2'
                                            }`}
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[9999] md:hidden">
                    {/* Background overlay */}
                    <div
                        className="fixed inset-0 transition-opacity duration-300"
                        style={{ backgroundColor: 'rgba(247, 247, 255, 0.8)' }}
                        onClick={closeMobileMenu}
                    />

                    {/* Mobile menu panel */}
                    <div
                        className={`mobile-menu fixed top-0 right-0 h-full w-80 max-w-sm transform transition-transform duration-300 ease-in-out z-[10000] shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                            }`}
                        style={{ backgroundColor: colors.primary[700] }}
                    >
                        {/* Menu Header */}
                        <div className="flex items-center justify-between p-4 border-b border-white/20">
                            <Link
                                href="/"
                                className="text-2xl font-cedarville font-bold"
                                style={{ color: colors.text.white }}
                                onClick={closeMobileMenu}
                            >
                                Fretso
                            </Link>
                            <button
                                onClick={closeMobileMenu}
                                className="p-2 rounded-md hover:bg-white/10 transition-colors"
                                style={{ color: colors.text.white }}
                                aria-label="Close menu"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="px-4 py-6 space-y-4">
                            <Link
                                href="/"
                                className="block px-4 py-3 rounded-lg text-lg font-medium hover:bg-white/10 transition-colors"
                                style={{ color: colors.text.white }}
                                onClick={closeMobileMenu}
                            >
                                🏠 Home
                            </Link>
                            <Link
                                href="/about"
                                className="block px-4 py-3 rounded-lg text-lg font-medium hover:bg-white/10 transition-colors"
                                style={{ color: colors.text.white }}
                                onClick={closeMobileMenu}
                            >
                                ℹ️ About
                            </Link>
                            <Link
                                href="/services"
                                className="block px-4 py-3 rounded-lg text-lg font-medium hover:bg-white/10 transition-colors"
                                style={{ color: colors.text.white }}
                                onClick={closeMobileMenu}
                            >
                                ⚙️ Services
                            </Link>
                            <Link
                                href="/contact"
                                className="block px-4 py-3 rounded-lg text-lg font-medium hover:bg-white/10 transition-colors"
                                style={{ color: colors.text.white }}
                                onClick={closeMobileMenu}
                            >
                                📞 Contact
                            </Link>

                            {/* Subscription Section */}
                            <div className="mt-8 pt-6 border-t border-white/20">
                                <div className="px-4 py-4 rounded-lg bg-white/10">
                                    <h3 className="text-sm font-bold mb-2 text-center" style={{ color: colors.text.white }}>
                                        🔔 Get Notified!
                                    </h3>
                                    <SubscriptionForm
                                        source="Mobile Menu"
                                        layout="vertical"
                                        inputClassName="w-full px-3 py-2 rounded-lg text-gray-700 placeholder-gray-400 bg-white border-2 border-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:border-white text-sm"
                                        buttonClassName="w-full px-3 py-2 bg-white/20 text-white rounded-lg font-medium text-sm hover:bg-white/30 transition-colors border border-white/30 disabled:opacity-50"
                                        showKannada={true}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Menu Footer */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/20">
                            <p className="text-xs text-center opacity-75" style={{ color: colors.text.white }}>
                                ನಮ್ಮ ಬೆಂಗಳೂರಿಗೆ ಒಂದು ಹೊಸ ಆರಂಭ!
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}