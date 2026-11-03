import { Reveal, SectionHead } from "@/lib/motion";
import { principles } from "@/content";

export function Principles({ title = "Why work with us?", intro }: { title?: string; intro?: string }) {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHead title={title}>{intro}</SectionHead>
        <ol className="grid border-t border-ink sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => (
            <li key={p.title} className="border-b border-line">
              <Reveal delay={(i % 3) * 0.08} className="flex h-full flex-col gap-3 py-8 pr-8">
                <span className="font-display text-sm font-semibold tabular-nums text-ink-2">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-fluid-1 font-semibold">{p.title}</h3>
                <p className="max-w-[36ch] text-pretty text-ink-2">{p.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
