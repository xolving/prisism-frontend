import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import GoogleAdsense from './components/GoogleAdsense'
import Header from './components/Header'
import './globals.css'

const inter = localFont({ 
  src: '../public/fonts/PretendardVariable.woff2'
})

export const metadata: Metadata = {
  title: '프리시즘 랜덤채팅',
  description: '프리시즘 일대일 랜덤채팅',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ToastContainer
          position='top-right'
          autoClose={1500}
          limit={3}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />
        <Header />
        {children}
      </body>
      <GoogleAdsense />
    </html>
  )
}
