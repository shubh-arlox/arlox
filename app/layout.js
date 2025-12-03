import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-tr from-[#f5f5f5] to-[#e3e8ee] min-h-screen">
        
        {/* Navbar */}
        <Navbar />

        {/* Main Content Wrapper */}
        <main className="w-full flex justify-center">
          <div className="w-full container px-4 sm:px-6 lg:px-8 mt-6">
            {children}
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
