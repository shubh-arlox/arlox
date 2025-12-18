// app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans no-scrollbar">
        
        {/* Navbar */}
        <Navbar />

        {/* Main content must ALWAYS be flex-1 */}
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* Footer always LAST */}
        <Footer />

      </body>
    </html>
  );
}
