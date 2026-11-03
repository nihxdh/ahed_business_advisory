import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Link } from "@/lib/router";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/our-approach", label: "Our Approach" },
  { href: "/industries", label: "Industries" },
  { href: "/insights", label: "Insights" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // Every page opens on a dark green section (home hero, inner page header, contact), so the header sits
  // transparently over it until the visitor scrolls or opens the menu.
  const overHero = !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={"site-header" + (scrolled ? " scrolled" : "") + (overHero ? " over-hero" : "")} id="top">
      <div className="wrap nav">
        <Link className="brand" to="/" aria-label="Ahed home">
          <Logo reverse={overHero} />
        </Link>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}><Link to={l.href}>{l.label}</Link></li>
          ))}
        </ul>
        <div className="nav-actions">
          <Link className="btn btn-primary" to="/lets-talk">Let's Talk</Link>
          <button
            className="icon-btn menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="mobileMenu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <Menu size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
      <nav
        className="mobile-menu"
        id="mobileMenu"
        hidden={!open}
        aria-label="Mobile"
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) setOpen(false);
        }}
      >
        <div className="wrap">
          {links.map((l) => (
            <Link key={l.href} to={l.href}>{l.label}</Link>
          ))}
          <Link className="btn btn-primary" to="/lets-talk">Let's Talk</Link>
        </div>
      </nav>
      <ScrollProgress />
    </header>
  );
}
