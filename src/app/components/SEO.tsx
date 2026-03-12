import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

export function SEO({
  title = 'Cipta Bersama - Premium Meat Supplier Indonesia | B2B Wholesale',
  description = 'Leading premium meat supplier in Jakarta, Indonesia. Wholesale distributor of quality lamb, beef, ribeye, tenderloin for restaurants, hotels & catering. ISO certified, cold chain delivery.',
  keywords = 'premium meat supplier Jakarta, wholesale meat Indonesia, lamb supplier, beef distributor, ribeye Jakarta, tenderloin supplier, restaurant meat, hotel catering supplier, cold storage meat, HACCP certified, ISO 22000, B2B meat distribution, premium cuts Indonesia',
  ogImage = 'https://images.unsplash.com/photo-1772285466459-072608a170ff?w=1200&h=630&fit=crop',
}: SEOProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('author', 'Cipta Bersama');
    setMetaTag('robots', 'index, follow');
    setMetaTag('language', 'English, Indonesian');
    setMetaTag('revisit-after', '7 days');
    setMetaTag('distribution', 'global');

    // Open Graph meta tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', window.location.href, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:site_name', 'Cipta Bersama', true);
    setMetaTag('og:locale', 'en_US', true);

    // Twitter Card meta tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);

    // Business/Location meta tags
    setMetaTag('geo.region', 'ID-JK');
    setMetaTag('geo.placename', 'Jakarta');
    setMetaTag('geo.position', '-6.2088;106.8456');
    setMetaTag('ICBM', '-6.2088, 106.8456');

    // Mobile meta tags
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');
    setMetaTag('format-detection', 'telephone=yes');
    setMetaTag('apple-mobile-web-app-capable', 'yes');
    setMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);
  }, [title, description, keywords, ogImage]);

  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "Cipta Bersama",
    "description": description,
    "url": window.location.origin,
    "logo": ogImage,
    "image": ogImage,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl Raya Kossrig Rt/Rk.04",
      "addressLocality": "Jakarta",
      "addressCountry": "ID"
    },
    "telephone": "+62-000-0404-8608",
    "email": "danielgabe@ciptabersama.com",
    "openingHours": "Mo-Fr 08:00-17:00, Sa 08:00-14:00",
    "priceRange": "$$",
    "servesCuisine": "Meat Supplier",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-6.2088",
        "longitude": "106.8456"
      },
      "geoRadius": "50000"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500"
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cipta Bersama",
    "alternateName": "Cipta Bersama Premium Meat Supplier",
    "url": window.location.origin,
    "logo": ogImage,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-21-1234-5678",
      "contactType": "Customer Service",
      "areaServed": "ID",
      "availableLanguage": ["English", "Indonesian"]
    },
    "sameAs": [
      "https://facebook.com/ciptabersama",
      "https://instagram.com/ciptabersama",
      "https://linkedin.com/company/ciptabersama",
      "https://twitter.com/ciptabersama"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
    </>
  );
}