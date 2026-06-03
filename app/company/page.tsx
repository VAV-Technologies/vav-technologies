import type { Metadata } from "next";
import { ArrowUpRight, Building2, Handshake, Layers, Users, LineChart, Database, Network, Briefcase } from "lucide-react";
import ContentViewport from "@/components/layout/ContentViewport";
import SectionPanel from "@/components/layout/SectionPanel";
import SectionBadge from "@/components/shared/SectionBadge";
import Breadcrumb from "@/components/layout/Breadcrumb";
import IconCircle from "@/components/shared/IconCircle";
import GrayscaleImage from "@/components/shared/GrayscaleImage";
import GridPattern from "@/components/shared/GridPattern";
import CornerMark from "@/components/shared/CornerMark";
import FirmLogoPlaceholder from "@/components/shared/FirmLogoPlaceholder";
import PrimaryButton from "@/components/shared/PrimaryButton";
import GhostButton from "@/components/shared/GhostButton";
import { IMAGES } from "@/lib/images";
import { SITE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Company",
  description:
    "PT VAV Technologies Indonesia operates two companies — ACFI, a community and database of M&A firms, and Nobridge, an M&A advisory firm.",
  alternates: { canonical: `${SITE_URL}/company` },
};

const acfiPoints = [
  { icon: Database, title: "A Living Directory", desc: "A searchable database of M&A advisory firms and the deals and sectors they cover." },
  { icon: Network, title: "A Connected Community", desc: "Bringing advisors, dealmakers, and capital together in one professional network." },
  { icon: Users, title: "Built for Collaboration", desc: "Making it easier for the right firms and counterparties to find one another." },
];

const nobridgePoints = [
  { icon: Handshake, title: "Buy-Side & Sell-Side", desc: "Advising founders and corporates across both sides of a transaction." },
  { icon: Briefcase, title: "End-to-End Execution", desc: "Guiding deals from origination and valuation through negotiation and close." },
  { icon: LineChart, title: "Corporate Finance", desc: "Structuring capital and transactions that unlock the next stage of growth." },
];

export default function CompanyPage() {
  return (
    <div className="flex flex-col gap-4 py-4">
      {/* Hero */}
      <ContentViewport>
        <SectionPanel variant="dark" className="relative overflow-hidden">
          <GrayscaleImage src={IMAGES.heroes.company} alt="" fill background className="absolute inset-0 opacity-15" />
          <GridPattern variant="dark" />
          <CornerMark variant="dark" />
          <Breadcrumb items={[{ label: "Company" }]} />
          <div className="relative z-10 mt-6 mx-auto max-w-3xl text-center">
            <SectionBadge variant="dark">Our Companies</SectionBadge>
            <h1 className="mt-5 text-3xl font-medium leading-[1.1] tracking-[-2px] text-panel-white sm:text-4xl lg:text-5xl">
              One Group, Two Companies
            </h1>
            <p className="mt-5 text-base font-light leading-relaxed text-muted-gray">
              PT VAV Technologies Indonesia is a holding company operating two complementary businesses —
              a community and database of M&amp;A firms, and a full-service M&amp;A advisory firm.
            </p>
          </div>
        </SectionPanel>
      </ContentViewport>

      {/* Group overview */}
      <ContentViewport>
        <SectionPanel variant="white">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionBadge>The Group</SectionBadge>
              <h2 className="mt-5 text-3xl font-normal tracking-tight">A Holding Company for Indonesian Growth</h2>
              <p className="mt-4 text-sm font-light leading-relaxed text-body-gray">
                PT VAV Technologies Indonesia brings advisory, community, and capital together under one roof. Each
                company stands on its own, but together they let us serve the market end-to-end — from
                advising a single transaction to building the wider network and investment that helps
                Indonesian businesses scale.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-4 border border-outline-light p-6">
                <IconCircle icon={Layers} />
                <div>
                  <h3 className="text-sm font-semibold">ACFI</h3>
                  <p className="mt-1 text-sm font-light leading-relaxed text-body-gray">Community &amp; database of M&amp;A firms.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 border border-outline-light p-6">
                <IconCircle icon={Building2} />
                <div>
                  <h3 className="text-sm font-semibold">Nobridge</h3>
                  <p className="mt-1 text-sm font-light leading-relaxed text-body-gray">M&amp;A advisory firm.</p>
                </div>
              </div>
            </div>
          </div>
        </SectionPanel>
      </ContentViewport>

      {/* ACFI — image left, content right */}
      <ContentViewport>
        <SectionPanel variant="muted">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative h-56 overflow-hidden rounded-[10px] sm:h-72 lg:h-80">
              <GrayscaleImage src={IMAGES.companies.acfi} alt="ACFI" fill sizes="(max-width: 1024px) 100vw, 50vw" className="h-full w-full" />
            </div>
            <div>
              <div className="flex items-center gap-4">
                <FirmLogoPlaceholder name="ACFI" size="md" />
                <div>
                  <SectionBadge>Community &amp; Directory</SectionBadge>
                  <h2 className="mt-2 text-3xl font-normal tracking-tight">ACFI</h2>
                </div>
              </div>
              <p className="mt-5 text-sm font-light leading-relaxed text-body-gray">
                ACFI is a community and database of M&amp;A advisory firms — a place where dealmakers,
                advisors, and capital connect. It maps who does what across the market, so the right
                firms and counterparties can find one another.
              </p>
              <div className="mt-6 flex flex-col gap-4">
                {acfiPoints.map((p) => (
                  <div key={p.title} className="flex items-start gap-4">
                    <IconCircle icon={p.icon} />
                    <div>
                      <h3 className="text-sm font-semibold">{p.title}</h3>
                      <p className="mt-1 text-sm font-light leading-relaxed text-body-gray">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <PrimaryButton href={SITE.companies.acfi.url}>Visit ACFI</PrimaryButton>
              </div>
            </div>
          </div>
        </SectionPanel>
      </ContentViewport>

      {/* Nobridge — content left, image right */}
      <ContentViewport>
        <SectionPanel variant="white">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-4">
                <FirmLogoPlaceholder name="Nobridge" size="md" />
                <div>
                  <SectionBadge>M&amp;A Advisory</SectionBadge>
                  <h2 className="mt-2 text-3xl font-normal tracking-tight">Nobridge</h2>
                </div>
              </div>
              <p className="mt-5 text-sm font-light leading-relaxed text-body-gray">
                Nobridge is our mergers &amp; acquisitions advisory firm. It guides founders and corporates
                through buy-side and sell-side transactions — from origination and valuation through
                negotiation and close.
              </p>
              <div className="mt-6 flex flex-col gap-4">
                {nobridgePoints.map((p) => (
                  <div key={p.title} className="flex items-start gap-4">
                    <IconCircle icon={p.icon} />
                    <div>
                      <h3 className="text-sm font-semibold">{p.title}</h3>
                      <p className="mt-1 text-sm font-light leading-relaxed text-body-gray">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <PrimaryButton href={SITE.companies.nobridge.url}>Visit Nobridge</PrimaryButton>
              </div>
            </div>
            <div className="relative order-1 h-56 overflow-hidden rounded-[10px] sm:h-72 lg:order-2 lg:h-80">
              <GrayscaleImage src={IMAGES.companies.nobridge} alt="Nobridge" fill sizes="(max-width: 1024px) 100vw, 50vw" className="h-full w-full" />
            </div>
          </div>
        </SectionPanel>
      </ContentViewport>

      {/* Closing CTA */}
      <ContentViewport>
        <SectionPanel variant="dark" className="relative overflow-hidden">
          <GridPattern variant="dark" />
          <div className="relative z-10 flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
            <div>
              <h2 className="text-2xl font-normal tracking-tight text-panel-white sm:text-3xl">
                Work with PT VAV Technologies Indonesia
              </h2>
              <p className="mt-2 text-sm font-light text-muted-gray">
                Tell us about your transaction, mandate, or partnership idea.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/contact" variant="light">Get in Touch</PrimaryButton>
              <GhostButton href="/about" variant="dark">About PT VAV Technologies Indonesia</GhostButton>
            </div>
          </div>
        </SectionPanel>
      </ContentViewport>
    </div>
  );
}
