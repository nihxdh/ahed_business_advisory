import { PageHero } from "@/components/sections/PageHero";
import { Link, useTitle } from "@/lib/router";

export function NotFound() {
  useTitle("Page not found");
  return (
    <PageHero
      eyebrow="404"
      title="This page could not be found"
      actions={
        <>
          <Link className="btn btn-primary" to="/">Go to the homepage</Link>
          <Link className="btn btn-ghost" to="/services">Explore Our Services</Link>
        </>
      }
    >
      The link may be out of date, or the page may have moved.
    </PageHero>
  );
}
