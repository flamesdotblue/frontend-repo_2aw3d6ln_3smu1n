import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 via-sky-500 to-emerald-400 text-white shadow">
              <Rocket size={18} />
            </div>
            <span className="text-lg font-semibold tracking-tight">GoAurex</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#services" className="hover:text-gray-900">Solutions</a>
            <a href="#why" className="hover:text-gray-900">Why Us</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black/90">Get Started</a>
        </div>
      </div>
    </header>
  );
}
