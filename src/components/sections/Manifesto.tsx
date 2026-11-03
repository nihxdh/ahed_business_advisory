import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";

export type Segment = { t: string; mark?: boolean };

function Word({ children, mark, range, progress }: { children: string; mark?: boolean; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <>
      <motion.span style={{ opacity }} className={mark ? "hl" : undefined}>{children}{mark && " "}</motion.span>{!mark && " "}
    </>
  );
}

// Scroll-linked reading: each word inks in as the paragraph moves up the screen.
export function Manifesto({ label, segments }: { label: string; segments: Segment[] }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = segments.flatMap((s) => s.t.split(" ").map((w) => ({ w, mark: s.mark })));

  return (
    <section className="section" aria-label={label}>
      <div className="wrap grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,9fr)]">
        <p className="text-fluid-xs font-semibold text-ink-2 md:pt-3">{label}</p>
        <p ref={ref} className="manifesto font-display text-fluid-3 font-medium leading-[1.15] tracking-tight text-balance">
          {words.map((x, i) =>
            reduce ? (
              <span key={i} className={x.mark ? "hl" : undefined}>{x.w} </span>
            ) : (
              <Word key={i} mark={x.mark} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
                {x.w}
              </Word>
            ),
          )}
        </p>
      </div>
    </section>
  );
}

export const beliefSegments: Segment[] = [
  { t: "Better businesses are built when" },
  { t: "sound strategy", mark: true },
  { t: "is supported by" },
  { t: "capable people,", mark: true },
  { t: "disciplined execution", mark: true },
  { t: "and" },
  { t: "systems that work.", mark: true },
];
