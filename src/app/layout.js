import { Inter } from 'next/font/google'
import './globals.css'
import {  MenuContextProvider } from './context/MenuBarContext'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
   <MenuContextProvider >
      {children}
      </MenuContextProvider>
      </body>
    </html>
  )
}
