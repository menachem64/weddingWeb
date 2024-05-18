import './globals.css'
import { Inter } from 'next/font/google'
import { ToastProvider } from './components/toaster-provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'wedding web',
  description: 'The platform for making your next appointment.',
  icons: {
    icon: '/images/professionals-icon.png'
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
