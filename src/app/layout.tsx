import Header from '@/components/Header/Header'
import './globals.css'
import { Inter, Fira_Code } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: "--font-inter",
})

const fira_code = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-fira-code",
})

export const metadata = {
  title: 'Portfolio Silvio César',
  description: 'Meu portfólio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </head>
      <body className={`${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
