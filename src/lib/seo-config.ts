import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  canonical?: string;
  noIndex?: boolean;
}

const baseUrl = 'https://fretso.com';

export const seoConfig: Record<string, SEOConfig> = {
  home: {
    title: "Fretso - Report Road Issues in Bengaluru | Community-Driven Infrastructure",
    description: "Join thousands of Bengaluru citizens reporting potholes and road issues. Help improve our city's infrastructure with Fretso's easy-to-use platform. ನಮ್ಮ ಬೆಂಗಳೂರಿನ ರಸ್ತೆಗಳನ್ನು ಸುಧಾರಿಸೋಣ!",
    keywords: ["Bengaluru potholes", "road issues", "civic reporting", "BBMP", "Bangalore roads", "infrastructure", "community reporting", "Fretso app", "ನಮ್ಮ ಬೆಂಗಳೂರು", "ರಸ್ತೆ ಸಮಸ್ಯೆ"],
    ogTitle: "Fretso - Transform Bengaluru's Roads Together",
    ogDescription: "Spot. Report. Track. Make Bengaluru's roads better with community-driven reporting. ಒಂದೇ ಕ್ಲಿಕ್‌ನಲ್ಲಿ ಬದಲಾವಣೆ ತರೋಣ!",
    ogImage: "/og-home.jpg",
    twitterTitle: "Take Control of Bengaluru's Roads with Fretso",
    twitterDescription: "Report potholes instantly. Track repairs. Make a difference. Join the movement! 💪🛣️ #BengaluruRoads #CivicTech",
    canonical: `${baseUrl}/`
  },
  about: {
    title: "About Fretso - Our Mission to Transform Bengaluru Roads",
    description: "Learn about Fretso's mission to empower Bengaluru citizens in reporting road issues. Discover how we're building a transparent, community-driven platform for better infrastructure. ನಮ್ಮ ಕನಸು - ಸುಂದರವಾದ ಬೆಂಗಳೂರು.",
    keywords: ["Fretso mission", "Bengaluru roads", "civic technology", "community platform", "BBMP collaboration", "road infrastructure", "pothole reporting", "transparency", "ನಮ್ಮ ಬೆಂಗಳೂರು", "ಸಮುದಾಯ ವೇದಿಕೆ"],
    ogTitle: "About Fretso - Building Better Roads Together",
    ogDescription: "Discover how Fretso is revolutionizing civic engagement in Bengaluru through technology and community participation. ನಮ್ಮ ಕನಸು - ಸುಂದರವಾದ ಬೆಂಗಳೂರು.",
    ogImage: "/og-about.jpg",
    twitterTitle: "Meet the Team Behind Fretso - Bengaluru Road Reporters",
    twitterDescription: "Built by Bengaluru, for Bengaluru! Learn about our mission to transform city infrastructure through community action. 🏢🚀",
    canonical: `${baseUrl}/about`
  },
  services: {
    title: "Fretso Services - Comprehensive Road Issue Reporting Platform",
    description: "Explore Fretso's comprehensive services: pothole reporting, BBMP integration, community features, analytics, mobile apps & APIs. Everything you need for better Bengaluru roads. ಬೆಂಗಳೂರಿನ ರಸ್ತೆಗಳನ್ನು ಸುಧಾರಿಸಲು ನಮ್ಮ ಸೇವೆಗಳು.",
    keywords: ["Fretso services", "pothole reporting", "BBMP integration", "mobile app", "community features", "road analytics", "civic technology", "API integration", "Bengaluru infrastructure", "ರಸ್ತೆ ಸೇವೆ", "ಮೋಬೈಲ್ ಆಪ್"],
    ogTitle: "Fretso Services - Complete Road Issue Management Platform",
    ogDescription: "From one-tap reporting to BBMP integration and community engagement - discover all Fretso services for better Bengaluru roads. ಸಂಪೂರ್ಣ ರಸ್ತೆ ಸೇವೆಗಳು!",
    ogImage: "/og-services.jpg",
    twitterTitle: "Fretso Services - Everything You Need for Road Reporting",
    twitterDescription: "Mobile apps, BBMP integration, community features, analytics & more! Complete platform for Bengaluru road issues. 📱🛣️📈",
    canonical: `${baseUrl}/services`
  },
  contact: {
    title: "Contact Fretso - Get in Touch with Our Team",
    description: "Have questions about reporting road issues in Bengaluru? Contact Fretso team for partnerships, feedback, or support. We're here to help build better roads together! ನಮ್ಮವರ ಸಂಪರ್ಕಿಸಿ - ಒಂದು ಸೇರಿ ರಸ್ತೆಗಳನ್ನು ಬನಾವೋಣ!",
    keywords: ["contact Fretso", "support", "partnerships", "feedback", "Bengaluru", "road issues", "customer service", "civic technology", "BBMP collaboration", "ಸಂಪರ್ಕ", "ಸಹಾಯ"],
    ogTitle: "Contact Fretso - Let's Build Better Roads Together",
    ogDescription: "Questions, partnerships, or feedback? Reach out to the Fretso team. We're passionate about improving Bengaluru's infrastructure through community action.",
    ogImage: "/og-contact.jpg",
    twitterTitle: "Get in Touch with Fretso - We're Here to Help!",
    twitterDescription: "Questions about road reporting in Bengaluru? Need partnership info? Contact our team! We respond within 24 hours. 📧✨",
    canonical: `${baseUrl}/contact`
  },
  privacy: {
    title: "Privacy Policy - Fretso Data Protection & Security",
    description: "Learn how Fretso protects your privacy and secures your data. Comprehensive privacy policy for Bengaluru road issue reporting platform. ನಿಮ್ಮ ಗೌಪ್ಯತೆ ನಮ್ಮ ಆದ್ಯತೆ - ಸಂಪೂರ್ಣ ಡೇಟಾ ಸುರಕ್ಷತೆ.",
    keywords: ["privacy policy", "data protection", "security", "GDPR", "data rights", "Fretso privacy", "user data", "encryption", "Bengaluru", "ಗೌಪ್ಯತೆ", "ಸುರಕ್ಷತೆ"],
    ogTitle: "Fretso Privacy Policy - Your Data, Your Rights",
    ogDescription: "Comprehensive privacy protection for Bengaluru citizens using Fretso. Learn how we secure your data and respect your privacy rights.",
    ogImage: "/og-privacy.jpg",
    twitterTitle: "Fretso Privacy Policy - Transparent Data Protection",
    twitterDescription: "Your privacy matters! Learn about Fretso's commitment to data security and user rights. 🔒✨ #Privacy #DataSecurity",
    canonical: `${baseUrl}/privacy`
  },
  terms: {
    title: "Terms of Service - Fretso Platform Guidelines & Rules",
    description: "Read Fretso's Terms of Service for road issue reporting in Bengaluru. User responsibilities, service guidelines, and platform rules. ಸೇವೆಯ ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು - ಫ್ರೆಟ್ಸೋ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್.",
    keywords: ["terms of service", "user agreement", "platform rules", "service guidelines", "Fretso terms", "legal", "user responsibilities", "Bengaluru", "ನಿಯಮಗಳು", "ಷರತ್ತುಗಳು"],
    ogTitle: "Fretso Terms of Service - Platform Guidelines",
    ogDescription: "Clear terms and conditions for using Fretso road reporting platform. Understanding user rights and responsibilities in Bengaluru.",
    ogImage: "/og-terms.jpg",
    twitterTitle: "Fretso Terms of Service - Fair & Transparent Platform Rules",
    twitterDescription: "Clear guidelines for using Fretso responsibly. Civic engagement with accountability! 📋⚖️ #Terms #CivicTech",
    canonical: `${baseUrl}/terms`
  },
  support: {
    title: "Support - Get Help with Fretso Road Reporting Platform",
    description: "Get support for Fretso road issue reporting platform. Help center, tutorials, and assistance for Bengaluru citizens. Coming soon with comprehensive support! ಸಹಾಯ ಮತ್ತು ಬೆಂಬಲ - ಫ್ರೆಟ್ಸೋ ಸಪೋರ್ಟ್ ಸೇವೆ.",
    keywords: ["Fretso support", "help center", "customer service", "tutorials", "technical support", "user guide", "FAQ", "Bengaluru", "assistance", "ಸಹಾಯ", "ಬೆಂಬಲ"],
    ogTitle: "Fretso Support - We're Here to Help!",
    ogDescription: "Comprehensive support services coming soon for Fretso users. Get help with road reporting and platform features in Bengaluru.",
    ogImage: "/og-support.jpg",
    twitterTitle: "Fretso Support - Comprehensive Help Coming Soon",
    twitterDescription: "24/7 support, tutorials, and community help for Bengaluru road reporters! We've got you covered. 🛠️💬 #Support",
    canonical: `${baseUrl}/support`
  },
  'thank-you': {
    title: "Thank You - Successfully Subscribed to Fretso Updates",
    description: "Thank you for subscribing to Fretso launch notifications! You'll be among the first to know when our Bengaluru road reporting platform goes live. ಧನ್ಯವಾದಗಳು - ಫ್ರೆಟ್ಸೋ ಅಪ್‌ಡೇಟ್‌ಗಳಿಗೆ ಸಬ್‌ಸ್ಕ್ರೈಬ್ ಮಾಡಿದ್ದೀರಿ!",
    keywords: ["thank you", "subscription confirmed", "Fretso updates", "launch notification", "Bengaluru roads", "early access", "newsletter signup", "ಧನ್ಯವಾದ", "ಸಬ್‌ಸ್ಕ್ರಿಪ್ಷನ್"],
    ogTitle: "Thank You for Joining the Fretso Community!",
    ogDescription: "Welcome to the movement! You'll be notified when Fretso launches to help improve Bengaluru's roads together.",
    ogImage: "/og-thank-you.jpg",
    twitterTitle: "Welcome to the Fretso Community! 🎉",
    twitterDescription: "Thanks for subscribing! You're now part of the movement to improve Bengaluru's roads. Launch updates coming soon! 🚀",
    canonical: `${baseUrl}/thank-you`,
    noIndex: true
  }
};

export function generateMetadata(page: string): Metadata {
  const config = seoConfig[page] || seoConfig.home;
  
  return {
    title: {
      default: config.title,
      template: "%s | Fretso - Bengaluru Road Issues Reporter"
    },
    description: config.description,
    keywords: config.keywords,
    authors: [{name: "Fretso Team"}],
    creator: "Fretso",
    publisher: "Fretso",
    alternates: {
      canonical: config.canonical
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: config.canonical,
      siteName: "Fretso",
      title: config.ogTitle || config.title,
      description: config.ogDescription || config.description,
      images: [
        {
          url: config.ogImage || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${config.ogTitle || config.title} - Fretso`,
          type: "image/jpeg"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      site: "@fretsoapp",
      creator: "@fretsoapp",
      title: config.twitterTitle || config.ogTitle || config.title,
      description: config.twitterDescription || config.ogDescription || config.description,
      images: [config.ogImage || "/twitter-card.jpg"]
    },
    robots: {
      index: !config.noIndex,
      follow: !config.noIndex,
      googleBot: {
        index: !config.noIndex,
        follow: !config.noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
      yahoo: "your-yahoo-verification-code"
    },
    category: "Technology",
    classification: "Civic Technology, Mobile Application, Community Platform",
    referrer: "origin-when-cross-origin",
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
      ],
      other: [
        {
          rel: "mask-icon",
          url: "/safari-pinned-tab.svg",
          color: "#EE4266"
        }
      ]
    },
    manifest: "/site.webmanifest",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    other: {
      "msapplication-TileColor": "#EE4266",
      "theme-color": "#F7F7FF"
    }
  };
}