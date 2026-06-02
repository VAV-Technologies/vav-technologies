import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/shared/JsonLd";
import PageTransition from "@/components/shared/PageTransition";
import { SITE_URL, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: "PT VAV Technologies Indonesia — Moving Indonesia Forward",
    template: "%s | VAV Technologies",
  },
  description:
    "PT VAV Technologies Indonesia is a holding company moving Indonesia forward through mergers, acquisitions, and strategic investment — operating ACFI and Nobridge.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PT VAV Technologies Indonesia",
    title: "PT VAV Technologies Indonesia — Moving Indonesia Forward",
    description:
      "A holding company building Indonesia's future through mergers, acquisitions, and strategic investment.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT VAV Technologies Indonesia",
    description:
      "Moving Indonesia forward through mergers, acquisitions, and strategic investment.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PT VAV Technologies Indonesia",
  alternateName: "VAV Technologies",
  url: SITE_URL,
  description:
    "Holding company moving Indonesia forward through mergers, acquisitions, and strategic investment.",
  areaServed: "Indonesia",
  subOrganization: [
    { "@type": "Organization", name: "ACFI", url: SITE.companies.acfi.url },
    { "@type": "Organization", name: "Nobridge", url: SITE.companies.nobridge.url },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-onest antialiased">
        <JsonLd data={organizationJsonLd} />
        <Header />
        <main><PageTransition>{children}</PageTransition></main>
        <Footer />
      </body>
    </html>
  );
}
