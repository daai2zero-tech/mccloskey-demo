import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'McCloskey & Sons Building Contractors | Derry, NW Ireland',
  description: 'Family-run building contractors in Derry/Londonderry. Extensions, new builds, renovations & commercial fit-outs across the North West of Ireland since 1987.',
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
