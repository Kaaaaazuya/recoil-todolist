import { ReactNode } from 'react'
import { AppProvider } from './provider'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ja'>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
