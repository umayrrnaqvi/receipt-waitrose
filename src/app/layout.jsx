"use client"
// import App from "../App";
import './global.css'
export default function RootLayout({children,}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}