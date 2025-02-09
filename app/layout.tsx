import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "UMRAJJ - Connect with Your Umrah",
  description: "Enhance your spiritual journey with our app that connects you to trusted Umrah service providers",
  icons: {
    icon: [
      {
        url: '/umrajjlogo.png',
        type: 'image/png',
      }
    ],
    shortcut: '/umrajjlogo.png',
    apple: '/umrajjlogo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
