import { Navigation } from '../components/Navigation'
import '../styles/globals.css'
export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>Mi primer app con Next 13</title>
      </head>
      <body className=' bg-gray-900 p-0 md:p-16 '>
        <Navigation />
        <div className=' ml-10'>
          {children}
        </div>
      </body>
    </html>
  )
}
