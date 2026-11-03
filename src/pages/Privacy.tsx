import { PageHero } from "@/components/sections/PageHero";
import { Link, useTitle } from "@/lib/router";
import { contactDetails } from "@/content";

// Draft built only from the blueprint's privacy principles. The final privacy notice, terms and cookie wording
// must be approved (and reviewed by qualified counsel) before launch.
export function Privacy() {
  useTitle("Privacy & Terms");
  return (
    <>
      <PageHero eyebrow="Privacy & terms" title="Privacy notice, terms and disclaimers">
        Draft for review. The final wording will be approved before the website is launched.
      </PageHero>
      <section className="section">
        <div className="wrap grid max-w-[70ch] gap-10 text-pretty">
          <div>
            <h2 className="text-fluid-2">How we use your information</h2>
            <ul className="mt-4 grid list-disc gap-2 pl-5 text-ink-2">
              <li>We collect only the information needed to respond to your enquiry. Non-essential details are optional.</li>
              <li>Consent to marketing is asked for separately from processing your enquiry.</li>
              <li>We contact you on WhatsApp only if you agree to it.</li>
              <li>Please do not share confidential or sensitive information unless it is needed.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-fluid-2">Disclaimer</h2>
            <p className="mt-4 text-ink-2">
              Our work covers advisory, management accounting and operational finance support. Statutory audit, reserved
              professional work and regulated tax or legal services are delivered through appropriately qualified
              professionals.
            </p>
          </div>
          <div>
            <h2 className="text-fluid-2">Privacy questions</h2>
            <p className="mt-4 text-ink-2">
              Email <b className="text-ink">{contactDetails.email}</b> or use the <Link className="link" to="/lets-talk">enquiry form</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
