import { BarChart3, Compass, Gauge, Layers, TrendingUp, UserCheck } from "lucide-react";
import { Reveal } from "@/lib/motion";
import { achievements } from "@/content";

const icons = [Compass, Gauge, UserCheck, BarChart3, Layers, TrendingUp];

// "What we help achieve": six outcomes on a deep green band with gold icons.
export function Outcomes() {
  return (
    <section className="bg-spruce py-[clamp(3rem,6vw,5rem)] text-spruce-ink" aria-labelledby="outcomes-title">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow !text-mark">What we help achieve</p>
          <h2 id="outcomes-title" className="max-w-[24ch] text-fluid-3 text-balance">Stronger, more scalable businesses</h2>
        </Reveal>
        <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-spruce-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => {
            const Icon = icons[i % icons.length];
            return (
              <li key={a} className="bg-spruce">
                <Reveal delay={(i % 3) * 0.08} className="flex items-center gap-4 p-6">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-mark/15 text-mark">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="font-display text-fluid-1 font-semibold">{a}</span>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
