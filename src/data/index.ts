// ─── Site-wide data ───────────────────────────────────────────────────────────
// Single source of truth for all content rendered on the site.

export const siteConfig = {
  name: "Keith Tugume",
  role: "Software Engineering Student",
  tagline: "Building the Tech Africa Deserves — One Line at a Time.",
  pitch:
    "I write code that connects hardware to cloud, tokens to users, and ideas to reality. Currently studying Software Engineering at Makerere University while shipping 12 projects in 12 months — and serving aces on the side.",
  location: "Kampala, Uganda",
  email: "keithunt35@duck.com",
  github: "https://github.com/keithunt-35",
  twitter: "https://x.com/keithunt_35",
  linkedin: "https://linkedin.com/in/keith-tugume",
  currentSite: "https://keiths-site-gamma.vercel.app",
  university: "Makerere University",
  degree: "BSc Software Engineering",
  tags: ["#OpenSource", "#Web3", "#IoT", "#MachineLearning", "#FullStack", "#Kampala"],
};

// ─── Skills ───────────────────────────────────────────────────────────────────

export type Skill = {
  name: string;
  level: "Advanced" | "Intermediate" | "Familiar";
  notes: string;
};

export type SkillGroup = {
  label: string;
  icon: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Programming Languages",
    icon: "code",
    skills: [
      {
        name: "Java",
        level: "Advanced",
        notes: "Primary OOP language; backend services, data structures coursework",
      },
      {
        name: "Python",
        level: "Advanced",
        notes: "ML pipelines, scripting, data wrangling, rapid prototyping",
      },
      {
        name: "JavaScript / TypeScript",
        level: "Advanced",
        notes: "Full-stack JS — React, Next.js, Node.js; TS for anything production-bound",
      },
      {
        name: "Solidity",
        level: "Intermediate",
        notes: "Smart contract development; ERC standards, DeFi patterns",
      },
      {
        name: "C / C++",
        level: "Intermediate",
        notes: "Embedded systems, microcontroller programming (Arduino, ESP32)",
      },
      {
        name: "Bash / Shell",
        level: "Intermediate",
        notes: "Automation, CI scripts, Linux administration",
      },
    ],
  },
  {
    label: "Specializations",
    icon: "layers",
    skills: [
      {
        name: "Web3 & Blockchain",
        level: "Advanced",
        notes: "Smart contracts, wallet integration (ethers.js/wagmi), DApp architecture on EVM chains",
      },
      {
        name: "IoT & Embedded Systems",
        level: "Advanced",
        notes: "Sensor integration, firmware development, MQTT, edge computing",
      },
      {
        name: "Machine Learning",
        level: "Intermediate",
        notes: "Supervised learning, NLP basics, model integration; scikit-learn, TensorFlow/Keras",
      },
      {
        name: "Full-Stack Web",
        level: "Advanced",
        notes: "Next.js / React frontends, REST & GraphQL APIs, PostgreSQL, Prisma, Vercel",
      },
      {
        name: "Developer Tooling",
        level: "Intermediate",
        notes: "CLI tools, portfolio generators, productivity scripts, open-source contributions",
      },
    ],
  },
  {
    label: "Tools & Platforms",
    icon: "wrench",
    skills: [
      {
        name: "Git / GitHub",
        level: "Advanced",
        notes: "Version control, open-source collaboration, GitHub Actions CI",
      },
      {
        name: "Docker",
        level: "Intermediate",
        notes: "Containerization, local dev environments, deployment consistency",
      },
      {
        name: "Linux",
        level: "Advanced",
        notes: "Primary development OS; Ubuntu/Debian, systemd, cron",
      },
      {
        name: "AWS",
        level: "Intermediate",
        notes: "S3, Lambda, EC2 — cloud deployments and serverless experiments",
      },
      {
        name: "Vercel / Netlify",
        level: "Advanced",
        notes: "JAMstack deployments, edge functions",
      },
      {
        name: "Hardhat / Foundry",
        level: "Intermediate",
        notes: "Ethereum local dev, contract testing & deployment",
      },
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export type Project = {
  slug: string;
  title: string;
  year: string;
  status: string;
  stack: string[];
  tags: string[];
  summary: string;
  problem: string;
  role: string;
  solution: string;
  outcome: string;
  repoUrl?: string;
  demoUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "portforge",
    title: "Portforge",
    year: "2024",
    status: "Shipped · Open Source",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "GitHub API", "Vercel"],
    tags: ["Full-Stack", "Developer Tooling", "Open Source"],
    summary: "A Next.js portfolio generator that reads your GitHub and builds a deployable portfolio in minutes.",
    problem:
      "Every developer needs a portfolio, but setting one up from scratch is a Friday evening lost to boilerplate. Most templates are too generic or too locked-in.",
    role: "Solo developer — concept to design to deployment.",
    solution:
      "Portforge ingests a GitHub username, pulls pinned repos via the GitHub REST API, and generates a polished, deployable portfolio. Users pick a theme, add a bio, and get a live Vercel URL instantly. ISR keeps repo data fresh without full rebuilds.",
    outcome:
      "Used by 10+ students at Makerere. Featured in the Web3 Club monthly showcase. Most-starred personal repo.",
    repoUrl: "https://github.com/keithunt-35/portforge",
    demoUrl: "https://portforge.vercel.app",
    featured: true,
  },
  {
    slug: "quizspark",
    title: "QuizSpark",
    year: "2024",
    status: "Prototype · Hackathon Winner",
    stack: ["Next.js", "OpenAI API", "Solidity", "ethers.js", "Polygon Mumbai", "MongoDB"],
    tags: ["Web3", "AI/ML", "Full-Stack"],
    summary:
      "AI-generated quizzes with results minted as soulbound tokens on Polygon — making academic credentials unforgeable.",
    problem:
      "Academic certificates are trivially forged and quiz results in remote assessments are unreliable. What if test results were cryptographically verifiable on-chain?",
    role: "Lead developer (team of 3) — smart contract design, AI integration, and frontend.",
    solution:
      "Instructors submit a topic; OpenAI generates the question set. On completion, each student's score is minted as a soulbound token (SBT) on Polygon — public, permanent, non-transferable.",
    outcome:
      'Won "Most Innovative Use of Blockchain" at a campus hackathon. Presented to faculty as a proof-of-concept for decentralized academic credentials.',
    repoUrl: "https://github.com/keithunt-35/quizspark",
    featured: true,
  },
  {
    slug: "iot-soil-monitor",
    title: "IoT Soil Monitor",
    year: "2023–2024",
    status: "Lab Prototype · IoT-ra Internship",
    stack: ["ESP32", "MicroPython", "MQTT", "Node-RED", "InfluxDB", "Grafana", "Africa's Talking API"],
    tags: ["IoT", "Embedded", "Agriculture"],
    summary:
      "A $15 WiFi-connected soil monitoring node that alerts farmers before over-irrigation happens — built for Ugandan cooperatives.",
    problem:
      "Small-scale farmers in Uganda over- or under-irrigate because they're guessing. Commercial systems cost hundreds of dollars and require proprietary apps.",
    role: "Embedded firmware developer and dashboard integration. Part of a 4-person IoT-ra Lab team.",
    solution:
      "ESP32 node reads soil moisture and temperature every 5 minutes, publishes JSON via MQTT. Node-RED routes data to InfluxDB; Grafana renders a live dashboard. Deep-sleep extends battery life to ~3 weeks. Africa's Talking API handles SMS alerts.",
    outcome:
      "Deployed in a 3-week pilot near Kampala. Reduced over-irrigation incidents by an estimated 40% during the trial.",
    repoUrl: "https://github.com/keithunt-35/soil-monitor",
    featured: true,
  },
  {
    slug: "tennis-ladder",
    title: "Tennis Ladder App",
    year: "2024",
    status: "Live · Internal",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Railway"],
    tags: ["Full-Stack", "Sports Tech"],
    summary:
      "A web app that replaced WhatsApp chaos for the Makerere tennis club — live rankings, match logging, court booking.",
    problem:
      "The Makerere tennis club managed its ranking ladder on WhatsApp and a handwritten sheet. As Assistant Captain, I got tired of the chaos and decided to fix it.",
    role: "Solo developer + product owner (I was also the primary user).",
    solution:
      "Full-stack web app with live rankings using an Elo-inspired algorithm, match result logging, opponent challenges, and court booking. Magic-link email auth — no passwords for club members.",
    outcome: "60+ active members onboarded. Match dispute rate dropped to near zero. Still in active use.",
    repoUrl: "https://github.com/keithunt-35/tennis-ladder",
    demoUrl: "https://maktennis.up.railway.app",
    featured: true,
  },
  {
    slug: "aws-serverless-examples",
    title: "AWS Serverless Examples",
    year: "2024",
    status: "Open Source · Reference Repo",
    stack: ["AWS Lambda", "S3", "API Gateway", "DynamoDB", "SAM CLI", "Python"],
    tags: ["Cloud", "AWS", "Open Source"],
    summary:
      "A curated collection of 10+ AWS serverless patterns with SAM templates, READMEs, and one-command deploy scripts.",
    problem:
      "AWS documentation is dense. I kept rebuilding the same Lambda + API Gateway patterns from scratch. I needed a clean reference I'd actually return to.",
    role: "Solo author.",
    solution:
      "10+ serverless patterns: REST APIs, S3 event triggers, DynamoDB CRUD, scheduled jobs, serverless auth. Each pattern has a SAM template, README, and a Makefile with `make deploy` / `make destroy` targets.",
    outcome:
      "Used in a GDG on Campus cloud fundamentals workshop. 15+ stars from Makerere students.",
    repoUrl: "https://github.com/keithunt-35/aws-serverless-examples",
    featured: false,
  },
  {
    slug: "web3-voting-dapp",
    title: "Web3 Voting DApp",
    year: "2024",
    status: "Open Source · Workshop",
    stack: ["Solidity", "Hardhat", "React", "ethers.js", "MetaMask", "Sepolia"],
    tags: ["Web3", "Blockchain", "Education"],
    summary:
      "A transparent on-chain voting DApp built as a GDG workshop — complex enough to teach real patterns, simple enough to deploy in 10 minutes.",
    problem:
      "Most Web3 tutorials are either too shallow or too deep. I needed a project that teaches real Solidity patterns without losing the room.",
    role: "Workshop facilitator + sole codebase developer.",
    solution:
      "Admin deploys a contract, registers candidates, opens a vote window. Any connected wallet votes once. Results tally live. Built with access control via `onlyOwner`, events for frontend reactivity, and one-command Hardhat deploy.",
    outcome:
      "20+ students deployed their own contract instance during the workshop. 85% post-survey rating as most useful Web3 intro they had encountered.",
    repoUrl: "https://github.com/keithunt-35/web3-voting-dapp",
    featured: false,
  },
];

// ─── Experience & Education ───────────────────────────────────────────────────

export type TimelineItem = {
  id: string;
  type: "work" | "education" | "community";
  title: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
};

export const timeline: TimelineItem[] = [
  {
    id: "iotra",
    type: "work",
    title: "Embedded Systems Intern",
    org: "IoT-ra Lab",
    location: "Kampala, Uganda",
    period: "2023 – 2024",
    bullets: [
      "Developed firmware for sensor nodes (ESP32, Arduino) in MicroPython and C",
      "Built real-time data pipelines: MQTT → Node-RED → InfluxDB → Grafana",
      "Participated in 3 hardware hackathons, including an overnight fix-or-fail session",
      "Prototyped a low-cost soil monitoring system deployed in a community pilot",
    ],
  },
  {
    id: "gdg",
    type: "community",
    title: "Community Manager",
    org: "GDG on Campus Makerere",
    location: "Kampala, Uganda",
    period: "2023 – Present",
    bullets: [
      "Organize monthly developer talks, workshops, and study jams",
      "Led a 2-day Web3 + Cloud workshop series with 40+ attendees",
      "Maintain the chapter's GitHub org and event communications",
    ],
  },
  {
    id: "web3club",
    type: "community",
    title: "Community Manager",
    org: "Web3 Club Makerere",
    location: "Kampala, Uganda",
    period: "2023 – Present",
    bullets: [
      "Curate and deliver weekly content on blockchain, DeFi, and Web3 infrastructure",
      "Onboarded 30+ students to their first wallet and first smart contract deployment",
      "Coordinate speakers from the Ugandan and Pan-African crypto ecosystem",
    ],
  },
  {
    id: "tennis-captain",
    type: "community",
    title: "Assistant Captain",
    org: "Makerere University Tennis Club",
    location: "Kampala, Uganda",
    period: "2023 – Present",
    bullets: [
      "Manage scheduling, rankings, and match logistics for 60+ members",
      "Represent the club in inter-university competitions",
      "Built and maintain the internal tennis ladder web app",
    ],
  },
  {
    id: "makerere",
    type: "education",
    title: "BSc Software Engineering",
    org: "Makerere University — COCIS",
    location: "Kampala, Uganda",
    period: "2023 – Present (Expected 2027)",
    bullets: [
      "Relevant coursework: Data Structures & Algorithms, Operating Systems, Database Systems, Computer Networks, Embedded Systems",
      "Active in GDSC, Web3 Club, and the university open-source community",
    ],
  },
  {
    id: "btrust",
    type: "education",
    title: "Mastering Bitcoin",
    org: "BTrust Builders",
    location: "Online",
    period: "2024",
    bullets: [
      "Finished 11th out of all global participants",
      "Deep dive into Bitcoin protocol internals: UTXOs, scripting, Lightning Network, key management",
    ],
  },
];

// ─── Achievements ─────────────────────────────────────────────────────────────

export type Achievement = {
  emoji: string;
  title: string;
  detail: string;
  year: string;
};

export const achievements: Achievement[] = [
  {
    emoji: "🥇",
    title: 'Hackathon — "Most Innovative Blockchain"',
    detail: "QuizSpark, campus hackathon",
    year: "2024",
  },
  {
    emoji: "🎓",
    title: "BTrust Mastering Bitcoin — 11th Place",
    detail: "Top finisher out of all global participants",
    year: "2024",
  },
  {
    emoji: "🎾",
    title: "Makerere Tennis — Assistant Captain",
    detail: "Leadership role, 60+ member club",
    year: "2023–Present",
  },
  {
    emoji: "🌍",
    title: "GDG on Campus — 40+ workshop attendees",
    detail: "Web3 + Cloud workshop series",
    year: "2024",
  },
  {
    emoji: "💻",
    title: "50+ GitHub Repos",
    detail: "Active open-source contributor",
    year: "Ongoing",
  },
  {
    emoji: "🌱",
    title: "IoT Community Pilot",
    detail: "Soil monitor deployed — ~40% irrigation improvement",
    year: "2024",
  },
  {
    emoji: "📦",
    title: "12 Projects / 12 Months Challenge",
    detail: "In progress",
    year: "2024–2025",
  },
];

// ─── Impossible List ──────────────────────────────────────────────────────────

export type ImpossibleItem = {
  text: string;
  done: boolean;
};

export type ImpossibleCategory = {
  label: string;
  emoji: string;
  items: ImpossibleItem[];
};

export const impossibleList: ImpossibleCategory[] = [
  {
    label: "Already Done",
    emoji: "✅",
    items: [
      { text: "Finish a hardware hackathon", done: true },
      { text: "Deploy a smart contract to a live testnet", done: true },
      { text: "Earn a technical certification (BTrust Mastering Bitcoin — 11th)", done: true },
      { text: "Lead a developer community (GDG + Web3 Club Makerere)", done: true },
      { text: "Build and ship a tool other developers actually use (Portforge)", done: true },
      { text: "Complete an internship in a technical role (IoT-ra Lab)", done: true },
    ],
  },
  {
    label: "In Progress",
    emoji: "🔄",
    items: [
      { text: "Ship 12 meaningful projects in 12 months", done: false },
      { text: "Deploy a Web3 product with real users (not just testnet)", done: false },
      { text: "Contribute a merged PR to a major open-source project (1000+ stars)", done: false },
      { text: "Compete in a professional / semi-pro tennis tournament", done: false },
      { text: "Build a product that generates revenue — any amount", done: false },
    ],
  },
  {
    label: "Big Goals",
    emoji: "🏔️",
    items: [
      { text: "Launch a tech startup in Africa", done: false },
      { text: "Speak at a continental African tech conference", done: false },
      { text: "Build infrastructure used by 10,000+ people", done: false },
      { text: "Complete a graduate program or research fellowship in distributed systems / ML", done: false },
      { text: "Mentor 10 developers through their first deployed project", done: false },
      { text: "Win a national tennis singles tournament in Uganda", done: false },
    ],
  },
  {
    label: "Life Goals",
    emoji: "🌍",
    items: [
      { text: "Visit 20 African countries", done: false },
      { text: "Build a product with users in 5+ African countries", done: false },
      { text: "Run a hackathon focused on African infrastructure problems", done: false },
      { text: "Live and work abroad for at least 1 year — without losing Kampala roots", done: false },
    ],
  },
];

// ─── Stats strip ─────────────────────────────────────────────────────────────

export const stats = [
  { label: "GitHub Repos", value: "50+" },
  { label: "Hackathons", value: "5+" },
  { label: "Languages Spoken", value: "3" },
  { label: "Projects / 12 mo.", value: "12" },
  { label: "Community Members", value: "100+" },
];
