import { Hero } from "@/components/sections/Hero";
import { Challenges } from "@/components/sections/Challenges";
import { Outcomes } from "@/components/sections/Outcomes";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { Sectors } from "@/components/sections/Sectors";
import { Steps } from "@/components/sections/Steps";
import { Principles } from "@/components/sections/Principles";
import { Advisor } from "@/components/sections/Advisor";
import { Articles } from "@/components/sections/Articles";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal } from "@/lib/motion";
import { useTitle } from "@/lib/router";
import { approach } from "@/content";

// Section order follows the blueprint's homepage architecture, with the content brief's sections in between.
export function Home() {
  useTitle("");
  return (
    <>
      <Hero />
      <Challenges />
      <Outcomes />
      <section className="section" id="services">
        <div className="wrap">
          <Reveal className="mb-[clamp(1.75rem,3.5vw,2.75rem)] grid gap-5 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-end lg:gap-16">
            <h2 className="text-fluid-3 text-balance">Connected capabilities. One business objective.</h2>
            <div className="grid max-w-[60ch] gap-3 text-pretty text-ink-2">
              <p>
                Business challenges rarely exist in isolation. A growth strategy may require a new operating model,
                stronger leadership, better financial controls and the right technology.
              </p>
              <p>
                Our advisory capabilities bring these elements together to help businesses move from identifying problems
                to implementing meaningful improvements.
              </p>
            </div>
          </Reveal>
          <ServiceGrid />
        </div>
      </section>
      <WhoWeServe />
      <Sectors link />
      <Steps id="approach" title="From understanding the problem to making progress" steps={approach} />
      <Principles />
      <Advisor />
      <Articles limit={3} />
      <CtaBand
        title="Tell us what is changing in your business."
        body="Start with a focused discovery conversation."
      />
    </>
  );
}
