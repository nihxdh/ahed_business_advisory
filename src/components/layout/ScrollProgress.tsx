import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

// Thin highlighter bar along the header showing how far through the page the visitor is.
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 220, damping: 40, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-x-0 -bottom-px h-[2px] origin-left bg-mark"
      style={{ scaleX: reduce ? scrollYProgress : smooth }}
    />
  );
}
