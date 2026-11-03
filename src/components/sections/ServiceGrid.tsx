import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Reveal, ease } from "@/lib/motion";
import { Link } from "@/lib/router";
import { services } from "@/content";

// Six capability cards, each with its photo, linking to the service's own page.
export function ServiceGrid({ exclude }: { exclude?: string }) {
  const list = services.filter((s) => s.slug !== exclude);
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((s, i) => (
        <Reveal key={s.slug} delay={(i % 3) * 0.08} className="h-full">
          <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25, ease }} className="h-full">
            <Link
              to={`/services/${s.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface no-underline transition-shadow hover:shadow-[0_24px_48px_-32px_color-mix(in_oklab,var(--ink)_55%,transparent)]"
            >
              <div className="aspect-[16/10] overflow-hidden bg-paper-2">
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  width={640}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-fluid-1 font-semibold">{s.title}</h3>
                  <ArrowUpRight size={20} aria-hidden="true" className="mt-1 shrink-0 text-ink-2 transition-colors group-hover:text-ink" />
                </div>
                <p className="text-[.9rem] text-pretty text-ink-2">{s.summary}</p>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-3" aria-label="Includes">
                  {s.tags.map((t) => (
                    <li key={t} className="rounded-full border border-line px-2.5 py-1 text-xs text-ink-2">{t}</li>
                  ))}
                </ul>
              </div>
            </Link>
          </motion.div>
        </Reveal>
      ))}
    </div>
  );
}
