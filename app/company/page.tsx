import type { Metadata } from "next";
import { Handshake, Briefcase, LineChart, Landmark, TrendingUp, Target } from "lucide-react";
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
    "PT VAV Technologies Indonesia is the parent company of Nobridge, a mergers & acquisitions advisory firm based in Jakarta.",
  alternates: { canonical: `${SITE_URL}/company` },
};

const nobridgePoints = [
  { icon: Handshake, title: "Buy-Side & Sell-Side", desc: "Advising founders and corporates across both sides of a transaction." },
  { icon: Briefcase, title: "End-to-End Execution", desc: "Guiding deals from origination and valuation through negotiation and close." },
  { icon: LineChart, title: "Corporate Finance", desc: "Structuring capital and transactions that unlock the next stage of growth." },
];

const groupFocus = [
  { icon: Handshake, title: "M&A Advisory", desc: "Delivered through our firm, Nobridge." },
  { icon: Landmark, title: "Corporate Finance", desc: "Capital and deal structuring for growth." },
  { icon: TrendingUp, title: "Strategic Investment", desc: "Patient capital for the long term." },
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
            <SectionBadge variant="dark">Our Company</SectionBadge>
            <h1 className="mt-5 text-3xl font-medium leading-[1.1] tracking-[-2px] text-panel-white sm:text-4xl lg:text-5xl">
              Meet Nobridge
            </h1>
            <p className="mt-5 text-base font-light leading-relaxed text-muted-gray">
              PT VAV Technologies Indonesia is the parent company of Nobridge — a mergers &amp; acquisitions
              advisory firm helping Indonesian businesses grow.
            </p>
          </div>
        </SectionPanel>
      </ContentViewport>

      {/* The Group */}
      <ContentViewport>
        <SectionPanel variant="white">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionBadge>The Group</SectionBadge>
              <h2 className="mt-5 text-3xl font-normal tracking-tight">A Parent Company for Indonesian Growth</h2>
              <p className="mt-4 text-sm font-light leading-relaxed text-body-gray">
                PT VAV Technologies Indonesia brings advisory, finance, and capital together under one roof.
                Our focus is simple: move Indonesia forward by helping its businesses grow through mergers,
                acquisitions, and strategic investment — a mission led today by our M&amp;A advisory firm,
                Nobridge.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {groupFocus.map((item) => (
                <div key={item.title} className="border border-outline-light p-6">
                  <IconCircle icon={item.icon} />
                  <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm font-light leading-relaxed text-body-gray">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionPanel>
      </ContentViewport>

      {/* Nobridge — image left, content right */}
      <ContentViewport>
        <SectionPanel variant="muted">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative h-56 overflow-hidden rounded-[10px] sm:h-72 lg:h-80">
              <GrayscaleImage src={IMAGES.companies.nobridge} alt="Nobridge" fill sizes="(max-width: 1024px) 100vw, 50vw" className="h-full w-full" />
            </div>
            <div>
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
