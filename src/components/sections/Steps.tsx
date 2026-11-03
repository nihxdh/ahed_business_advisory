import { useRef, type ReactNode } from "react";
import { motion, useScroll } from "motion/react";
import { Reveal, SectionHead } from "@/lib/motion";

// A numbered sequence on spruce; the timeline line fills in highlighter amber as the steps scroll past.
export function Steps({
  id,
  title,
  intro,
  steps,
}: {
  id?: string;
  title: string;
  intro?: ReactNode;
  steps: { title: string; body: string }[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.55"] });

  return (
    <section className="section approach" id={id}>
      <div className="wrap">
        <SectionHead title={title}>{intro}</SectionHead>
        <div ref={ref} className="steps-wrap">
          <ol className="steps" style={{ "--n": steps.length } as never}>
            {steps.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 0.08}>
                  <h3>{s.title}</h3>
                  <span className="when">Step {String(i + 1).padStart(2, "0")}</span>
                  <p>{s.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
          <motion.div className="steps-progress" aria-hidden="true" style={{ "--p": scrollYProgress } as never} />
        </div>
      </div>
    </section>
  );
}
