import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

export const metadata = {
  title: 'Вълшебна История за Приятелство и Доброта | Детска Книга 3-6 години',
  description: 'Детска книга на български език за деца 3-6 години. Учи на приятелство, доброта и емпатия чрез вълшебни илюстрации и приключения.',
  keywords: 'детска книга, книга за деца, приятелство, доброта, български книги, деца 3-6 години, детска литература',
  authors: [{ name: 'Вашето Име' }],
  openGraph: {
    title: 'Вълшебна История за Приятелство и Доброта',
    description: 'Детска книга, която учи на ценности чрез приключения и топли илюстрации',
    type: 'website',
    locale: 'bg_BG',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Вълшебна История за Приятелство и Доброта',
    description: 'Детска книга за деца 3-6 години',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
