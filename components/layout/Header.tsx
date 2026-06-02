"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ContentViewport from "./ContentViewport";
import PrimaryButton from "../shared/PrimaryButton";

const navLinks = [
  { label: "Company", href: "/company" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

function Wordmark() {
  return (
    <span className="text-lg font-semibold tracking-tight text-primary-black sm:text-xl">
      VAV<span className="font-light text-body-gray">&nbsp;Technologies</span>
    </span>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-outline-light bg-panel-white/95 backdrop-blur-sm">
      <ContentViewport>
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo with right border */}
          <Link href="/" className="flex items-center border-r border-outline-light pr-4" aria-label="PT VAV Technologies Indonesia — Home">
            <Wordmark />
          </Link>

          {/* Desktop Nav — uppercase */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium uppercase text-body-gray transition-colors hover:text-primary-black"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA with left border */}
          <div className="hidden items-center border-l border-outline-light pl-4 lg:flex">
            <PrimaryButton href="/contact" showArrow={false} className="text-[11px]">
              Get in Touch
            </PrimaryButton>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center border border-outline-light lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </ContentViewport>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-outline-light bg-panel-white lg:hidden">
          <ContentViewport>
            <nav className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium uppercase text-body-gray transition-colors hover:bg-page-bg hover:text-primary-black"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2 px-4 pb-2">
                <PrimaryButton href="/contact" showArrow={false} className="w-full justify-center text-[11px]">
                  Get in Touch
                </PrimaryButton>
              </div>
            </nav>
          </ContentViewport>
        </div>
      )}
    </header>
  );
}
