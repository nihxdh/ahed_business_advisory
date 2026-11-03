import { Contact } from "@/components/enquiry/Contact";
import { useLocation, useTitle } from "@/lib/router";

export function LetsTalk() {
  useTitle("Let's Talk");
  const { search } = useLocation();
  return <Contact service={new URLSearchParams(search).get("service") ?? undefined} />;
}
