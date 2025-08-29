'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { colors } from '@/lib/colors';

export default function ThankYou() {
    const router = useRouter();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    router.push('/');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: colors.background.default }}>
            <div className="max-w-md w-full text-center">
                {/* Success Animation */}
                <div className="mb-8">
                    <div
                        className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 animate-bounce"
                        style={{ backgroundColor: colors.special.comingSoon }}
                    >
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h1
                        className="text-3xl font-cedarville font-bold mb-2"
                        style={{ color: colors.special.comingSoon }}
                    >
                        Thank You! 🎉
                    </h1>
                    <p className="text-lg font-medium" style={{ color: colors.text.secondary }}>
                        ಧನ್ಯವಾದಗಳು!
                    </p>
                </div>

                {/* Confirmation Message */}
                <div className="p-6 rounded-xl shadow-lg border mb-6" style={{ backgroundColor: colors.background.card, borderColor: colors.border.muted }}>
                    <h2 className="text-xl font-bold mb-3" style={{ color: colors.text.primary }}>
                        You're All Set! ✅
                    </h2>
                    <p className="text-base mb-4" style={{ color: colors.text.secondary }}>
                        We've received your subscription and you'll be the first to know when Fretso launches in Bengaluru!
                    </p>
                    <p className="text-sm font-medium" style={{ color: colors.special.comingSoon }}>
                        ಲಾಂಚ್ ಆದಾಗ ನಿಮಗೆ ಮೊದಲು ತಿಳಿಸುತ್ತೇವೆ! 🚀
                    </p>
                </div>

                {/* Countdown */}
                <div className="p-4 rounded-lg" style={{ backgroundColor: colors.background.accent }}>
                    <p className="text-sm" style={{ color: colors.text.secondary }}>
                        Redirecting to home page in <span className="font-bold text-lg" style={{ color: colors.special.comingSoon }}>{countdown}</span> seconds...
                    </p>
                    <button
                        onClick={() => router.push('/')}
                        className="mt-3 px-4 py-2 rounded-lg font-medium text-sm hover:opacity-80 transition-opacity"
                        style={{ backgroundColor: colors.special.comingSoon, color: colors.text.white }}
                    >
                        Go Home Now
                    </button>
                </div>
            </div>
        </div>
    );
}