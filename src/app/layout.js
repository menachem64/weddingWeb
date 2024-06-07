import './globals.css'
import { Inter } from 'next/font/google'
import { ToastProvider } from './components/toaster-provider'
import Head from 'next/head'; 


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'החתונה',
  description: 'החתונה של מענדי וחני',
  icons: {
    icon: '/w.ico'
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content='/w.ico' /> {/* Change to the actual image path */}
        <meta property="og:url" content="https://wedding-web-eta.vercel.app" /> {/* Change to your actual website URL */}
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content='/w.ico' /> {/* Change to the actual image path */}
      </Head>
      <body className={inter.className}>
        <ToastProvider/>
        {children}
        </body>
    </html>
  )
}
