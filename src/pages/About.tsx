import { PageHero } from "@/components/sections/PageHero";
import { Manifesto, beliefSegments } from "@/components/sections/Manifesto";
import { Pillars } from "@/components/sections/Pillars";
import { Principles } from "@/components/sections/Principles";
import { Steps } from "@/components/sections/Steps";
import { Advisor } from "@/components/sections/Advisor";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal } from "@/lib/motion";
import { useTitle } from "@/lib/router";
import { advisor, approach, brandPromise, coreMessage } from "@/content";

export function About() {
  useTitle("About");
  return (
    <>
      <PageHero eyebrow="About" title="Helping Businesses Build Strong Foundations for Growth">
        Every business reaches a point where its next stage of growth requires more than hard work and ambition. It
        requires clearer direction, stronger management practices, capable people and systems that can keep pace with change.
      </PageHero>

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <Reveal className="grid content-start gap-6">
            <div className="rounded-2xl bg-spruce p-6 text-spruce-ink">
              <p className="eyebrow !text-mark">Our purpose</p>
              <p className="font-display text-fluid-2 leading-snug font-semibold text-balance">{coreMessage}</p>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-6">
              <p className="eyebrow">Leadership philosophy</p>
              <p className="text-fluid-1 leading-relaxed text-pretty">{advisor.philosophy}</p>
              <p className="mt-3 text-ink-2">{brandPromise}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="grid max-w-[62ch] content-start gap-5 text-fluid-1 leading-relaxed text-pretty text-ink-2">
            <p>
              Our advisory practice works with business owners and leadership teams to address these challenges through
              practical, business-focused solutions.
            </p>
            <p>
              We bring together perspectives from strategy, people management, operations, commercial development, finance
              and technology to help organisations understand their priorities and make better-informed decisions.
            </p>
            <p>
              Our approach is collaborative and grounded in the realities of each business. We aim to develop solutions
              that are appropriate to the organisation's needs, resources and ambitions, while helping its people build
              the confidence and capability to sustain progress.
            </p>
          </Reveal>
        </div>
      </section>

      <Advisor full />
      <Manifesto label="Our belief" segments={beliefSegments} />
      <Pillars />
      <Steps title="How we approach client engagements" steps={approach} />
      <Principles title="Values and working principles" />
      <CtaBand />
    </>
  );
}
