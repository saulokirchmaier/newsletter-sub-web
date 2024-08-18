import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'unlokd.',
  description: 'Inscrição UNLOKD newsletter.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className={inter.className}>
        <div className="bg-image bg-cover bg-center -z-20">
          <div className="bg-union bg-cover bg-no-repeat bg-right-bottom -z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
