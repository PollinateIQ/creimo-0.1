"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

const navigation = {
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ],
  services: [
    { name: "Surface Coating", href: "/services/surface-coating" },
    { name: "Green Technology", href: "/services/green-technology" },
    { name: "Protective Finishes", href: "/services/protective-finishes" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  social: [
    { name: "Facebook", href: "https://facebook.com", icon: Facebook },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    { name: "Instagram", href: "https://instagram.com", icon: Instagram },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  ],
};

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2025); // Set a default year

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-brand-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">Creimo</h2>
            <p className="text-gray-300 mb-4">
              Leading the future of surface technology with innovative coating solutions.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-brand-magenta transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-magenta">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-magenta">Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-magenta">Legal</h3>
            <ul className="space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300">
            &copy; {currentYear} Creimo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}