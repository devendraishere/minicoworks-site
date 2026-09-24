/**
 * Single source of truth for brand facts used across the site.
 * Anything marked TODO_CONFIRM renders as a visible placeholder — per the
 * build brief, never replace these with invented numbers/facts.
 */

export const SITE = {
  name: 'Mini',
  legalName: 'Mini Spaces',
  brandLine: 'Mini Coworking Space · Mini Studio — Jaipur',
  tagline: 'Work. Record. Grow.',
  url: 'https://www.minicoworks.com',
  email: 'contact@minicoworks.com',
  phoneDisplay: '+91 88299 33770',
  phoneE164: '+918829933770',
  whatsappUrl: 'https://wa.me/918829933770',
  instagram: {
    coworking: { handle: '@minicoworks', url: 'https://www.instagram.com/minicoworks' },
    studio: { handle: '@ministudio_live', url: 'https://www.instagram.com/ministudio_live' },
  },
  city: 'Jaipur',
  region: 'Rajasthan',
  country: 'IN',
  /** NAP — matches the Google Business Profile ("Mini Coworks") EXACTLY. Verified 2026-09-12. */
  gbpName: 'Mini Coworks',
  address: {
    line1: '1st Floor, Plot No. D-122, Vivek Vihar',
    locality: 'Shyam Nagar',
    full: '1st Floor, Plot No. D-122, Vivek Vihar, Shyam Nagar, Jaipur, Rajasthan 302019',
    postalCode: '302019',
  },
  geo: { lat: 26.888214, lng: 75.7611853 },
  hoursDisplay: 'Mon–Sat 8 am – 10 pm · Sunday closed',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mini+Coworks+Vivek+Vihar+Shyam+Nagar+Jaipur',
} as const;

/** Amenities confirmed for sales use (state.md, 2026-07-22) — safe to publish. */
export const AMENITIES = [
  'Free high-speed Wi-Fi + backup line',
  'Power backup',
  'Unlimited tea, coffee & beverages',
  'On-site cafeteria (food chargeable)',
  'Printing',
  'AC throughout',
  'Daily housekeeping',
  'Walking distance from the metro',
] as const;

/** Legal entity per GST certificate (state.md) — used on privacy/terms. */
export const LEGAL = {
  tradeName: 'Mini Spaces',
  constitution: 'a sole proprietorship',
  gstin: '08FZNPS1238F2ZZ',
} as const;

/**
 * Mini Studio rate card — approved 2026-09-24.
 * Source: marketing/studio-rate-card-recommendation.md
 * Unit of sale is the 2-HOUR SESSION, not the hour (2 hrs = one 20–25 min episode).
 * All figures EX-GST. Studio = SAC 999611, output GST 18%.
 */
export const STUDIO_PRICING = {
  currency: 'INR',
  note: 'All prices exclude GST (18%).',
  memberDiscountPct: 25,
  tiers: [
    {
      name: 'Record',
      price: 6500,
      unit: '2-hour session',
      blurb: 'The room, mics and lighting — you drive. Raw files on a drive before you leave.',
      featured: false,
    },
    {
      name: 'Record + Crew',
      price: 9500,
      unit: '2-hour session',
      blurb: 'Two cameras, full mic set and lighting, with an operator on the floor. Raw files within 48 hours.',
      featured: true,
    },
    {
      name: 'Full day',
      price: 28000,
      unit: '8 hours, crewed',
      blurb: 'Batch a season in a day. Roughly a quarter off the session rate.',
      featured: false,
    },
  ],
  editingFrom: 8000,
  halfDay: 17000,
} as const;

/**
 * Coworking + meeting-room rate card — confirmed by Devendra 2026-09-24.
 * Cabin rates from system/state.md. All figures EX-GST (18%).
 */
export const PRICING = {
  note: 'All prices exclude GST (18%).',
  dayPass: 600,
  openDeskMonthly: 9000,
  cabinFrom: 20000,
  cabins: { small: 20000, big: 30000, bigger: 35000, team: 50000 },
  teamCabinSeats: 8,
  meetingRoomPerHour: 2000,
  /** Complimentary Mini Studio hours per month, by plan. Confirmed 2026-09-24. */
  studioHours: { openDesk: 2, cabin: 4 },
  meetingRoomSeats: '4–6',
} as const;

/** Values still to come from Devendra — keep visible as TODOs (never invent). */
export const TODO_CONFIRM = {
  priceCoworking: '[confirm]',
  memberCount: '[X] members — [confirm]',
} as const;

/** Inline HTML version of the <Todo> chip, for strings passed via set:html (FAQ answers etc.). */
export function todoMark(label: string): string {
  return `<mark class="inline-flex items-center gap-1 rounded-md border border-dashed border-berry/50 bg-berry/10 px-1.5 py-0.5 align-baseline text-[0.72em] font-sans font-semibold tracking-wide text-berry" title="Placeholder — real value to be confirmed before launch">TODO: ${label}</mark>`;
}

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Spaces', href: '/spaces' },
  { label: 'Studio', href: '/studio' },
  { label: 'Membership', href: '/membership' },
  { label: 'Contact', href: '/contact' },
] as const;

export const SPACES = [
  {
    slug: 'hot-desk',
    priceLabel: '₹600 + GST / day',
    name: 'Hot Desk',
    line: 'Grab any open seat. Perfect for flexible days.',
    keyword: 'hot desk coworking Jaipur',
    description:
      'A flexible coworking seat in Jaipur — walk in, grab any open desk, and plug into the Mini community for the day.',
  },
  {
    slug: 'dedicated-desk',
    priceLabel: '₹9,000 + GST / month',
    name: 'Dedicated Desk',
    line: 'Your own spot, set up the way you like it.',
    keyword: 'dedicated desk Jaipur',
    description:
      'Your own dedicated desk at Mini, Jaipur — a consistent spot set up your way, with the community and concierge included.',
  },
  {
    slug: 'private-cabin',
    priceLabel: 'from ₹20,000 + GST / month',
    name: 'Private Cabin',
    line: 'A quiet, lockable room for you or a small team.',
    keyword: 'private office Jaipur',
    description:
      'A private, lockable cabin at Mini, Jaipur — quiet room for you or a small team, with everything around it handled.',
  },
  {
    slug: 'meeting-room',
    priceLabel: '₹2,000 + GST / hour',
    name: 'Meeting Room',
    line: 'Book by the hour for calls, pitches and workshops.',
    keyword: 'meeting room Jaipur',
    description:
      'Book a meeting room in Jaipur by the hour at Mini — for client calls, pitches and workshops, set up before you walk in.',
  },
] as const;
