import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Reveal, SectionHead, ease } from "@/lib/motion";
import { engagementCycle, engagementModels } from "@/content";

// Six ways to engage, then the general engagement cycle.
export function Engagements() {
  return (
    <section className="section" aria-label="Engagement models">
      <div className="wrap">
        <SectionHead title="Ways to engage">
          Scope, duration, deliverables and fees are agreed for each assignment.
        </SectionHead>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {engagementModels.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 0.08} className="h-full">
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease }}
                className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface p-5 md:p-7"
              >
                <span className="font-display text-sm font-bold tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-fluid-2 font-semibold">{m.name}</h3>
                <p className="text-ink-2">{m.purpose}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 rounded-2xl border border-line bg-paper-2 p-6 md:p-8">
          <h3 className="text-fluid-1 font-semibold">The engagement cycle</h3>
          <ol className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-3">
            {engagementCycle.map((c, i) => (
              <li key={c} className="flex items-center gap-2">
                <span className="rounded-full border border-accent/30 bg-surface px-3.5 py-2 text-sm font-medium">{c}</span>
                {i < engagementCycle.length - 1 && <ArrowRight size={16} aria-hidden="true" className="text-accent" />}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
