import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

export const ease = [0.2, 0.7, 0.2, 1] as const;

// Fade and rise into view once. MotionConfig reducedMotion="user" drops the rise for visitors who ask.
export function Reveal({ delay = 0, children, ...rest }: HTMLMotionProps<"div"> & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({ title, children }: { title: ReactNode; children?: ReactNode }) {
  return (
    <Reveal className="section-head">
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </Reveal>
  );
}
