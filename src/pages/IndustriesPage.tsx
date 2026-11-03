import { PageHero } from "@/components/sections/PageHero";
import { Sectors } from "@/components/sections/Sectors";
import { Audiences } from "@/components/sections/Audiences";
import { Situations } from "@/components/sections/Situations";
import { CtaBand } from "@/components/sections/CtaBand";
import { useTitle } from "@/lib/router";

export function IndustriesPage() {
  useTitle("Industries & Business Challenges");
  return (
    <>
      <PageHero eyebrow="Industries" title="Industries & Business Challenges">
        Who we serve, the types of organisations we support and the situations where we add value.
      </PageHero>
      <Sectors />
      <Audiences />
      <Situations />
      <CtaBand />
    </>
  );
}
