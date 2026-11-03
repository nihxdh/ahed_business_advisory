import { ArrowRight, Briefcase, UserRound } from "lucide-react";
import { Reveal } from "@/lib/motion";
import { Link } from "@/lib/router";
import { advisor } from "@/content";

// Advisor profile. All career and credential claims must be verified (dates and titles) before launch.
export function Advisor({ full = false }: { full?: boolean }) {
  return (
    <section className="section" aria-labelledby="advisor-title">
      <div className="wrap">
        <Reveal className="grid gap-8 overflow-hidden rounded-2xl border border-line bg-surface p-6 md:p-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          <div>
            <span className="grid size-20 place-items-center rounded-full bg-paper-2 text-ink-2">
              <UserRound size={36} aria-hidden="true" />
            </span>
            <p className="eyebrow mt-6">{advisor.role}</p>
            <h2 id="advisor-title" className="text-fluid-3 text-balance">{advisor.summary}</h2>
            <p className="mt-4 text-ink-2">{advisor.philosophy}</p>
            {!full && (
              <Link className="mt-6 inline-flex items-center gap-2 font-semibold text-accent underline-offset-4 hover:underline" to="/about">
                About the advisor <ArrowRight size={16} aria-hidden="true" />
              </Link>
            )}
          </div>
          <div className="grid content-start gap-8">
            <div>
              <h3 className="text-fluid-xs font-semibold tracking-[.14em] text-ink-2 uppercase">Experience includes</h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {advisor.organisations.map((o) => (
                  <li key={o} className="flex items-center gap-3 rounded-xl border border-line bg-paper px-4 py-3 font-display font-semibold">
                    <Briefcase size={16} aria-hidden="true" className="shrink-0 text-accent" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-fluid-xs font-semibold tracking-[.14em] text-ink-2 uppercase">Core expertise</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {advisor.expertise.map((e) => (
                  <li key={e} className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1.5 text-sm text-ink">{e}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
