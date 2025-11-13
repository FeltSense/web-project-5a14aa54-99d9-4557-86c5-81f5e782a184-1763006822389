'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
  <div className="max-w-7xl mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      {/* Logo/Brand */}
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <span className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
          Creative Business
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <Link 
          href="/" 
          className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
        >
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 group-hover:w-full transition-all duration-300"></span>
        </Link>
        
        <a 
          href="#portfolio" 
          className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
        >
          Portfolio
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 group-hover:w-full transition-all duration-300"></span>
        </a>

        <a 
          href="#services" 
          className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
        >
          Services
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 group-hover:w-full transition-all duration-300"></span>
        </a>

        <a 
          href="#about" 
          className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
        >
          About
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 group-hover:w-full transition-all duration-300"></span>
        </a>
      </div>

      {/* CTA Button + Mobile Menu Toggle */}
      <div className="flex items-center gap-4">
        <button className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 hover:scale-105">
          Get Started
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  <div className="md:hidden border-t border-slate-200/50 bg-white/95 backdrop-blur-md">
    <div className="px-6 py-4 space-y-3">
      <Link 
        href="/" 
        className="block text-slate-700 hover:text-blue-600 font-medium py-2 transition-colors"
      >
        Home
      </Link>
      
      <a 
        href="#portfolio" 
        className="block text-slate-700 hover:text-blue-600 font-medium py-2 transition-colors"
      >
        Portfolio
      </a>

      <a 
        href="#services" 
        className="block text-slate-700 hover:text-blue-600 font-medium py-2 transition-colors"
      >
        Services
      </a>

      <a 
        href="#about" 
        className="block text-slate-700 hover:text-blue-600 font-medium py-2 transition-colors"
      >
        About
      </a>

      <button className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 mt-4">
        Get Started
      </button>
    </div>
  </div>
</nav>
  );
}