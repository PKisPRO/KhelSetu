import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'KhelSetu — Bridging the Gap Through Sport',
    template: '%s | KhelSetu',
  },
  description:
    'KhelSetu is a student-led initiative that collects unused sports equipment and redistributes it to underprivileged children across India. Give your unused gear a second life.',
  keywords: ['KhelSetu', 'sports equipment donation', 'NGO India', 'underprivileged children', 'sports drive', 'social impact'],
  authors: [{ name: 'KhelSetu Team' }],
  creator: 'KhelSetu',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'KhelSetu',
    title: 'KhelSetu — Bridging the Gap Through Sport',
    description: 'Give your unused sports gear a second life. KhelSetu collects and redistributes sports equipment to underprivileged children.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KhelSetu — Bridging the Gap Through Sport',
    description: 'Give your unused sports gear a second life.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#1B3A6B',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%231B3A6B'/><text y='.9em' font-size='70' font-weight='bold' fill='white' x='10'>KS</text></svg>" />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <LoadingScreen />
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
