// src/app/layout.tsx
import './globals.css';
import '../styles/custom.css'; // Tu CSS personalizado
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PrimeNex IT',
  description: 'PrimeNex IT stands out by delivering cutting-edge technological solutions...',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
