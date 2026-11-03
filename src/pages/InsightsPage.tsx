import { PageHero } from "@/components/sections/PageHero";
import { Articles } from "@/components/sections/Articles";
import { CtaBand } from "@/components/sections/CtaBand";
import { useTitle } from "@/lib/router";

export function InsightsPage() {
  useTitle("Insights");
  return (
    <>
      <PageHero eyebrow="Insights & resources" title="Insights & Resources">
        Practical articles, leadership perspectives, business improvement guides and case studies.
      </PageHero>
      <Articles title="Articles" />
      <CtaBand />
    </>
  );
}
