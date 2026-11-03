// Site copy. Only content from the two client documents is used here:
//   [C] docs/client-brief/ahed-web-page-contents.docx (page copy, service offerings, About, Industries, How We Work, Insights, Contact)
//   [B] docs/client-brief/strategic-business-advisor-website-blueprint.docx (positioning, sitemap, homepage order, approach,
//       audiences, advisor profile, enquiry form fields, service question bank)
// Where the two differ, the blueprint [B] is treated as the master. Edit copy here rather than in the components.
import {
  Building2, ChartLine, Code, Cog, Factory, Hotel, MonitorCog, Rocket, Settings, ShoppingBag, Store, Target, Users,
  Wallet, type LucideIcon,
} from "lucide-react";
import strategyImg from "@/assets/services/strategy.webp";
import performanceImg from "@/assets/services/performance.webp";
import peopleImg from "@/assets/services/people.webp";
import digitalImg from "@/assets/services/digital.webp";
import financeImg from "@/assets/services/finance.webp";
import managedImg from "@/assets/services/managed.webp";

export const cta = { primary: "Let's Discuss Your Business", secondary: "Explore Our Services", enquire: "Request an Initial Discussion" };

// [B] positioning; [C] core message and belief
export const positioning =
  "Strategic advisory and business transformation support for organisations seeking clarity, stronger performance and sustainable growth.";
export const heroSubhead =
  "Strategic advisory that connects business direction with the systems, people and execution needed to deliver it.";
export const brandPromise = "Practical thinking, structured solutions and implementation-focused support.";
export const coreMessage = "We help businesses make the transition from ambition to structured, sustainable performance.";
export const belief =
  "Better businesses are built when sound strategy is supported by capable people, disciplined execution and systems that work.";

export interface Service {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  image: string;
  imageAlt: string;
  headline: string;
  intro?: string;
  offerings: string[];
  focus: { label: string; items: string[] };
  questions: { label: string; items: string[] };
  agreement?: string[];
  outcome: string;
  note?: string;
}

export const services: Service[] = [
  {
    slug: "strategy-and-growth",
    title: "Strategy & Growth",
    summary: "Define the direction, identify growth opportunities and translate business ambitions into clear priorities and executable plans.",
    tags: ["Business strategy", "Growth planning", "Market expansion", "Operating models"],
    image: strategyImg,
    imageAlt: "Leadership team discussing strategy goals in front of a whiteboard and market dashboards",
    headline: "Set a Clear Direction for Sustainable Growth.",
    offerings: [
      "Corporate and business strategy",
      "Business model development",
      "Market entry and geographic expansion",
      "Growth and commercial strategy",
      "Product and channel strategy",
      "Strategic planning and prioritisation",
      "Organisation and operating model alignment",
      "Business establishment and re-engineering",
      "Family business professionalisation and governance support",
    ],
    focus: { label: "Typical outputs", items: ["Strategy map", "Market assessment", "Growth roadmap", "KPI framework"] },
    questions: {
      label: "Typical questions we help answer",
      items: [
        "Where should we focus our growth?",
        "Which products, markets or customers deserve priority?",
        "Are our resources aligned with our objectives?",
        "How do we turn a strategic plan into accountable action?",
      ],
    },
    outcome: "A clear direction, prioritised initiatives, defined responsibilities and a practical roadmap.",
  },
  {
    slug: "performance-improvement",
    title: "Performance Improvement",
    summary: "Improve the way the business operates by addressing inefficiencies, strengthening processes and making performance more measurable.",
    tags: ["Process redesign", "Cost optimisation", "Productivity", "Performance management"],
    image: performanceImg,
    imageAlt: "Team reviewing a performance dashboard on a large screen",
    headline: "Make Your Business Work Better.",
    offerings: [
      "Business process review and redesign",
      "Operational efficiency",
      "Cost and productivity improvement",
      "Sales process improvement",
      "Supply chain and procurement review",
      "KPI and performance management",
      "SOP development",
      "Management reporting and MIS",
      "Business re-engineering",
      "Continuous improvement programmes",
    ],
    focus: {
      label: "How we work on it",
      items: ["Operational diagnosis", "Process and productivity review", "Cost, quality and service metrics", "Improvement roadmap", "Implementation support"],
    },
    questions: {
      label: "Questions we will explore with you",
      items: [
        "Which processes are underperforming?",
        "What are the main cost, quality, delivery or productivity issues?",
        "Are KPIs tracked?",
        "Is data available?",
      ],
    },
    outcome: "Better visibility, less process friction, stronger controls and improved use of resources.",
  },
  {
    slug: "people-and-change",
    title: "People & Change",
    summary: "Align organisational structure, leadership, talent and workplace practices with the needs of the business.",
    tags: ["Organisation design", "HR strategy", "Leadership", "Change management"],
    image: peopleImg,
    imageAlt: "Workshop participants mapping ideas on flip charts with sticky notes",
    headline: "Build the Organisation Your Strategy Needs.",
    offerings: [
      "Organisation structure and role clarity",
      "HR strategy and policy development",
      "Manpower planning",
      "Performance management",
      "Leadership development",
      "Talent acquisition process design",
      "Compensation and incentive frameworks",
      "Employee engagement and retention",
      "Learning and development",
      "Change management and culture",
      "HR process improvement",
    ],
    focus: {
      label: "How we work on it",
      items: ["Organisation structure", "Role clarity", "HR policies and systems", "Performance management", "Leadership and change adoption"],
    },
    questions: {
      label: "Questions we will explore with you",
      items: [
        "What is your approximate headcount?",
        "What is your current structure?",
        "Are there key role or accountability gaps?",
        "Do you have retention or performance concerns?",
        "Is any restructuring planned?",
      ],
    },
    outcome: "Clear accountability, capable teams, stronger leadership practices and better alignment between people and business goals.",
  },
  {
    slug: "digital-and-innovation",
    title: "Digital & Innovation",
    summary: "Identify where technology, automation and new ways of working can solve business problems and unlock new opportunities.",
    tags: ["Digital strategy", "ERP/CRM advisory", "Automation", "Innovation"],
    image: digitalImg,
    imageAlt: "Team working on laptops in front of ERP, cloud and analytics screens",
    headline: "Make Technology Work for Your Business.",
    offerings: [
      "Digital maturity assessment",
      "Digital transformation roadmap",
      "ERP/CRM requirements and selection advisory",
      "Business process automation",
      "MIS and dashboard design",
      "Workflow digitisation",
      "AI opportunity assessment",
      "Technology implementation coordination",
      "Digital adoption and change support",
      "Innovation and new business model development",
    ],
    focus: {
      label: "How we work on it",
      items: ["Process mapping", "Requirements", "ERP/CRM selection or improvement", "Implementation governance", "User adoption", "Reporting"],
    },
    questions: {
      label: "Questions we will explore with you",
      items: [
        "Which ERP, CRM or accounting tools do you use today?",
        "How many users are there?",
        "Which processes are covered?",
        "Where are the integration or reporting gaps?",
        "What is your implementation stage and budget?",
      ],
    },
    outcome: "Better-connected processes, improved information flow, reduced manual effort and more effective use of technology.",
  },
  {
    slug: "finance-and-accounting",
    title: "Finance & Accounting",
    summary: "Strengthen financial discipline, reporting and management information to support informed decisions and business control.",
    tags: ["Financial planning", "Management reporting", "Cost control", "Accounting processes"],
    image: financeImg,
    imageAlt: "Finance professional reviewing a balance sheet and profit and loss statement on two monitors",
    headline: "Turn Financial Information into Better Decisions.",
    offerings: [
      "Budgeting and forecasting",
      "Management accounts and MIS",
      "Cost and profitability analysis",
      "Cash-flow planning",
      "Working capital management",
      "Financial controls",
      "Finance process redesign",
      "Accounts receivable and payable processes",
      "Management reporting",
      "Finance system and ERP requirements",
      "Virtual finance management support",
    ],
    focus: {
      label: "How we work on it",
      items: ["Budgeting", "Cash-flow visibility", "Management accounts", "Internal controls", "Costing and decision support"],
    },
    questions: {
      label: "Questions we will explore with you",
      items: [
        "What reporting is available today?",
        "Is your main concern cash flow, costing, budgeting, controls or profitability?",
        "How current are the accounts?",
      ],
    },
    outcome: "Better financial visibility, disciplined cash management, clearer profitability and more reliable decision support.",
    note:
      "Our work covers advisory, management accounting and operational finance support. Statutory audit, reserved professional work and regulated tax or legal services are delivered through appropriately qualified professionals.",
  },
  {
    slug: "managed-services",
    title: "Managed Services",
    summary: "Help businesses organise and operate selected support functions through defined processes, appropriate expertise and clear service standards.",
    tags: ["Finance operations", "HR administration", "MIS support", "Process coordination"],
    image: managedImg,
    imageAlt: "Support team working at desks with reports on screen and a process flow on the whiteboard",
    headline: "Reliable Business Support, Built Around Your Needs.",
    intro:
      "The ongoing management or coordination of agreed business-support processes, using defined deliverables, reporting and service standards, delivered directly or through a reliable professional network.",
    offerings: [
      "Management reporting and MIS preparation",
      "Finance operations coordination",
      "Accounting process support",
      "HR administration and payroll coordination",
      "SOP and compliance-calendar administration",
      "CRM and sales-reporting support",
      "Vendor and procurement coordination",
      "Management review and action tracking",
      "Business process monitoring",
      "Outsourced functional coordination",
    ],
    focus: {
      label: "How we work on it",
      items: ["Functions supported", "Service levels", "Responsibilities", "Governance", "Pricing discussion process", "Suitability assessment"],
    },
    questions: { label: "", items: [] },
    agreement: [
      "What the service covers",
      "What you provide",
      "What we and our delivery team perform",
      "How frequently it is delivered",
      "The reports and outputs you receive",
      "What remains the responsibility of your team or your statutory professionals",
    ],
    outcome: "Dependable support functions without requiring you to build every capability internally.",
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

// [C] section 2 cards
export const challenges: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Target, title: "Unclear direction", body: "Align business priorities, resources and execution." },
  { icon: ChartLine, title: "Inconsistent performance", body: "Improve productivity, profitability and accountability." },
  { icon: Users, title: "People and structure gaps", body: "Build stronger teams, roles and leadership practices." },
  { icon: Settings, title: "Inefficient processes", body: "Simplify workflows and strengthen operational controls." },
  { icon: MonitorCog, title: "Underused technology", body: "Connect digital tools to real business needs." },
  { icon: Wallet, title: "Limited financial visibility", body: "Strengthen reporting, cash-flow visibility and decision support." },
];

// [B] homepage section 3
export const achievements = [
  "Clarity of direction",
  "Stronger operating performance",
  "Accountable teams",
  "Better management information",
  "Scalable systems",
  "Disciplined growth",
];

// [C] section 4
export const clientTypes = [
  { title: "Growing SMEs", body: "Businesses that need stronger management systems, clearer accountability and scalable processes." },
  { title: "Family-owned businesses", body: "Organisations seeking professionalisation, improved governance and a more structured approach to growth." },
  { title: "Established companies", body: "Businesses pursuing operational improvement, organisational change or digital transformation." },
  { title: "New ventures and expansion projects", body: "Promoters who need help building a business model, setting up functions and preparing for market entry." },
];

// [B] section 3: audiences, their triggers and the question they bring
export const audiences = [
  { who: "Business owner / founder", trigger: "Growth has stalled, or the business depends too heavily on the owner.", ask: "Can you help clarify priorities, structure and growth options?" },
  { who: "CEO / General Manager", trigger: "Performance, accountability or execution gaps.", ask: "Can you diagnose issues and help implement improvements?" },
  { who: "Manufacturing leader", trigger: "Capacity, cost, quality, workforce or process issues.", ask: "Do you understand operational realities and factory performance?" },
  { who: "Sales / commercial leader", trigger: "Weak pipeline, pricing, territory or sales productivity.", ask: "Can you improve sales systems and measurable performance?" },
  { who: "Technology / software business", trigger: "Product, sales, delivery or customer-success issues.", ask: "Can you align commercial processes, teams and systems?" },
  { who: "Investor / new venture", trigger: "Business plan, structure, investment or expansion.", ask: "Can you support feasibility, planning and governance?" },
];

// [B] section 5 (industries and contexts) merged with [C] section 5 (sectors). Confirm against real experience before launch.
export const sectors: { icon: LucideIcon; label: string }[] = [
  { icon: Factory, label: "Manufacturing and processing" },
  { icon: Cog, label: "Industrial products" },
  { icon: ShoppingBag, label: "Food, FMCG, trading and distribution" },
  { icon: Store, label: "Retail and consumer businesses" },
  { icon: Code, label: "Software and technology services" },
  { icon: Building2, label: "Family-owned and promoter-led enterprises" },
  { icon: Rocket, label: "Start-ups, emerging ventures and growing SMEs" },
  { icon: Hotel, label: "Hospitality and service businesses" },
];

// [C] section 5: organise by business situation
export const situations = [
  "Establishing a new venture",
  "Preparing for rapid growth",
  "Improving profitability and operational control",
  "Professionalising a family business",
  "Reorganising management and responsibilities",
  "Implementing ERP, CRM or other business systems",
  "Strengthening finance and reporting",
  "Expanding into new markets",
];

// [B] "Our Approach" steps; descriptions use the wording of [C] "How we create value"
export const approach = [
  { title: "Discover", body: "Assess the business, its challenges, current capabilities and strategic objectives." },
  { title: "Diagnose", body: "Identify the underlying issues and the changes that matter most." },
  { title: "Design", body: "Develop a practical, prioritised roadmap." },
  { title: "Implement", body: "Support leadership and teams in putting agreed processes, systems and actions into practice." },
  { title: "Monitor & Improve", body: "Review progress against agreed measures, address gaps and strengthen long-term capability." },
];

// [C] section 6
export const principles = [
  { title: "Business-first thinking", body: "Recommendations are connected to commercial objectives and practical constraints." },
  { title: "Integrated perspective", body: "Strategy, people, operations, finance and technology are considered together." },
  { title: "Practical implementation", body: "Advice is designed to be applied, not simply presented in a report." },
  { title: "Proportionate solutions", body: "Systems and structures are designed around the organisation's size, maturity and resources." },
  { title: "Clear accountability", body: "Priorities, responsibilities and performance measures are established wherever appropriate." },
  { title: "Long-term capability", body: "The objective is to leave the organisation better equipped to manage its own growth." },
];

// [C] section 9 brand concepts
export const pillars = [
  { title: "Strategic", body: "Clear direction and informed decisions." },
  { title: "Performance-driven", body: "Measurable operational and commercial progress." },
  { title: "Integrated", body: "Connected people, processes, finance and technology." },
  { title: "Growth-oriented", body: "Stronger foundations for the next stage." },
];

// [C] section 6 (How We Work page)
export const engagementModels = [
  { name: "Business diagnostic", purpose: "Understand the present position, gaps and priorities." },
  { name: "Defined advisory project", purpose: "Address a specific problem or deliver a defined outcome." },
  { name: "Transformation assignment", purpose: "Support a broader business or functional improvement programme." },
  { name: "Retained advisory", purpose: "Provide ongoing strategic guidance and management reviews." },
  { name: "Managed services", purpose: "Deliver agreed recurring activities and reporting." },
  { name: "Business establishment", purpose: "Support a new venture from planning through launch and initial stabilisation." },
];
export const engagementCycle = ["Initial discussion", "Assessment", "Proposal", "Agreed scope", "Implementation support", "Periodic review"];

// [B] section 6.1 and homepage section 7. Verify every career and credential claim (dates, titles) before launch.
export const advisor = {
  role: "Founder and principal advisor",
  summary: "25+ years of experience across multinational and diverse business environments.",
  organisations: ["MSD (Merck)", "KPMG", "Saudi Aramco", "Subsequent leadership and advisory roles"],
  expertise: [
    "Corporate management",
    "Mergers and acquisitions",
    "Re-engineering",
    "Operations",
    "Strategic planning",
    "People and change",
    "Global expansion",
    "Franchise models",
  ],
  philosophy: "Connect business objectives with people, processes, technology and financial discipline.",
};

// [C] section 7 article list. Articles are not written yet.
export const articles = [
  { topic: "Management", title: "Why Growing Businesses Need Better Management Systems" },
  { topic: "Family business", title: "When Should a Family Business Professionalise Its Operations?" },
  { topic: "Performance", title: "How to Build an Effective KPI and MIS Framework" },
  { topic: "Digital", title: "Why ERP Implementation Often Fails to Solve Business Problems" },
  { topic: "Finance", title: "How to Improve Profitability Without Simply Cutting Costs" },
  { topic: "Sales", title: "Building a Sales Process That Does Not Depend on One Person" },
  { topic: "New ventures", title: "What Should Be Included in a 90-Day Business Establishment Plan?" },
  { topic: "Managed services", title: "How to Decide Between In-House Teams and Outsourced Services" },
  { topic: "Finance", title: "How Better Financial Reporting Supports Business Growth" },
  { topic: "Leadership", title: "Moving from Founder-Dependent Operations to Structured Management" },
];

// [B] section 7.2: extra enquiry categories beyond the six services, with their follow-up questions
export const enquiryExtras = [
  {
    slug: "ma-expansion",
    title: "M&A / Expansion",
    questions: [
      "Is it an acquisition, sale, partnership, franchise or geographic expansion?",
      "What is the target geography?",
      "What stage are discussions at?",
      "Do you need due diligence or feasibility support?",
    ],
  },
  {
    slug: "startup-investment",
    title: "Start-up / Investment",
    questions: [
      "What is the business concept, and who is the customer?",
      "What is the proposed model and ownership?",
      "What is the funding requirement and current stage?",
      "What are the milestones and decision timeline?",
    ],
  },
];

// Placeholder contact details: replace before launch ([C] asks for business email, telephone/WhatsApp and location).
export const contactDetails = {
  email: "hello@ahed.example",
  phone: "+00 0000 000000",
  whatsapp: "+00 0000 000000",
};
