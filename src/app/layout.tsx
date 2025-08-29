import type { Metadata } from "next";
import { Inter, Cedarville_Cursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cedarvilleCursive = Cedarville_Cursive({
  subsets: ["latin"],
  variable: "--font-cedarville",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Fretso - Report Road Issues in Bengaluru | Pothole Reporting App",
    template: "%s | Fretso - Bengaluru Road Issues Reporter"
  },
  description: "Report potholes and road issues in Bengaluru with Fretso. Help improve our city's infrastructure with community-driven reporting. ಬೆಂಗಳೂರಿನ ರಸ್ತೆ ಸಮಸ್ಯೆಗಳನ್ನು ವರದಿ ಮಾಡಿ.",
  keywords: ["Bengaluru potholes", "road issues", "civic reporting", "BBMP", "Bangalore roads", "infrastructure", "community reporting", "Fretso app", "ನಮ್ಮ ಬೆಂಗಳೂರು", "ರಸ್ತೆ ಸಮಸ್ಯೆ"],
  authors: [{name: "Fretso Team"}],
  creator: "Fretso",
  publisher: "Fretso",
  alternates: {
    canonical: "https://fretso.com"
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://fretso.com",
    siteName: "Fretso",
    title: "Fretso - Report Road Issues in Bengaluru | Community-Driven Infrastructure",
    description: "Join thousands of Bengaluru citizens reporting potholes and road issues. Help improve our city's infrastructure with Fretso's easy-to-use platform. ನಮ್ಮ ಬೆಂಗಳೂರಿನ ರಸ್ತೆಗಳನ್ನು ಸುಧಾರಿಸೋಣ!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fretso - Bengaluru Road Issues Reporter",
        type: "image/jpeg"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@fretsoapp",
    creator: "@fretsoapp",
    title: "Fretso - Report Road Issues in Bengaluru",
    description: "Community-driven platform for reporting potholes and road issues in Bengaluru. Join the movement to improve our city! 🛣️💪",
    images: ["/twitter-card.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
  metadataBase: new URL("https://fretso.com"),
  other: {
    "msapplication-TileColor": "#EE4266",
    "theme-color": "#F7F7FF"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness", "SoftwareApplication"],
              "name": "Fretso",
              "alternateName": ["ಕ್ರೆಟ್ಸೋ", "Fretso App"],
              "description": "Community-driven platform for reporting road issues and potholes in Bengaluru. Empowering citizens to improve city infrastructure through technology.",
              "url": "https://fretso.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://fretso.com/logo.png",
                "width": 200,
                "height": 200
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 12.9716,
                "longitude": 77.5946
              },
              "areaServed": {
                "@type": "City",
                "name": "Bengaluru",
                "alternateName": "Bangalore"
              },
              "serviceType": "Civic Technology Platform",
              "applicationCategory": "UtilitiesApplication",
              "operatingSystem": ["iOS", "Android", "Web"],
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "hello@fretso.com",
                "availableLanguage": ["English", "Kannada"]
              },
              "sameAs": [
                "https://twitter.com/fretsoapp",
                "https://facebook.com/fretsoapp",
                "https://instagram.com/fretsoapp",
                "https://linkedin.com/company/fretso"
              ],
              "keywords": "Bengaluru potholes, road issues, civic reporting, BBMP, Bangalore roads, infrastructure, community reporting",
              "audience": {
                "@type": "Audience",
                "geographicArea": {
                  "@type": "City",
                  "name": "Bengaluru"
                }
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${cedarvilleCursive.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
