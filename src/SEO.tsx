import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description }: { title: string; description: string }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Sonic Software Solutions" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Sonic Software Solutions",
          "url": "https://sonicsoftwaresolutions.com",
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "contact@sonicsoftwaresolutions.com",
            "telephone": "+1 (555) 123-4567",
            "contactType": "customer service"
          }
        }
      `}</script>
    </Helmet>
  );
}
