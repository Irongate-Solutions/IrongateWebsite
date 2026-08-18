# Website Sitemap — Irongate Solutions

> Generated: 2026-04-02
> Derived from: [MARKETING_STRATEGY.md](MARKETING_STRATEGY.md)

---

## Design Principles

- Every page speaks the language of food manufacturing operations, not software development
- No stock photos of people in business casual pointing at monitors — use real plant imagery where possible
- Clean, industrial aesthetic: confident, competent, no-nonsense
- Every page answers one question the ideal prospect is already asking
- Primary CTA on every page: "Let's Talk About Your Plant" (routes to Contact)

---

## Sitemap

```
/                               Home
/what-we-do                     What We Do (capabilities overview)
  /what-we-do/receiving         Receiving & Raw Materials
  /what-we-do/production        Production & Process Control
  /what-we-do/quality           Quality & Compliance
  /what-we-do/warehouse         Warehouse & Inventory
  /what-we-do/shipping          Shipping & Distribution
  /what-we-do/plant-intelligence  Plant Intelligence & Dashboards
/how-we-work                    How We Work (partnership model)
/results                        Results (case studies)
  /results/full-plant-integration  Case Study: Full-Plant Integration
/insights                       Insights (articles / thought leadership)
  /insights/{slug}              Individual article
/about                          About Us
/contact                        Contact / Start a Conversation
```

---

## Page-by-Page Specification

### `/` — Home

**Purpose:** In 10 seconds, the visitor knows: (1) what Maranatha does, (2) who it's for, and (3) that these people understand my world.

| Section | Content |
|---------|---------|
| **Hero** | Headline: *"We build the technology that runs food manufacturing plants — from the receiving dock to the shipping bay."* Subhead: one sentence about 20+ years, 250+ systems, embedded partnerships. Single CTA button. Background: real plant floor photo — stainless steel, conveyors, control screens. |
| **Problem statement** | 3–4 short paragraphs addressing the prospect's pain directly. "Your plant runs on a patchwork of spreadsheets, legacy software, and tribal knowledge. Compliance takes days instead of minutes. Data lives in silos. You re-enter the same numbers four times." No jargon. Just recognition. |
| **Visual data flow** | A simple, animated or illustrated diagram showing how data flows through a plant: raw material delivery &rarr; receiving &rarr; lab &rarr; production &rarr; quality &rarr; warehouse &rarr; shipping. Caption: *"We've built every piece of this. They all talk to each other."* This replaces a traditional "services" grid. |
| **Outcomes strip** | 3–4 bold stats or outcome statements. Examples: "Recall response: 72 hours &rarr; 20 minutes" / "Zero manual data re-entry across 12 departments" / "Audit-ready documentation generated automatically" / "10+ year partnership, 220+ integrated systems" |
| **Industries** | Short block: "We work with food manufacturers — dairy, meat, bakery, beverage, snack, and specialty processors. If your plant has receiving docks, batch processing, regulatory audits, and shipping bays — we should talk." |
| **CTA** | "Let's Talk About Your Plant" &rarr; `/contact` |

**What this page does NOT have:**
- Technology stack logos (.NET, SQL Server, etc.)
- A generic "services" grid (Web Development, Mobile Apps, Cloud...)
- Carousel of client logos (unless the clients approve and are recognizable in the industry)

---

### `/what-we-do` — What We Do

**Purpose:** Show the *operational areas* Maranatha covers. Organized by plant function, not by technology.

| Section | Content |
|---------|---------|
| **Intro** | "We don't sell individual applications. We build connected systems that cover your entire operation — and grow with you as your plant evolves." |
| **Capability cards** | Six cards, each linking to a sub-page. Each card has: icon (simple, industrial), area name, 2-sentence description phrased as an outcome, and a "Learn more" link. |
| **Integration callout** | "The real value isn't in any single system. It's in the fact that your receiving data, your lab results, your production records, and your shipping labels all come from one connected platform — no re-keying, no reconciliation, no gaps." |

#### `/what-we-do/receiving` — Receiving & Raw Materials

| Element | Content |
|---------|---------|
| **Headline** | "Know exactly what arrived, when, and whether it meets spec — before it touches your process." |
| **Capabilities** | Raw material receiving and inbound logistics, scale integration, driver check-in and bay management, lab sample tracking, RFID and barcode identification, supplier quality scoring, temperature and condition monitoring |
| **Pain points addressed** | Manual weight tickets, paper-based lab entry, no real-time visibility into incoming materials, supplier issues caught too late |
| **Outcome statement** | "Every load is weighed, sampled, tested, and recorded automatically. Your lab results are linked to the shipment before the driver leaves the bay." |

#### `/what-we-do/production` — Production & Process Control

| Element | Content |
|---------|---------|
| **Headline** | "Your lines, your recipes, your process — tracked in real time with zero clipboard data entry." |
| **Capabilities** | Production scheduling, batch and recipe management, ingredient and material tracking, process monitoring (temperature, pressure, time, pH), real-time production events, chart recorder replacement (paperless), equipment integration (scales, sensors, PLCs) |
| **Pain points addressed** | Operators writing on clipboards, production data entered hours or days after the fact, no connection between what was scheduled and what actually happened |
| **Outcome statement** | "Production data is captured at the point of action — at the line, at the vessel, in real time. Schedules, actuals, and variances are visible to everyone who needs them." |

#### `/what-we-do/quality` — Quality & Compliance

| Element | Content |
|---------|---------|
| **Headline** | "Audit-ready in minutes, not days. Traceability that actually traces." |
| **Capabilities** | Full batch traceability (raw material to finished good), SQF/FSMA/HACCP documentation automation, X-ray and metal detection integration, lab data management (micro, chemical, physical), environmental monitoring and swab tracking, regulatory audit support, recall simulation and execution |
| **Pain points addressed** | Three-day recall exercises, paper-based compliance binders, traceability gaps between departments, auditor requests that send people digging through filing cabinets |
| **Outcome statement** | "When an auditor asks 'show me every lot that used ingredient X from supplier Y on March 12,' the answer takes minutes — not a weekend." |

#### `/what-we-do/warehouse` — Warehouse & Inventory

| Element | Content |
|---------|---------|
| **Headline** | "Every unit, every pallet, every storage location — tracked from production to shipment." |
| **Capabilities** | Pallet tracking and labeling, storage location scanning, inventory management, aging and hold workflows, secondary processing operations (cutting, portioning, repack), RFID integration, barcode and label management |
| **Pain points addressed** | Lost pallets, manual inventory counts, no visibility into aging or on-hold product, secondary processing scheduled by gut feel |
| **Outcome statement** | "You know exactly what's in every storage location, how old it is, what status it has, and when it's scheduled to ship — without anyone walking the floor with a clipboard." |

#### `/what-we-do/shipping` — Shipping & Distribution

| Element | Content |
|---------|---------|
| **Headline** | "The right product, on the right truck, with the right paperwork — every time." |
| **Capabilities** | Shipping workflow management, PO review and validation, pallet selection and staging, label generation (customer-specific), ASN (Advanced Shipping Notice) generation, truck loading verification, co-product and byproduct shipping, remote shipping management |
| **Pain points addressed** | Wrong product on wrong truck, manual BOL creation, no electronic ASNs, customer chargebacks from labeling errors |
| **Outcome statement** | "From PO receipt to truck departure, every step is verified. Labels match specs. ASNs are sent automatically. Chargebacks drop to near zero." |

#### `/what-we-do/plant-intelligence` — Plant Intelligence & Dashboards

| Element | Content |
|---------|---------|
| **Headline** | "See your entire operation in real time — from the front office or the plant floor." |
| **Capabilities** | Real-time production dashboards, KPI monitoring, process limits and alerting (phone, email, screen), critical system monitoring, scheduled report generation, executive and leadership views, tablet-based floor displays |
| **Pain points addressed** | Finding out about problems hours after they happen, leadership relying on yesterday's numbers, no single view of plant performance |
| **Outcome statement** | "Your plant manager sees real-time yield on a wall monitor. Your quality lead gets an SMS when a process limit is breached. Your CEO gets a summary report at 6 AM. Nobody waits for a spreadsheet." |

---

### `/how-we-work` — How We Work

**Purpose:** Explain the partnership model. This is the page that differentiates Maranatha from every project-based dev shop.

| Section | Content |
|---------|---------|
| **Headline** | "We don't do projects. We do partnerships." |
| **The problem with projects** | "Most software companies scope a project, build it, hand it off, and move on. That works for a marketing website. It doesn't work for a manufacturing plant — because your plant changes. New products, new customers, new regulations, new equipment. Your technology needs to evolve with you." |
| **How Maranatha works** | Describe the embedded partnership model in 3 phases: |
| | **Phase 1 — Understand:** "We spend time on your plant floor. We watch your operators, talk to your supervisors, and learn your process. We don't start with a requirements document — we start with understanding." |
| | **Phase 2 — Build the foundation:** "We start where the pain is worst — usually one or two critical workflows. We build, deploy, train, and iterate until it's right. Then we expand." |
| | **Phase 3 — Grow together:** "Over months and years, we extend coverage across your operation. Each new system connects to what's already there. Your technology grows as your business grows." |
| **Timeline visual** | An illustrated timeline showing a real partnership arc: Year 1 (core production tracking) &rarr; Year 3 (quality + compliance) &rarr; Year 5 (full receiving-to-shipping) &rarr; Year 8 (dashboards, tablets, automation) &rarr; Year 10+ (continuous refinement). Caption: "This is what a real technology partnership looks like." |
| **What we don't do** | Short, honest block: "We're not the right fit if you need a single app built to spec. We're not a staff augmentation firm. We don't bid on RFPs. We partner with manufacturers who want a long-term technology relationship — and we pour ourselves into making that partnership work." |

---

### `/results` — Results

**Purpose:** Proof. But structured as stories, not a logo grid.

| Section | Content |
|---------|---------|
| **Intro** | "We measure our work by what changes on the plant floor — not by lines of code." |
| **Featured case study** | Large card linking to the full-plant integration story |
| **Outcome highlights** | Pull-quote stats from across clients (anonymized if needed): recall time reduction, data entry elimination, compliance automation, system uptime |
| **Testimonial** | One or two quotes from plant managers or operations leaders (not IT people) |

#### `/results/full-plant-integration` — Case Study: Full-Plant Integration

This is the anchor content piece. It should read like a *story*, not a spec sheet.

| Section | Content |
|---------|---------|
| **The plant** | Size, products, general context (anonymized as needed). Example framing: "A mid-size food manufacturer with multiple production lines, hundreds of SKUs, and a growing list of customer and regulatory requirements." |
| **The starting point** | What operations looked like before: paper logs, disconnected systems, manual processes, compliance pain |
| **The first problem** | What triggered the engagement — the specific pain that couldn't be ignored anymore |
| **The journey** | How the relationship evolved over 10+ years. Not a feature list — a narrative of problems encountered and solved, organized chronologically or by operational area |
| **Where they are now** | 220+ connected systems, full traceability, automated compliance, real-time visibility. What a day looks like now vs. then. |
| **By the numbers** | 3–5 measurable outcomes (recall time, data entry hours eliminated, systems integrated, years of partnership) |
| **Pull quote** | From the plant GM or operations lead |

---

### `/insights` — Insights

**Purpose:** Demonstrate domain expertise. Attract organic search from food manufacturing professionals searching for operational answers.

This is a blog, but never called a blog. "Insights" or "From the Plant Floor."

**Content categories (internal taxonomy, not shown on site):**

| Category | Example titles |
|----------|---------------|
| Compliance | "5 Questions Your SQF Auditor Will Ask About Traceability — And What Good Answers Look Like" |
| Operations | "Why Your Receiving Process Is Probably Costing You More Than You Think" |
| Technology | "What 'Paperless' Actually Means on a Food Manufacturing Floor" |
| Industry | "The Hidden Cost of Manual Data Entry in Food Manufacturing" |
| Perspective | "Why Your Plant Doesn't Need an ERP — It Needs an Operations Platform" |
| Recall readiness | "Could Your Plant Execute a Mock Recall in Under an Hour?" |
| Process | "Batch Traceability: What 'Good' Looks Like vs. What Most Plants Actually Have" |

**Publishing cadence:** One article per month is sufficient. Quality over quantity. Each article should be something a plant manager would forward to their team.

**Format:** 800–1200 words. No filler. Lead with the operational problem, explain what good looks like, close with a perspective — not a sales pitch.

---

### `/about` — About Us

**Purpose:** Credibility and human connection. Brief.

| Section | Content |
|---------|---------|
| **Who we are** | Founded in [year], based in Ohio. Small team, long tenures. "We've been building manufacturing technology for over two decades. Our people don't rotate off your account — the engineer who builds your system is the one who supports it." |
| **What we believe** | 2–3 short principles: long-term partnerships over short-term projects; understand the operation before writing the code; technology should make the plant floor simpler, not more complicated. |
| **Team** | Photos and brief bios. Emphasize tenure and domain experience ("15 years building systems for food manufacturers"), not technology credentials. |
| **Location** | Map, address. Reinforce proximity to major food manufacturing regions if applicable. |

**What this page does NOT have:**
- Client logos (unless explicitly approved)
- Technology stack badges
- Awards or certifications that mean nothing to a plant manager

---

### `/contact` — Contact / Start a Conversation

**Purpose:** Make it easy. Low friction. No 20-field form.

| Section | Content |
|---------|---------|
| **Headline** | "Let's Talk About Your Plant" |
| **Subhead** | "Tell us a little about your operation and what's on your mind. No RFPs, no questionnaires — just a conversation." |
| **Form fields** | Name, company, role, email, phone (optional), one open text field: "What's the biggest operational headache in your plant right now?" |
| **Alternative contact** | Direct phone number and email. "Prefer to just call? So do we." |
| **What to expect** | "We'll get back to you within one business day. First conversations are usually 30 minutes — we'll ask about your plant, your process, and where things are breaking down. No pitch decks." |

---

## Navigation Structure

```
Primary Nav (persistent):
  What We Do          /what-we-do
  How We Work         /how-we-work
  Results             /results
  Insights            /insights
  About               /about
  [CTA Button]        /contact          "Let's Talk"

Footer Nav:
  What We Do
    Receiving & Raw Materials
    Production & Process Control
    Quality & Compliance
    Warehouse & Inventory
    Shipping & Distribution
    Plant Intelligence & Dashboards
  Company
    About Us
    Contact
  Insights
    (latest 3 article titles)

  (c) Irongate Solutions
  Location line
```

---

## SEO & Content Strategy Notes

| Element | Guidance |
|---------|---------|
| **Target keywords** | Operational phrases, not tech phrases: "food manufacturing traceability software," "food plant production tracking," "food manufacturing compliance automation," "SQF traceability system," "food manufacturing recall readiness," "FSMA traceability solution," "food batch tracking software" |
| **Page titles** | Lead with outcome: "Audit-Ready Traceability for Food Manufacturers — Maranatha Software" not "Custom Software Development Services" |
| **Meta descriptions** | Speak to the plant manager: "We build the connected systems that run food manufacturing plants. Full traceability, automated compliance, real-time production visibility." |
| **Insights/articles** | Target long-tail searches plant managers actually run: "how to improve SQF audit traceability," "food plant receiving process improvement," "food manufacturing data entry reduction," "batch traceability best practices," "FSMA compliance food manufacturer" |
| **Schema markup** | LocalBusiness, Organization, Article (for insights) |
| **No blog post topics about** | .NET, WPF, cloud migration, agile methodology, or any other developer-facing content. The audience is plant operators and owners, not CTOs. |

---

## Pages NOT Included (and Why)

| Omitted Page | Reason |
|--------------|--------|
| Services (generic) | Replaced by operational-area pages under "What We Do." A generic services page invites comparison with every dev shop on the internet. |
| Technologies | No prospect cares. Listing ".NET, SQL Server, WPF" positions Maranatha as a commodity. |
| Portfolio / Project Gallery | Replaced by deep case studies. A gallery of 20 project thumbnails says "we do a lot of things." One deep story says "we transformed an operation." |
| Pricing | Custom partnerships don't have price lists. The contact conversation handles this. |
| Careers | Add only when actively hiring. A premature careers page on a small-company site signals aspiration over substance. |
| FAQ | If the site is clear, there are no frequently asked questions. Any questions worth answering become Insights articles. |
| Industries (multi-page) | Don't dilute the message with thin pages for ten sub-industries. The site speaks to food manufacturing broadly. As specific sub-verticals (dairy, meat, bakery, etc.) develop enough depth for their own story, add them as case studies under `/results`, not as separate industry pages. |
