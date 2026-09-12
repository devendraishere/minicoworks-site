import { SITE } from './site';

/**
 * JSON-LD builders. NAP below matches the live Google Business Profile
 * ("Mini Coworks", verified 2026-09-12) — keep the two in lockstep.
 */

const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '1st Floor, Plot No. D-122, Vivek Vihar, Shyam Nagar',
  addressLocality: 'Jaipur',
  addressRegion: 'Rajasthan',
  postalCode: '302019',
  addressCountry: 'IN',
};
const GEO = { '@type': 'GeoCoordinates', latitude: 26.888214, longitude: 75.7611853 };
// GBP hours: Mon–Sat 8 am–10 pm, Sunday closed
const OPENING_HOURS = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:00',
    closes: '22:00',
  },
];

export function organization() {
  return {
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: 'Mini Coworking Space',
    alternateName: ['Mini', 'Mini Studio'],
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phoneE164,
    logo: `${SITE.url}/logo.svg`,
    image: `${SITE.url}/og/og-default.png`,
    sameAs: [SITE.instagram.coworking.url, SITE.instagram.studio.url],
  };
}

export function localBusiness() {
  return {
    '@type': 'LocalBusiness',
    '@id': `${SITE.url}/#localbusiness`,
    name: 'Mini Coworks', // matches Google Business Profile exactly
    alternateName: ['Mini Coworking Space + Mini Studio', 'Mini Studio'],
    description:
      'A boutique coworking space and creator studio in Jaipur — curated community, concierge-style service, and a podcast studio built in.',
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phoneE164,
    image: `${SITE.url}/og/og-default.png`,
    logo: `${SITE.url}/logo.svg`,
    sameAs: [SITE.instagram.coworking.url, SITE.instagram.studio.url],
    // priceRange: TODO [confirm] — set once pricing is confirmed
    address: ADDRESS,
    geo: GEO,
    openingHoursSpecification: OPENING_HOURS,
    hasMap: SITE.mapsUrl,
    areaServed: { '@type': 'City', name: 'Jaipur' },
  };
}

export function service(opts: { name: string; description: string; url: string; type?: string }) {
  return {
    '@type': 'Service',
    serviceType: opts.type ?? opts.name,
    name: opts.name,
    description: opts.description,
    url: `${SITE.url}${opts.url}`,
    provider: { '@id': `${SITE.url}/#localbusiness` },
    areaServed: { '@type': 'City', name: 'Jaipur' },
  };
}

export function faqPage(items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export function breadcrumbs(items: { name: string; href: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.href}`,
    })),
  };
}

export function article(opts: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  author: string;
  image?: string;
}) {
  return {
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    url: `${SITE.url}${opts.url}`,
    datePublished: opts.datePublished,
    author: { '@type': 'Person', name: opts.author },
    publisher: { '@id': `${SITE.url}/#organization` },
    image: opts.image ?? `${SITE.url}/og/og-default.png`,
    mainEntityOfPage: `${SITE.url}${opts.url}`,
  };
}
