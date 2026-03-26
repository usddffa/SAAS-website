import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Verdant Flow | Never Miss a Lead Again',
  description:
    '24/7 AI receptionist for local service businesses. Instantly engage missed calls and recover more leads.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
