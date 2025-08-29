# Fretso - Bengaluru Road Issues Reporter

A community-driven platform for reporting potholes and road issues in Bengaluru. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Interactive Map**: Leaflet-powered map showing Bengaluru
- **Email Subscriptions**: FormSubmit integration for launch notifications
- **Mobile-First Design**: Responsive design with mobile menu
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Bilingual Support**: English and Kannada content
- **Performance Optimized**: Fast loading with Next.js optimizations

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Maps**: Leaflet & React Leaflet
- **Fonts**: Google Fonts (Inter, Cedarville Cursive)
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```
4. Run development server:
   ```bash
   npm run dev
   ```

## 🚀 Deployment to Vercel

### Automatic Deployment (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy on every push to main branch

### Manual Deployment

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Deploy:
   ```bash
   vercel --prod
   ```

### Environment Variables

Set these in Vercel dashboard:
- `NEXT_PUBLIC_SITE_URL`: Your domain (e.g., https://fretso.com)
- `NEXT_PUBLIC_FORM_EMAIL`: Email for form submissions

## 📁 Project Structure

```
src/
├── app/                 # App Router pages
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── privacy/        # Privacy policy
│   ├── services/       # Services page
│   ├── support/        # Support page
│   ├── terms/          # Terms of service
│   ├── thank-you/      # Thank you page
│   ├── layout.tsx      # Root layout with SEO
│   └── page.tsx        # Home page
├── components/         # Reusable components
│   ├── Footer.tsx      # Site footer
│   ├── Map.tsx         # Leaflet map
│   ├── Navbar.tsx      # Navigation with mobile menu
│   └── SubscriptionForm.tsx # Email subscription
└── lib/                # Utilities
    ├── colors.ts       # Color system
    ├── formSubmit.ts   # Form submission handler
    └── seo-config.ts   # SEO configurations
```

## 🎨 Customization

### Colors
Edit `src/lib/colors.ts` to change the color scheme.

### Content
- Update page content in respective `page.tsx` files
- Modify SEO settings in `src/lib/seo-config.ts`
- Change site metadata in `src/app/layout.tsx`

## 📈 SEO Features

- Comprehensive meta tags for all pages
- Open Graph and Twitter Card support
- Structured data (JSON-LD)
- Sitemap and robots.txt
- Optimized for local search (Bengaluru)
- Bilingual content support

## 🔧 Performance Optimizations

- Next.js 15 App Router
- Static generation where possible
- Image optimization
- Font optimization
- Compression enabled
- Security headers
- Caching strategies

## 📱 PWA Ready

- Web App Manifest
- Service Worker ready
- Mobile-optimized
- Offline-first approach

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email worlddj0@gmail.com or create an issue on GitHub.

---

Built with ❤️ for Bengaluru by the Fretso team.