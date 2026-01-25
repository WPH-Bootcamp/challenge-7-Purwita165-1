'use client'

import { Provider } from 'react-redux'
import { store } from '@/store'
import Navbar from '@/components/Navbar'
import '../styles/global.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
