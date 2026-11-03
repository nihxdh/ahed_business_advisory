import { PageHero } from "@/components/sections/PageHero";
import { Steps } from "@/components/sections/Steps";
import { Engagements } from "@/components/sections/Engagements";
import { CtaBand } from "@/components/sections/CtaBand";
import { Link, useTitle } from "@/lib/router";
import { approach, cta } from "@/content";

export function OurApproach() {
  useTitle("Our Approach");
  return (
    <>
      <PageHero
        eyebrow="Our approach"
        title="From understanding the problem to making progress"
        actions={<Link className="btn btn-primary" to="/lets-talk">{cta.primary}</Link>}
      >
        Assessment, recommendations, implementation support, measurement and continuous improvement.
      </PageHero>
      <Steps title="Discover, Diagnose, Design, Implement, Monitor & Improve" steps={approach} />
      <Engagements />
      <CtaBand />
    </>
  );
}
