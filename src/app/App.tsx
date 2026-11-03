import { MotionConfig } from "motion/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLocation } from "@/lib/router";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { ServicesPage } from "@/pages/ServicesPage";
import { ServiceDetail } from "@/pages/ServiceDetail";
import { OurApproach } from "@/pages/OurApproach";
import { IndustriesPage } from "@/pages/IndustriesPage";
import { InsightsPage } from "@/pages/InsightsPage";
import { LetsTalk } from "@/pages/LetsTalk";
import { Privacy } from "@/pages/Privacy";
import { NotFound } from "@/pages/NotFound";

function Page({ path }: { path: string }) {
  if (path === "/") return <Home />;
  if (path === "/about") return <About />;
  if (path === "/services") return <ServicesPage />;
  // "strategy-advisory" was the earlier name of this page.
  if (path === "/services/strategy-advisory") return <ServiceDetail slug="strategy-and-growth" />;
  if (path.startsWith("/services/")) return <ServiceDetail slug={path.slice("/services/".length)} />;
  if (path === "/our-approach" || path === "/how-we-work") return <OurApproach />;
  if (path === "/industries") return <IndustriesPage />;
  if (path === "/insights") return <InsightsPage />;
  if (path === "/lets-talk" || path === "/contact") return <LetsTalk />;
  if (path === "/privacy") return <Privacy />;
  return <NotFound />;
}

export default function App() {
  const { path } = useLocation();
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main key={path}>
        <Page path={path} />
      </main>
      <Footer />
    </MotionConfig>
  );
}
