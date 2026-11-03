import { PageHero } from "@/components/sections/PageHero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { useTitle } from "@/lib/router";

export function ServicesPage() {
  useTitle("Services");
  return (
    <>
      <PageHero eyebrow="Services" title="Connected capabilities. One business objective.">
        <p>
          Business challenges rarely exist in isolation. A growth strategy may require a new operating model, stronger
          leadership, better financial controls and the right technology.
        </p>
        <p className="mt-3">
          Our advisory capabilities bring these elements together to help businesses move from identifying problems to
          implementing meaningful improvements.
        </p>
      </PageHero>
      <section className="section">
        <div className="wrap"><ServiceGrid /></div>
      </section>
      <CtaBand secondary={{ label: "Our approach", to: "/our-approach" }} />
    </>
  );
}
