import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
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
  themeColor: '#1b2e4a',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
