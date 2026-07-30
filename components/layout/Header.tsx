"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  variant?: "default" | "dark";
}

export default function Header({ variant = "default" }: HeaderProps) {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/community", label: "COMMUNITY" },
    { href: "/courses", label: "COURSES" },
    { href: "/about", label: "ABOUT US" },
  ];

  const textColor = variant === "dark" ? "text-archi-white" : "text-archi-black";
  const activeColor = variant === "dark" ? "text-archi-pink" : "text-archi-black";

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
          <Link
            href="/"
            className="bg-archi-black text-archi-white px-4 py-3 font-bold text-sm tracking-widest uppercase flex-shrink-0"
            aria-label="Learn Archi Home"
          >
            <div className="leading-tight">
              <div>Learn</div>
              <div className="text-archi-pink">Archi</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-bold tracking-widest uppercase transition-colors ${
                  pathname === link.href
                    ? activeColor
                    : `${textColor} hover:opacity-70`
                }`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}