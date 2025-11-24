export default function Footer() {
  return (
    <footer className="w-full bg-[#181f32] p-6 text-xs text-gray-300 mt-12 rounded-t-xl">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="font-semibold mb-2">Company</h2>
          <ul className="space-y-1">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* Add additional columns per Figma */}
      </div>
      <div className="mt-6 text-center text-gray-500">© 2025 Arlox.io. All rights reserved.</div>
    </footer>
  );
}
