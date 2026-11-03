import { motion, useReducedMotion } from "motion/react";
import { Check } from "lucide-react";
import { Link } from "@/lib/router";
import { coreMessage, cta, heroSubhead } from "@/content";

// One orchestrated page-load moment: the hero copy rises in sequence.
const rise = (i: number, reduce: boolean | null) => ({
  initial: reduce ? false : { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.2, 0.7, 0.2, 1] as const, delay: i * 0.08 },
});

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="hero">
      {/* Background: abstract brand-colour image under gradient shades, no people. */}
      <div className="hero-bg" aria-hidden="true" />
      <div className="wrap">
        <div className="hero-copy">
          <motion.p className="eyebrow" {...rise(0, reduce)}>
            Business advisory · Transformation · Growth
          </motion.p>
          <motion.h1 {...rise(0, reduce)}>
            <span className="line">Build a Stronger Business.</span> <span className="hl">Prepare for What's Next.</span>
          </motion.h1>
          <motion.p className="hero-lede" {...rise(1, reduce)}>
            {heroSubhead}
          </motion.p>
          <motion.div className="hero-ctas" {...rise(2, reduce)}>
            <Link className="btn btn-accent" to="/lets-talk">{cta.primary}</Link>
            <Link className="btn btn-outline-light" to="/services">{cta.secondary}</Link>
          </motion.div>
          <motion.p className="hero-note" {...rise(3, reduce)}>
            <Check size={16} strokeWidth={2.4} aria-hidden="true" />
            {coreMessage}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
