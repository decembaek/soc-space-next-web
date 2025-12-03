import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import clsx from 'clsx';

import '@/styles/tailwind.css';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    template: '%s - Soc Space',
    default: 'Soc Space - macOS app for storage space',
  },
  description:
    'Soc Space is a macOS app for storage space. It allows you to manage your storage space and get insights into your storage space.',
  other: {
    'naver-site-verification': '9bc2dedec3903805646810b444743bdd06f11514',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
