import { Logo } from "@/components/layout/Logo";
import { Link } from "@/lib/router";
import { coreMessage, services } from "@/content";

const columns = [
  { title: "Services", links: services.map((s) => [s.title, `/services/${s.slug}`]) },
  { title: "Firm", links: [["About", "/about"], ["Our Approach", "/our-approach"], ["Industries", "/industries"], ["Insights", "/insights"]] },
  { title: "Contact", links: [["Let's Talk", "/lets-talk"], ["Privacy & Terms", "/privacy"]] },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link className="brand" to="/" aria-label="Ahed home"><Logo height={44} /></Link>
            <p className="about">{coreMessage}</p>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <h4>{c.title}</h4>
              <ul>
                {c.links.map(([label, href]) => (
                  <li key={label}><Link to={href}>{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-[80ch] text-fluid-xs text-ink-2">
          Ahed provides advisory, management accounting and operational finance support. Statutory audit, reserved
          professional work and regulated tax or legal services are delivered through appropriately qualified professionals.
        </p>
        <div className="footer-base">
          <span>&copy; 2026 Ahed. All rights reserved.</span>
          <a className="link" href="#top">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
