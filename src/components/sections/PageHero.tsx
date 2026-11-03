import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ease } from "@/lib/motion";

// First section of every inner page: the same deep green treatment as the homepage hero (abstract image under
// green shades), with the eyebrow, the page's only h1, a lede and optional actions or image.
export function PageHero({
  eyebrow,
  title,
  children,
  actions,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
  aside?: ReactNode;
}) {
  const reduce = useReducedMotion();
  const rise = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease, delay: i * 0.08 },
  });
  return (
    <section className="page-hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className={`wrap grid gap-10 ${aside ? "lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:items-center lg:gap-16" : ""}`}>
        <div>
          <motion.p className="eyebrow" {...rise(0)}>{eyebrow}</motion.p>
          <motion.h1 className="max-w-[22ch] text-fluid-4 font-bold leading-[1.05] text-balance" {...rise(0)}>
            {title}
          </motion.h1>
          {children && (
            <motion.div className="mt-6 max-w-[60ch] text-fluid-1 leading-relaxed text-pretty text-spruce-ink-2" {...rise(1)}>
              {children}
            </motion.div>
          )}
          {actions && <motion.div className="mt-8 flex flex-wrap gap-3" {...rise(2)}>{actions}</motion.div>}
        </div>
        {aside && <motion.div {...rise(2)}>{aside}</motion.div>}
      </div>
    </section>
  );
}
