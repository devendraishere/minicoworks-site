/**
 * Single source of truth for brand facts used across the site.
 * Anything marked TODO_CONFIRM renders as a visible placeholder — per the
 * build brief, never replace these with invented numbers/facts.
 */

export const SITE = {
  name: 'Mini',
  legalName: 'Mini Spaces',
  brandLine: 'Mini Coworking Spaces · Mini Studio — Jaipur',
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
} as const;

/** Values that must come from Devendra / Google Business Profile — keep visible as TODOs. */
export const TODO_CONFIRM = {
  address: 'Address — [confirm: must match Google Business Profile exactly]',
  locality: '[locality — confirm]',
  hours: 'Hours — [confirm]',
  priceCoworking: '[confirm]',
  priceStudio: '[confirm]',
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
  { label: 'Community', href: '/community' },
  { label: 'Membership', href: '/membership' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const;

export const SPACES = [
  {
    slug: 'hot-desk',
    name: 'Hot Desk',
    line: 'Grab any open seat. Perfect for flexible days.',
    keyword: 'hot desk coworking Jaipur',
    description:
      'A flexible coworking seat in Jaipur — walk in, grab any open desk, and plug into the Mini community for the day.',
  },
  {
    slug: 'dedicated-desk',
    name: 'Dedicated Desk',
    line: 'Your own spot, set up the way you like it.',
    keyword: 'dedicated desk Jaipur',
    description:
      'Your own dedicated desk at Mini, Jaipur — a consistent spot set up your way, with the community and concierge included.',
  },
  {
    slug: 'private-cabin',
    name: 'Private Cabin',
    line: 'A quiet, lockable room for you or a small team.',
    keyword: 'private office Jaipur',
    description:
      'A private, lockable cabin at Mini, Jaipur — quiet room for you or a small team, with everything around it handled.',
  },
  {
    slug: 'meeting-room',
    name: 'Meeting Room',
    line: 'Book by the hour for calls, pitches and workshops.',
    keyword: 'meeting room Jaipur',
    description:
      'Book a meeting room in Jaipur by the hour at Mini — for client calls, pitches and workshops, set up before you walk in.',
  },
] as const;
