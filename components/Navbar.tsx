"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLenis } from "lenis/react";
import Link from "next/link";

export default function Navbar() {
  const handle_join = () => {
    console.log(" Join button was clicked ")
  }
  const [open, setOpen] = useState(false);
  const lenis = useLenis(); // grab the shared Lenis instance from SmoothScroll

  // `id` matches the actual section id rendered by each component
  // (see ExperienceSection.tsx, Program.tsx, Stories.tsx, Membership.tsx,
  // Products.tsx, FooterSection.tsx). "Home" has no section id — it just
  // scrolls back to the top of the page.
  const navLinks = [
    { name: "Home", id: null },
    { name: "Experience", id: "experience" },
    { name: "Programs", id: "programs" },
    { name: "Success Stories", id: "success-stories" },
    { name: "Membership", id: "membership" },
    { name: "Products", id: "supplements" },
    { name: "Contact", id: "contact" },
  ];

  // Smoothly scrolls to a section via Lenis instead of the browser's
  // instant anchor jump. `-80` offsets for the fixed h-20 (80px) header so
  // the section title isn't hidden underneath it. Closes the mobile menu
  // afterward so it doesn't stay open over the newly-scrolled-to section.
  const scrollToSection = (id: string | null) => {
    if (id) {
      lenis?.scrollTo(`#${id}`, { offset: -80 });
    } else {
      lenis?.scrollTo(0);
    }
    setOpen(false);
  };

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
              {/* Button instead of <a href="#...">: we drive the scroll
                  ourselves through Lenis, so there's no real anchor jump
                  to fall back on. */}
              <button
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-white transition hover:text-orange-500"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link href={'/register'}>
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
        </Link>


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
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-white transition hover:text-orange-500"
              >
                {link.name}
              </button>
            ))}
            <Link href={'/register'}>

            <button className="w-full rounded-full bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600">
              Join Now
            </button>
            </Link>

          </div>
        </div>
      </div>
    </header>
  );
}