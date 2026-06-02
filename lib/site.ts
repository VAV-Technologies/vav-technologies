// Single source of truth for the site's public URL + brand strings.
// On Vercel, VERCEL_PROJECT_PRODUCTION_URL is injected at build time so the
// canonical/sitemap URLs are correct regardless of the assigned subdomain.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://vav-technologies.vercel.app";

export const SITE = {
  legalName: "PT VAV Technologies Indonesia",
  shortName: "VAV Technologies",
  // TODO: replace with the real inbox — placeholder until confirmed
  email: "info@vavtech.id",
  location: "Jakarta, Indonesia",
  linkedin: "https://www.linkedin.com/",
  companies: {
    acfi: { name: "ACFI", url: "https://acfi.asia" },
    nobridge: { name: "Nobridge", url: "https://nobridge.co" },
  },
} as const;
