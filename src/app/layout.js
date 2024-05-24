import './globals.css'
import { Inter } from 'next/font/google'
import { ToastProvider } from './components/toaster-provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'החתונה שלנו',
  description: 'החתונה של מענדי וחני',
  icons: {
    icon: '/images/logo.jpg'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider/>
        {children}
        </body>
    </html>
  )
}
