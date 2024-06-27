import './globals.css';
import { Inter } from 'next/font/google';
import { ToastProvider } from './components/toaster-provider';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'החתונה',
  description: 'אתר החתונה של מענדי וחני',
  icons: {
    icon: '/w.ico'
  },
  manifest: '/manifest.json'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body className={inter.className}>
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
