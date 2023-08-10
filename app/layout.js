import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './containers/Navbar/Navbar';
import Footer from './containers/Footer/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tietgenkollegiet',
  description: 'Fremtiden for studieboliger',
}

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className={inter.className}>

        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  )
}
