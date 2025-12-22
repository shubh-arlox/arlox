// app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Canonical domain */}
        
        <link rel="canonical" href="https://ai.arlox.io" />

        {/* Not required, but okay to add */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
       
        <Navbar />
        <main className="flex-1 w-full">{children}
          {/* Speed Insights */}
          <SpeedInsights/>
        <Analytics/> </main>
        <Footer />
      </body>
    </html>
  );
}
