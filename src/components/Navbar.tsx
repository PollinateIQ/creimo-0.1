"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Company", href: "#company" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-navy/90 backdrop-blur-md border-b border-brand-white/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center h-12">
          {/* Brand - Left aligned */}
          <div className="flex-none pl-5">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/globe.svg" alt="Creimo Globe Logo" className="h-7 w-auto" />
              <span className="text-brand-white font-logo text-sm">Creimo</span>
            </Link>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex space-x-7">
              {menuItems.slice(0, -1).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-brand-white/90 hover:text-brand-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Button - Right aligned */}
          <div className="hidden md:flex flex-none pr-5 space-x-3">
            <Link href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="bg-brand-magenta/20 text-brand-white hover:bg-brand-magenta/30 border-brand-magenta/30">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" size="sm" className="bg-brand-white/10 text-brand-white hover:bg-brand-white/20 border-brand-white/20">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden pr-5">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-1.5 rounded-md text-brand-white/70 hover:text-brand-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/95">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-brand-white/70 hover:text-brand-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" size="sm" className="w-full bg-brand-magenta/20 text-brand-white hover:bg-brand-magenta/30 border-brand-magenta/30">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button variant="outline" size="sm" className="w-full bg-brand-white/10 text-brand-white hover:bg-brand-white/20 border-brand-white/20">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}