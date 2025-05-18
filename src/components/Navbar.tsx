import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">Your Name</Link>
        <div className="hidden md:flex gap-6">
          <Link href="#projects" className="hover:text-blue-600">Projects</Link>
          <Link href="#skills" className="hover:text-blue-600">Skills</Link>
          <Link href="#contact" className="hover:text-blue-600">Contact</Link>
        </div>
        <Bars3Icon className="h-6 w-6 md:hidden" />
      </div>
    </nav>
  );
}