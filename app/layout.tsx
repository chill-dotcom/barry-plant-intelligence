import type { Metadata, Viewport } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Barry Plant Intelligence', description: 'Three offices. One clear picture. Demonstration intelligence platform.', manifest: '/manifest.webmanifest', appleWebApp: { capable: true, title: 'BP Intelligence' } };
export const viewport: Viewport = { themeColor: '#080f26', width: 'device-width', initialScale: 1 };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en-AU"><body>{children}</body></html>; }
