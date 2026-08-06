"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

// Wraps the whole app in one Lenis instance so all scrolling (mouse wheel,
// trackpad, and any lenis.scrollTo() calls from nav links) gets the smooth
// "buttery" easing instead of the browser's default instant scroll.
// `root` makes this instance available anywhere via the `useLenis()` hook,
// even outside this component tree (e.g. inside Navbar.tsx).
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2, // how long a scroll animation takes to settle
        smoothWheel: true, // smooth out mouse wheel scrolling
      }}
    >
      {children}
    </ReactLenis>
  );
}