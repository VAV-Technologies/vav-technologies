import { ArrowUpRight, Building2, Globe, TrendingUp, Handshake, LineChart, Landmark, Target } from "lucide-react";
import ContentViewport from "@/components/layout/ContentViewport";
import SectionPanel from "@/components/layout/SectionPanel";
import SectionBadge from "@/components/shared/SectionBadge";
import IconCircle from "@/components/shared/IconCircle";
import PrimaryButton from "@/components/shared/PrimaryButton";
import GhostButton from "@/components/shared/GhostButton";
import GrayscaleImage from "@/components/shared/GrayscaleImage";
import GridPattern from "@/components/shared/GridPattern";
import CornerMark from "@/components/shared/CornerMark";
import ScrollHero from "@/components/shared/ScrollHero";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import FirmLogoPlaceholder from "@/components/shared/FirmLogoPlaceholder";
import { IMAGES } from "@/lib/images";
import { SITE } from "@/lib/site";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 py-4">
      {/* Hero Section — Dark */}
      <ScrollHero className="relative overflow-hidden">
        <GrayscaleImage src={IMAGES.heroes.home} alt="" fill priority background className="absolute inset-0 opacity-15" />
        <GridPattern variant="dark" />
        <CornerMark variant="dark" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <SectionBadge variant="dark">Indonesia · M&amp;A · Investment</SectionBadge>
          <h1 className="mt-6 text-4xl font-medium leading-[1.1] tracking-[-2px] text-panel-white sm:text-5xl lg:text-6xl">
            Moving Indonesia Forward
          </h1>
          <p className="mt-5 text-base font-light leading-relaxed text-muted-gray sm:text-lg">
            PT VAV Technologies Indonesia is the parent company of Nobridge, our mergers &amp; acquisitions
            advisory firm — building and growing the nation through M&amp;A, corporate finance, and
            strategic investment.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryButton href="/company" variant="light">Meet Nobridge</PrimaryButton>
            <GhostButton href="/contact" variant="dark">Get in Touch</GhostButton>
          </div>
        </div>
      </ScrollHero>

      {/* Stats Section */}
      <ContentViewport>
        <SectionPanel variant="white">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-outline-light">
            {[
              { value: "Nobridge", label: "Our M&A Firm", icon: Building2 },
              { value: "M&A", label: "Core Discipline", icon: Handshake },
              { value: "Jakarta", label: "Headquarters", icon: Landmark },
              { value: "Asia-Pacific", label: "Market Reach", icon: Globe },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center py-2 text-center">
                <stat.icon size={20} className="mb-2 text-medium-gray" strokeWidth={1.5} />
                <AnimatedCounter value={stat.value} className="text-2xl font-medium text-primary-black" />
                <span className="mt-1 text-xs text-muted-gray">{stat.label}</span>
              </div>
            ))}
          </div>
        </SectionPanel>
      </ContentViewport>

      {/* Why PT VAV Technologies Indonesia — 2-column layout */}
      <ContentViewport>
        <SectionPanel variant="white">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionBadge>Why PT VAV Technologies Indonesia</SectionBadge>
              <h2 className="mt-5 text-3xl font-normal tracking-tight sm:text-4xl">
                Built to Grow Indonesian Business
              </h2>
              <p className="mt-4 text-sm font-light leading-relaxed text-body-gray">
                We bring capital, advisory expertise, and a long-term view to mergers, acquisitions, and
                investment — led by our M&amp;A advisory firm, Nobridge.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { icon: Handshake, title: "Mergers & Acquisitions", desc: "End-to-end advisory across buy-side and sell-side transactions through our firm, Nobridge." },
                { icon: Landmark, title: "Corporate Finance", desc: "Structuring capital and deals so the right businesses can scale with confidence." },
                { icon: TrendingUp, title: "Strategic Investment", desc: "Patient capital deployed into businesses and opportunities that strengthen the economy." },
                { icon: Target, title: "Indonesia-First", desc: "Locally rooted in Jakarta with a focus on the country's long-term development." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 border border-outline-light p-6 transition-all duration-200 hover:-translate-y-0.5">
                  <IconCircle icon={item.icon} />
                  <div>
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm font-light leading-relaxed text-body-gray">{item.desc}</p>
                  </div>
                </div>
              ))}
              <div className="relative mt-2 h-40 overflow-hidden rounded-[10px] sm:h-52 lg:h-64">
                <GrayscaleImage src={IMAGES.home.trust} alt="PT VAV Technologies Indonesia" fill sizes="(max-width: 1024px) 100vw, 50vw" className="h-full w-full" />
              </div>
            </div>
          </div>
        </SectionPanel>
      </ContentViewport>

      {/* Our Company — Nobridge — muted variant */}
      <ContentViewport>
        <SectionPanel variant="muted">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <SectionBadge>Our Company</SectionBadge>
              <h2 className="mt-4 text-3xl font-normal tracking-tight">Meet Nobridge</h2>
            </div>
            <GhostButton href="/company">Learn More</GhostButton>
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative h-56 overflow-hidden rounded-[10px] sm:h-72 lg:h-80">
              <GrayscaleImage src={IMAGES.companies.nobridge} alt="Nobridge" fill sizes="(max-width: 1024px) 100vw, 50vw" className="h-full w-full" />
            </div>
            <div>
              <div className="flex items-center gap-4">
                <FirmLogoPlaceholder name="Nobridge" size="md" />
                <div>
                  <h3 className="text-xl font-semibold">Nobridge</h3>
                  <p className="text-xs uppercase tracking-wider text-muted-gray">M&amp;A Advisory</p>
                </div>
              </div>
              <p className="mt-5 text-sm font-light leading-relaxed text-body-gray">
                Nobridge is our mergers &amp; acquisitions advisory firm, guiding founders and corporates
                through buy-side and sell-side transactions — from origination and valuation through
                negotiation and close.
              </p>
              <div className="mt-6 flex items-center gap-5">
                <PrimaryButton href={SITE.companies.nobridge.url}>Visit Nobridge</PrimaryButton>
                <a href="/company" className="flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-primary-black hover:text-dark-gray">
                  Learn More <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </SectionPanel>
      </ContentViewport>

      {/* Our Approach — Dark */}
      <ContentViewport>
        <SectionPanel variant="dark" className="relative overflow-hidden">
          <GridPattern variant="dark" />
          <div className="relative z-10 text-center">
            <SectionBadge variant="dark">Our Approach</SectionBadge>
            <h2 className="mt-4 text-3xl font-normal tracking-tight text-panel-white">
              How We Help the Country Grow
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm font-light leading-relaxed text-muted-gray">
              We pursue growth through three disciplines — combining advisory, finance, and capital to
              move Indonesian business forward.
            </p>
          </div>
          <div className="relative z-10 mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Handshake, title: "Mergers & Acquisitions", desc: "Advising founders and corporates on transactions that unlock the next stage of growth." },
              { icon: Landmark, title: "Corporate Finance", desc: "Structuring capital and deals so the right businesses can scale with confidence." },
              { icon: LineChart, title: "Strategic Investment", desc: "Investing in companies and opportunities aligned with Indonesia's long-term future." },
            ].map((item) => (
              <div key={item.title} className="border border-white/10 bg-white/5 p-6">
                <IconCircle icon={item.icon} />
                <h3 className="mt-4 text-sm font-semibold text-panel-white">{item.title}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-muted-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </SectionPanel>
      </ContentViewport>
    </div>
  );
}
