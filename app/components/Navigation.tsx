'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 transition-all duration-200 ${isScrolled ? 'py-2 shadow-sm' : 'py-4'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl mr-2">🧠</span>
            <span className="font-bold text-lg">AI Companion Toolkit</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/knolia"
            className={`hover:text-indigo-500 transition ${pathname === "/knolia" ? "text-indigo-500 font-medium" : "text-gray-600"
              }`}
          >
            Try Knolia
          </Link>
          <Link
            href="/documentation"
            className={`hover:text-indigo-500 transition ${
              pathname === "/documentation" ? "text-indigo-500 font-medium" : "text-gray-600"
            }`}
          >
            Docs
          </Link>

          <Link 
            href="https://danejw.gumroad.com/l/AI-Companion-Toolkit" 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition shadow-sm"
            target="_blank"
          >
            Get Toolkit
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`bg-gray-600 block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`bg-gray-600 block h-0.5 w-6 rounded-sm my-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`bg-gray-600 block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-56 border-t border-gray-100' : 'max-h-0'}`}>
        <div className="px-6 py-4 space-y-4 bg-white">
          <Link 
            href="/"
            className={`block hover:text-indigo-500 transition ${
              pathname === "/" ? "text-indigo-500 font-medium" : "text-gray-600"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/documentation"
            className={`block hover:text-indigo-500 transition ${
              pathname === "/documentation" ? "text-indigo-500 font-medium" : "text-gray-600"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Documentation
          </Link>
          <Link
            href="/hub"
            className={`block hover:text-indigo-500 transition ${
              pathname === "/hub" ? "text-indigo-500 font-medium" : "text-gray-600"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Hub
          </Link>
          <Link 
            href="https://danejw.gumroad.com/l/AI-Companion-Toolkit" 
            className="block w-full text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition shadow-sm"
            target="_blank"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Toolkit
          </Link>
        </div>
      </div>
    </nav>
  );
} 