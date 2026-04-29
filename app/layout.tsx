import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Abdul Khadiri — Associate Software Engineer',
  description:
    'Portfolio of Kola Abdul Khadiri — Associate Software Engineer specializing in enterprise automation, scalable cloud architecture, and modern web development with Next.js, React, and GCP.',
  keywords: ['software engineer', 'portfolio', 'Next.js', 'React', 'GCP', 'cloud', 'automation'],
  authors: [{ name: 'Kola Abdul Khadiri' }],
  openGraph: {
    title: 'Abdul Khadiri — Associate Software Engineer',
    description: 'Enterprise automation & scalable cloud architecture.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
