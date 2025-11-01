import { useState } from "react";
import loneLogo from "../assets/lone_logo.png"; // adjust the path as needed


function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img
        src={loneLogo}
        alt="Zyber logo"
        className="h-10 w-10 drop-shadow object-contain"
        width={40}
        height={40}
      />
      <span className="font-semibold tracking-tight text-lg">
        Zyber <span className="text-zyber-primary">Technology</span>
      </span>
    </div>
  );
}

const links = [
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50">
      <div className="zy-container">
        <nav className="mt-6 mb-4 glass rounded-2xl px-4 py-3">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="hidden md:flex items-center gap-8">
              {links.map(l => (
                <a key={l.href} href={l.href}
                   className="text-sm text-zinc-300 hover:text-white transition">
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="text-sm font-medium rounded-xl px-4 py-2 bg-gradient-to-r from-zyber-primary to-zyber-secondary text-white hover:shadow-glow transition"
              >
                Start a Project
              </a>
            </div>
            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl glass"
              onClick={() => setOpen(v => !v)}
              aria-label="Toggle menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="white" strokeWidth="2" />
              </svg>
            </button>
          </div>

          {/* mobile drawer */}
          {open && (
            <div className="md:hidden mt-3 border-t border-white/10 pt-3">
              <div className="flex flex-col gap-2">
                {links.map(l => (
                  <a key={l.href} href={l.href}
                     className="rounded-xl px-3 py-2 hover:bg-white/5"
                     onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="rounded-xl px-3 py-2 bg-gradient-to-r from-zyber-primary to-zyber-secondary text-black text-center font-medium"
                  onClick={() => setOpen(false)}
                >
                  Start a Project
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
