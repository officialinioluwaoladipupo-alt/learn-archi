import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-archi-black text-archi-white py-12 px-8 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4">LEARN ARCHI</h3>
          <p className="text-meta text-archi-grey leading-relaxed max-w-xs">
            World's largest architecture community. Bridging academic theory, computational design, and professional practice.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-4">QUICK LINKS</h4>
          <nav className="space-y-2" aria-label="Quick links">
            <Link href="/" className="block text-meta text-archi-grey hover:text-archi-white transition-colors">
              Home
            </Link>
            <Link href="/courses" className="block text-meta text-archi-grey hover:text-archi-white transition-colors">
              Courses
            </Link>
            <Link href="/community" className="block text-meta text-archi-grey hover:text-archi-white transition-colors">
              Community
            </Link>
            <Link href="/about" className="block text-meta text-archi-grey hover:text-archi-white transition-colors">
              About Us
            </Link>
          </nav>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-4">CONTACT</h4>
          <address className="not-italic text-meta text-archi-grey leading-relaxed space-y-2">
            <p>hello@learnarchi.com</p>
            <p>+1 (555) 123-4567</p>
            <p>123 Architecture Ave, Studio 400</p>
            <p>New York, NY 10001</p>
          </address>
        </div>
      </div>

      <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-archi-grey">
          &copy; {new Date().getFullYear()} Learn Archi. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-xs text-archi-grey hover:text-archi-white transition-colors" aria-label="Privacy Policy">
            Privacy Policy
          </a>
          <a href="#" className="text-xs text-archi-grey hover:text-archi-white transition-colors" aria-label="Terms of Service">
            Terms of Service
          </a>
          <a href="#" className="text-xs text-archi-grey hover:text-archi-white transition-colors" aria-label="Cookie Policy">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}