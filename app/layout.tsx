import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hello from Devin!',
  description: 'A simple React app with dark mode toggle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
