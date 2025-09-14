import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO = ({ 
  title = 'Dunspire.in - Professional Digital Solutions & Web Development Services',
  description = 'Transform your business with Dunspire.in\'s expert web development, app development, SEO, digital marketing, UI/UX design, AI automation, and cloud solutions. Based in Muzaffarpur, Bihar.',
  keywords = 'web development, app development, SEO, digital marketing, UI/UX design, AI automation, cloud solutions, Muzaffarpur, Bihar, India, Dunspire',
  image = '/og-image.jpg',
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = 'website'
}: SEOProps) => {
  const fullTitle = title.includes('Dunspire.in') ? title : `${title} | Dunspire.in`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Dunspire.in",
          "url": url,
          "logo": "/logo.png",
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rohua Appuch, Mushari Rohua, Mushari Farm",
            "addressLocality": "Muzaffarpur",
            "addressRegion": "Bihar",
            "postalCode": "842002",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-99428-24657",
            "contactType": "Customer Service",
            "email": "dunbillbusiness@gmail.com"
          },
          "sameAs": [
            "https://facebook.com/dunspire",
            "https://twitter.com/dunspire",
            "https://linkedin.com/company/dunspire"
          ],
          "services": [
            "Web Development",
            "App Development", 
            "SEO & Digital Marketing",
            "UI/UX Design",
            "AI & Automation",
            "Cloud Solutions"
          ]
        })}
      </script>
    </Helmet>
  );
};