import Footer from "@components/Footer"
import NavBar from "@components/NavBar"
import { ThemeProvider } from "@context/theme-provider"
import '@styles/globals.css'


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
       
        
          {children}
        
        
        </ThemeProvider>
      </body>
    </html>
  )
}