import type { Metadata, Viewport } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  display: 'swap',
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Marbella Bay Apartments | Beaumont, TX',
  description:
    'Marbella Bay Apartments offers 176 modern apartments in Beaumont, TX. Featuring resort-style amenities, a modern clubhouse, fitness center, and a prime location near shopping and dining.',
  keywords: [
    'Marbella Bay Apartments',
    'Beaumont TX apartments',
    'apartments in Beaumont Texas',
    'Sienna Trails apartments',
    'Beaumont TX rentals',
  ],
  openGraph: {
    title: 'Marbella Bay Apartments | Beaumont, TX',
    description:
      '176 modern apartments in Beaumont, TX. Resort-style amenities, modern clubhouse, and a welcoming community.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#C0503A',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmSans.variable} antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
