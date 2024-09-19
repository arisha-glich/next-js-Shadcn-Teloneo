import type { Metadata } from 'next';

import { Open_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Provider from '@/provider';

const openSans = Open_Sans({
 subsets: ['latin'],
 weight: ['400', '700'],
 variable: '--font-open-sans',
});

export const metadata: Metadata = {
 title: 'Nextjs template with shadcn.',
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en" suppressHydrationWarning>
   <body
    className={cn(
     'min-h-screen bg-background antialiased',
     openSans.variable // Include Open Sans variable
    )}
   >
    <Provider session={undefined}>{children}</Provider>
   </body>
  </html>
 );
}
