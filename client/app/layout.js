import { Krub, Inter } from 'next/font/google';
import { Karma } from 'next/font/google'
import './globals.css'

const krub = Krub({ subsets: ['latin'], weight: '700' })
export const inter = Inter({ subsets: ['latin'], weight: '400' });
export const karma = Karma({ subsets: ['latin'], weight: "300"})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={krub.className}>{children}</body>
    </html>
  )
}
