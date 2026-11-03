import { ArrowRight } from "lucide-react";
import { Reveal, SectionHead } from "@/lib/motion";
import { Link } from "@/lib/router";
import { articles } from "@/content";

// Planned articles; rows become links once each article is published.
export function Articles({ limit, title = "Insights" }: { limit?: number; title?: string }) {
  const list = limit ? articles.slice(0, limit) : articles;
  return (
    <section className="section" id="articles">
      <div className="wrap">
        <SectionHead title={title}>Practical articles, diagnostic checklists and business perspectives.</SectionHead>
        <ul className="posts">
          {list.map((a, i) => (
            <li key={a.title}>
              <Reveal delay={Math.min(i, 4) * 0.05}>
                <div className="row">
                  <span className="text-fluid-xs font-semibold text-accent">{a.topic}</span>
                  <div><h3>{a.title}</h3></div>
                  <span className="len">Coming soon</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        {limit && (
          <Link className="mt-8 inline-flex items-center gap-2 font-semibold text-accent underline-offset-4 hover:underline" to="/insights">
            All insights <ArrowRight size={16} aria-hidden="true" />
          </Link>
        )}
      </div>
    </section>
  );
}
