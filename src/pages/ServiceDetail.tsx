import { ArrowRight, Check, CircleHelp, Info, Target } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal, SectionHead } from "@/lib/motion";
import { Link, useTitle } from "@/lib/router";
import { cta, serviceBySlug } from "@/content";
import { NotFound } from "@/pages/NotFound";

export function ServiceDetail({ slug }: { slug: string }) {
  const s = serviceBySlug(slug);
  useTitle(s?.title ?? "Page not found");
  if (!s) return <NotFound />;

  const enquire = `/lets-talk?service=${s.slug}`;

  return (
    <>
      <PageHero
        eyebrow={s.title}
        title={s.headline}
        actions={
          <>
            <Link className="btn btn-primary" to={enquire}>{cta.primary}</Link>
            <Link className="btn btn-ghost" to="/services">All services</Link>
          </>
        }
        aside={
          <img
            src={s.image}
            alt={s.imageAlt}
            width={1280}
            height={853}
            className="aspect-[4/3] w-full rounded-2xl border border-line object-cover"
          />
        }
      >
        <p>{s.intro ?? s.summary}</p>
      </PageHero>

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          <div>
            <Reveal><h2 className="text-fluid-3">What this covers</h2></Reveal>
            <ul className="mt-8 grid border-t border-ink sm:grid-cols-2 sm:gap-x-8">
              {s.offerings.map((o, i) => (
                <li key={o}>
                  <Reveal delay={Math.min(i, 6) * 0.04} className="flex items-start gap-3 border-b border-line py-4">
                    <Check size={16} strokeWidth={3} aria-hidden="true" className="mt-1 shrink-0 text-ok" />
                    {o}
                  </Reveal>
                </li>
              ))}
            </ul>
            <Reveal className="mt-10">
              <h3 className="eyebrow">{s.focus.label}</h3>
              <ul className="flex flex-wrap gap-2">
                {s.focus.items.map((f) => (
                  <li key={f} className="rounded-full border border-accent/30 bg-accent/5 px-3.5 py-2 text-sm font-medium">{f}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="grid content-start gap-6 lg:sticky lg:top-24 lg:self-start">
            <Reveal className="rounded-2xl bg-spruce p-6 text-spruce-ink">
              <p className="flex items-center gap-2 text-fluid-xs font-semibold text-mark">
                <Target size={16} aria-hidden="true" />Desired outcome
              </p>
              <p className="mt-3 font-display text-fluid-2 leading-snug font-semibold text-balance">{s.outcome}</p>
            </Reveal>
            {s.questions.items.length > 0 && (
              <Reveal delay={0.08} className="rounded-2xl border border-line bg-surface p-6">
                <p className="flex items-center gap-2 text-fluid-xs font-semibold text-accent">
                  <CircleHelp size={16} aria-hidden="true" />{s.questions.label}
                </p>
                <ul className="mt-4 grid gap-3">
                  {s.questions.items.map((q) => (
                    <li key={q} className="font-display text-[.98rem] leading-snug font-medium">{q}</li>
                  ))}
                </ul>
              </Reveal>
            )}
            {s.note && (
              <Reveal delay={0.12} className="flex gap-3 rounded-2xl border border-line bg-paper-2 p-5 text-fluid-xs leading-relaxed text-ink-2">
                <Info size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-accent" />
                <p>{s.note}</p>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {s.agreement && (
        <section className="section bg-paper-2">
          <div className="wrap">
            <SectionHead title="For every service, we explain">
              Managed services can mean very different things to different clients, so each one is clearly defined.
            </SectionHead>
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {s.agreement.map((a, i) => (
                <li key={a}>
                  <Reveal delay={(i % 3) * 0.08} className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface p-5">
                    <span className="font-display text-sm font-bold tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <p className="font-display text-fluid-1 font-semibold">{a}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <CtaBand
        title={`Talk to us about ${s.title}.`}
        body="Tell us what is changing in your business. Start with a focused discovery conversation."
        primary={{ label: cta.primary, to: enquire }}
        secondary={{ label: "Our approach", to: "/our-approach" }}
      />

      <section className="section">
        <div className="wrap">
          <SectionHead title="Other capabilities">Business challenges rarely exist in isolation.</SectionHead>
          <ServiceGrid exclude={s.slug} />
          <Link className="mt-8 inline-flex items-center gap-2 font-semibold text-accent underline-offset-4 hover:underline" to="/services">
            All services <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
