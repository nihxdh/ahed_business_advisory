import { motion } from "motion/react";
import { Reveal, SectionHead, ease } from "@/lib/motion";
import { audiences } from "@/content";

// Who the advisory is for: each audience, what usually brings them, and the question they want answered.
export function Audiences() {
  return (
    <section className="section" aria-label="Who we help">
      <div className="wrap">
        <SectionHead title="Who we help">
          Owners, founders, directors, CEOs, general managers, investors and leadership teams.
        </SectionHead>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a, i) => (
            <li key={a.who}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease }}
                  className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface p-6"
                >
                  <h3 className="text-fluid-1 font-semibold">{a.who}</h3>
                  <p className="text-ink-2">{a.trigger}</p>
                  <p className="mt-auto border-t border-dashed border-line pt-3 font-display text-[.95rem] font-medium text-accent">
                    “{a.ask}”
                  </p>
                </motion.article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
