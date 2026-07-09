// Generates the branded 1200×630 share image (public/og + dist/og).
// Runs as part of `npm run build`; run standalone with `npm run og`.
import sharp from 'sharp';
import { mkdir, copyFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#2E2320"/>
  <circle cx="1080" cy="90" r="220" fill="#DE8A3B" opacity="0.14"/>
  <circle cx="90" cy="560" r="180" fill="#2F7D6B" opacity="0.16"/>

  <!-- "m" mark, recolored -->
  <g transform="translate(80,70) scale(0.14) translate(-640,-640)">
    <circle fill="#DE8A3B" cx="1120.5" cy="776.9" r="55.2"/>
    <circle fill="#F7F1EA" cx="879.5" cy="776.9" r="55.2"/>
    <path fill="#DE8A3B" d="M1271.2,1029.9v248.5H1211v-248.5c0-49.9-40.5-90.4-90.4-90.4s-90.4,40.6-90.4,90.4 c0-33.9-11.2-65.1-30.1-90.3c27.5-36.6,71.3-60.4,120.5-60.4C1203.6,879.2,1271.2,946.8,1271.2,1029.9z"/>
    <path fill="#F7F1EA" d="M1030.1,1029.9v248.5h-60.3v-248.5c0-49.9-40.5-90.4-90.4-90.4c-49.9,0-90.4,40.6-90.4,90.4v248.5h-60.3 v-248.5c0-83.1,67.6-150.7,150.7-150.7c49.2,0,93,23.7,120.5,60.4C1018.9,964.7,1030.1,996,1030.1,1029.9z"/>
  </g>
  <text x="200" y="130" font-family="Georgia, serif" font-size="56" font-weight="600" fill="#F7F1EA">mini</text>

  <text x="84" y="330" font-family="Georgia, serif" font-size="72" font-weight="600" fill="#F7F1EA">Work, record, and grow —</text>
  <text x="84" y="420" font-family="Georgia, serif" font-size="72" font-weight="600" fill="#F7F1EA">in a room that <tspan fill="#DE8A3B">knows you.</tspan></text>

  <text x="84" y="520" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#F7F1EA" opacity="0.75">Boutique coworking + creator studio · Jaipur</text>
  <rect x="84" y="552" width="220" height="6" rx="3" fill="#DE8A3B"/>
</svg>`;

await mkdir('public/og', { recursive: true });
await sharp(Buffer.from(svg)).png({ quality: 90 }).toFile('public/og/og-default.png');
console.log('✓ public/og/og-default.png (1200×630)');

// If dist exists (post-build), copy it in so the built site has it too.
if (existsSync('dist')) {
  await mkdir('dist/og', { recursive: true });
  await copyFile('public/og/og-default.png', 'dist/og/og-default.png');
  console.log('✓ dist/og/og-default.png');
}
