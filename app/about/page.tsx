import type { Metadata } from "next";
import { Target, Eye, Globe, Handshake, TrendingUp, Layers, Landmark, ShieldCheck } from "lucide-react";
import ContentViewport from "@/components/layout/ContentViewport";
import SectionPanel from "@/components/layout/SectionPanel";
import SectionBadge from "@/components/shared/SectionBadge";
import Breadcrumb from "@/components/layout/Breadcrumb";
import IconCircle from "@/components/shared/IconCircle";
import JsonLd from "@/components/shared/JsonLd";
import GrayscaleImage from "@/components/shared/GrayscaleImage";
import GridPattern from "@/components/shared/GridPattern";
import CornerMark from "@/components/shared/CornerMark";
import PrimaryButton from "@/components/shared/PrimaryButton";
import GhostButton from "@/components/shared/GhostButton";
import { IMAGES } from "@/lib/images";
import { SITE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About PT VAV Technologies Indonesia — a holding company moving Indonesia forward through mergers, acquisitions, and strategic investment, operating ACFI and Nobridge.",
  alternates: { canonical: `${SITE_URL}/about` },
};

const aboutJsonLd = {
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

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-4 py-4">
      <JsonLd data={aboutJsonLd} />
      {/* Hero */}
      <ContentViewport>
        <SectionPanel variant="dark" className="relative overflow-hidden">
          <GrayscaleImage src={IMAGES.heroes.about} alt="" fill background className="absolute inset-0 opacity-15" />
          <GridPattern variant="dark" />
          <CornerMark variant="dark" />
          <Breadcrumb items={[{ label: "About Us" }]} />
          <div className="relative z-10 mt-6 mx-auto max-w-3xl text-center">
            <SectionBadge variant="dark">About VAV</SectionBadge>
            <h1 className="mt-5 text-3xl font-medium leading-[1.1] tracking-[-2px] text-panel-white sm:text-4xl lg:text-5xl">
              A Holding Company Built to Grow Indonesia
            </h1>
            <p className="mt-5 text-base font-light leading-relaxed text-muted-gray">
              PT VAV Technologies Indonesia brings together capital, advisory, and community under one
              roof — operating ACFI and Nobridge to move the country&apos;s businesses forward through
              mergers, acquisitions, and strategic investment.
            </p>
          </div>
        </SectionPanel>
      </ContentViewport>

      {/* Mission & Vision */}
      <ContentViewport>
        <SectionPanel variant="white">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="border border-outline-light p-8">
              <IconCircle icon={Target} />
              <h2 className="mt-5 text-xl font-normal">Our Mission</h2>
              <p className="mt-3 text-sm font-light leading-relaxed text-body-gray">
                To move Indonesia forward by building and backing the companies that strengthen its
                economy — combining mergers, acquisitions, finance, and investment to help businesses
                and the country grow.
              </p>
            </div>
            <div className="border border-outline-light p-8">
              <IconCircle icon={Eye} />
              <h2 className="mt-5 text-xl font-normal">Our Vision</h2>
              <p className="mt-3 text-sm font-light leading-relaxed text-body-gray">
                A more connected and capable Indonesian market, where founders and corporates have
                world-class advisory, a trusted community of dealmakers, and patient capital to realize
                their ambitions.
              </p>
            </div>
          </div>
        </SectionPanel>
      </ContentViewport>

      {/* What We Stand For */}
      <ContentViewport>
        <SectionPanel variant="muted">
          <div className="text-center">
            <SectionBadge>What We Stand For</SectionBadge>
            <h2 className="mt-5 text-3xl font-normal tracking-tight">Our Principles</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Target, title: "Indonesia-First", desc: "Rooted in Jakarta, focused on the country's long-term development and economic growth." },
              { icon: Handshake, title: "Partnership", desc: "We work alongside founders and corporates as long-term partners, not transactional advisors." },
              { icon: ShieldCheck, title: "Integrity", desc: "We hold ourselves to the highest standards of professionalism and trust in every deal." },
              { icon: Layers, title: "Connected", desc: "Through ACFI we link advisors, dealmakers, and capital into one collaborative community." },
              { icon: TrendingUp, title: "Long-Term", desc: "We deploy patient capital and take a multi-year view of value creation." },
              { icon: Globe, title: "Regional Reach", desc: "Local roots with an Asia-Pacific perspective on cross-border opportunity." },
            ].map((item) => (
              <div key={item.title} className="border border-outline-light bg-panel-white p-6">
                <IconCircle icon={item.icon} />
                <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-body-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </SectionPanel>
      </ContentViewport>

      {/* Our Story */}
      <ContentViewport>
        <SectionPanel variant="white">
          <div className="mx-auto max-w-3xl">
            <SectionBadge>Our Story</SectionBadge>
            <h2 className="mt-5 text-3xl font-normal tracking-tight">One Group, Two Companies</h2>
            <div className="relative mt-6 h-40 overflow-hidden rounded-[10px] sm:h-52 lg:h-64">
              <GrayscaleImage src={IMAGES.about.story} alt="VAV Technologies team" fill sizes="(max-width: 768px) 100vw, 768px" className="h-full w-full" />
            </div>
            <div className="mt-8 flex flex-col gap-6 text-sm font-light leading-relaxed text-body-gray">
              <p>
                PT VAV Technologies Indonesia was founded on a simple belief: that the right combination
                of advisory expertise, community, and capital can accelerate Indonesia&apos;s growth.
              </p>
              <p>
                Today the group operates two complementary companies. <strong className="font-semibold text-primary-black">Nobridge</strong> is
                our mergers & acquisitions advisory firm, guiding buy-side and sell-side transactions from
                origination through close. <strong className="font-semibold text-primary-black">ACFI</strong> is a community
                and database of M&amp;A advisory firms, connecting dealmakers and capital across the region.
              </p>
              <p>
                Together they let us serve the market end-to-end — from advising on a single transaction to
                building the wider network and investment that helps the country&apos;s businesses scale.
              </p>
              <p>
                We continue to grow our companies, deepen our network, and invest in the opportunities that
                move Indonesia forward.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <GhostButton href="/company">Explore Our Companies</GhostButton>
            </div>
          </div>
        </SectionPanel>
      </ContentViewport>

      {/* Closing CTA */}
      <ContentViewport>
        <SectionPanel variant="dark" className="relative overflow-hidden">
          <GridPattern variant="dark" />
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <IconCircle icon={Landmark} />
            <h2 className="mt-5 text-3xl font-normal tracking-tight text-panel-white">Let&apos;s Talk</h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-gray">
              Whether you&apos;re considering a merger, an acquisition, or an investment, we&apos;d be glad
              to hear from you.
            </p>
            <div className="mt-8 flex justify-center">
              <PrimaryButton href="/contact" variant="light">Get in Touch</PrimaryButton>
            </div>
          </div>
        </SectionPanel>
      </ContentViewport>
    </div>
  );
}
