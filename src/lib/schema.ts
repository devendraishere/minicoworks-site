import { SITE } from './site';

/**
 * JSON-LD builders. NOTE: address/geo/openingHours are intentionally OMITTED
 * until confirmed against the Google Business Profile — shipping a wrong NAP
 * is worse for local SEO than shipping none. Fill the TODOs in ONE place here.
 */

// TODO [confirm]: fill from Google Business Profile, then uncomment in localBusiness():
// const ADDRESS = {
//   '@type': 'PostalAddress',
//   streetAddress: '…',
//   addressLocality: 'Jaipur',
//   addressRegion: 'Rajasthan',
//   postalCode: '…',
//   addressCountry: 'IN',
// };
// const GEO = { '@type': 'GeoCoordinates', latitude: 0, longitude: 0 };
// const OPENING_HOURS = [{ '@type': 'OpeningHoursSpecification', dayOfWeek: […], opens: '09:00', closes: '19:00' }];

export function organization() {
  return {
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: 'Mini Coworking Spaces',
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
    name: 'Mini Coworking Spaces + Mini Studio',
    description:
      'A boutique coworking space and creator studio in Jaipur — curated community, concierge-style service, and a podcast studio built in.',
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phoneE164,
    image: `${SITE.url}/og/og-default.png`,
    logo: `${SITE.url}/logo.svg`,
    sameAs: [SITE.instagram.coworking.url, SITE.instagram.studio.url],
    // priceRange: '₹₹', // TODO [confirm]: set once pricing is confirmed
    // address: ADDRESS,          // TODO [confirm] — must match GBP exactly
    // geo: GEO,                  // TODO [confirm]
    // openingHoursSpecification: OPENING_HOURS, // TODO [confirm]
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
