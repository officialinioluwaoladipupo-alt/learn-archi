import Link from "next/link";

interface QuickLink {
  href: string;
  label: string;
}

interface ContactInfo {
  email: string;
  phone: string;
  addressLines: string[];
}

interface LegalLink {
  href: string;
  label: string;
}

interface FooterProps {
  title?: string;
  description?: string;
  quickLinks?: QuickLink[];
  contactInfo?: ContactInfo;
  legalLinks?: LegalLink[];
}

const DEFAULT_QUICK_LINKS: QuickLink[] = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const DEFAULT_CONTACT_INFO: ContactInfo = {
  email: "hello@learnarchi.com",
  phone: "+234 800 000 0000",
  addressLines: ["Lagos, Nigeria"],
};

const DEFAULT_LEGAL_LINKS: LegalLink[] = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
];

export default function Footer({
  title = "LEARN ARCHI",
  description = "World's largest architecture community. Bridging academic theory, computational design, and professional practice.",
  quickLinks = DEFAULT_QUICK_LINKS,
  contactInfo = DEFAULT_CONTACT_INFO,
  legalLinks = DEFAULT_LEGAL_LINKS,
}: FooterProps) {
  return (
    <footer className="bg-archi-black text-archi-white py-12 px-8 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4">{title}</h3>
          <p className="text-meta text-archi-grey leading-relaxed max-w-xs">
            {description}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-4">QUICK LINKS</h4>
          <nav className="space-y-2" aria-label="Quick links">
            {quickLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="block text-meta text-archi-grey hover:text-archi-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-4">CONTACT</h4>
          <address className="not-italic text-meta text-archi-grey leading-relaxed space-y-2">
            <p>{contactInfo.email}</p>
            <p>{contactInfo.phone}</p>
            {contactInfo.addressLines.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </address>
        </div>
      </div>

      <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-archi-grey">
          &copy; {new Date().getFullYear()} {title.toLowerCase() === "learn archi" ? "Learn Archi" : title}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {legalLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-xs text-archi-grey hover:text-archi-white transition-colors"
              aria-label={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}