import Link from "next/link";
import { ArrowUpRight, Linkedin } from "lucide-react";
import ContentViewport from "./ContentViewport";
import SectionPanel from "./SectionPanel";
import PrimaryButton from "../shared/PrimaryButton";
import GhostButton from "../shared/GhostButton";
import { SITE } from "@/lib/site";

const footerColumns = [
  {
    title: "COMPANY",
    links: [
      { label: "Home", href: "/" },
      { label: "Company", href: "/company" },
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "OUR COMPANIES",
    links: [
      { label: "ACFI", href: SITE.companies.acfi.url, external: true },
      { label: "Nobridge", href: SITE.companies.nobridge.url, external: true },
    ],
  },
];

function Wordmark() {
  return (
    <span className="text-base font-semibold tracking-tight text-primary-black sm:text-lg">
      PT VAV<span className="font-light text-body-gray">&nbsp;Technologies Indonesia</span>
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="mt-6">
      <ContentViewport>
        {/* CTA Banner */}
        <SectionPanel variant="dark" className="mb-6">
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
            <div>
              <h2 className="text-2xl font-normal tracking-tight text-panel-white sm:text-3xl">
                Let&apos;s build Indonesia&apos;s future.
              </h2>
              <p className="mt-2 text-sm font-light text-muted-gray">
                Partner with PT VAV Technologies Indonesia on your next merger, acquisition, or investment.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/contact" variant="light">
                Get in Touch
              </PrimaryButton>
              <GhostButton href="/company" variant="dark">
                Our Companies
              </GhostButton>
            </div>
          </div>
        </SectionPanel>

        {/* Footer Grid */}
        <SectionPanel variant="white" className="!py-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Brand Column */}
            <div>
              <Link href="/" className="flex items-center" aria-label="PT VAV Technologies Indonesia — Home">
                <Wordmark />
              </Link>
              <p className="mt-4 text-sm font-light leading-relaxed text-body-gray">
                PT VAV Technologies Indonesia — moving Indonesia forward through mergers, acquisitions, and strategic investment.
              </p>
              {/* Social Icons */}
              <div className="mt-4 flex gap-3">
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center border border-outline-light text-muted-gray transition-colors hover:text-primary-black"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

            {/* Link Columns */}
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-medium uppercase tracking-widest text-muted-gray">
                  {col.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {col.links.map((link) =>
                    "external" in link && link.external ? (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-1 text-sm font-light text-body-gray transition-colors hover:text-primary-black"
                        >
                          {link.label}
                          <ArrowUpRight size={12} className="opacity-0 transition-opacity group-hover:opacity-100" />
                        </a>
                      </li>
                    ) : (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="group flex items-center gap-1 text-sm font-light text-body-gray transition-colors hover:text-primary-black"
                        >
                          {link.label}
                          <ArrowUpRight size={12} className="opacity-0 transition-opacity group-hover:opacity-100" />
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-divider-gray pt-8 sm:flex-row">
            <p className="text-xs text-muted-gray">
              &copy; {new Date().getFullYear()} PT VAV Technologies Indonesia. All rights reserved.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="text-xs text-muted-gray transition-colors hover:text-primary-black"
            >
              {SITE.email}
            </a>
          </div>
        </SectionPanel>
      </ContentViewport>

      {/* Spacer */}
      <div className="h-6" />
    </footer>
  );
}
