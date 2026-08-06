"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Experience", href: "#" },
    { name: "Programs", href: "#" },
    { name: "Success Stories", href: "#" },
    { name: "Membership", href: "#" },
    { name: "Products", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-lg">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-white">
          Special<span className="text-orange-500">Fitness</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium text-white transition hover:text-orange-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          className="
            hidden
            lg:block
            rounded-full
            bg-orange-500
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:bg-orange-600
          "
        >
          Join Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="space-y-5 border-t border-white/10 bg-black px-6 py-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-white transition hover:text-orange-500"
            >
              {link.name}
            </a>
          ))}

          <button className="w-full rounded-full bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600">
            Join Now
          </button>
        </div>
      </div>
    </header>
  );
}