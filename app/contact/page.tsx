import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, Linkedin, Building2, Layers } from "lucide-react";
import ContentViewport from "@/components/layout/ContentViewport";
import SectionPanel from "@/components/layout/SectionPanel";
import SectionBadge from "@/components/shared/SectionBadge";
import Breadcrumb from "@/components/layout/Breadcrumb";
import IconCircle from "@/components/shared/IconCircle";
import GrayscaleImage from "@/components/shared/GrayscaleImage";
import GridPattern from "@/components/shared/GridPattern";
import CornerMark from "@/components/shared/CornerMark";
import PrimaryButton from "@/components/shared/PrimaryButton";
import { IMAGES } from "@/lib/images";
import { SITE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with PT VAV Technologies Indonesia — Jakarta, Indonesia. Reach us about mergers, acquisitions, investment, and partnership opportunities.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-4 py-4">
      {/* Hero */}
      <ContentViewport>
        <SectionPanel variant="dark" className="relative overflow-hidden">
          <GrayscaleImage src={IMAGES.heroes.contact} alt="" fill background className="absolute inset-0 opacity-15" />
          <GridPattern variant="dark" />
          <CornerMark variant="dark" />
          <Breadcrumb items={[{ label: "Contact Us" }]} />
          <div className="relative z-10 mt-6 mx-auto max-w-3xl text-center">
            <SectionBadge variant="dark">Contact</SectionBadge>
            <h1 className="mt-5 text-3xl font-medium leading-[1.1] tracking-[-2px] text-panel-white sm:text-4xl lg:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-5 text-base font-light leading-relaxed text-muted-gray">
              Considering a merger, an acquisition, or an investment — or exploring a partnership with one
              of our companies? We&apos;d be glad to hear from you.
            </p>
          </div>
        </SectionPanel>
      </ContentViewport>

      {/* Contact details */}
      <ContentViewport>
        <SectionPanel variant="white">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Reach us */}
            <div className="flex flex-col gap-6 border border-outline-light p-8">
              <div>
                <SectionBadge>Reach Us</SectionBadge>
                <h2 className="mt-4 text-2xl font-normal tracking-tight">Contact Details</h2>
              </div>

              <a href={`mailto:${SITE.email}`} className="group flex items-start gap-4">
                <IconCircle icon={Mail} />
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-muted-gray">Email</p>
                  <p className="mt-1 flex items-center gap-1 text-sm font-medium text-primary-black group-hover:text-dark-gray">
                    {SITE.email}
                    <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <IconCircle icon={MapPin} />
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-muted-gray">Location</p>
                  <p className="mt-1 text-sm font-light text-body-gray">{SITE.location}</p>
                </div>
              </div>

              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                <IconCircle icon={Linkedin} />
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-muted-gray">LinkedIn</p>
                  <p className="mt-1 flex items-center gap-1 text-sm font-medium text-primary-black group-hover:text-dark-gray">
                    Follow PT VAV Technologies Indonesia
                    <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                  </p>
                </div>
              </a>

              <div className="pt-2">
                <PrimaryButton href={`mailto:${SITE.email}`} showArrow={false}>Email Us</PrimaryButton>
              </div>
            </div>

            {/* Our companies */}
            <div className="flex flex-col gap-4 border border-outline-light bg-off-white p-8">
              <div>
                <SectionBadge>Our Companies</SectionBadge>
                <h2 className="mt-4 text-2xl font-normal tracking-tight">Reach a Company Directly</h2>
                <p className="mt-3 text-sm font-light leading-relaxed text-body-gray">
                  Looking for one of our businesses in particular? Visit them directly.
                </p>
              </div>

              <a href={SITE.companies.acfi.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border border-outline-light bg-panel-white p-5 transition-colors hover:border-primary-black/20">
                <div className="flex items-center gap-4">
                  <IconCircle icon={Layers} />
                  <div>
                    <h3 className="text-sm font-semibold">ACFI</h3>
                    <p className="text-xs text-muted-gray">Community &amp; database of M&amp;A firms</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-muted-gray transition-colors group-hover:text-primary-black" />
              </a>

              <a href={SITE.companies.nobridge.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border border-outline-light bg-panel-white p-5 transition-colors hover:border-primary-black/20">
                <div className="flex items-center gap-4">
                  <IconCircle icon={Building2} />
                  <div>
                    <h3 className="text-sm font-semibold">Nobridge</h3>
                    <p className="text-xs text-muted-gray">M&amp;A advisory firm</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-muted-gray transition-colors group-hover:text-primary-black" />
              </a>
            </div>
          </div>
        </SectionPanel>
      </ContentViewport>
    </div>
  );
}
