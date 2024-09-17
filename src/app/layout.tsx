import Footer from "@components/Footer"
import NavBar from "@components/NavBar"
import Provider from "@components/Provider"
import { ThemeProvider } from "@context/theme-provider"
import '@styles/globals.css'
import { Analytics } from "@vercel/analytics/react"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className="overflow-x-hidden w-full ">
        
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <Provider>
        
          {children}
          <Analytics />
          </Provider>
        </ThemeProvider>
        
      </body>
    </html>
  )
}