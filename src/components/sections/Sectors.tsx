import { ArrowRight } from "lucide-react";
import { Reveal, SectionHead } from "@/lib/motion";
import { Link } from "@/lib/router";
import { sectors } from "@/content";

// Industries and contexts. Names only: the brief asks not to claim deep expertise in every industry.
export function Sectors({ link = false }: { link?: boolean }) {
  return (
    <section className="section bg-paper-2" id="sectors">
      <div className="wrap">
        <SectionHead title="Industries and business contexts">
          The types of businesses and challenges we understand.
        </SectionHead>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((s, i) => {
            const Icon = s.icon;
            return (
              <li key={s.label}>
                <Reveal delay={(i % 4) * 0.06} className="flex h-full items-center gap-4 rounded-2xl border border-line bg-surface p-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="font-display text-[.95rem] leading-snug font-semibold">{s.label}</span>
                </Reveal>
              </li>
            );
          })}
        </ul>
        {link && (
          <Link className="mt-8 inline-flex items-center gap-2 font-semibold text-accent underline-offset-4 hover:underline" to="/industries">
            Industries and business challenges <ArrowRight size={16} aria-hidden="true" />
          </Link>
        )}
      </div>
    </section>
  );
}
