'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { colors } from '@/lib/colors';
import { submitSubscription } from '@/lib/formSubmit';

interface SubscriptionFormProps {
  source: string;
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  layout?: 'horizontal' | 'vertical';
  showKannada?: boolean;
  showLabels?: boolean;
  compact?: boolean;
}

export default function SubscriptionForm({
  source,
  className = '',
  inputClassName = '',
  buttonClassName = '',
  layout = 'horizontal',
  showKannada = true,
  showLabels = true,
  compact = false
}: SubscriptionFormProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setIsSubmitting(true);
    setMessage('');

    const result = await submitSubscription(email, source);

    if (result.success) {
      // Show success message briefly then redirect
      setMessage('✅ Subscribed successfully!');
      setTimeout(() => {
        router.push('/thank-you');
      }, 1000);
    } else {
      setMessage(result.error || 'Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  const containerClass = layout === 'horizontal'
    ? 'flex flex-col sm:flex-row gap-2'
    : 'space-y-2';

  const defaultInputClass = layout === 'horizontal'
    ? 'flex-1 px-4 py-2 rounded-lg text-gray-700 placeholder-gray-400 bg-white border-2 border-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:border-white'
    : 'w-full px-3 py-2 rounded-lg text-gray-700 placeholder-gray-400 text-sm bg-white border-2 border-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:border-white';

  const defaultButtonClass = layout === 'horizontal'
    ? 'px-6 py-2 bg-white text-purple-700 rounded-lg font-medium hover:bg-gray-100 transition-colors border-2 border-white disabled:opacity-50'
    : 'w-full px-4 py-2 bg-white text-purple-700 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors border-2 border-white disabled:opacity-50';

  return (
    <div className={className}>
      {showKannada && showLabels && !compact && (
        <p className="text-sm mb-4 opacity-90" style={{ color: colors.text.white }}>
          Be the first to know when we launch!
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div className={containerClass}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={compact ? "Email" : "Enter your email"}
            required
            disabled={isSubmitting}
            className={inputClassName || defaultInputClass}
          />
          <button
            type="submit"
            disabled={isSubmitting || !email}
            className={buttonClassName || defaultButtonClass}
          >
            {isSubmitting ? (compact ? '...' : 'Subscribing...') : (compact ? 'Subscribe' : 'Subscribe')}
          </button>
        </div>
      </form>

      {message && !compact && (
        <p className={`text-sm mt-2 ${message.includes('✅') ? 'text-green-200' : 'text-red-200'}`}>
          {message}
        </p>
      )}
    </div>
  );
}