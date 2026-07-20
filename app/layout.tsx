import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://humanresourcesoutsourced.com'), title: { default: 'Human Resources Outsourced | Offshore outsourcing guides', template: '%s | Human Resources Outsourced' }, description: 'Stealth Agents-style guides for human resources outsourced: services, onboarding, role scope, and provider questions.', openGraph: { title: 'Human Resources Outsourced', description: 'Practical outsourcing guides for business teams.', url: 'https://humanresourcesoutsourced.com', siteName: 'Human Resources Outsourced', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
