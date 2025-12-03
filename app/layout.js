import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-tr from-[#f5f5f5] to-[#e3e8ee] min-h-screen flex flex-col font-sans">
        
        {/* Navbar */}
        <Navbar />

        {/* Main Content Wrapper */}
        {/* Added overflow-x-hidden here to prevent horizontal scroll */}
        <main className="w-full flex-1 overflow-x-hidden">
          {/* Added mx-auto to center content on larger screens */}
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            {children}
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}