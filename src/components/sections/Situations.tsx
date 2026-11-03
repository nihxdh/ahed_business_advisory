import { Reveal, SectionHead } from "@/lib/motion";
import { situations } from "@/content";

// Organised by business situation, so visitors can recognise themselves even without a matching industry.
export function Situations() {
  return (
    <section className="section" id="situations">
      <div className="wrap">
        <SectionHead title="Situations where we add value">
          This allows you to recognise your own situation, even if you do not identify with a particular industry.
        </SectionHead>
        <ol className="grid gap-4 md:grid-cols-2">
          {situations.map((s, i) => (
            <li key={s}>
              <Reveal delay={(i % 2) * 0.08} className="flex items-center gap-5 rounded-2xl border border-line bg-surface p-5">
                <span className="font-display text-sm font-bold tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-fluid-1 font-semibold">{s}</span>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
