import { useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Link } from "@/lib/router";
import { ease } from "@/lib/motion";
import { contactDetails, cta, engagementCycle, enquiryExtras, sectors, services } from "@/content";

type Field = "name" | "email" | "industry" | "location" | "services" | "challenge" | "consent";
type Control = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const msgs: Record<Field, string> = {
  name: "Enter your full name.",
  email: "Enter a business email, like name@company.com.",
  industry: "Choose your industry, or Other.",
  location: "Enter your location.",
  services: "Choose at least one service.",
  challenge: "Tell us briefly about your challenge and the outcome you want.",
  consent: "Please confirm you have read the privacy notice.",
};

// [B] section 8 and 7.2: the six services plus the extra enquiry categories, each with its follow-up questions
const serviceOptions = [
  ...services.map((s) => ({ slug: s.slug, title: s.title, questions: s.questions.items })),
  ...enquiryExtras,
  { slug: "not-sure", title: "Not sure yet", questions: [] as string[] },
];
const sizeBands = ["1–10 employees", "11–50 employees", "51–200 employees", "201–500 employees", "More than 500 employees"];
const timelines = ["Now", "1–3 months", "3–6 months", "Exploring"];
const methods = ["Email", "Phone", "WhatsApp"];
const MAX = 1500;

// A block of the form under a ruled, numbered label ("01 — About you"), like sections of a printed form.
function Group({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <fieldset className="form-group">
      <legend>
        <span className="num" aria-hidden="true">{String(n).padStart(2, "0")}</span>
        {title}
      </legend>
      <div className="form-grid">{children}</div>
    </fieldset>
  );
}

function ContactForm({ service }: { service?: string }) {
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [firstName, setFirstName] = useState("");
  const [picked, setPicked] = useState<string[]>(serviceOptions.some((o) => o.slug === service) ? [service!] : []);
  const [chars, setChars] = useState(0);

  const setError = (name: Field, ok: boolean) =>
    setErrors((e) => {
      const next = { ...e };
      if (ok) delete next[name];
      else next[name] = msgs[name];
      return next;
    });

  const check = (input: Control) => {
    const ok = input.checkValidity();
    setError(input.name as Field, ok);
    return ok;
  };

  // Validate on blur, then live once a field has shown an error.
  const fieldProps = (name: Field) => ({
    id: "f-" + name,
    name,
    required: true,
    onBlur: (e: { currentTarget: Control }) => check(e.currentTarget),
    onInput: (e: { currentTarget: Control }) => {
      if (errors[name]) check(e.currentTarget);
    },
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `f-${name}-err` : undefined,
  });

  const err = (name: Field) => errors[name] && <span className="err" id={`f-${name}-err`}>{errors[name]}</span>;

  const toggle = (slug: string) => {
    const next = picked.includes(slug) ? picked.filter((s) => s !== slug) : [...picked, slug];
    setPicked(next);
    if (errors.services) setError("services", next.length > 0);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const req = [...form.querySelectorAll<Control>("[required]")];
    const fieldsOk = req.map(check).every(Boolean);
    const servicesOk = picked.length > 0;
    setError("services", servicesOk);
    if (!fieldsOk || !servicesOk) {
      const firstBad = req.find((i) => !i.checkValidity()) ?? form.querySelector<HTMLInputElement>('[name="service"]');
      firstBad?.focus();
      return;
    }
    setFirstName((form.elements.namedItem("name") as HTMLInputElement).value.trim().split(" ")[0]);
    setStatus("sending");
    // TODO: replace this timeout with a real request (CRM lead + acknowledgement email, per the blueprint).
    setTimeout(() => setStatus("sent"), 1100);
  };

  if (status === "sent") {
    const chosen = serviceOptions.filter((o) => picked.includes(o.slug)).map((o) => o.title);
    return (
      <div className="enquiry">
        <motion.div
          className="success"
          role="status"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease }}
        >
          <p className="success-label"><Check size={16} strokeWidth={3} aria-hidden="true" /> Enquiry received</p>
          <h2>Thank you, {firstName}.</h2>
          <p>We will review your enquiry and contact you to arrange an introductory discovery call.</p>
          {chosen.length > 0 && <p className="text-fluid-xs">Services: {chosen.join(", ")}</p>}
          <Link className="link mt-2 font-semibold" to="/services">{cta.secondary}</Link>
        </motion.div>
      </div>
    );
  }

  return (
    <form className="enquiry" noValidate onSubmit={onSubmit} aria-labelledby="enquiry-title">
      <div className="enquiry-head">
        <h2 id="enquiry-title">Your enquiry</h2>
        <p>Required unless marked optional or recommended.</p>
      </div>

      <Group n={1} title="About you">
        <div className="field" data-invalid={errors.name ? "" : undefined}>
          <label htmlFor="f-name">Full name</label>
          <input {...fieldProps("name")} autoComplete="name" />
          {err("name")}
        </div>
        <div className="field" data-invalid={errors.email ? "" : undefined}>
          <label htmlFor="f-email">Business email</label>
          <input {...fieldProps("email")} type="email" autoComplete="email" />
          {err("email")}
        </div>
        <div className="field">
          <label htmlFor="f-phone">Phone / WhatsApp <span className="opt">(optional)</span></label>
          <input id="f-phone" name="phone" type="tel" autoComplete="tel" />
          <label className="check-line">
            <input type="checkbox" name="whatsappConsent" />
            You may contact me on WhatsApp
          </label>
        </div>
        <div className="field">
          <label htmlFor="f-designation">Designation <span className="opt">(recommended)</span></label>
          <input id="f-designation" name="designation" autoComplete="organization-title" placeholder="Owner, director, CEO, manager…" />
        </div>
      </Group>

      <Group n={2} title="Your business">
        <div className="field">
          <label htmlFor="f-company">Company name <span className="opt">(recommended)</span></label>
          <input id="f-company" name="company" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="f-website">Company website <span className="opt">(optional)</span></label>
          <input id="f-website" name="website" inputMode="url" autoComplete="url" />
        </div>
        <div className="field" data-invalid={errors.industry ? "" : undefined}>
          <label htmlFor="f-industry">Industry</label>
          <select {...fieldProps("industry")} defaultValue="" onChange={(e) => check(e.currentTarget)}>
            <option value="">Choose one</option>
            {sectors.map((s) => <option key={s.label}>{s.label}</option>)}
            <option>Other</option>
          </select>
          {err("industry")}
        </div>
        <div className="field" data-invalid={errors.location ? "" : undefined}>
          <label htmlFor="f-location">Location</label>
          <input {...fieldProps("location")} autoComplete="address-level2" placeholder="City, country" />
          {err("location")}
        </div>
        <div className="field">
          <label htmlFor="f-size">Employee band <span className="opt">(optional)</span></label>
          <select id="f-size" name="size" defaultValue="">
            <option value="">Prefer not to say</option>
            {sizeBands.map((b) => <option key={b}>{b}</option>)}
          </select>
        </div>
      </Group>

      <Group n={3} title="What you need">
        <fieldset className="field full" data-invalid={errors.services ? "" : undefined} aria-describedby={errors.services ? "f-services-err" : undefined}>
          <legend>Service required <span className="opt">(choose one or more)</span></legend>
          <div className="check-grid">
            {serviceOptions.map((o) => (
              <label key={o.slug} className="check-line">
                <input type="checkbox" name="service" value={o.title} checked={picked.includes(o.slug)} onChange={() => toggle(o.slug)} />
                {o.title}
              </label>
            ))}
          </div>
          {err("services")}
        </fieldset>

        <AnimatePresence initial={false}>
          {serviceOptions
            .filter((o) => picked.includes(o.slug) && o.questions.length > 0)
            .map((o) => (
              <motion.div
                key={o.slug}
                className="field full overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease }}
              >
                <div className="followup">
                  <label htmlFor={`f-detail-${o.slug}`}>{o.title}: a few questions <span className="opt">(optional)</span></label>
                  <ul>{o.questions.map((q) => <li key={q}>{q}</li>)}</ul>
                  <textarea id={`f-detail-${o.slug}`} name={`detail-${o.slug}`} rows={3} placeholder="Answer any that help" />
                </div>
              </motion.div>
            ))}
        </AnimatePresence>

        <div className="field full" data-invalid={errors.challenge ? "" : undefined}>
          <label htmlFor="f-challenge">Your challenge and desired outcome</label>
          <textarea {...fieldProps("challenge")} maxLength={MAX} onChange={(e) => setChars(e.currentTarget.value.length)} />
          <span className="help flex justify-between gap-4">
            <span>Please do not include confidential or sensitive information.</span>
            <span className="tabular-nums">{chars} / {MAX}</span>
          </span>
          {err("challenge")}
        </div>
        <div className="field">
          <label htmlFor="f-timeline">Start timeline <span className="opt">(optional)</span></label>
          <select id="f-timeline" name="timeline" defaultValue="">
            <option value="">Choose one</option>
            {timelines.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="f-budget">Budget range <span className="opt">(optional)</span></label>
          <input id="f-budget" name="budget" placeholder="A broad range, or “prefer to discuss”" />
        </div>
      </Group>

      <Group n={4} title="How we contact you">
        <fieldset className="field full">
          <legend>Preferred contact method</legend>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {methods.map((m, i) => (
              <label key={m} className="check-line">
                <input type="radio" name="method" value={m} defaultChecked={i === 0} />
                {m}
              </label>
            ))}
          </div>
        </fieldset>
        <div className="field full" data-invalid={errors.consent ? "" : undefined}>
          <label className="check-line">
            <input {...fieldProps("consent")} type="checkbox" onChange={(e) => check(e.currentTarget)} />
            <span>I have read the <Link className="link" to="/privacy">privacy notice</Link> and agree to my details being used to respond to this enquiry.</span>
          </label>
          {err("consent")}
          <label className="check-line">
            <input type="checkbox" name="marketing" />
            <span>Send me insights and updates <span className="opt">(optional)</span></span>
          </label>
        </div>
      </Group>

      <div className="form-foot">
        <p>We will review your enquiry before suggesting next steps.</p>
        <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? (<><span className="spinner" aria-hidden="true" />Sending</>) : cta.enquire}
        </button>
      </div>
    </form>
  );
}

// Side column: contact routes, what happens after an enquiry, and how information is handled.
// Plain text under ruled labels, all from the client documents.
function Aside() {
  return (
    <aside className="enquiry-aside lg:sticky lg:top-24 lg:self-start">
      {/* Placeholder contact details: replace before launch. */}
      <section>
        <h2>Contact</h2>
        <dl>
          <div><dt>Email</dt><dd>{contactDetails.email}</dd></div>
          <div><dt>Phone</dt><dd>{contactDetails.phone}</dd></div>
          <div><dt>WhatsApp</dt><dd>{contactDetails.whatsapp}</dd></div>
        </dl>
      </section>
      <section>
        <h2>What happens next</h2>
        <ol>
          {engagementCycle.slice(0, 4).map((step, i) => (
            <li key={step}><span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>{step}</li>
          ))}
        </ol>
        <p>Scope, duration, deliverables and fees are agreed for each assignment.</p>
      </section>
      <section>
        <h2>Your information</h2>
        <p>
          We collect only the information needed for your enquiry. Marketing consent is asked for separately.{" "}
          <Link className="link" to="/privacy">Privacy notice</Link>
        </p>
      </section>
    </aside>
  );
}

export function Contact({ service }: { service?: string }) {
  return (
    <>
      <PageHero eyebrow="Let's talk" title="Tell Us Where Your Business Needs to Go.">
        Tell us what is changing in your business. Start with a focused discovery conversation.
      </PageHero>
      <section className="section" id="contact">
        <div className="wrap grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <Aside />
          <ContactForm service={service} />
        </div>
      </section>
    </>
  );
}
