import { useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { challenges } from "@/content";

function Card({ c, i }: { c: (typeof challenges)[number]; i: number }) {
  const Icon = c.icon;
  return (
    <article className="flex w-[min(76vw,300px)] shrink-0 snap-start flex-col gap-4 rounded-2xl border border-line bg-surface p-5 md:p-7">
      <div className="flex items-center justify-between">
        <span className="grid size-11 place-items-center rounded-full bg-[color-mix(in_oklab,var(--accent)_12%,transparent)] text-accent">
          <Icon size={20} aria-hidden="true" />
        </span>
        <span className="font-display text-sm font-semibold tabular-nums text-ink-2">{String(i + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="font-display text-fluid-2 leading-tight font-semibold tracking-tight">{c.title}</h3>
      <p className="mt-auto border-t border-dashed border-line pt-4 text-ink-2">{c.body}</p>
    </article>
  );
}

// Pinned horizontal scroll: the section sticks while vertical scrolling slides the cards sideways.
// With reduced motion it falls back to an ordinary swipeable row.
export function Challenges() {
  const section = useRef<HTMLElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [distance, setDistance] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (track.current && viewport.current) setDistance(Math.max(0, track.current.scrollWidth - viewport.current.clientWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    if (viewport.current) ro.observe(viewport.current);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const pinned = !reduce && distance > 0;

  const head = (
    <div className="wrap grid w-full gap-5 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:items-end lg:gap-16">
      <h2 className="text-fluid-3 text-balance">Growth brings opportunity. It also brings complexity.</h2>
      <div className="grid max-w-[56ch] gap-3 text-pretty text-ink-2">
        <p>
          As businesses expand, the systems and practices that worked in the early stages may no longer be enough.
          Decisions become more complex, responsibilities overlap, costs rise and management visibility can weaken.
        </p>
        <p>
          We help leadership teams identify the underlying issues, prioritise the right changes and develop practical
          ways to improve performance.
        </p>
      </div>
    </div>
  );

  const cards = challenges.map((c, i) => <Card key={c.title} c={c} i={i} />);
  const pad = "px-[max(20px,calc((100%-1200px)/2+20px))]";

  return (
    <section
      ref={section}
      className="relative bg-paper-2"
      style={pinned ? { height: `calc(100svh + ${distance}px)` } : undefined}
      aria-label="Business challenges"
    >
      <div
        ref={viewport}
        className={pinned ? "sticky top-0 flex h-svh flex-col justify-center gap-10 overflow-hidden pt-[64px]" : "flex flex-col gap-10 py-[clamp(3.25rem,6.5vw,5.5rem)]"}
      >
        {head}
        {pinned ? (
          <motion.div ref={track} style={{ x }} className={`flex w-max gap-5 ${pad}`}>
            {cards}
          </motion.div>
        ) : (
          <div ref={track} className={`flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 ${pad} scroll-px-5`}>
            {cards}
          </div>
        )}
        {pinned && (
          <div className="wrap w-full">
            <div className="h-[3px] overflow-hidden rounded-full bg-line" aria-hidden="true">
              <motion.div className="h-full origin-left rounded-full bg-spruce" style={{ scaleX: scrollYProgress }} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
