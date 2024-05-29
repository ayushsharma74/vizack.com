import "@/styles/globals.css"

export default function RootLayout({ children }) {
 return (
    <html lang="en" className="h-full w-full">
      <body>{children}</body>
    </html>
  )
}
