import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../constants';

interface EnhancedSEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article' | 'service' | 'local_business';
  city?: string;
  service?: {
    name: string;
    description: string;
    provider: string;
  };
  noIndex?: boolean;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  canonicalUrl,
  keywords = 'ar condicionado, climatização, instalação, manutenção, Barracão, Paraná',
  image = '/logo-jc_1765724862776.jpeg',
  type = 'website',
  city,
  service,
  noIndex = false,
}) => {
  const siteUrl = 'https://jcclimatizar.pro';
  const fullUrl = `${siteUrl}${canonicalUrl}`;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
  const fullTitle = `${title} | JC Climatizar`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#organization`,
    "name": COMPANY_INFO.name,
    "image": `${siteUrl}/logo-jc_1765724862776.jpeg`,
    "logo": `${siteUrl}/logo-jc_1765724862776.jpeg`,
    "url": siteUrl,
    "telephone": COMPANY_INFO.phone,
    "email": COMPANY_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Gabriel Missio, 26",
      "addressLocality": "Barracão",
      "addressRegion": "PR",
      "postalCode": "85700-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -26.2456,
      "longitude": -53.6342
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "12:00"
      }
    ],
    "priceRange": "$$",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -26.2456,
        "longitude": -53.6342
      },
      "geoRadius": "200000"
    },
    "sameAs": [
      `https://wa.me/${COMPANY_INFO.whatsapp}`
    ]
  };

  const serviceSchema = service ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY_INFO.name,
      "telephone": COMPANY_INFO.phone,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Barracão",
        "addressRegion": "PR",
        "addressCountry": "BR"
      }
    },
    "areaServed": city ? {
      "@type": "City",
      "name": city,
      "containedInPlace": {
        "@type": "State",
        "name": "Paraná"
      }
    } : {
      "@type": "State",
      "name": "Paraná"
    },
    "serviceType": "HVAC Service"
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": siteUrl
      },
      ...(canonicalUrl !== '/' ? [{
        "@type": "ListItem",
        "position": 2,
        "name": title,
        "item": fullUrl
      }] : [])
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": fullTitle,
    "description": description,
    "url": fullUrl,
    "inLanguage": "pt-BR",
    "isPartOf": {
      "@type": "WebSite",
      "name": COMPANY_INFO.name,
      "url": siteUrl
    },
    "about": {
      "@type": "LocalBusiness",
      "name": COMPANY_INFO.name
    }
  };

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {!noIndex && <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />}

      <meta property="og:type" content={type === 'service' ? 'website' : type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={COMPANY_INFO.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content="Barracão" />
      <meta name="geo.position" content="-26.2456;-53.6342" />
      <meta name="ICBM" content="-26.2456, -53.6342" />

      <meta name="author" content={COMPANY_INFO.name} />
      <meta name="publisher" content={COMPANY_INFO.name} />
      <meta name="copyright" content={COMPANY_INFO.name} />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
      <link rel="dns-prefetch" href="https://cdn.tailwindcss.com" />

      <meta name="theme-color" content="#1a2844" />
      <meta name="msapplication-TileColor" content="#1a2844" />

      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default EnhancedSEO;
