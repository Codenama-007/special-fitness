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
      {/*
        FIX: This wrapper used to animate with `max-h-0` -> `max-h-96` (a hardcoded
        384px) combined with `overflow-hidden`. The actual content (7 links + a
        button, with py-6 padding and space-y-5 gaps) needs MORE than 384px on
        most phones, so the old max-height silently clipped the bottom of the
        menu — the "Join Now" button (and sometimes "Contact") was cut off /
        invisible when the menu opened on mobile.

        Fix: animate `grid-template-rows` from 0fr -> 1fr instead of a fixed
        pixel max-height. A "1fr" row always sizes itself to fit its content,
        so the menu expands to whatever height it actually needs — no more
        guessing a max-h-* value, and no clipping even if more links are added
        later. `overflow-hidden` is moved to the inner wrapper so the grid-row
        animation still looks smooth (a 0fr row has 0 rendered height, so
        content is hidden until it expands).
      */}
      <div
        className={`grid transition-all duration-300 lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
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
      </div>
    </header>
  );
}