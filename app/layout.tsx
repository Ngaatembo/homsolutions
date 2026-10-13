import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Home Solutions — From Vision to Reality',
  description: 'Integrated architecture, engineering, planning and construction solutions for property development.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
