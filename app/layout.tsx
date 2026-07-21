import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://humanresourcesoutsourced.com'),
  title: {
    default: 'Human Resources Outsourced | HR admin support guides',
    template: '%s | Human Resources Outsourced',
  },
  description: 'Guides to outsourcing HR admin work, including onboarding, recruiting coordination, employee support, reporting, and approval boundaries.',
  openGraph: {
    title: 'Human Resources Outsourced',
    description: 'Practical guides for handing off HR admin work without handing off sensitive decisions.',
    url: 'https://humanresourcesoutsourced.com',
    siteName: 'Human Resources Outsourced',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
