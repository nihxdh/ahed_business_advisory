import { Fragment, useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { Reveal } from "@/lib/motion";
import { clientTypes } from "@/content";

// Height of the sticky site header (64px nav + 1px border).
const HEADER = 65;

const tones = [
  { card: "bg-surface text-ink border-line", sub: "text-ink-2" },
  { card: "bg-spruce text-spruce-ink border-spruce", sub: "text-spruce-ink-2" },
  { card: "bg-mark text-mark-ink border-mark", sub: "text-mark-ink/75" },
  { card: "bg-ink text-paper border-ink", sub: "text-paper/70" },
];

function StackCard({ item, i, top, pad, progress }: { item: (typeof clientTypes)[number]; i: number; top: number; pad: number; progress: MotionValue<number> }) {
  // Earlier cards shrink slightly as later ones slide over them.
  const n = clientTypes.length;
  const scale = useTransform(progress, [i / n, 1], [1, 1 - (n - 1 - i) * 0.04]);
  const tone = tones[i % tones.length];
  return (
    <div className="sticky" style={{ top: top + i * 22, paddingBottom: pad }}>
      <motion.article
        style={{ scale }}
        className={`grid origin-top items-center gap-6 rounded-2xl border p-5 md:grid-cols-[auto_minmax(0,1fr)] md:gap-10 md:p-8 ${tone.card}`}
      >
        <span className="font-display text-fluid-4 leading-none font-bold opacity-90">{String(i + 1).padStart(2, "0")}</span>
        <div>
          <h3 className="text-fluid-2">{item.title}</h3>
          <p className={`mt-3 max-w-[56ch] text-pretty ${tone.sub}`}>{item.body}</p>
        </div>
      </motion.article>
    </div>
  );
}

// Stacking cards: the heading pins under the site header, each client type pins under the heading and the next
// one slides over it. Once the stack is complete the heading is lifted in step with the cards, so they leave
// together and no card slides underneath the heading.
export function WhoWeServe() {
  const ref = useRef<HTMLDivElement>(null);
  const head = useRef<HTMLDivElement>(null);
  const [headH, setHeadH] = useState(96);
  const [cardH, setCardH] = useState<number[]>([]);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // When the stack releases, the cards' container bottom rises above the last card's pinned bottom edge;
  // move the heading up by the same amount. Driven by the scroll event directly so it never lags a frame.
  useLayoutEffect(() => {
    const update = () => {
      const stack = ref.current;
      const el = head.current;
      const last = stack?.lastElementChild?.firstElementChild as HTMLElement | null | undefined;
      if (!stack || !el || !last) return;
      const pinnedBottom = HEADER + headH + (clientTypes.length - 1) * 22 + last.offsetHeight;
      const lift = Math.min(0, stack.getBoundingClientRect().bottom - pinnedBottom);
      el.style.transform = lift ? `translateY(${lift}px)` : "";
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [headH, cardH]);

  // Each pinned card is padded so all of them end on the same line as the last card. That way every card is released
  // at the same moment (none slides up under the heading early). The scroll runway between cards is a separate spacer.
  useLayoutEffect(() => {
    const stack = ref.current;
    if (!stack) return;
    const articles = [...stack.querySelectorAll("article")];
    const measure = () => setCardH(articles.map((a) => a.offsetHeight));
    measure();
    const ro = new ResizeObserver(measure);
    articles.forEach((a) => ro.observe(a));
    return () => ro.disconnect();
  }, []);
  const n = clientTypes.length;
  const lastH = cardH[n - 1] ?? 0;
  const padFor = (i: number) => (cardH.length ? (n - 1 - i) * 22 + Math.max(0, lastH - cardH[i]) : 0);

  // The heading wraps differently at each width, so measure it to know where the cards should stop.
  useLayoutEffect(() => {
    const el = head.current;
    if (!el) return;
    const measure = () => setHeadH(el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section className="section" aria-labelledby="who-title">
      <div className="wrap">
        <div ref={head} className="sticky z-10 bg-paper pt-4 pb-6 md:pb-8" style={{ top: HEADER }}>
          <Reveal>
            <h2 id="who-title" className="max-w-[24ch] text-fluid-3 text-balance">
              Advisory for businesses at different stages of growth
            </h2>
          </Reveal>
        </div>
        <div ref={ref} className="relative">
          {clientTypes.map((item, i) => (
            <Fragment key={item.title}>
              <StackCard item={item} i={i} top={HEADER + headH} pad={padFor(i)} progress={scrollYProgress} />
              {i < n - 1 && <div className="h-[14vh]" aria-hidden="true" />}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
