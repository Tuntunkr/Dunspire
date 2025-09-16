# dunspire - Professional Digital Solutions

A modern, responsive static website built with React, TypeScript, and Tailwind CSS for dunspire digital services company.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Optimized for speed with lazy loading and code splitting
- **SEO Optimized**: Comprehensive meta tags, structured data, and PWA support
- **Accessibility**: WCAG compliant with proper focus management
- **Form Validation**: Real-time validation with user feedback
- **Error Handling**: Error boundaries for graceful failure handling

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **SEO**: React Helmet Async
- **PWA**: Service Worker, Web App Manifest

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Dunspire
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout/         # Header, Footer, Navigation
│   ├── UI/             # Generic UI components
│   └── ErrorBoundary.tsx
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── data/               # Static data and content
├── types/              # TypeScript type definitions
└── App.tsx            # Main application component
```

## 🎨 Customization

### Colors
The website uses a consistent color scheme defined in Tailwind CSS:
- Primary: Indigo (500-600)
- Secondary: Purple (500-600)
- Accent: Yellow-Orange gradient

### Content
Update content in the respective data files:
- `src/data/testimonials.ts` - Customer testimonials
- `src/data/services.ts` - Service offerings
- `src/data/team.ts` - Team members

### SEO
Modify SEO settings in:
- `src/components/SEO.tsx` - SEO component
- `index.html` - Base meta tags

## 📱 PWA Features

The website includes Progressive Web App features:
- Service Worker for offline functionality
- Web App Manifest for installability
- Responsive design for mobile devices

## 🔧 Development

### Code Quality
- ESLint for code linting
- TypeScript for type safety
- Prettier for code formatting (recommended)

### Performance
- Code splitting with React.lazy()
- Image lazy loading
- Optimized bundle with manual chunks
- Service worker caching

## 📄 License

This project is proprietary to dunspire. All rights reserved.

## 📞 Support

For technical support or questions:
- Email: dunbillbusiness@gmail.com
- Phone: +91 99428 24657
- Website: [dunspire](https://dunspire)