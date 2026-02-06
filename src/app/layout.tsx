import './_styles/index.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MyMediaList',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
