import { Compass, Gauge, Network, TrendingUp } from "lucide-react";
import { Reveal } from "@/lib/motion";
import { pillars } from "@/content";

const icons = [Compass, Gauge, Network, TrendingUp];

// The four ideas the brand is built around, on a deep green band with gold icons.
export function Pillars() {
  return (
    <section className="bg-spruce py-12 text-spruce-ink md:py-14" aria-label="What we stand for">
      <div className="wrap">
        <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => {
            const Icon = icons[i % icons.length];
            return (
              <li key={p.title}>
                <Reveal delay={i * 0.08} className="border-l border-spruce-ink/20 pl-5">
                  <Icon size={24} aria-hidden="true" className="text-mark" />
                  <h3 className="mt-4 text-fluid-2 font-semibold">{p.title}</h3>
                  <p className="mt-2 max-w-[26ch] text-spruce-ink-2">{p.body}</p>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
