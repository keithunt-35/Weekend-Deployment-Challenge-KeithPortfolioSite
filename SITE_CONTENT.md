# Keith Tugume — Complete Portfolio Website Content
> Ready to copy-paste into Next.js / React components or a CMS.
> All sections are labelled with the component/page they map to.

---

## TABLE OF CONTENTS
1. [Homepage Hero](#1-homepage-hero)
2. [About / Story](#2-about--story)
3. [Skills Section](#3-skills-section)
4. [Featured Projects](#4-featured-projects)
5. [Experience & Education Timeline](#5-experience--education-timeline)
6. [Achievements / Social Proof](#6-achievements--social-proof)
7. [Impossible List](#7-impossible-list)
8. [Contact Section](#8-contact-section)
9. [Blog / Notes Intro](#9-blog--notes-intro)
10. [Tennis / Personal Side](#10-tennis--personal-side)
11. [SEO — Titles, Meta Descriptions, Keywords](#11-seo)
12. [Suggested Site Structure / Navigation](#12-site-structure--navigation)

---

## 1. HOMEPAGE HERO

### Headline (H1)
```
Building the Tech Africa Deserves — One Line at a Time.
```

### Subheadline (H2)
```
Keith Tugume · Software Engineering Student · Web3 / IoT / ML Builder · Kampala, Uganda
```

### Pitch (1–2 sentences, below subheadline)
```
I write code that connects hardware to cloud, tokens to users, and ideas to reality.
Currently studying Software Engineering at Makerere University while shipping 12 projects in 12 months — and serving aces on the side.
```

### CTAs (buttons, in order of priority)
| Label | Action | Style |
|---|---|---|
| See My Work | Scroll / link → /projects | Primary (filled) |
| Read My Story | Link → /about | Secondary (outlined) |
| View GitHub | Opens github.com/keithunt-35 | Ghost / icon |

### Hero Badge / Tag chips (optional, below pitch)
```
#OpenSource  #Web3  #IoT  #MachineLearning  #FullStack  #Kampala
```

---

## 2. ABOUT / STORY

> Word count target: ~400 words. First-person. Human + professional.

---

### Section Label
```
About Me
```

### Body Copy

I didn't plan to become a developer. I planned to beat everyone on the tennis court.

Growing up in Uganda, I discovered quickly that the two things I loved most — competing and building — had more in common than I thought. Both demand patience, strategy, and the willingness to lose badly before you win cleanly. Tennis taught me to stay composed under pressure. Code taught me to embrace the debug.

I'm currently in my second year of a BSc in Software Engineering at Makerere University's College of Computing and Information Sciences in Kampala — one of East Africa's most competitive tech programs. Day to day, that means algorithms in the morning, hackathons on weekends, and sprint reviews with teammates who are just as sleep-deprived as I am.

My technical interests live at the edges: the physical-digital boundary of **IoT and embedded systems**, the trustless architecture of **Web3 and blockchain**, and the pattern-recognition power of **machine learning**. I got a front-row seat to all three during my internship at the IoT-ra Lab, where I worked on embedded hardware solutions and survived more than a few hardware hackathons where things literally smelled like smoke.

Beyond the lab, I serve as **Community Manager** for both the Web3 Club Makerere and the Google Developer Group on campus — which basically means I spend a lot of time convincing fellow students that decentralized systems and smart contracts are not, in fact, magic tricks. Watching someone's face light up when a concept clicks is one of my favorite feelings.

I'm also **Assistant Captain** of the Makerere tennis team. Leading a squad — even in a sport — sharpens skills that no IDE can teach: reading people, adjusting tactics mid-game, holding the team together when the score is close and the pressure is high.

My **Impossible List** keeps me honest. It's a living document of ambitious goals I refuse to let gather dust: launching a tech startup on the continent, competing in a professional tennis tournament, building a major open-source project, mastering Web3 development end-to-end, and shipping 12 meaningful projects in 12 months. Some of those goals terrify me — which is exactly the point.

I'm fluent in English, native in Runyoro, and conversational in Luganda. I build things in Java, Python, JavaScript, TypeScript, and Solidity. I take my coffee black and my pull requests reviewed.

If you're working on something ambitious and need someone who isn't afraid of hard problems — **let's talk.**

---

### Quick Stats (card strip below bio)
| Stat | Value |
|---|---|
| GitHub Repos | 50+ |
| Hackathons Survived | 5+ |
| Languages Spoken | 3 |
| Tennis Ranking | Top 5 @ Makerere |
| Projects / 12 months | 12 (in progress) |

---

## 3. SKILLS SECTION

### Section Label
```
What I Work With
```

### Subheading
```
A snapshot of the tools and technologies I reach for — and why.
```

---

### Group A: Programming Languages

| Language | Proficiency | Notes |
|---|---|---|
| **Java** | Advanced | Primary OOP language; used for backend services, Android prototypes, and data structures coursework |
| **Python** | Advanced | Go-to for ML pipelines, scripting, data wrangling, and rapid prototyping |
| **JavaScript / TypeScript** | Advanced | Full-stack JS ecosystem — React, Next.js, Node.js; TS for anything production-bound |
| **Solidity** | Intermediate | Smart contract development; ERC standards, DeFi patterns |
| **C / C++** | Intermediate | Embedded systems, microcontroller programming (Arduino, ESP32) |
| **Bash / Shell** | Intermediate | Automation, CI scripts, Linux administration |

---

### Group B: Specializations

| Area | Description |
|---|---|
| **Web3 & Blockchain** | Smart contracts (Solidity), wallet integration (ethers.js / wagmi), tokenomics design, DApp architecture on EVM-compatible chains |
| **IoT & Embedded Systems** | Sensor integration, firmware development, MQTT protocols, edge computing, hardware-software interfacing |
| **Machine Learning** | Supervised learning, NLP basics, model integration into web apps, scikit-learn, TensorFlow/Keras |
| **Full-Stack Web** | Next.js / React frontends, REST & GraphQL APIs, PostgreSQL / MongoDB, Prisma ORM, Vercel deployments |
| **Developer Tooling** | CLI tools, portfolio generators, productivity scripts, open-source contributions |

---

### Group C: Tools & Platforms

| Tool / Platform | Use Case |
|---|---|
| **Git / GitHub** | Version control, open-source collaboration, GitHub Actions CI |
| **Docker** | Containerization, local dev environments, deployment consistency |
| **Linux** | Primary development OS; Ubuntu / Debian, systemd, cron |
| **AWS** | S3, Lambda, EC2 — cloud deployments and serverless experiments |
| **Vercel / Netlify** | JAMstack deployments, edge functions |
| **Hardhat / Foundry** | Ethereum local dev, contract testing & deployment |
| **Figma** | Basic UI design, wireframing before building |

---

## 4. FEATURED PROJECTS

### Section Label
```
Things I've Built
```

### Subheading
```
A mix of experiments, side projects, and shipped tools — each one taught me something new.
```

---

### Project 1 — Portforge

**Year:** 2024
**Status:** Shipped / Open Source
**Stack:** Next.js 14, TypeScript, Tailwind CSS, GitHub API, Vercel

**The Problem**
Every developer needs a portfolio, but setting one up from scratch is a Friday evening lost to boilerplate, responsive CSS bugs, and deployment configs. Most templates are either too generic or too locked-in. I wanted a tool that actually reads your GitHub and builds something coherent in minutes.

**My Role**
Solo developer — from concept to design to deployment.

**The Solution**
Portforge is a Next.js-powered portfolio generator that ingests a user's GitHub username, pulls their pinned repos and profile via the GitHub REST API, and generates a polished, deployable portfolio site with a single command. Users pick a theme, add a bio, and get a live URL on Vercel.

**Key Technical Decisions**
- Server-side GitHub API fetching with ISR (Incremental Static Regeneration) for near-real-time repo data without rebuilding
- Theme system using CSS variables — new themes drop in as a JSON config
- Zero-database design: all data sourced live from GitHub + local YAML config

**Outcome / Impact**
Actively used by 10+ students at Makerere. Featured in the Web3 Club Makerere monthly showcase. My most-starred personal repo.

**Links**
- Demo: `portforge.vercel.app` *(or your live URL)*
- Repo: `github.com/keithunt-35/portforge`

---

### Project 2 — QuizSpark

**Year:** 2024
**Status:** Prototype / Hackathon
**Stack:** Next.js, OpenAI API, Solidity, ethers.js, Polygon Mumbai testnet, MongoDB

**The Problem**
Academic dishonesty is a real issue, especially in remote assessments. Certificates and quiz results are trivially forged. What if test results were cryptographically verifiable on-chain, and what if generating quality quiz content didn't require a textbook author?

**My Role**
Lead developer (team of 3). Responsible for smart contract design, AI integration, and frontend.

**The Solution**
QuizSpark is an AI-powered quiz platform where instructors submit a topic and difficulty level; OpenAI generates a question set. Students take the quiz and — on completion — their score and a content hash are minted as a soulbound token (SBT) on Polygon. Results are public, permanent, and unforgeable.

**Key Technical Decisions**
- Soulbound (non-transferable) ERC-721 variation to prevent result trading
- Content hashing with keccak256 so the exact quiz taken is verifiable on-chain
- Optimistic UI — quiz UX is snappy; blockchain write happens async post-submission

**Outcome / Impact**
Won "Most Innovative Use of Blockchain" at a campus hackathon. Presented to faculty as a proof-of-concept for decentralized academic credentials.

**Links**
- Repo: `github.com/keithunt-35/quizspark`
- Demo video: *(link to Loom / YouTube)*

---

### Project 3 — IoT Soil Monitor

**Year:** 2023–2024
**Status:** Lab Prototype (IoT-ra Internship)
**Stack:** ESP32, MicroPython, MQTT, Node-RED, InfluxDB, Grafana

**The Problem**
Small-scale farmers in Uganda often over- or under-irrigate because they're guessing. Commercial soil monitoring systems cost hundreds of dollars and require proprietary apps. We wanted to build something with ~$15 in hardware that a farming cooperative could actually deploy.

**My Role**
Embedded firmware developer and dashboard integration. Part of a 4-person team at IoT-ra Lab.

**The Solution**
A WiFi-connected soil moisture and temperature sensor node built on ESP32. The device reads sensor data every 5 minutes and publishes JSON payloads via MQTT to a local broker. Node-RED routes the data into InfluxDB, and Grafana renders a real-time dashboard. Alert thresholds trigger SMS via Africa's Talking API.

**Key Technical Decisions**
- Deep-sleep mode between readings extends battery life to ~3 weeks on 2 AA cells
- Local MQTT broker (no cloud dependency) — works with village WiFi routers
- Africa's Talking for SMS alerts: low cost, East Africa coverage, simple HTTP API

**Outcome / Impact**
Deployed in a 3-week pilot with a farming group near Kampala. Reduced over-irrigation incidents by an estimated 40% during the trial. Presented at an IoT-ra internal demo day.

**Links**
- Repo: `github.com/keithunt-35/soil-monitor`
- IoT-ra Lab: *(link)*

---

### Project 4 — Tennis Ladder App

**Year:** 2024
**Status:** Live (internal use, Makerere Tennis Club)
**Stack:** React, Node.js / Express, PostgreSQL, Prisma, Railway

**The Problem**
The Makerere tennis club managed its ranking ladder on a WhatsApp group and a handwritten sheet. Booking courts meant texting someone and hoping for a reply. As Assistant Captain, I got tired of the chaos and decided to fix it.

**My Role**
Solo developer + product owner (I was also the user).

**The Solution**
A web app for the Makerere tennis club that manages a live ranking ladder, allows members to log match results, challenges opponents, and books available court slots. Results auto-update rankings using an Elo-inspired rating algorithm.

**Key Technical Decisions**
- Elo rating over simple win/loss counting — rewards quality of opponent, not just volume
- Railway for deployment: $5/month, Postgres included, zero DevOps overhead
- Auth with magic-link email — no passwords to manage for club members

**Outcome / Impact**
60+ active club members onboarded. Match dispute rate dropped to near zero (results logged immediately, not recalled from memory). Still in active use.

**Links**
- Live app: `maktennis.up.railway.app` *(or your live URL)*
- Repo: `github.com/keithunt-35/tennis-ladder`

---

### Project 5 — AWS Serverless Examples

**Year:** 2024
**Status:** Open Source / Learning Resource
**Stack:** AWS Lambda, S3, API Gateway, DynamoDB, SAM CLI, Python

**The Problem**
AWS documentation is notoriously dense. I kept building the same Lambda + API Gateway patterns from scratch whenever I started a new cloud experiment. I decided to build a clean, well-commented reference repo I'd actually want to return to.

**My Role**
Solo author.

**The Solution**
A curated collection of 10+ AWS serverless patterns: REST APIs with Lambda + API Gateway, S3 event triggers, DynamoDB CRUD, scheduled jobs, and a basic serverless auth flow. Each pattern ships with a SAM template, a README, and a working deploy script.

**Key Technical Decisions**
- SAM (Serverless Application Model) over CDK for accessibility — lower barrier to entry for students new to IaC
- Python lambdas — readable, minimal boilerplate
- Every pattern has a `Makefile` with `make deploy` and `make destroy` targets

**Outcome / Impact**
Used as a reference in a GDG on Campus workshop on cloud fundamentals. 15+ stars on GitHub from other Makerere students.

**Links**
- Repo: `github.com/keithunt-35/aws-serverless-examples`

---

### Project 6 — Web3 Voting DApp (GDG Workshop)

**Year:** 2024
**Status:** Open Source / Educational
**Stack:** Solidity, Hardhat, React, ethers.js, MetaMask, Sepolia testnet

**The Problem**
Most Web3 tutorials are either too shallow ("here's a hello world contract") or too deep ("rebuild Uniswap"). For a GDG on Campus Web3 workshop, I needed a project just complex enough to teach real patterns — ballots, access control, event emission — without losing the room.

**My Role**
Workshop facilitator + sole developer of the example codebase.

**The Solution**
A transparent on-chain voting DApp where an admin deploys a contract, registers candidates, and opens a vote window. Any connected wallet can vote once. Results are tallied live. The React frontend uses ethers.js v6 with wallet connect via MetaMask.

**Key Technical Decisions**
- `require` guards and `onlyOwner` modifier to teach access control
- Event emission + frontend event listeners to teach the blockchain event model
- Hardhat local network for dev, Sepolia for live demo — workshop attendees could deploy their own instance in 10 minutes

**Outcome / Impact**
20+ students deployed their own contract instance during the workshop. Post-survey: 85% said it was the most useful Web3 intro they'd encountered.

**Links**
- Repo: `github.com/keithunt-35/web3-voting-dapp`
- Workshop slides: *(link)*

---

## 5. EXPERIENCE & EDUCATION TIMELINE

### Section Label
```
Where I've Been
```

---

### EXPERIENCE

**IoT-ra Lab — Embedded Systems Intern**
`Kampala, Uganda · 2023 – 2024`
- Developed firmware for sensor nodes (ESP32, Arduino) in MicroPython and C
- Built real-time data pipelines: MQTT → Node-RED → InfluxDB → Grafana
- Participated in 3 hardware hackathons, including one overnight "fix-or-fail" session
- Prototyped a low-cost soil monitoring system deployed in a community pilot

---

**GDG on Campus Makerere — Community Manager**
`Kampala, Uganda · 2023 – Present`
- Organize monthly developer talks, workshops, and study jams
- Led a 2-day Web3 + Cloud workshop series with 40+ attendees
- Maintain the chapter's GitHub org and event communications

---

**Web3 Club Makerere — Community Manager**
`Kampala, Uganda · 2023 – Present`
- Curate and deliver weekly content on blockchain, DeFi, and Web3 infrastructure
- Onboarded 30+ students to their first wallet and first smart contract deployment
- Coordinate speakers from the Ugandan and Pan-African crypto ecosystem

---

**Makerere University Tennis Club — Assistant Captain**
`Kampala, Uganda · 2023 – Present`
- Manage scheduling, rankings, and match logistics for 60+ members
- Represent the club in inter-university competitions
- Built and maintain the internal tennis ladder web app

---

### EDUCATION

**Makerere University — BSc Software Engineering**
`College of Computing and Information Sciences (COCIS) · Kampala, Uganda`
`2023 – Present (Expected Graduation: 2027)`
- Relevant coursework: Data Structures & Algorithms, Operating Systems, Database Systems, Software Engineering Principles, Computer Networks, Embedded Systems
- Active in GDSC, Web3 Club, and the university's open-source community

---

**BTrust Builders — Mastering Bitcoin**
`Online · 2024`
- Completed the Mastering Bitcoin course, finishing **11th out of all participants**
- Deep dive into Bitcoin protocol internals: UTXOs, scripting, Lightning Network basics, key management

---

## 6. ACHIEVEMENTS / SOCIAL PROOF

### Section Label
```
A Few Things Worth Mentioning
```

---

| Achievement | Details | Year |
|---|---|---|
| 🥇 Hackathon — "Most Innovative Blockchain" | QuizSpark, campus hackathon | 2024 |
| 🎓 BTrust Mastering Bitcoin — 11th Place | Top finisher out of all global participants | 2024 |
| 🏸 Makerere Tennis — Assistant Captain | Leadership role, 60+ member club | 2023–Present |
| 🌍 GDG on Campus — 40+ workshop attendees | Web3 + Cloud workshop series | 2024 |
| 💻 50+ GitHub Repos | Active open-source contributor | Ongoing |
| 🌱 IoT Community Pilot | Soil monitor deployed, ~40% irrigation improvement | 2024 |
| 📦 12 Projects / 12 Months Challenge | In progress | 2024–2025 |

---

### Testimonials / Quotes
> *(Placeholder — replace with real quotes from peers, mentors, or collaborators)*

**"Keith is the kind of person who doesn't wait for permission to build something. He just builds it and then teaches everyone else how."**
— *Fellow student, Makerere COCIS*

**"His Web3 workshop was the first time blockchain actually made sense to me."**
— *GDG on Campus attendee*

---

## 7. IMPOSSIBLE LIST

### Section Label
```
My Impossible List
```

### Intro
```
Not a bucket list. An Impossible List is for goals that feel just out of reach — until they aren't.
This is a living document. Updated when things get crossed off or when ambition levels up.
```

---

### ✅ Already Done
- [x] Finish a hardware hackathon
- [x] Deploy a smart contract to a live testnet
- [x] Earn a technical certification (BTrust Mastering Bitcoin — top 11th)
- [x] Lead a developer community (GDG + Web3 Club Makerere)
- [x] Build and ship a tool other developers actually use (Portforge)
- [x] Complete an internship in a technical role (IoT-ra Lab)

---

### 🔄 In Progress
- [ ] Ship 12 meaningful projects in 12 months *(8/12 as of Sept 2026)*
- [ ] Deploy a Web3 product with real users (not just testnet)
- [ ] Contribute a merged PR to a major open-source project (1000+ stars)
- [ ] Compete in a professional / semi-pro tennis tournament
- [ ] Build a product that generates revenue — any amount

---

### 🏔️ Big Goals
- [ ] Launch a tech startup in Africa
- [ ] Speak at a continental African tech conference (e.g., Africa's Talking Summit, Gitex Africa)
- [ ] Build or contribute to infrastructure used by 10,000+ people
- [ ] Reach an advanced level in 3 spoken languages (English ✅, Luganda in progress…)
- [ ] Complete a graduate program or research fellowship in distributed systems / ML
- [ ] Mentor 10 developers through their first deployed project
- [ ] Win a national tennis singles tournament in Uganda

---

### 🌍 Life Goals
- [ ] Visit 20 African countries
- [ ] Build a product with users in 5+ African countries
- [ ] Run a hackathon that focuses on African infrastructure problems
- [ ] Live and work abroad for at least 1 year (without losing my Kampala roots)

---

## 8. CONTACT SECTION

### Section Label
```
Let's Build Something
```

### Intro Copy
```
I'm always open to internships, collabs, hackathon teams, freelance projects, and good conversations about hard problems. If you're working on something at the intersection of tech and Africa, I especially want to hear about it.

Drop me a message below, or reach out directly:
```

### Contact Links
| Platform | Handle / URL |
|---|---|
| Email | keithunt35@duck.com |
| GitHub | github.com/keithunt-35 |
| X (Twitter) | @keithunt_35 |
| LinkedIn | *(add your LinkedIn URL)* |
| Current Site | keiths-site-gamma.vercel.app |

---

### Contact Form Labels & Placeholder Text

```
Name *
  placeholder: "Your name"

Email *
  placeholder: "your@email.com"

Subject *
  placeholder: "What's this about?"
  options (optional dropdown):
    - Internship / Job opportunity
    - Collaboration / Project
    - Hackathon team
    - Open source
    - Just saying hi
    - Other

Message *
  placeholder: "Tell me what you're working on, what you need, or just say hello."

[ Send Message ]   ← Button label
```

### After-send message
```
Thanks — I'll get back to you within 48 hours.
In the meantime, feel free to explore my GitHub.
```

---

## 9. BLOG / NOTES INTRO

### Section Label
```
Notes from the Build
```

### Intro Copy
```
Not a newsletter. Not a polished tech blog. Just a place where I write about what I'm learning, what broke, and what I figured out — in the hope that future-me (and maybe you) won't have to Google the same thing twice.

Topics: Web3, IoT, ML, software engineering, studying in Africa, and occasionally tennis.
```

---

### Sample Post 1

**Title:** `Why I Minted a Quiz Result as a Soulbound Token (And What I Learned)`

**Slug:** `/blog/quizspark-soulbound-tokens`

**Outline:**
1. The problem with forgeable academic certificates
2. What soulbound tokens are and why they're different from regular NFTs
3. The QuizSpark architecture — how it works under the hood
4. Three things I'd do differently
5. Where academic credentials on-chain could realistically go

---

### Sample Post 2

**Title:** `Building an IoT Sensor on $15: Lessons from a Lab Prototype That Almost Caught Fire`

**Slug:** `/blog/iot-soil-monitor-build`

**Outline:**
1. The brief: affordable precision agriculture for Uganda
2. Picking the ESP32 (and why not Raspberry Pi this time)
3. The deep-sleep power optimization rabbit hole
4. Africa's Talking for SMS — easier than you'd think
5. What the pilot taught me about building for real users, not demos

---

### Sample Post 3

**Title:** `Finishing 11th at BTrust Mastering Bitcoin: What the Course Actually Covers`

**Slug:** `/blog/btrust-mastering-bitcoin`

**Outline:**
1. Why I signed up (hint: I wanted to understand Bitcoin beyond price charts)
2. A real breakdown of what's in the course — UTXOs, scripts, keys, Lightning
3. What surprised me most (Bitcoin scripting is weird and powerful)
4. How it changed how I think about decentralization
5. Resources I used alongside the course
6. Should you do it? Honest answer.

---

## 10. TENNIS / PERSONAL SIDE

### Section Label
```
Off the Clock
```

### Copy

When I'm not staring at a terminal, I'm usually on a court.

Tennis found me before code did. I've been playing competitively since secondary school, and today I'm **Assistant Captain of the Makerere University Tennis Club** — which means I'm equally comfortable debugging a React hydration error and strategizing a tiebreak against a player with a better backhand than mine.

The overlap between tennis and software is real, not just a metaphor I use to sound interesting. Both have:
- **A feedback loop you can't ignore** — in code it's a failing test; in tennis it's a ball you watch sail past the baseline.
- **The gap between knowing and doing** — reading about a cross-court slice and actually landing one consistently are two completely different skills.
- **Composure as a competitive edge** — the players and engineers who keep their heads when things go wrong win more than those who don't.

I also follow the African tennis circuit closely and have an ambitious goal on my Impossible List: **compete in at least one professional-level tournament before I graduate**. Not to win — just to know I showed up and played at that level.

**Favorite court surface:** Hard court.
**Favorite player:** Jannik Sinner (working game, obsessive improver — respect).
**Longest match I've ever played:** 3 sets, 2.5 hours, university inter-faculty. We won.

---

## 11. SEO

### Page Titles

| Page | `<title>` tag |
|---|---|
| Home | `Keith Tugume — Software Engineer, Web3 & IoT Developer · Kampala, Uganda` |
| About | `About Keith Tugume · BSc Software Engineering, Makerere University` |
| Projects | `Projects by Keith Tugume — Web3, IoT, ML & Full-Stack Builds` |
| Blog | `Notes from the Build · Keith Tugume's Dev Blog` |
| Contact | `Contact Keith Tugume · Software Engineer in Kampala, Uganda` |

---

### Meta Descriptions

**Home:**
```
Keith Tugume is a software engineering student at Makerere University building at the intersection of Web3, IoT, and machine learning. Open to internships, collabs, and ambitious projects.
```

**About:**
```
Meet Keith — BSc Software Engineering student, IoT-ra Lab intern, GDG & Web3 Club community manager, and Assistant Captain of the Makerere tennis team. Building the tech Africa deserves.
```

**Projects:**
```
Explore Keith Tugume's portfolio: Portforge (portfolio generator), QuizSpark (AI + blockchain quiz platform), a $15 IoT soil monitor, and more. Built in Kampala, deployed everywhere.
```

**Blog:**
```
Dev notes by Keith Tugume on Web3, IoT, machine learning, and building software as a student in Africa. Honest, specific, and occasionally about tennis.
```

---

### Primary SEO Keywords

```
Keith Tugume
Keith Tugume developer
Software engineer Kampala Uganda
Web3 developer Uganda
IoT developer Makerere
Full-stack developer Africa
Blockchain developer Uganda
Makerere software engineering student
portfolio generator Next.js
African tech developer
```

### Secondary / Long-tail Keywords

```
smart contract developer East Africa
embedded systems intern Uganda
GDG on Campus Makerere
Web3 Club Makerere
BTrust Mastering Bitcoin
IoT agriculture Uganda
Next.js portfolio builder
soulbound token quiz platform
Solidity developer student
competitive tennis developer
```

### Open Graph / Social Meta (all pages)

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Keith Tugume" />
<meta property="og:image" content="/og-image.png" /> <!-- 1200×630 -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:creator" content="@keithunt_35" />
```

---

## 12. SITE STRUCTURE / NAVIGATION

### Recommended Navigation (top nav)

```
Logo / Keith Tugume      [Home]  [About]  [Projects]  [Blog]  [Contact]
```

Mobile: Hamburger → full-screen overlay or slide drawer.

---

### Page / Route Map

```
/                   → Homepage (Hero + Quick Bio + Featured Projects strip + CTA)
/about              → Full About / Story + Skills + Experience + Education + Achievements
/projects           → Project grid / list (all 6+ projects with filter by tag)
/projects/[slug]    → Individual project case study page
/blog               → Blog index (post list, search, tag filter)
/blog/[slug]        → Individual post
/impossible-list    → Dedicated Impossible List page (updates visible)
/contact            → Contact form + links
/tennis             → Optional: personal tennis/side projects page (can also be a section on /about)
```

---

### Homepage Scroll Sections (single-page feel on `/`)

```
1. Hero
2. "What I Build" — 3-column card strip (Web3 / IoT / Full-Stack)
3. Featured Projects — 3 cards (see more → /projects)
4. About Snapshot — 2-col: photo + short bio + CTA
5. Experience Strip — compact timeline or logos
6. Achievements / Stats bar
7. Latest Blog Posts — 3 cards
8. CTA / Contact — "Let's Build Something"
9. Footer
```

---

### Footer Content

```
© 2025 Keith Tugume · Built with Next.js · Deployed on Vercel

[GitHub]  [X / Twitter]  [LinkedIn]  [Email]

Kampala, Uganda 🇺🇬
```

---

## APPENDIX: COPY VARIANTS

### Short Bio (for "About the author" / social profiles / README)

> `Software engineering student at Makerere University (Kampala 🇺🇬). Building at the intersection of Web3, IoT, and ML. GDG & Web3 Club community manager. Assistant tennis captain. Shipping 12 projects in 12 months.`

### Ultra-short Bio (Twitter / GitHub profile)

> `SWE student @ Makerere · Web3 / IoT / ML builder · GDG & Web3 Club CM · 🎾 tennis · 🇺🇬 Kampala`

### GitHub Profile README Headline

> `## Hey, I'm Keith 👋`
> `Building software at the edges — where hardware meets cloud and tokens meet users.`
> `Currently: BSc SWE @ Makerere | 12 projects / 12 months challenge | IoT-ra Lab alum`

---

*End of content file. All sections are ready to copy into components, a CMS, or a Next.js project.*
