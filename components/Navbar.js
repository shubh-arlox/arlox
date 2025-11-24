// components/Navbar.js
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-white bg-opacity-30 backdrop-blur-lg shadow-neumorphic rounded-xl sticky top-0 z-50">
      <Image src="/Arlox logo 6.png" width={120} height={42} alt="Arlox logo" />
      <ul className="flex space-x-8 text-lg font-medium">
        {["Solutions", "Programs", "Software", "Community", "Media", "About"].map(link => (
          <li key={link} className="hover:text-gradientTextStart transition">{link}</li>
        ))}
      </ul>
    </nav>
  );
}
