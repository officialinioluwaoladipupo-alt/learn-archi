"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

interface HeaderProps {
  variant?: "default" | "dark";
}

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/courses", label: "COURSES" },
];

export default function Header({ variant = "default" }: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const textColor =
    variant === "dark" ? "text-archi-white" : "text-archi-black";

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-archi-black text-archi-white px-4 py-2 text-sm font-bold tracking-widest uppercase"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 w-full bg-transparent">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 md:px-16 lg:px-20 py-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="bg-archi-black text-archi-white px-4 py-3 font-bold text-sm tracking-widest uppercase flex-shrink-0 hover:opacity-90 transition-opacity"
            aria-label="Learn Archi Home"
          >
            <img
              src="/images/learnarchi-wordmark.svg"
              alt="LearnArchi"
              className="h-12 w-[76px] object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-bold tracking-widest uppercase transition-all duration-200 relative group ${
                  pathname === link.href
                    ? textColor
                    : `${textColor} hover:opacity-70`
                }`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
                {/* Active underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-archi-terracotta transition-all duration-300 ${
                    pathname === link.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Hamburger button (mobile only) */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 bg-archi-black text-archi-white hover:bg-archi-terracotta transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-archi-pink"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-nav"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-0 z-50 md:hidden flex flex-col bg-archi-black transition-all duration-500 ease-in-out ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        {/* Close button at top */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-archi-white/10">
          <Link
            href="/"
            className="bg-archi-black text-archi-white border border-archi-white/20 px-4 py-3 font-bold text-sm tracking-widest uppercase"
            aria-label="Learn Archi Home"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src="/images/learnarchi-wordmark.svg"
              alt="LearnArchi"
              className="h-12 w-[76px] object-contain"
            />
          </Link>
          <button
            className="w-10 h-10 flex items-center justify-center bg-archi-white/10 text-archi-white hover:bg-archi-terracotta transition-colors duration-200 focus:outline-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 flex flex-col justify-center px-6 gap-2">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group flex items-center justify-between py-5 border-b border-archi-white/10 text-3xl font-bold uppercase tracking-widest font-display transition-all duration-200 ${
                pathname === link.href
                  ? "text-archi-pink"
                  : "text-archi-white hover:text-archi-pink"
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              <span>{link.label}</span>
              <span className="text-archi-terracotta text-base font-mono">
                0{i + 1}
              </span>
            </Link>
          ))}
        </nav>

        {/* Footer strip */}
        <div className="px-6 py-8 border-t border-archi-white/10">
          <p className="text-archi-grey text-xs tracking-widest uppercase font-mono">
            World&apos;s Largest Architecture Community
          </p>
        </div>
      </div>
    </>
  );
}
