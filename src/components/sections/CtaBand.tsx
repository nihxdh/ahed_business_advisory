import { ArrowRight } from "lucide-react";
import { Link } from "@/lib/router";
import { Reveal } from "@/lib/motion";
import { cta } from "@/content";

// Closing call to action, shared by every page.
export function CtaBand({
  title = "Let's discuss what your business needs next.",
  body = "Whether you are planning your next stage of growth, improving performance or addressing challenges within a business function, the first step is to understand where you are and what needs to change.",
  primary = { label: cta.primary, to: "/lets-talk" },
  secondary = { label: cta.secondary, to: "/services" },
}: {
  title?: string;
  body?: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string } | null;
}) {
  return (
    <section className="bg-spruce py-[clamp(3rem,6vw,5rem)] text-spruce-ink">
      <Reveal className="wrap grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-16">
        <div>
          <h2 className="max-w-[20ch] text-fluid-3 text-balance">{title}</h2>
          <p className="mt-5 max-w-[56ch] text-fluid-1 leading-relaxed text-pretty text-spruce-ink-2">{body}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 lg:justify-end">
          <Link className="btn bg-mark text-mark-ink hover:bg-paper hover:text-ink" to={primary.to}>
            {primary.label}
          </Link>
          {secondary && (
            <Link className="inline-flex items-center gap-2 font-semibold text-spruce-ink underline-offset-4 hover:underline" to={secondary.to}>
              {secondary.label} <ArrowRight size={16} aria-hidden="true" />
            </Link>
          )}
        </div>
      </Reveal>
    </section>
  );
}
