import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useInView, useReducedMotion, useScroll, useSpring } from "motion/react";
import {
  ArrowRight, ArrowUpRight, Brain, ChartLineUp, ChatCircleDots, Check,
  Compass, Heart, Leaf, Lightbulb, List, Pulse, Sparkle, Strategy, BookOpen,
  UsersThree, X,
} from "@phosphor-icons/react";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip,
} from "recharts";
import "./styles.css";

const dimensions = [
  {
    name: "Vision",
    value: 72,
    icon: Compass,
    accent: "vision",
    text: "Shared direction that acts as a structural force.",
    signal: "Direction is present, but it may not yet guide every decision under pressure.",
    affects: ["Prioritization", "Decision speed", "Cultural alignment"],
    question: "Do people know what matters most when no leader is in the room?",
  },
  {
    name: "Leadership",
    value: 58,
    icon: UsersThree,
    accent: "leadership",
    text: "The quality of decisions, presence, and alignment between what leaders say and how the organization moves.",
    signal: "Leadership energy is visible, but the system may be receiving mixed signals.",
    affects: ["Ownership", "Trust", "Escalation patterns"],
    question: "Where are people waiting for permission instead of moving with clarity?",
  },
  {
    name: "Strategy",
    value: 65,
    icon: Strategy,
    accent: "strategy",
    text: "The degree to which priorities are clear, shared, and connected to day-to-day execution.",
    signal: "Strategic intent is active, but daily work may still be pulling attention in too many directions.",
    affects: ["Focus", "Execution rhythm", "Resource allocation"],
    question: "Which priority is absorbing energy without moving the system forward?",
  },
  {
    name: "Collaboration",
    value: 48,
    icon: Sparkle,
    accent: "collaboration",
    text: "How well teams communicate, coordinate, and build trust across roles and levels.",
    signal: "The strongest friction is relational: information may be arriving late, softened, or fragmented.",
    affects: ["Feedback loops", "Cross-team trust", "Rework"],
    question: "What truth is the organization learning too late?",
  },
  {
    name: "Well-Being",
    value: 67,
    icon: Heart,
    accent: "wellbeing",
    text: "The structural conditions that allow people to perform sustainably without depleting capacity.",
    signal: "Capacity is holding, but the system may be relying on personal resilience more than healthy structure.",
    affects: ["Burnout risk", "Retention", "Sustainable performance"],
    question: "Where is performance being maintained by exhaustion?",
  },
];

const radarData = dimensions.map((item) => ({
  subject: item.name,
  value: item.value,
  fullMark: 100,
}));

const fitQuestions = [
  {
    prompt: "When something goes wrong, people in my organization know instinctively what the right call is, without needing to ask me.",
    dimension: "Vision",
  },
  {
    prompt: "My leadership team has the difficult conversations about what isn't working, not just about what is.",
    dimension: "Leadership",
  },
  {
    prompt: "The priorities we agreed on three months ago still reflect what people are actually working on today.",
    dimension: "Strategy",
  },
  {
    prompt: "People in my organization speak up when they see something going wrong, even when it's uncomfortable to do so.",
    dimension: "Collaboration",
  },
  {
    prompt: "My highest performers are also the most sustainable in how they work, I'm not worried about losing them.",
    dimension: "Well-Being",
  },
];

const replies = {
  "How does the assessment work?":
    "The OVI, Organizational Vitality Index, maps the current state of your People Operating System across five pillars. It places the system into one of four tiers: Systemic Coherence, Emerging Alignment, Fragile Stability, or Structural Risk.",
  "What does GiA analyze?":
    "GiA, Guided Intelligence for Alignment, reads your organization's own signals across vision, leadership, strategy, collaboration, and well-being. It turns patterns into contextual questions and next actions.",
  "Is COIREA right for us?":
    "COIREA is built for leaders who care: founder-led or mission-driven organizations, B Corps, consultancies, foundations, NGOs, and social impact teams ready to evolve with coherence.",
};

const applicationFrictionOptions = [
  "Our direction isn't as shared as it needs to be",
  "Leadership doesn't always move as one",
  "Our strategy doesn't translate into how we actually work day to day",
  "There are communication gaps between teams or levels",
  "The pace we're working at isn't sustainable",
];

const teamSizeOptions = ["5-20", "21-50", "51-100", "101-300", "300+"];

const impactSignals = [
  {
    before: "The same decision, postponed again.",
    after: "Leadership aligned on the same signal.",
  },
  {
    before: "The same meeting, every other week.",
    after: "Issues visible before they become crises.",
  },
  {
    before: "Good people who quietly disengage.",
    after: "Teams that move without constant realignment.",
  },
];

const frictionSignals = ["The same decision, postponed again", "The same meeting, every other week", "Good people who quietly disengage"];
const harmonySignals = ["Shared visibility", "Aligned decisions", "Focused execution", "Sustained capacity", "Early signals"];

const platformJourney = [
  {
    stage: "Signal detected",
    title: "Difficulty speaking up with managers appears across multiple responses.",
    text: "The organization is already talking. COIREA listens for the signals leaders usually hear too late.",
    outcome: "The hidden tension becomes visible.",
    icon: Pulse,
  },
  {
    stage: "Insight",
    title: "Psychological safety is fragile at the leadership interface.",
    text: "GiA connects the signal across collaboration and leadership, separating isolated comments from a real system pattern.",
    outcome: "The symptom becomes a pattern.",
    icon: Lightbulb,
  },
  {
    stage: "Next action",
    title: "Review collaboration and leadership together with a Steward.",
    text: "The platform turns the pattern into a focused next move, supported by human judgment and measurable follow-through.",
    outcome: "Leaders hear the truth earlier.",
    icon: Check,
  },
];

const platformBenefits = [
  {
    icon: Pulse,
    title: "Listen before friction becomes visible",
    text: "Surveys, reflection, behavior, and context reveal what leaders usually hear too late.",
  },
  {
    icon: Brain,
    title: "See the pattern beneath the symptom",
    text: "GiA connects signals across vision, leadership, strategy, collaboration, and well-being.",
  },
  {
    icon: UsersThree,
    title: "Move with human stewardship",
    text: "A Steward helps leaders interpret the signal and choose the right next move.",
  },
  {
    icon: ChartLineUp,
    title: "Measure whether the system is changing",
    text: "OVI shows whether alignment, trust, and execution are improving over time.",
  },
];

const aiSeoFaqs = [
  [
    "What is COIREA?",
    "COIREA is a People Operating System for organizations that care. It helps leaders measure and strengthen the human system behind performance across Vision, Leadership, Strategy, Collaboration, and Well-Being.",
  ],
  [
    "What is a People Operating System?",
    "A People Operating System is the living structure behind how people make decisions, collaborate, execute strategy, and sustain performance. It makes the invisible patterns of an organization visible enough to improve.",
  ],
  [
    "Is COIREA a platform or a consultancy?",
    "COIREA is both a platform and a strategic support system. The platform measures organizational health, while stewardship helps leaders interpret signals and turn insight into action.",
  ],
  [
    "What does COIREA measure?",
    "COIREA measures organizational health through five pillars: Vision, Leadership, Strategy, Collaboration, and Well-Being. Together, these pillars show whether the organization is coherent, aligned, and able to perform sustainably.",
  ],
  [
    "What is OVI?",
    "OVI means Organizational Vitality Index. It is COIREA's diagnostic view of how healthy and coherent an organization is across the five pillars of its People Operating System.",
  ],
  [
    "What is GiA?",
    "GiA means Guided Intelligence for Alignment. It is COIREA's intelligence layer that turns organizational signals into questions, insights, and suggested next actions for leaders.",
  ],
];

const peopleOperatingSystemArticle = {
  title: "What Is a People Operating System?",
  updated: "Last updated: July 2026",
  author: "Maria Jose Figueroa",
  intro:
    "A People Operating System is the living structure behind how people make decisions, collaborate, execute strategy, and sustain performance. It is not a motivational idea or a survey score. It is the real operating layer of the organization.",
  sections: [
    {
      heading: "Why organizations need a People Operating System",
      body:
        "Most organizations already have tools for finance, sales, operations, and delivery. Far fewer have a clear way to see the human system that makes those functions work. When that system is invisible, leaders often treat symptoms as isolated problems: a slow decision, a tense meeting, a burned-out team, or a strategy that keeps stalling.",
    },
    {
      heading: "What a People Operating System makes visible",
      body:
        "A People Operating System makes visible the patterns that shape performance: whether people share direction, whether leadership behavior matches stated values, whether strategy is understood, whether collaboration is healthy, and whether people can perform without depletion.",
    },
    {
      heading: "How COIREA defines organizational health",
      body:
        "COIREA maps organizational health through five pillars: Vision, Leadership, Strategy, Collaboration, and Well-Being. These pillars help leaders understand where the system is coherent, where friction is building, and which part of the organization needs attention first.",
    },
    {
      heading: "How COIREA uses OVI and GiA",
      body:
        "The OVI, Organizational Vitality Index, gives leaders a diagnostic view of the system. GiA, Guided Intelligence for Alignment, converts signals into reflection questions and next actions. Together, they help leaders move from intuition to evidence without losing the human nuance of the work.",
    },
  ],
};

const migratedBlogClusters = [
  "All",
  "Workplace Evolution",
  "Leadership Consciousness",
  "People Operating System",
  "Stories",
];

function sortBlogPosts(posts = []) {
  return [...posts].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });
}

let blogPostsCache = null;
let blogPostsPromise = null;

async function loadBlogPosts() {
  if (blogPostsCache) return blogPostsCache;
  if (!blogPostsPromise) {
    blogPostsPromise = import("./data/migratedPosts.json").then((module) => {
      blogPostsCache = sortBlogPosts(module.default || []);
      return blogPostsCache;
    });
  }
  return blogPostsPromise;
}

function normalizeAuthor(author) {
  return author?.trim() || "María José Figueroa";
}

function formatPostDate(dateString, withDay = false) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    ...(withDay ? { day: "numeric" } : {}),
  });
}

function stripHtml(html = "") {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function estimateReadingTime(html = "") {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

function extractFirstImage(html = "") {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1] || "";
}

function sanitizeBlogHtml(html = "") {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/\son\w+="[^"]*"/gi, "")
    .replace(/\son\w+='[^']*'/gi, "")
    .replace(/\shref=["']javascript:[^"']*["']/gi, "")
    .replace(/\ssrc=["']javascript:[^"']*["']/gi, "");
}

function displayCluster(cluster = "", title = "") {
  const normalized = `${cluster} ${title}`.toLowerCase();
  if (normalized.includes("conscious")) return "Leadership Consciousness";
  if (normalized.includes("stories")) return "Stories";
  if (normalized.includes("business pillars") || normalized.includes("operating system") || normalized.includes("well-being")) return "People Operating System";
  return "Workplace Evolution";
}

function clusterClass(cluster = "") {
  const normalized = cluster.toLowerCase();
  if (normalized.includes("leadership")) return "category-tag--leadership-consciousness";
  if (normalized.includes("workplace")) return "category-tag--workplace-evolution";
  if (normalized.includes("stories")) return "category-tag--stories";
  if (normalized.includes("people")) return "category-tag--people-operating-system";
  return "category-tag--workplace-evolution";
}

function useMigratedBlogPosts() {
  const [state, setState] = useState({
    posts: blogPostsCache || [],
    loading: !blogPostsCache,
    error: "",
  });

  useEffect(() => {
    let active = true;
    loadBlogPosts()
      .then((posts) => {
        if (active) setState({ posts, loading: false, error: "" });
      })
      .catch(() => {
        if (active) setState({ posts: [], loading: false, error: "Insights could not be loaded right now." });
      });
    return () => {
      active = false;
    };
  }, []);

  return state;
}

function useMigratedBlogPost(slug) {
  const [state, setState] = useState({
    post: blogPostsCache?.find((item) => item.slug === slug) || null,
    posts: blogPostsCache || [],
    loading: !blogPostsCache,
    error: "",
  });

  useEffect(() => {
    let active = true;
    loadBlogPosts()
      .then((posts) => {
        if (!active) return;
        const post = posts.find((item) => item.slug === slug) || null;
        setState({ post, posts, loading: false, error: post ? "" : "This post was not found." });
      })
      .catch(() => {
        if (active) setState({ post: null, posts: [], loading: false, error: "This post could not be loaded right now." });
      });
    return () => {
      active = false;
    };
  }, [slug]);

  return state;
}

function upsertJsonLd(id, data) {
  if (typeof document === "undefined") return;
  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

function removeJsonLd(id) {
  if (typeof document === "undefined") return;
  document.getElementById(id)?.remove();
}

const platformPillars = [
  ["Vision", "Clarity and Direction", "Anchors decisions in shared direction, reducing drift and internal friction."],
  ["Leadership", "Ownership and Accountability", "Clarifies roles, decision rights, and responsibility so authority is distributed with trust."],
  ["Collaboration", "Trust and Coordination", "Reduces silos and strengthens feedback, communication, and collective intelligence."],
  ["Well-Being", "Energy and Sustainability", "Makes capacity, burnout signals, and resilience visible before they affect performance."],
  ["Strategy & Execution", "Structure and Momentum", "Connects long-term vision to quarterly priorities, ownership, and measurable progress."],
];

const platformFeatures = [
  ["Organizational Health Dashboard", "Real-time visibility into culture, engagement, and team dynamics across the organization."],
  ["AI-Powered Insights", "Analysis that surfaces what matters most and recommends evidence-based actions."],
  ["Culture & Leadership Metrics", "Track leadership effectiveness and cultural alignment with validated indicators."],
  ["Well-Being Signals", "Monitor team health and identify burnout risks before they impact performance and retention."],
  ["Collaboration Network", "Visualize how teams work together and where connections need strengthening."],
  ["SDGs Reporting", "Measure how organizational improvements translate into positive social impact."],
];

const ecosystemTypes = ["NGOs", "Impact Startups", "Regenerative Organizations", "Ecosystems & Networks", "Future of Work", "Educational Organizations"];

const stewardCompass = [
  ["Diagnose", "Read the organizational state with clarity and without judgment."],
  ["Map the system", "Identify invisible patterns and dynamics beneath the surface."],
  ["Challenge", "Name what the team is collectively avoiding."],
  ["Hold presence", "Remain the steady human anchor through transformation."],
];

const stewardNames = ["Juan Carlos", "Gabriela", "Tanya", "Marcela"];

const stewardProfiles = [
  ["Juan Carlos", "Systemic vision", "Accompanying organizations to see what the system already knows about itself before touching anything."],
  ["Gabriela", "Natural intelligence", "A biologist who reads organizations as ecosystems, from the inside out."],
  ["Tanya", "Systemic trust", "Holding collective processes with care, especially when something can no longer continue as before."],
  ["Marcela", "Coherence", "Accompanying leaders and teams back to alignment when doing has outpaced being."],
];

const foundingStewards = [
  {
    name: "Juan Carlos",
    role: "Systemic vision",
    contribution: "Systemic gaze",
    location: "Ecuador",
    photo: "/assets/stewards/juan_carlos.png",
    description: "Accompanying organizations to see what the system already knows about itself before touching anything.",
    bio: [
      "From the middle of the world, I have spent more than two decades weaving networks among territories, organizations, and institutions. My work has always been the same, though it has taken different forms: accompanying companies, communities, and leaders to build regenerative models that are not imposed on the territory, but emerge from it.",
      "I have collaborated with international organizations including UNESCO, the European Union, the Presencing Institute, and the World Bank. From public service, I have designed territorial, agricultural, and educational policy in highly complex contexts.",
      "What moves me, always, is the same question: what does this system want to do with its own intelligence? In COIREA I found a body where that question has a home.",
    ],
  },
  {
    name: "Tanya",
    role: "Systemic trust",
    contribution: "Systemic trust",
    location: "Chile",
    photo: "/assets/stewards/tanya.jpeg",
    description: "Holding collective processes with care, especially when something can no longer continue as before.",
    bio: [
      "From Valparaíso, with global reach, I have spent more than fifteen years accompanying organizations in their transition processes. My work lives in the territories that systems usually avoid: ambiguity, difficult conversations, and necessary closures.",
      "I dedicate myself to organizational social regeneration. I actively drive diversity and inclusion processes, accompanying women's networks and affinity groups from Conscious Relational Leadership.",
      "I believe systems do not change only by strategy. They transform when care allows people to collaborate and dissent without losing themselves in the attempt. Through Systemic Trust, I facilitate the network that sustains organizations when everything else is in transition.",
    ],
  },
  {
    name: "Gabriela",
    role: "Natural systems intelligence",
    contribution: "Natural intelligence",
    location: "Peru",
    photo: "/assets/stewards/gabriela.jpg",
    description: "A biologist who reads organizations as ecosystems, from the inside out.",
    bio: [
      "My path began at the root, deciphering life from biology, and then expanded toward environmental management, sustainability, and circular economy. Today, that sap nourishes my vocation for personal and organizational regeneration.",
      "Walking alongside diverse public and private organizations, I discovered a silent truth in work ecosystems: the internal disconnection we inhabit is the same crack that separates us from collective purpose.",
      "Inspired by the vital link between mental health and reconnection with the natural, I have learned to observe from stillness. My compass is simple: remember that we are nature.",
    ],
  },
  {
    name: "Marcela",
    role: "Coherence",
    contribution: "Coherence",
    location: "Argentina",
    photo: "/assets/stewards/marcela.jpeg",
    description: "Accompanying leaders and teams back to alignment when doing has outpaced being.",
    bio: [
      "With my gaze on the present and on the speed at which the world evolves, I build network. Today, alongside COIREA, I accompany people, leaders, and companies to walk through life models with a unique perspective: integrating who we are into each of our roles.",
      "For two decades I grew, learned, and developed in the world of Latin American organizations, especially in the financial sector, from the perspective of business growth and the implementation of technology to simplify and make organizations profitable.",
      "Today I walk with my eyes set on accompanying this historic moment in which everything will take a new course alongside AI and new technologies. COIREA brings a new way to walk hand in hand with transformation, in a simpler and more guided way.",
    ],
  },
];

const visionValues = [
  ["Clarity of Purpose", "Design from the inside out, anchored in strategic vision and long-term direction."],
  ["Coherence at Every Level", "Align purpose, leadership, culture, teams, and decisions across the system."],
  ["Human-Centered Systems", "People are not separate from performance. They are the system."],
  ["Reciprocity as Strategy", "Regeneration begins with how we relate to ourselves, to others, and to the system."],
];

const regenerativeSteps = [
  {
    title: "SOIL",
    subtitle: "Sense the System",
    text: "COIREA begins with structured reflection. The platform measures organizational health across five pillars and surfaces hidden tensions using trained AI pattern recognition.",
    bullets: ["Organizational Vitality Index", "Cross-pillar signals", "Early risk indicators"],
    closing: "This is where the organization pauses long enough to see itself clearly.",
  },
  {
    title: "GROW",
    subtitle: "Align & Execute",
    text: "Insights convert into structured governance and execution. Execution becomes aligned, not reactive.",
    bullets: ["Clear ownership", "Quarterly priorities", "Strategic drift detection", "Leadership accountability"],
    closing: "This is where clarity becomes structure.",
  },
  {
    title: "FLOURISH",
    subtitle: "Learn & Regenerate",
    text: "The system integrates feedback and strengthens capacity over time. Growth builds resilience instead of depletion.",
    bullets: ["Well-being pulses", "Innovation map", "Learning loops", "Regenerative capacity signals"],
    closing: "This is evolutionary and regenerative growth.",
  },
];

const giaQuestions = [
  ["Direction Coherence", "Is our daily work moving in the direction we say matters most?"],
  ["System Capacity", "Does our system have the energy and space to deliver what we have committed to?"],
  ["Role Clarity", "Are responsibilities held in ways that allow people to contribute at their best?"],
  ["Project Contribution", "How are current initiatives strengthening the evolution of the organization?"],
  ["System Tensions", "Where is the system asking for attention or adaptation?"],
  ["Next Evolution", "What small structural changes could restore greater coherence?"],
];

const toolFaqs = [
  ["What is the Organizational Health Scanner?", "A focused diagnostic that evaluates the organization across purpose, collaboration, leadership, well-being, strategy, and interconnectivity."],
  ["How long does it take?", "The real scanner is designed to take approximately 5–7 minutes."],
  ["What do leaders receive?", "An OVI score, pillar breakdown, strongest signal, challenge area, and personalized insights."],
  ["Is information confidential?", "The current COIREA promise is that assessment responses and results are treated as confidential."],
];

const visionFaqs = [
  ["What is COIREA?", "An organizational intelligence platform that helps purpose-driven organizations measure systemic health and align execution across five pillars."],
  ["What is OVI?", "The Organizational Vitality Index is a 0–100 composite score that maps the organization into coherence, alignment, fragility, or structural risk."],
  ["What is GiA?", "Guided Intelligence for Alignment, COIREA’s trained organizational pattern-recognition layer."],
  ["What does COIREA do with our data?", "COIREA’s stated position is that intelligence is generated from inside your own system, not monetized or used for default cross-organization benchmarking."],
];

const aboutFaqs = [
  ["What is COIREA?", "COIREA is a People Operating System, an organizational intelligence platform that helps purpose-driven organizations measure systemic health and align execution across five pillars: Vision, Leadership, Strategy, Collaboration, and Well-Being."],
  ["What is OVI?", "The Organizational Vitality Index is a 0-100 composite score that maps your organization's state: Systemic Coherence (80-100), Emerging Alignment (60-79), Fragile Stability (40-59), or Structural Risk (0-39). It updates continuously as your organization evolves."],
  ["What is GiA?", "GiA stands for Guided Intelligence for Alignment, COIREA's trained organizational AI. Unlike generic tools, GiA learns from your organization's own signals and surfaces them in a Signal, Insight, Question format, built for reflection and action, not just reporting."],
  ["What does COIREA do with our data?", "Intelligence is generated from inside your own system. Your data is not shared, sold, or used for cross-organization benchmarking by default. Your organization's signals belong to your organization."],
  ["Who is COIREA built for?", "COIREA works best with founder-led or mission-driven organizations between 15 and 300 people, typically navigating growth complexity, team misalignment, or a leadership transition. If you're not sure whether it's a fit, the first step is a short, honest conversation."],
  ["How does the SOIL assessment work?", "SOIL is COIREA's entry phase. It starts with a diagnostic conversation and an OVI measurement across all five pillars. Within 30 days, you have a clear picture of where your system is strong and where it's leaking energy, and a specific roadmap for what to strengthen first."],
];

const founderTags = ["Systems thinking", "Organizational design", "Regenerative business", "Latam"];

const naturePrinciples = [
  ["Living systems", "Nature does not separate intelligence from relationship. COIREA reads organizations the same way: as connected systems where each signal affects the whole."],
  ["Regeneration", "A healthy organization is not only efficient. It renews energy, trust, clarity, and capacity as it grows."],
  ["Distributed intelligence", "Like a forest, an organization already holds information everywhere. COIREA helps leaders listen to it without reducing people to data points."],
];

function isSpanishPath() {
  return window.location.pathname === "/es" || window.location.pathname.startsWith("/es/");
}

function localizedPath(path, isEs = isSpanishPath()) {
  if (path === "/") return isEs ? "/es" : "/";
  return isEs ? `/es${path}` : path;
}

function alternateLanguagePath() {
  const path = window.location.pathname;
  if (path === "/es") return "/";
  if (path.startsWith("/es/")) return path.replace(/^\/es/, "") || "/";
  return path === "/" ? "/es" : `/es${path}`;
}

function BrandMark({ compact = false }) {
  return (
    <a className={`brand ${compact ? "brand--compact" : ""}`} href={localizedPath("/")} aria-label="COIREA home">
      <img src="/assets/coirea-logo.png" alt="COIREA" />
    </a>
  );
}

function Reveal({ children, className = "", delay = 0, amount = 0.15 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 34, filter: "blur(10px)" }}
      whileInView={reduced ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.78, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.2 });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}

const seoByRoute = {
  "/": {
    title: "COIREA - The People Operating System for Organizations That Care",
    description:
      "COIREA is the People Operating System for organizations that care, helping leaders measure organizational health and turn hidden signals into aligned action.",
  },
  "/about": {
    title: "About COIREA - People Operating System and Founder Story",
    description:
      "Learn why COIREA exists, meet founder María José Figueroa, and understand the living-systems principles behind the People Operating System.",
  },
  "/insights": {
    title: "Insights - COIREA",
    description:
      "Thinking for organizations ready to evolve, with essays on workplace evolution, leadership consciousness, and the People Operating System.",
  },
  "/conversation": {
    title: "Book a Conversation - COIREA",
    description:
      "Apply to work with COIREA. Share where your organization feels friction and request a conversation with a COIREA Steward.",
  },
  "/insights/what-is-a-people-operating-system": {
    title: "What Is a People Operating System? - COIREA",
    description:
      "A People Operating System is the human infrastructure behind how organizations make decisions, collaborate, execute strategy, and sustain performance.",
  },
};

const defaultShareImage = "https://www.coirea.com/assets/coirea-social-card.png";

function absolutePublicUrl(url = defaultShareImage) {
  if (!url) return defaultShareImage;
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith("/")) return `https://www.coirea.com${url}`;
  return `https://www.coirea.com/${url}`;
}

function ensureMeta(selector, createAttrs) {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement("meta");
    Object.entries(createAttrs).forEach(([key, value]) => node.setAttribute(key, value));
    document.head.appendChild(node);
  }
  return node;
}

function SEOManager() {
  useEffect(() => {
    const path = window.location.pathname;
    const isEs = path === "/es" || path.startsWith("/es/");
    const route = path === "/es" ? "/" : path.replace(/^\/es/, "") || "/";
    const seo = seoByRoute[route] || seoByRoute["/"];
    const canonicalPath = isEs ? path : route;
    const canonicalHref = `https://www.coirea.com${canonicalPath === "/" ? "/" : canonicalPath}`;

    document.title = seo.title;
    ensureMeta('meta[name="description"]', { name: "description" }).setAttribute("content", seo.description);
    ensureMeta('meta[property="og:title"]', { property: "og:title" }).setAttribute("content", seo.title);
    ensureMeta('meta[property="og:description"]', { property: "og:description" }).setAttribute("content", seo.description);
    ensureMeta('meta[property="og:url"]', { property: "og:url" }).setAttribute("content", canonicalHref);
    ensureMeta('meta[property="og:image"]', { property: "og:image" }).setAttribute("content", defaultShareImage);
    ensureMeta('meta[property="og:image:secure_url"]', { property: "og:image:secure_url" }).setAttribute("content", defaultShareImage);
    ensureMeta('meta[property="og:image:type"]', { property: "og:image:type" }).setAttribute("content", "image/png");
    ensureMeta('meta[property="og:image:width"]', { property: "og:image:width" }).setAttribute("content", "1200");
    ensureMeta('meta[property="og:image:height"]', { property: "og:image:height" }).setAttribute("content", "630");
    ensureMeta('meta[property="og:image:alt"]', { property: "og:image:alt" }).setAttribute("content", "COIREA - The people system behind performance.");
    ensureMeta('meta[name="twitter:title"]', { name: "twitter:title" }).setAttribute("content", seo.title);
    ensureMeta('meta[name="twitter:description"]', { name: "twitter:description" }).setAttribute("content", seo.description);
    ensureMeta('meta[name="twitter:image"]', { name: "twitter:image" }).setAttribute("content", defaultShareImage);
    ensureMeta('meta[name="twitter:image:alt"]', { name: "twitter:image:alt" }).setAttribute("content", "COIREA - The people system behind performance.");

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalHref);
  }, []);

  return null;
}

function AnimatedNumber({ value, delay = 0, className = "" }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!inView) return undefined;
    if (reduced) {
      setDisplay(value);
      return undefined;
    }

    let controls;
    const timeout = window.setTimeout(() => {
      controls = animate(0, value, {
        duration: 1.15,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => setDisplay(Math.round(latest)),
      });
    }, delay * 1000);

    return () => {
      window.clearTimeout(timeout);
      controls?.stop();
    };
  }, [delay, inView, reduced, value]);

  return <strong ref={ref} className={className}>{display}</strong>;
}

function AnimatedBar({ value, delay = 0 }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <div className="mini-track" ref={ref}>
      <motion.span
        style={{ width: `${value}%`, transformOrigin: "0 50%" }}
        initial={reduced ? { scaleX: 1 } : { scaleX: 0 }}
        animate={inView || reduced ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.05, delay, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}

function AnimatedFocusBar({ value, delay = 0, active = true }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const inView = useInView(ref, { once: false, amount: 0.6 });
  const shouldAnimate = active && (inView || reduced);

  return (
    <div ref={ref}>
      <motion.i
        style={{ width: `${value}%`, transformOrigin: "0 50%" }}
        initial={reduced ? { scaleX: 1 } : { scaleX: 0 }}
        animate={shouldAnimate ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}

function RadarTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  const value = payload[0]?.value;
  return (
    <div className="radar-tooltip">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const isEs = isSpanishPath();
  const closeAll = () => {
    setOpen(false);
  };
  return (
    <header className="site-header">
      <ScrollProgress />
      <BrandMark />
      <nav className={open ? "nav nav--open" : "nav"} aria-label="Primary navigation">
        <a href={localizedPath("/", isEs)} onClick={closeAll}>Home</a>
        <a href={localizedPath("/insights", isEs)} onClick={closeAll}>Insights</a>
        <a href={localizedPath("/about", isEs)} onClick={closeAll}>About Us</a>
        <a className="language-link" href={alternateLanguagePath()}>{isEs ? "EN" : "ES"}</a>
      </nav>
      <a className="button button--outline header-cta" href={localizedPath("/conversation", isEs)}>
        Book a Conversation
      </a>
      <button
        className="menu-button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label="Toggle navigation"
      >
        {open ? <X size={22} /> : <List size={22} />}
      </button>
    </header>
  );
}

function HealthDashboard() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="health-dashboard"
      initial={reduced ? false : { opacity: 0, x: 48, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="dashboard-topline">
        <div>
          <span className="eyebrow">Live system view</span>
          <h2>People Operating System</h2>
        </div>
        <div className="live-status"><span /> Updated now</div>
      </div>
      <div className="dashboard-grid">
        <div className="radar-wrap">
          <ResponsiveContainer width="100%" height="100%" minWidth={220} minHeight={260}>
            <RadarChart data={radarData} outerRadius="70%">
              <PolarGrid stroke="rgba(245,241,229,.22)" radialLines={false} />
              <PolarAngleAxis
                dataKey="subject"
                tick={{ fill: "#f4f0e5", fontSize: 11, fontFamily: "Manrope" }}
              />
              <Radar
                dataKey="value"
                stroke="#B56D4E"
                fill="#9BA987"
                fillOpacity={0.58}
                strokeWidth={2}
                isAnimationActive={!reduced}
              />
              <Tooltip
                content={<RadarTooltip />}
                cursor={false}
                wrapperStyle={{ zIndex: 8, pointerEvents: "none" }}
                position={{ x: 18, y: 18 }}
              />
            </RadarChart>
          </ResponsiveContainer>
          <div className="health-score">
            <strong>62</strong>
            <span>system score</span>
          </div>
        </div>
        <div className="dimension-list">
          {dimensions.map(({ name, value, icon: Icon }, index) => (
            <div className="dimension-row" key={name}>
              <Icon size={18} weight="light" />
              <span>{name}</span>
              <AnimatedBar value={value} delay={0.42 + index * 0.1} />
              <AnimatedNumber value={value} delay={0.48 + index * 0.1} />
            </div>
          ))}
        </div>
      </div>
      <p className="score-disclaimer">Scores shown are illustrative. In your live platform, these update continuously.</p>
      <div className="gia-insight">
        <div className="gia-badge"><Brain size={18} /> GiA insight</div>
        <div>
          <strong>Collaboration is limiting the system's evolutionary potential.</strong>
          <p>People are holding back with managers. Review collaboration and leadership together.</p>
        </div>
        <button type="button">View insight <ArrowUpRight size={16} /></button>
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-image" aria-hidden="true" />
      <div className="hero-scrim" aria-hidden="true" />
      <div className="hero-content">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.55 }}>COIREA · The People Operating System</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16, duration: 0.74, ease: [0.16, 1, 0.3, 1] }}>The People Operating System for organizations that care.</motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26, duration: 0.72, ease: [0.16, 1, 0.3, 1] }}>
            COIREA helps organizations build cohesive teams, because growth should
            increase coherence, not deplete capacity. When the People System is aligned,
            organizations do not just perform better, they regenerate.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38, duration: 0.62 }}>
            <a className="button button--primary" href="/conversation">
              Book a conversation <ArrowRight size={18} />
            </a>
            <a className="button button--light" href="#platform">
              See how it works
            </a>
          </motion.div>
          <motion.div className="trust-line" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.52, duration: 0.6 }}><Leaf size={17} /> AI + Human Wisdom. Grounded in systemic thinking.</motion.div>
        </motion.div>
        <HealthDashboard />
      </div>
      <a className="scroll-cue" href="#methodology" aria-label="Scroll to the COIREA methodology">
        <span>See the system</span>
        <ArrowRight size={16} />
      </a>
    </section>
  );
}

function Methodology() {
  const [active, setActive] = useState(dimensions[0]);
  const ActiveIcon = active.icon;
  return (
    <section className="methodology section" id="methodology">
      <Reveal className="methodology-copy">
        <span className="eyebrow">The methodology</span>
        <h2>Five dimensions that determine if your organization can grow without breaking.</h2>
        <p>The People Operating System is not a framework to read. It is a living structure to measure, align, and strengthen over time.</p>
      </Reveal>
      <Reveal className="pillar-system" delay={0.1}>
        <div className="pillar-orbit">
          <div className="pillar-instruction">
            <span>Explore the system</span>
            <small>Select a dimension to read the signal.</small>
          </div>
          {dimensions.map(({ name, accent }, index) => (
            <button
              className={`pillar-node pillar-node--${accent} ${active.name === name ? "pillar-node--active" : ""}`}
              key={name}
              onClick={() => setActive(dimensions[index])}
              aria-pressed={active.name === name}
              type="button"
              style={{ "--i": index }}
            >
              <span>{name}</span>
              <small>Explore</small>
            </button>
          ))}
          <div className="core-pulse"><Leaf size={30} weight="light" /><span>People<br />Operating<br />System</span></div>
        </div>
        <div className="pillar-detail">
          <AnimatePresence mode="wait">
            <motion.div
              className="pillar-detail-content"
              key={active.name}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <ActiveIcon size={34} weight="light" />
              <span>{active.name} signal</span>
              <AnimatedNumber key={active.name} value={active.value} className="pillar-score" />
              <p>{active.signal}</p>
              <div className="pillar-symptoms">
                <small>What this affects</small>
                <div>
                  {active.affects.map((item) => <b key={item}>{item}</b>)}
                </div>
              </div>
              <div className="pillar-question">
                <small>Reflection question</small>
                <p>{active.question}</p>
              </div>
              <em>Scores are illustrative. In the live platform, they update as the organization evolves.</em>
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  );
}

function Platform() {
  const platformRef = useRef(null);
  const lastScrollYRef = useRef(0);
  const maxPlatformProgressRef = useRef(0);
  const [activeStep, setActiveStep] = useState(0);
  const [showPlatformDetails, setShowPlatformDetails] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setActiveStep(2);
      setShowPlatformDetails(true);
      return undefined;
    }

    let frame = 0;
    const updatePlatformState = () => {
      frame = 0;
      const node = platformRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const currentScrollY = window.scrollY || window.pageYOffset || 0;
      const isScrollingDown = currentScrollY >= lastScrollYRef.current;
      lastScrollYRef.current = currentScrollY;

      if (rect.top > viewport * 0.16) {
        maxPlatformProgressRef.current = 0;
        setActiveStep(0);
        setShowPlatformDetails(false);
        return;
      }

      const scrollable = Math.max(1, rect.height - viewport * 0.4);
      const progress = Math.min(1, Math.max(0, (viewport * 0.16 - rect.top) / scrollable));

      if (isScrollingDown) {
        maxPlatformProgressRef.current = Math.max(maxPlatformProgressRef.current, progress);
      }

      const lockedProgress = maxPlatformProgressRef.current;
      const nextStep = lockedProgress < 0.24 ? 0 : lockedProgress < 0.5 ? 1 : 2;
      setActiveStep((current) => (current === nextStep ? current : nextStep));
      setShowPlatformDetails(lockedProgress >= 0.64);
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updatePlatformState);
    };

    updatePlatformState();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [reduced]);

  return (
    <section className="platform section" id="platform" ref={platformRef}>
      <Reveal className="platform-copy">
        <span className="eyebrow">The platform</span>
        <h2>A platform that reads the signals your organization is already sending.</h2>
        <p>Real scores. Real patterns. Real action. COIREA follows the path from what people feel, to what the system is signaling, to what leaders can do next.</p>
        <a className="button button--outline" href="/conversation">Book a call to see it live <ArrowRight /></a>
        <ul className="benefit-list">
          {platformBenefits.map(({ icon: Icon, title, text }, index) => (
            <motion.li
              initial={reduced ? false : { opacity: 0, y: 14 }}
              whileInView={reduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.42, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              key={title}
              className={activeStep === index ? "is-active" : activeStep > index ? "is-complete" : ""}
            >
              <Icon />
              <strong>{title}</strong>
              <span>{text}</span>
            </motion.li>
          ))}
        </ul>
      </Reveal>
      <Reveal className="signal-board" delay={0.08}>
        <div className="signal-board-inner">
          <DashboardTour activeStep={activeStep} />
          <div className="signal-flow signal-flow--animated">
            {platformJourney.map(({ stage, title, text, outcome, icon: Icon }, index) => (
              <Fragment key={stage}>
                <motion.div
                  className={`flow-step flow-step--story flow-step--${index === 0 ? "signal" : index === 1 ? "insight" : "action"} ${activeStep === index ? "flow-step--active" : ""} ${activeStep > index ? "flow-step--complete" : ""}`}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.22 }}
                >
                  <div className="flow-icon"><Icon size={21} /></div>
                  <span>{stage}</span>
                  <strong>{title}</strong>
                  <p>{text}</p>
                  <small>{outcome}</small>
                </motion.div>
                {index < platformJourney.length - 1 && (
                  <motion.div className={`flow-arrow-wrap ${activeStep > index ? "flow-arrow-wrap--lit" : ""}`} aria-hidden="true">
                    <ArrowRight className="flow-arrow" />
                  </motion.div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
        <motion.div
          className={`focus-board platform-details ${showPlatformDetails ? "is-visible" : ""}`}
          initial={false}
          animate={showPlatformDetails ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden={!showPlatformDetails}
        >
          <div className="platform-details-content">
            <div className="focus-header">
              <div><Brain size={20} /> <strong>GiA</strong></div>
              <button type="button">View full analysis <ArrowRight /></button>
            </div>
            {[
              ["Collaboration", 54, "High"], ["Leadership", 63, "Medium"],
              ["Well-Being", 58, "Medium"], ["Strategy", 64, "Low"], ["Vision", 72, "Low"],
            ].map(([label, value, impact], index) => (
              <div className={`focus-row ${showPlatformDetails && index < 2 ? "is-reading" : ""}`} key={label}>
                <span>{label}</span>
                <AnimatedFocusBar value={value} delay={showPlatformDetails ? 0.15 + index * 0.08 : 0} active={showPlatformDetails} />
                <small className={`impact impact--${impact.toLowerCase()}`}>{impact}</small>
              </div>
            ))}
            <div className={`actions-board ${showPlatformDetails ? "is-active" : ""}`}>
              <span>Suggested actions</span>
              <div><Check /> Manager listening ritual <b>High impact</b></div>
              <div><Check /> Leadership calibration <b>Medium impact</b></div>
              <div><Check /> Team norms reset <b>Medium impact</b></div>
            </div>
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}

function DashboardTour({ activeStep = 0 }) {
  const tourSteps = [
    ["01", "Sense", "Survey signals arrive"],
    ["02", "Read", "GiA detects patterns"],
    ["03", "Act", "Leaders align next moves"],
  ];

  return (
    <div className="dashboard-tour" aria-label="Twenty second dashboard tour concept">
      <div className="tour-frame">
        <div className="tour-topbar">
          <span />
          <strong>COIREA system tour</strong>
          <small>20 sec loop</small>
        </div>
        <div className="tour-body">
          <div className={`tour-screenshot tour-screenshot--step-${activeStep}`}>
            <img src="/assets/coirea-platform-soil-preview.jpeg" alt="COIREA platform dashboard showing SOIL organizational health, OVI evaluation, and GiA qualitative insights" />
            <span className="tour-scanline" />
            <span className="tour-hotspot tour-hotspot--signal" />
            <span className="tour-hotspot tour-hotspot--insight" />
            <span className="tour-hotspot tour-hotspot--action" />
            <div className="tour-screenshot-badge">
              <strong>SOIL</strong>
              <small>Real platform preview</small>
            </div>
          </div>
          <div className="tour-panel">
            {tourSteps.map(([number, title, text], index) => (
              <div
                key={title}
                className={activeStep === index ? "is-active" : activeStep > index ? "is-complete" : ""}
                style={{ "--delay": `${index * 1.2}s` }}
              >
                <span>{number}</span>
                <strong>{title}</strong>
                <small>{text}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p>Preview the dashboard flow: OVI score, pillar signals, and GiA prompts moving from signal to insight to action.</p>
    </div>
  );
}

function ImpactShift() {
  const reduced = useReducedMotion();
  return (
    <section className="impact-shift section" id="impact">
      <Reveal className="impact-heading">
        <span className="eyebrow">The business impact</span>
        <h2>Turn hidden friction into visible momentum.</h2>
        <p>Before COIREA, the company may still be moving, but energy leaks through miscommunication, rework, bottlenecks, and invisible capacity strain. COIREA makes those patterns visible, then helps leaders convert them into aligned action.</p>
      </Reveal>

      <Reveal className="transformation-board" delay={0.08}>
        <div className="state-panel state-panel--before">
          <span className="state-label">Before COIREA</span>
          <h3>The system is working, but leaking energy.</h3>
          <div className="fragment-map" aria-hidden="true">
            <div className="broken-hub">
              <strong>?</strong>
              <small>unclear center</small>
            </div>
            {frictionSignals.map((item, index) => (
              <motion.i
                key={item}
                className={`fragment fragment--${index + 1}`}
                initial={reduced ? false : { opacity: 0, scale: 0.88 }}
                whileInView={reduced ? {} : { opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.48, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                {item}
              </motion.i>
            ))}
            <span className="fault-line fault-line--1" />
            <span className="fault-line fault-line--2" />
            <span className="fault-line fault-line--3" />
          </div>
          <ul>
            <li>The same decision, postponed again</li>
            <li>The same meeting, every other week</li>
            <li>Good people who quietly disengage</li>
          </ul>
        </div>

        <div className="coirea-bridge" aria-hidden="true">
          <motion.div
            initial={reduced ? false : { scale: 0.82, opacity: 0 }}
            whileInView={reduced ? {} : { scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
          >
            <Leaf size={26} weight="light" />
            <span>The system</span>
            <small>sees itself</small>
          </motion.div>
        </div>

        <div className="state-panel state-panel--after">
          <span className="state-label">With COIREA</span>
          <h3>The system connects and starts moving in rhythm.</h3>
          <div className="coherence-map" aria-hidden="true">
            <div className="coherence-core">
              <strong>OVI</strong>
              <small>living signal</small>
            </div>
            {harmonySignals.map((item, index) => (
              <motion.i
                key={item}
                className={`coherence-node coherence-node--${index + 1}`}
                initial={reduced ? false : { opacity: 0, scale: 0.8 }}
                whileInView={reduced ? {} : { opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.48, delay: 0.35 + index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                {item}
              </motion.i>
            ))}
          </div>
          <ul>
            <li>Leadership aligned on the same signal</li>
            <li>Issues visible before they become crises</li>
            <li>Teams that move without constant realignment</li>
          </ul>
        </div>
      </Reveal>

      <div className="impact-evidence">
        {impactSignals.map((item, index) => (
          <Reveal className="impact-row" delay={index * 0.08} key={item.before}>
            <span>0{index + 1}</span>
            <p>{item.before}</p>
            <ArrowRight size={18} />
            <strong>{item.after}</strong>
          </Reveal>
        ))}
      </div>

      {false && (
      <Reveal className="testimonial-section" delay={0.12}>
        <div className="testimonial-intro">
          <span className="eyebrow">Testimonials paused</span>
          <p>Verified client quotes will be added when provided.</p>
        </div>
        <div className="testimonial-grid">
          {[].map((item, index) => (
            <motion.figure
              key={item.quote}
              className="testimonial-card"
              whileHover={{ y: -7 }}
              transition={{ duration: 0.22 }}
            >
              <blockquote>“{item.quote}”</blockquote>
              <figcaption>{item.role} 0{index + 1}</figcaption>
            </motion.figure>
          ))}
        </div>
      </Reveal>
      )}
    </section>
  );
}

function Approach() {
  const stages = [
    { number: "01", name: "Consultation", title: "Diagnose", text: "The OVI maps the current state of your People Operating System across all five pillars. This is the SOIL phase, where GiA surfaces the first signals and tensions.", icon: Pulse },
    { number: "02", name: "Grow", title: "Align and execute", text: "The five pillars are implemented step by step. A certified Steward accompanies the work.", icon: Lightbulb },
    { number: "03", name: "Flourish", title: "Evolve and regenerate", text: "The organization keeps learning. Capacity grows alongside performance.", icon: Leaf },
  ];
  return (
    <section className="approach section" id="approach">
      <Reveal className="section-heading">
        <span className="eyebrow">The process</span>
        <h2>Three phases. One continuous system.</h2>
      </Reveal>
      <div className="stage-line" aria-hidden="true" />
      <div className="stages">
        {stages.map(({ number, name, title, text, icon: Icon }, index) => (
          <Reveal className="stage" delay={index * 0.12} key={name}>
            <motion.div className="stage-icon" whileHover={{ rotate: 4, scale: 1.04 }} transition={{ duration: 0.25 }}>
              <Icon size={34} weight="light" />
            </motion.div>
            <div className="stage-number">{number}</div>
            <h3>{name}</h3>
            <strong>{title}</strong>
            <p>{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function GiaSection() {
  return (
    <section className="gia-section section" id="gia">
      <Reveal className="gia-card-large">
        <div className="gia-card-header">
          <div className="gia-avatar"><Leaf size={20} weight="fill" /></div>
          <div><strong>GiA</strong><span>AI + Human Wisdom</span></div>
        </div>
        <h2>GiA does not give generic answers. It reads your organization and helps you reflect.</h2>
        <p>GiA means Guided Intelligence for Alignment. Instead of external models, it learns from your organization's own signals and turns them into specific, contextual guidance.</p>
      </Reveal>
      <Reveal className="gia-example" delay={0.1}>
        <motion.div whileHover={{ x: 8 }} transition={{ duration: 0.22 }}>
          <span>Signal</span>
          <p>Difficulty speaking up with managers is appearing across multiple responses.</p>
        </motion.div>
        <motion.div whileHover={{ x: 8 }} transition={{ duration: 0.22 }}>
          <span>Insight</span>
          <p>Psychological safety is fragile at the leadership interface. This is a structural gap, not a personal issue.</p>
        </motion.div>
        <motion.div whileHover={{ x: 8 }} transition={{ duration: 0.22 }}>
          <span>Question</span>
          <p>What environment could you create so people feel safe enough to tell the truth early?</p>
        </motion.div>
      </Reveal>
    </section>
  );
}

function FitCheck() {
  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);
  const score = useMemo(() => {
    if (!answers.length) return 68;
    return Math.round((answers.reduce((sum, item) => sum + item, 0) / answers.length) * 10 + 48);
  }, [answers]);
  const current = fitQuestions[question];
  const complete = question >= fitQuestions.length;
  const signalScore = Math.min(score, 92);
  const journeyState = complete
    ? "Starting system signal"
    : answers.length >= 3
      ? "Pattern emerging"
      : answers.length > 0
        ? "Early signal"
        : "Awaiting first signal";
  const result = signalScore < 60
    ? {
        title: "Your system may be carrying hidden friction.",
        text: "A full COIREA diagnostic would help identify where energy is leaking and which dimension needs attention first.",
      }
    : signalScore < 80
      ? {
          title: "Your system shows potential, but alignment may be inconsistent.",
          text: "There are useful signals here. COIREA can help connect them across the five dimensions before friction becomes structural.",
        }
      : {
          title: "Your system may already have strong coherence.",
          text: "COIREA can help protect that coherence as the organization grows, adds complexity, or enters a new strategic phase.",
        };

  const choose = (value) => {
    if (selectedValue !== null || complete) return;
    setSelectedValue(value);
    setAnswers((items) => [...items, value]);
    window.setTimeout(() => {
      setQuestion((index) => index + 1);
      setSelectedValue(null);
    }, 320);
  };

  const restart = () => {
    setAnswers([]);
    setQuestion(0);
    setSelectedValue(null);
  };

  return (
    <section className="diagnostic diagnostic--journey section" id="diagnostic">
      <Reveal className="diagnostic-intro">
        <span className="eyebrow">60-second system signal check</span>
        <h2>Is COIREA for you?</h2>
        <p>Answer honestly. This is not a scorecard. It is a first signal of how your organization behaves under pressure.</p>
        <div className="diagnostic-guide">
          <span><Check size={15} weight="bold" /> Five dimensions</span>
          <span><Check size={15} weight="bold" /> One starting signal</span>
          <span><Check size={15} weight="bold" /> Clear next step</span>
        </div>
        <div className="ovi-tiers" aria-label="OVI scoring tiers">
          <span>OVI tiers</span>
          <small>80-100 Systemic Coherence</small>
          <small>60-79 Emerging Alignment</small>
          <small>40-59 Fragile Stability</small>
          <small>0-39 Structural Risk</small>
        </div>
      </Reveal>
      <Reveal className="diagnostic-panel" delay={0.1}>
        <div className="diagnostic-steps" aria-label="Diagnostic progress">
          {fitQuestions.map((item, index) => (
            <span
              className={`${index < answers.length ? "is-complete" : ""} ${index === question && !complete ? "is-current" : ""}`}
              key={item.dimension}
            >
              {item.dimension}
            </span>
          ))}
        </div>
        <AnimatePresence mode="wait">
          {!complete ? (
            <motion.div
              key={question}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.24 }}
            >
              <div className="question-meta">
                <span>Question {question + 1} of {fitQuestions.length}</span>
                <strong>{current.dimension}</strong>
              </div>
              <h3>{current.prompt}</h3>
              <p className="question-helper">Choose the number that feels most true today.</p>
              <div className="rating-row" role="group" aria-label="Rate from strongly disagree to strongly agree">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    className={selectedValue === value ? "is-selected" : ""}
                    disabled={selectedValue !== null}
                    key={value}
                    onClick={() => choose(value)}
                    type="button"
                  >
                    {value}
                  </button>
                ))}
              </div>
              <AnimatePresence>
                {selectedValue !== null && (
                  <motion.div
                    className="signal-captured"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Check size={15} weight="bold" /> Signal captured
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="rating-labels"><span>Strongly disagree</span><span>Strongly agree</span></div>
              <div className="progress-track"><span style={{ width: `${(answers.length / fitQuestions.length) * 100}%` }} /></div>
            </motion.div>
          ) : (
            <motion.div
              className="result-state"
              key="result"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="result-check"><Check size={25} weight="bold" /></div>
              <span className="eyebrow">Starting signal</span>
              <h3>{result.title}</h3>
              <p>{result.text}</p>
              <div className="result-actions">
                <a className="button button--primary" href="/conversation">Apply to work with COIREA <ArrowRight size={17} /></a>
                <button className="text-button" onClick={restart} type="button">Try again <ArrowRight /></button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Reveal>
      <Reveal className="score-orbit" delay={0.2}>
        <span>{journeyState}</span>
        <AnimatedNumber value={signalScore} />
        <small>{complete ? "Ready for next step" : "Keep going"}</small>
      </Reveal>
    </section>
  );
}

function AnswerEngineFaq() {
  useEffect(() => {
    upsertJsonLd("coirea-faqpage", {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.coirea.com/#faq",
      mainEntity: aiSeoFaqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    });
    return () => removeJsonLd("coirea-faqpage");
  }, []);

  return (
    <section className="answer-faq section" id="faq">
      <Reveal className="answer-faq-intro">
        <span className="eyebrow">Questions leaders ask</span>
        <h2>Clear answers about COIREA and the People Operating System.</h2>
        <p>These answers are written for leaders evaluating COIREA, and structured clearly so search engines and AI assistants can understand the concept without guessing.</p>
      </Reveal>
      <div className="answer-faq-grid">
        {aiSeoFaqs.map(([question, answer], index) => (
          <Reveal className="answer-faq-card" delay={index * 0.05} key={question}>
            <h3>{question}</h3>
            <p>{answer}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="answer-faq-link" delay={0.12}>
        <a className="text-button" href="/insights/what-is-a-people-operating-system">
          Read the full People Operating System article <ArrowRight />
        </a>
      </Reveal>
    </section>
  );
}

function Closing() {
  return (
    <section className="closing conversation-cta" id="conversation">
      <span className="anchor-target" id="about" aria-hidden="true" />
      <div className="closing-image" aria-hidden="true" />
      <Reveal className="conversation-cta-copy">
        <span className="eyebrow">Apply to work with COIREA</span>
        <h2>Is Your Organization Ready to See Itself Clearly?</h2>
        <p>COIREA is not for every organization. It is for the ones that sense something needs to shift, and are ready to look at it honestly, with the right support alongside them.</p>
        <a className="button button--primary" href="/conversation">Book a conversation <ArrowRight size={17} /></a>
      </Reveal>
    </section>
  );
}

function ApplicationForm() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      organization: formData.get("organization")?.toString().trim(),
      role: formData.get("role")?.toString().trim(),
      friction: formData.getAll("friction").map((item) => item.toString()),
      desired_shift: formData.get("desired_shift")?.toString().trim(),
      team_size: formData.get("team_size")?.toString(),
      website: formData.get("website")?.toString(),
    };

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        const errorMessage = result.error === "Email service is not configured yet."
          ? "The application form is ready, but the email service still needs to be connected. Please email hello@coirea.com directly for now."
          : result.error || "Something went wrong. Please try again.";
        throw new Error(errorMessage);
      }
      form.reset();
      setStatus("success");
      setMessage("Thank you. Your application was sent to COIREA. A Steward will review it personally.");
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Something went wrong. Please email hello@coirea.com directly.");
    }
  };

  return (
    <Reveal className="application-form" delay={0.1}>
      <form onSubmit={handleSubmit}>
        <label className="application-honeypot" aria-hidden="true">
          <span>Website</span>
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
        <fieldset>
          <legend>Who you are</legend>
          <div className="application-field-grid">
            <label>
              <span>Your name</span>
              <input name="name" type="text" required />
            </label>
            <label>
              <span>Email address</span>
              <input name="email" type="email" required />
            </label>
            <label>
              <span>Organization name</span>
              <input name="organization" type="text" required />
            </label>
            <label>
              <span>Your role</span>
              <input name="role" type="text" required />
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Your system</legend>
          <p className="field-help">Where does your organization feel the most friction right now? Select what resonates.</p>
          <div className="friction-options">
            {applicationFrictionOptions.map((option) => (
              <label className="choice-card" key={option}>
                <input name="friction" type="checkbox" value={option} />
                <span>{option}</span>
              </label>
            ))}
          </div>
          <label className="contact-message">
            <span>What would shift in your organization if this changed?</span>
            <textarea name="desired_shift" rows={4} placeholder="2-3 sentences is enough" required />
          </label>
        </fieldset>

        <fieldset>
          <legend>Context</legend>
          <label>
            <span>Team size</span>
            <select name="team_size" required defaultValue="">
              <option value="" disabled>Select one</option>
              {teamSizeOptions.map((size) => <option value={size} key={size}>{size}</option>)}
            </select>
          </label>
        </fieldset>

        <button className="button button--primary" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Send my application"} <ArrowRight size={17} />
        </button>
        {message && <p className={`application-status application-status--${status}`}>{message}</p>}
        <p className="application-note">A Steward reads every application personally. If there is a genuine fit, we will reach out within 5 business days.</p>
      </form>
    </Reveal>
  );
}

function ConversationPage() {
  return (
    <main>
      <PageHero
        eyebrow="Book a conversation"
        title="Is Your Organization Ready to See Itself Clearly?"
        text="Every organization enters with a Steward. This is not a software subscription. It is an accompanied transformation. Applications are reviewed personally."
        variant="conversation"
      />
      <section className="application-section application-section--page section">
        <Reveal className="application-copy">
          <span className="eyebrow">Apply to work with COIREA</span>
          <h2>Start with fit, not pressure.</h2>
          <p>COIREA is for organizations that sense something needs to shift, and are ready to look at it honestly with the right support alongside them.</p>
          <p>Complete the application below. If there is a genuine fit, COIREA will reach out within 5 business days.</p>
        </Reveal>
        <ApplicationForm />
      </section>
    </main>
  );
}

function PageHero({ eyebrow, title, text, variant = "" }) {
  return (
    <section className={`subpage-hero ${variant ? `subpage-hero--${variant}` : ""}`}>
      <div className="hero-image" aria-hidden="true" />
      <div className="subpage-scrim" aria-hidden="true" />
      <Reveal className="subpage-hero-copy">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </Reveal>
    </section>
  );
}

function PlatformPage() {
  return (
    <main>
      <PageHero
        eyebrow="Platform"
        title="The Organizational Intelligence Platform."
        text="COIREA replaces fragmented management tools with one integrated system for execution clarity. It measures organizational health across five pillars, detects misalignment early, and translates signals into clear ownership and strategic focus."
      />
      <section className="process-cycle section">
        <Reveal className="section-heading">
          <span className="eyebrow">The regenerative execution cycle</span>
          <h2>How COIREA Works.</h2>
          <p>COIREA helps organizations achieve strategic goals while increasing systemic coherence and long-term capacity.</p>
        </Reveal>
        <div className="cycle-grid">
          {regenerativeSteps.map((step, index) => (
            <Reveal className="cycle-card" delay={index * 0.1} key={step.title}>
              <span>0{index + 1}</span>
              <h3>{step.title}</h3>
              <strong>{step.subtitle}</strong>
              <p>{step.text}</p>
              <ul>
                {step.bullets.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <small>{step.closing}</small>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="detail-page section">
        <Reveal className="detail-intro">
          <span className="eyebrow">What COIREA measures</span>
          <h2>The five pillars of organizational intelligence.</h2>
          <p>All captured in one system, interpreted by GiA, and supported by Stewards when the organization needs human accompaniment.</p>
        </Reveal>
        <div className="detail-grid detail-grid--five">
          {platformPillars.map(([title, subtitle, text], index) => (
            <Reveal className="detail-card" delay={index * 0.06} key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <strong>{subtitle}</strong>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="platform section page-product-panel">
        <Reveal className="platform-copy">
          <span className="eyebrow">Evolution Dashboard</span>
          <h2>System-level clarity in one dashboard.</h2>
          <p>COIREA centralizes signals across vision, culture, leadership, collaboration, well-being, and strategy, then uses trained Organizational AI to interpret how those dimensions affect your goals.</p>
        </Reveal>
        <Reveal className="signal-board" delay={0.08}>
          <div className="dashboard-reel" aria-label="Animated platform demo"><span /><span /><span /><p>OVI + GiA live preview</p></div>
          <div className="focus-board">
            <div className="focus-header"><div><Brain size={20} /> <strong>GiA</strong></div><button type="button">System intelligence <ArrowRight /></button></div>
            {[
              ["Execution drift", 62, "High"], ["Ownership unclear", 58, "Medium"],
              ["Capacity thinning", 54, "High"], ["Alignment strengthening", 72, "Low"],
            ].map(([label, value, impact], index) => (
              <div className="focus-row" key={label}>
                <span>{label}</span>
                <AnimatedFocusBar value={value} delay={0.15 + index * 0.08} />
                <small className={`impact impact--${impact.toLowerCase()}`}>{impact}</small>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
      <section className="gia-questions section">
        <Reveal className="section-heading">
          <span className="eyebrow">Meet GiA</span>
          <h2>What GiA makes visible.</h2>
          <p>GiA is not a generic chatbot. It interprets patterns within your organization’s own data and turns them into contextual questions.</p>
        </Reveal>
        <div className="question-grid">
          {giaQuestions.map(([title, question], index) => (
            <Reveal className="question-card" delay={index * 0.06} key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{question}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="detail-page section">
        <Reveal className="detail-intro">
          <span className="eyebrow">Platform features</span>
          <h2>Everything needed to understand and transform the organization.</h2>
          <p>The original Platform page contains a broader feature layer. This section brings those product promises into the new design format.</p>
        </Reveal>
        <div className="detail-grid">
          {platformFeatures.map(([title, text], index) => (
            <Reveal className="detail-card" delay={index * 0.05} key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      {false && (
      <section className="about-system section" hidden>
        <Reveal className="gia-card-large">
          <div className="gia-card-header">
            <div className="gia-avatar"><UsersThree size={20} weight="fill" /></div>
            <div><strong>The human layer</strong><span>Platform + Steward</span></div>
          </div>
          <h2>The system works because people hold it.</h2>
          <p>COIREA is not a self-service tool. Every organization that enters the system is accompanied by a Steward, a trained facilitator who reads what data alone cannot tell you and stays present through the moments that matter most.</p>
        </Reveal>
        <Reveal className="steward-panel" delay={0.1}>
          <span className="eyebrow">Responsible AI</span>
          <h3>Not a disclaimer. A design choice.</h3>
          <p>GiA is used deliberately, in service of reflection, and only where it adds something a human alone could not see as easily. The rest of the system is designed around people, presence, relationships, and response.</p>
        </Reveal>
      </section>
      )}
      <Closing />
    </main>
  );
}

function EcosystemPage() {
  return (
    <main>
      <PageHero
        eyebrow="Ecosystem"
        title="Built for organizations driven by purpose."
        text="COIREA helps mission-driven organizations align their systems, strengthen execution, and scale impact without burning out their people or losing coherence."
      />
      <section className="detail-page section">
        <Reveal className="detail-intro">
          <span className="eyebrow">Who this is for</span>
          <h2>Different missions. Same structural challenge.</h2>
          <p>Mission-driven organizations rarely struggle with purpose. They struggle with the systems designed to carry it.</p>
        </Reveal>
        <div className="detail-grid">
          {ecosystemTypes.map((type, index) => (
            <Reveal className="detail-card" delay={index * 0.06} key={type}>
              <span>0{index + 1}</span>
              <h3>{type}</h3>
              <p>Purpose-led teams navigating growth, complexity, coordination, and the need for healthier execution.</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="about-story section">
        <Reveal className="about-manifesto">
          <span className="eyebrow">The real problem</span>
          <h2>The challenge is not purpose. It is building a system that can sustain it.</h2>
        </Reveal>
        <Reveal className="about-principles" delay={0.1}>
          {[
            ["Intention without structure", "Strong values exist, but the operational architecture to sustain them does not."],
            ["People over systems", "Organizations depend on individual energy instead of structural coherence."],
            ["Execution drift", "Daily work disconnects from strategic mission as complexity grows."],
            ["Invisible burnout", "Unclear ownership and slow governance erode well-being silently."],
          ].map(([title, text], index) => (
            <div key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></div>
          ))}
        </Reveal>
      </section>
      <section className="ecosystem-response section">
        <Reveal className="section-heading">
          <span className="eyebrow">COIREA response</span>
          <h2>Regenerative execution starts with system intelligence.</h2>
        </Reveal>
        <div className="detail-grid">
          {[
            ["Align Mission & Execution", "Connect mission, strategy, and daily execution into one coherent system."],
            ["Detect System Tension", "Identify structural misalignment before it becomes breakdown or burnout."],
            ["Protect Team Capacity", "Safeguard energy and capacity while scaling impact."],
            ["Structure with Humanity", "Build governance and ownership structures without losing the human element."],
          ].map(([title, text], index) => (
            <Reveal className="detail-card" delay={index * 0.07} key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="diagnostic section">
        <Reveal className="diagnostic-intro">
          <span className="eyebrow">Start here</span>
          <h2>How healthy is your organization?</h2>
          <p>Before transformation, leaders need to understand where the system stands. COIREA’s diagnostic tools give immediate clarity on health, leadership coherence, and structural alignment.</p>
        </Reveal>
        <Reveal className="diagnostic-panel" delay={0.1}>
          <div className="result-state">
            <div className="result-check"><Check size={25} weight="bold" /></div>
            <span className="eyebrow">Free diagnostic tools</span>
            <h3>Organizational Health Score, Conscious Leadership Assessment, and Health Scanner.</h3>
            <p>This section preserves the original Ecosystem pathway into the tools and assessment experience.</p>
          </div>
        </Reveal>
      </section>
      <section className="gia-section section">
        <Reveal className="gia-card-large">
          <div className="gia-card-header">
            <div className="gia-avatar"><Brain size={20} weight="fill" /></div>
            <div><strong>GiA</strong><span>Intelligence that understands your system</span></div>
          </div>
          <h2>No generic benchmarks. Only insight grounded in your reality.</h2>
          <p>For mission-driven organizations, GiA helps leaders see where the system is misaligned, overloaded, fragmented, or ready to evolve.</p>
        </Reveal>
        <Reveal className="gia-example" delay={0.1}>
          {["Misaligned", "Overloaded", "Fragmented", "Ready to evolve"].map((item) => (
            <motion.div key={item} whileHover={{ x: 8 }} transition={{ duration: 0.22 }}>
              <span>System state</span>
              <p>{item}</p>
            </motion.div>
          ))}
        </Reveal>
      </section>
      <section className="ecosystem-response section">
        <Reveal className="section-heading">
          <span className="eyebrow">Regenerative impact</span>
          <h2>From organizational coherence to regenerative impact.</h2>
          <p>Organizations shape systems. Systems shape outcomes. When organizations operate coherently, without extraction, they create the conditions for regenerative impact at scale.</p>
        </Reveal>
      </section>
      <Closing />
    </main>
  );
}

function StewardsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Stewards"
        title="The human presence behind the COIREA system."
        text="Stewards do not simply apply a method. They hold a living process, walking alongside organizations through moments of tension, reflection, and transformation."
      />
      <section className="detail-page section">
        <Reveal className="detail-intro">
          <span className="eyebrow">What a Steward does</span>
          <h2>They help the system see what it already knows.</h2>
          <p>Stewards accompany leaders and teams through the implementation of the organizational OS, translating insight into presence, rhythm, and action.</p>
        </Reveal>
        <div className="detail-grid">
          {stewardCompass.map(([title, text], index) => (
            <Reveal className="detail-card" delay={index * 0.08} key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="stewards-strip section">
        <Reveal className="section-heading">
          <span className="eyebrow">Meet the Stewards</span>
          <h2>The people holding the system.</h2>
        </Reveal>
        <div className="steward-grid">
          {stewardProfiles.map(([name, role, text], index) => (
            <Reveal className="steward-tile" delay={index * 0.08} key={name}>
              <span>Founding Steward</span>
              <h3>{name}</h3>
              <strong>{role}</strong>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="about-story section">
        <Reveal className="about-manifesto">
          <span className="eyebrow">The container</span>
          <h2>COIREA was conceived as a container to trust.</h2>
          <p>A space where reflection precedes intervention, where patterns are named without assigning blame, and where organizational intelligence is allowed to emerge from within.</p>
        </Reveal>
        <Reveal className="about-principles" delay={0.1}>
          {[
            ["Not answers", "A Steward asks the questions the system needs to hear."],
            ["Presence", "They stay in the room when those questions land."],
            ["Practice", "Each Steward brings their own purpose, background, and inner practice to the work."],
          ].map(([title, text], index) => (
            <div key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></div>
          ))}
        </Reveal>
      </section>
      <section className="steward-apply section">
        <Reveal className="section-heading">
          <span className="eyebrow">For facilitators & coaches</span>
          <h2>Do you feel the call to become a Steward?</h2>
          <p>COIREA Stewards are not hired, they are recognized. The original page invites practitioners with real accompaniment experience and personal practice to apply.</p>
        </Reveal>
        <div className="apply-criteria">
          {[
            "Real experience accompanying human or organizational processes",
            "An active personal practice: coaching, meditation, somatic work, or similar",
            "A desire to operate from a system that integrates purpose, structure, and well-being",
          ].map((item, index) => (
            <Reveal className="impact-row" delay={index * 0.08} key={item}>
              <span>0{index + 1}</span>
              <strong>{item}</strong>
            </Reveal>
          ))}
        </div>
      </section>
      <Closing />
    </main>
  );
}

function InsightsPage() {
  const { posts, loading, error } = useMigratedBlogPosts();
  const [activeCluster, setActiveCluster] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const visibleCluster = displayCluster(post.cluster, post.title);
      const matchesCluster = activeCluster === "All" || visibleCluster === activeCluster;
      const search = searchTerm.trim().toLowerCase();
      if (!search) return matchesCluster;
      const haystack = `${post.title} ${post.preview_snippet} ${visibleCluster} ${post.cluster} ${(post.tags || []).join(" ")}`.toLowerCase();
      return matchesCluster && haystack.includes(search);
    });
  }, [activeCluster, posts, searchTerm]);

  useEffect(() => {
    setVisibleCount(9);
  }, [activeCluster, searchTerm]);

  const cardPosts = filteredPosts.slice(0, visibleCount);
  const hasMorePosts = filteredPosts.length > visibleCount;

  useEffect(() => {
    if (loading || error || posts.length === 0) {
      removeJsonLd("coirea-insights-itemlist");
      return;
    }
    upsertJsonLd("coirea-insights-itemlist", {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "COIREA Insights",
      url: "https://www.coirea.com/insights",
      numberOfItems: posts.length,
      itemListElement: posts.slice(0, 25).map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://www.coirea.com/insights/${post.slug}`,
        name: post.title,
      })),
    });
    return () => removeJsonLd("coirea-insights-itemlist");
  }, [error, loading, posts]);

  return (
    <main>
      <PageHero
        eyebrow="Insights"
        title="Insights"
        text="Thinking for organizations ready to evolve."
        variant="insights"
      />
      <section className="insights-page section">
        <Reveal className="featured-insight">
          <div className="featured-insight-copy">
            <span className="eyebrow">Featured</span>
            <div className="article-meta">
              <span className="category-tag category-tag--people-operating-system">People Operating System</span>
              <small>Mar&iacute;a Jos&eacute; Figueroa</small>
            </div>
            <h2>The Five Pillars of the People Operating System</h2>
            <p>A guide to the five dimensions that determine how well your organization functions as a living system, and what to strengthen first.</p>
            <a className="text-button" href="/insights/five-pillars-regenerative-business">Read more <ArrowRight /></a>
          </div>
          <a className="featured-insight-image" href="/insights/five-pillars-regenerative-business" aria-label="Read The Five Pillars of the People Operating System">
            <img src="/assets/insights/five-pillars-regenerative-business.svg" alt="" />
          </a>
        </Reveal>
        <div className="insight-grid">
          <Reveal className="resource-filter">
            <span className="eyebrow">Explore by theme</span>
            <label className="search-shell search-shell--active">
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search insights..."
                aria-label="Search insights"
              />
            </label>
            <div>
              {migratedBlogClusters.map((item) => (
                <button
                  className={activeCluster === item ? "is-active" : ""}
                  type="button"
                  key={item}
                  onClick={() => setActiveCluster(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <p>{loading ? "Loading posts..." : `${filteredPosts.length} insights available.`}</p>
          </Reveal>
          {error && (
            <Reveal className="insights-status">
              <p>{error}</p>
            </Reveal>
          )}
          {loading && Array.from({ length: 6 }).map((_, index) => (
            <Reveal className="insight-card-wrap" delay={index * 0.04} key={`insight-skeleton-${index}`}>
              <div className="insight-card insight-card--loading" aria-hidden="true">
                <span className="insight-card-image insight-card-image--placeholder">
                  <i />
                  <i />
                  <i />
                </span>
                <span />
                <h3 />
                <p />
                <div className="card-footer"><small /></div>
              </div>
            </Reveal>
          ))}
          {!loading && !error && filteredPosts.length === 0 && (
            <Reveal className="insights-status">
              <p>No insights match that search yet. Try another theme or keyword.</p>
            </Reveal>
          )}
          {!loading && !error && cardPosts.map((item, index) => {
            const image = item.featured_image || extractFirstImage(item.body_content);
            return (
              <Reveal className="insight-card-wrap" delay={(index % 9) * 0.04} key={item.id}>
                <a className="insight-card" href={`/insights/${item.slug}`} aria-label={`Read ${item.title}`}>
                  {image ? (
                    <span className="insight-card-image">
                      <img src={image} alt="" loading="lazy" />
                    </span>
                  ) : (
                    <span className="insight-card-image insight-card-image--placeholder" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                    </span>
                  )}
                  <span className={`category-tag ${clusterClass(displayCluster(item.cluster, item.title))}`}>{displayCluster(item.cluster, item.title)}</span>
                  <h3>{item.title}</h3>
                  <p>{item.preview_snippet}</p>
                  <div className="card-footer">
                    <small><span>{formatPostDate(item.created_at)}</span><span>{estimateReadingTime(item.body_content)} min read</span></small>
                    <span className="card-read-more">Read more <ArrowRight size={14} /></span>
                  </div>
                </a>
              </Reveal>
            );
          })}
          {hasMorePosts && (
            <Reveal className="insights-load-more">
              <button className="button button--outline" type="button" onClick={() => setVisibleCount((count) => count + 9)}>
                Show more insights <ArrowRight />
              </button>
            </Reveal>
          )}
        </div>
      </section>
      <Closing />
    </main>
  );
}

function InsightArticlePage() {
  useEffect(() => {
    upsertJsonLd("coirea-guide-article", {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: peopleOperatingSystemArticle.title,
      description: peopleOperatingSystemArticle.intro,
      author: {
        "@type": "Person",
        name: peopleOperatingSystemArticle.author,
      },
      publisher: {
        "@type": "Organization",
        name: "COIREA",
        logo: {
          "@type": "ImageObject",
          url: "https://www.coirea.com/assets/coirea-logo.png",
        },
      },
      dateModified: "2026-07-01",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.coirea.com/insights/what-is-a-people-operating-system",
      },
      articleSection: "People Operating System",
    });
    return () => removeJsonLd("coirea-guide-article");
  }, []);

  return (
    <main>
      <PageHero
        eyebrow="Insight"
        title={peopleOperatingSystemArticle.title}
        text="A practical definition for leaders who want to understand the human system behind performance."
        variant="insights"
      />
      <article className="article-page section">
        <Reveal className="article-shell">
          <div className="article-kicker">
            <span className="category-tag category-tag--people-operating-system">People Operating System</span>
            <small>{peopleOperatingSystemArticle.updated}</small>
          </div>
          <p className="article-lede">{peopleOperatingSystemArticle.intro}</p>
          <div className="article-definition">
            <strong>Definition</strong>
            <p>A People Operating System is the human infrastructure of an organization: the way purpose, leadership, decisions, collaboration, strategy, and well-being work together in daily practice.</p>
          </div>
          {peopleOperatingSystemArticle.sections.map((section, index) => (
            <Reveal className="article-section" delay={index * 0.06} key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </Reveal>
          ))}
          <div className="article-takeaways">
            <h2>Key takeaways</h2>
            <ul>
              <li>A People Operating System makes the invisible human patterns of work visible.</li>
              <li>COIREA measures organizational health across Vision, Leadership, Strategy, Collaboration, and Well-Being.</li>
              <li>OVI diagnoses the system; GiA helps leaders ask better questions and choose better next actions.</li>
              <li>The goal is not more control. The goal is more coherence.</li>
            </ul>
          </div>
          <a className="button button--primary" href="/conversation">Book a conversation <ArrowRight /></a>
        </Reveal>
      </article>
      <AnswerEngineFaq />
      <Closing />
    </main>
  );
}

function MigratedBlogPostPage({ slug }) {
  const { post, posts, loading, error } = useMigratedBlogPost(slug);

  useEffect(() => {
    if (!post) return;
    const title = post.seo_title || `${post.title} | COIREA Insights`;
    const description = post.meta_description || post.preview_snippet || stripHtml(post.body_content).slice(0, 155);
    const postUrl = `https://www.coirea.com/insights/${post.slug}`;
    const postImage = absolutePublicUrl(post.featured_image || extractFirstImage(post.body_content) || defaultShareImage);
    document.title = title;
    ensureMeta('meta[name="description"]', { name: "description" }).setAttribute("content", description);
    ensureMeta('meta[property="og:title"]', { property: "og:title" }).setAttribute("content", title);
    ensureMeta('meta[property="og:description"]', { property: "og:description" }).setAttribute("content", description);
    ensureMeta('meta[property="og:url"]', { property: "og:url" }).setAttribute("content", postUrl);
    ensureMeta('meta[property="og:image"]', { property: "og:image" }).setAttribute("content", postImage);
    ensureMeta('meta[property="og:image:secure_url"]', { property: "og:image:secure_url" }).setAttribute("content", postImage);
    ensureMeta('meta[property="og:image:alt"]', { property: "og:image:alt" }).setAttribute("content", `${post.title} - COIREA Insights`);
    ensureMeta('meta[name="twitter:title"]', { name: "twitter:title" }).setAttribute("content", title);
    ensureMeta('meta[name="twitter:description"]', { name: "twitter:description" }).setAttribute("content", description);
    ensureMeta('meta[name="twitter:image"]', { name: "twitter:image" }).setAttribute("content", postImage);
    ensureMeta('meta[name="twitter:image:alt"]', { name: "twitter:image:alt" }).setAttribute("content", `${post.title} - COIREA Insights`);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", postUrl);

    upsertJsonLd("coirea-blogposting", {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description,
      image: postImage,
      author: {
        "@type": "Person",
        name: normalizeAuthor(post.author),
        url: "https://www.linkedin.com/in/mariajosefigueroaaadaros/",
      },
      publisher: {
        "@type": "Organization",
        name: "COIREA",
        logo: {
          "@type": "ImageObject",
          url: "https://www.coirea.com/assets/coirea-logo.png",
        },
      },
      datePublished: post.created_at,
      dateModified: post.updated_at || post.created_at,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": postUrl,
      },
      articleSection: displayCluster(post.cluster, post.title),
      keywords: (post.tags || []).join(", "),
      ...(post.direct_answer ? { abstract: post.direct_answer } : {}),
      wordCount: stripHtml(post.body_content).split(/\s+/).filter(Boolean).length,
    });

    return () => removeJsonLd("coirea-blogposting");
  }, [post]);

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    const postCluster = displayCluster(post.cluster, post.title);
    const postTags = new Set(post.tags || []);
    return posts
      .filter((item) => item.slug !== post.slug)
      .map((item) => {
        const sameCluster = displayCluster(item.cluster, item.title) === postCluster ? 3 : 0;
        const tagOverlap = (item.tags || []).filter((tag) => postTags.has(tag)).length;
        return { ...item, relatedScore: sameCluster + tagOverlap };
      })
      .filter((item) => item.relatedScore > 0)
      .sort((a, b) => b.relatedScore - a.relatedScore || new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      .slice(0, 3);
  }, [post, posts]);

  if (loading) {
    return (
      <main>
        <PageHero eyebrow="Insights" title="Loading article..." text="Preparing this COIREA insight." variant="insights" />
        <section className="article-page section">
          <Reveal className="article-shell"><p className="article-lede">Loading the article...</p></Reveal>
        </section>
      </main>
    );
  }

  if (error || !post) {
    return (
      <main>
        <PageHero eyebrow="Insights" title="Post not found" text="This article could not be found." variant="insights" />
        <section className="article-page section">
          <Reveal className="article-shell">
            <p className="article-lede">{error || "The post may have moved or may not be published."}</p>
            <a className="button button--primary" href="/insights">Back to Insights <ArrowRight /></a>
          </Reveal>
        </section>
      </main>
    );
  }

  return (
    <main>
      <PageHero
        eyebrow="COIREA insight"
        title={post.title}
        text={post.preview_snippet}
        variant="insights"
      />
      <article className="article-page section">
        <Reveal className="article-shell">
          <div className="article-kicker">
            <span className={`category-tag ${clusterClass(displayCluster(post.cluster, post.title))}`}>{displayCluster(post.cluster, post.title)}</span>
            <small>{formatPostDate(post.created_at, true)}</small>
          </div>
          <div className="migrated-post-meta">
            <span>By {normalizeAuthor(post.author)}</span>
            <span>{estimateReadingTime(post.body_content)} min read</span>
          </div>
          {post.featured_image && (
            <img className="migrated-featured-image" src={post.featured_image} alt={`${post.title} featured image`} />
          )}
          {post.direct_answer && (
            <div className="article-definition">
              <strong>Direct answer</strong>
              <p>{post.direct_answer}</p>
            </div>
          )}
          <div
            className="legacy-article-content"
            dangerouslySetInnerHTML={{ __html: sanitizeBlogHtml(post.body_content) }}
          />
          {post.tags?.length > 0 && (
            <div className="article-tags" aria-label="Article tags">
              {post.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          )}
          {relatedPosts.length > 0 && (
            <section className="related-insights" aria-labelledby="related-insights-title">
              <div className="related-insights-header">
                <span className="eyebrow">Keep reading</span>
                <h2 id="related-insights-title">Related insights</h2>
              </div>
              <div className="related-insights-grid">
                {relatedPosts.map((item) => (
                  <a className="related-insight-card" href={`/insights/${item.slug}`} key={item.id}>
                    <span className={`category-tag ${clusterClass(displayCluster(item.cluster, item.title))}`}>{displayCluster(item.cluster, item.title)}</span>
                    <h3>{item.title}</h3>
                    <small>{estimateReadingTime(item.body_content)} min read</small>
                  </a>
                ))}
              </div>
            </section>
          )}
          <a className="button button--primary" href="/insights">Back to Insights <ArrowRight /></a>
        </Reveal>
      </article>
      <Closing />
    </main>
  );
}

function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="Organizations don't fail from lack of strategy. They fail when people can't sustain it."
        text="COIREA was founded to close the gap between how organizations are designed and how people actually experience them. Not through restructuring. Through coherence."
        variant="about"
      />
      {false && (
      <section className="founder-origin section">
        <Reveal className="founder-portrait">
          <div>
            <img src="/assets/coirea-valley.png" alt="Natural landscape representing the living systems that inspire COIREA" />
          </div>
          <span>Founder image placeholder. Replace with María José's photo.</span>
        </Reveal>
        <Reveal className="founder-copy" delay={0.1}>
          <span className="eyebrow">Founder</span>
          <h2 className="founder-name">Mar&iacute;a Jos&eacute; Figueroa</h2>
          <strong className="founder-title">Founder & Chief Systems Architect</strong>
          <p className="founder-bio-primary">Mar&iacute;a Jos&eacute; spent over a decade inside organizations watching the same patterns repeat: disconnected strategy, exhausted leadership, and teams that worked hard but couldn't quite align. COIREA was built from that experience, and from the belief that organizations don't fail from lack of intelligence, but from lack of coherence.</p>
          <p>She brings together systems thinking, organizational design, and a deep background in human-centered leadership to build something genuinely new: a People Operating System that organizations can measure, navigate, and evolve over time.</p>
          <p>Her work is grounded in Latin America, but designed for any organization ready to stop treating people and performance as separate questions.</p>
          <div className="founder-tags">
            {founderTags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <a className="button button--outline" href="https://www.linkedin.com/in/mariajosefigueroaaadaros/" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={17} /></a>
        </Reveal>
      </section>
      )}
      <section className="nature-inspiration section">
        <Reveal className="nature-intro">
          <span className="eyebrow">Inspired by nature</span>
          <h2>COIREA is inspired by the intelligence of living systems.</h2>
          <p>Forests, mycelium, rivers, and ecosystems show us that resilience is relational. Nothing evolves alone. The same is true inside organizations.</p>
        </Reveal>
        <div className="nature-grid">
          {naturePrinciples.map(([title, text], index) => (
            <Reveal className="nature-card" delay={index * 0.08} key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="about-stewards section" hidden>
        <Reveal className="section-heading section-heading--center">
          <span className="eyebrow">The Stewards</span>
          <h2>The human presence behind the COIREA system.</h2>
          <p>Stewards do not simply apply a method. They hold a living process, walking alongside organizations through moments of tension, reflection, and transformation.</p>
        </Reveal>
        <div className="founding-stewards-grid">
          {foundingStewards.map((steward, index) => (
            <Reveal className="founding-steward-card" delay={index * 0.08} key={steward.name}>
              <div className="steward-photo">
                <img src={steward.photo} alt={`${steward.name}, Founding Steward COIREA`} />
              </div>
              <div className="steward-card-copy">
                <span>{steward.location} · Founding Steward COIREA</span>
                <h3>{steward.name}</h3>
                <strong>{steward.role}</strong>
                <p>{steward.description}</p>
                <details>
                  <summary>Read steward story</summary>
                  {steward.bio.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </details>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="about-story section">
        <Reveal className="about-manifesto">
          <span className="eyebrow">Why we exist</span>
          <h2>Organizations are living systems. When they're well-designed, people don't just work, they grow.</h2>
          <p>Our mission is to help purpose-driven organizations measure and strengthen the conditions that allow both business and people to regenerate. We call this the People Operating System, five pillars that determine whether an organization can grow without breaking.</p>
        </Reveal>
        <Reveal className="about-principles" delay={0.1}>
          <span className="about-principles-label">What we believe</span>
          {visionValues.map(([title, text], index) => (
            <div key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </Reveal>
      </section>
      <section className="about-system section" hidden>
        <Reveal className="gia-card-large">
          <div className="gia-card-header">
            <div className="gia-avatar"><BookOpen size={20} weight="fill" /></div>
            <div><strong>Platform + Stewardship</strong><span>AI + Human Wisdom</span></div>
          </div>
          <h2>A new operating layer for purpose-driven organizations.</h2>
          <p>COIREA brings together the Organizational Vitality Index, GiA, and certified Stewards so leaders can move from fragmented symptoms into aligned action.</p>
        </Reveal>
        <Reveal className="steward-panel" delay={0.1}>
          <span className="eyebrow">The source</span>
          <h3>María José Figueroa</h3>
          <p>Founder of COIREA, regenerative business strategist, and systems thinker focused on human-centered organizational design. Her work brings together operational clarity, emotional intelligence, governance, and trust.</p>
          <a className="button button--outline" href="/conversation">Book a conversation <ArrowRight /></a>
        </Reveal>
      </section>
      <section className="faq-section section">
        <Reveal className="section-heading">
          <span className="eyebrow">Frequently asked questions</span>
          <h2>The concepts behind COIREA, clarified.</h2>
        </Reveal>
        <div className="faq-grid">
          {aboutFaqs.map(([question, answer], index) => (
            <Reveal className="faq-item" delay={index * 0.06} key={question}>
              <span>0{index + 1}</span>
              <h3>{question}</h3>
              <p>{answer}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <AboutContact />
    </main>
  );
}

function AboutContact() {
  return (
    <section className="about-contact section" id="conversation">
      <Reveal className="about-contact-copy">
        <span className="eyebrow">Apply to work with COIREA</span>
        <h2>Start with fit, not pressure.</h2>
        <p>Every organization enters with a Steward. Applications are reviewed personally so the first conversation begins with context, care, and honesty.</p>
        <a className="button button--primary" href="/conversation">Book a conversation <ArrowRight size={17} /></a>
      </Reveal>
      <Reveal className="about-contact-card" delay={0.1}>
        <span>01</span>
        <h3>A Steward reads every application personally.</h3>
        <p>If there is a genuine fit, COIREA will reach out within 5 business days.</p>
      </Reveal>
    </section>
  );
}

function ToolsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Tools"
        title="Organizational health tools for seeing the system clearly."
        text="COIREA’s tools help leaders diagnose organizational health, leadership coherence, and structural alignment before beginning deeper transformation."
      />
      <section className="detail-page section">
        <Reveal className="detail-intro">
          <span className="eyebrow">Organizational Health Scanner</span>
          <h2>A focused diagnostic across the dimensions that shape vitality.</h2>
          <p>The current COIREA scanner is designed as a short diagnostic that gives leaders an OVI score, pillar breakdown, and personalized insights.</p>
        </Reveal>
        <div className="detail-grid">
          {["Purpose & Culture", "Collaboration", "Leadership & Self-Leadership", "Well-Being", "Strategy & Interconnectivity"].map((item, index) => (
            <Reveal className="detail-card" delay={index * 0.06} key={item}>
              <span>0{index + 1}</span>
              <h3>{item}</h3>
              <p>Part of the diagnostic lens used to understand where the organization is coherent, strained, or ready to evolve.</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="faq-section section">
        <Reveal className="section-heading">
          <span className="eyebrow">Assessment FAQ</span>
          <h2>What leaders need to know before using the scanner.</h2>
        </Reveal>
        <div className="faq-grid">
          {toolFaqs.map(([question, answer], index) => (
            <Reveal className="faq-item" delay={index * 0.06} key={question}>
              <span>0{index + 1}</span>
              <h3>{question}</h3>
              <p>{answer}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="diagnostic section">
        <Reveal className="diagnostic-intro">
          <span className="eyebrow">Assessment promise</span>
          <h2>From reflection to a usable signal.</h2>
          <p>In the full implementation, leaders complete the scanner and receive an instant vitality reading with recommended areas for attention.</p>
        </Reveal>
        <Reveal className="diagnostic-panel" delay={0.1}>
          <div className="result-state">
            <div className="result-check"><Check size={25} weight="bold" /></div>
            <span className="eyebrow">Prototype tool preview</span>
            <h3>25 questions. OVI score. Pillar breakdown. Personalized insights.</h3>
            <p>This page preserves the original Tools intent while presenting it in the new COIREA visual system.</p>
          </div>
        </Reveal>
      </section>
      <Closing />
    </main>
  );
}

function Chatbox() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "gia", text: "Hello, I'm GiA. I can help you explore how COIREA works and where it may fit your organization." },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);

  const ask = (text) => {
    const clean = text.trim();
    if (!clean || thinking) return;
    setMessages((items) => [...items, { from: "user", text: clean }]);
    setInput("");
    setThinking(true);
    window.setTimeout(() => {
      const answer = replies[clean] || "That is a thoughtful question. In a full implementation, GiA would answer using COIREA's approved knowledge and your organization's permitted context.";
      setMessages((items) => [...items, { from: "gia", text: answer }]);
      setThinking(false);
    }, 650);
  };

  return (
    <div className="chat-shell">
      <AnimatePresence>
        {open && (
          <motion.section
            className="chat-panel"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            aria-label="GiA chat"
          >
            <header>
              <div className="gia-avatar"><Leaf size={19} weight="fill" /></div>
              <div><strong>GiA</strong><span>Organizational Intelligence Advisor</span></div>
              <button onClick={() => setOpen(false)} aria-label="Close chat"><X /></button>
            </header>
            <div className="chat-messages" aria-live="polite">
              {messages.map((message, index) => (
                <div className={`message message--${message.from}`} key={`${message.from}-${index}`}>{message.text}</div>
              ))}
              {thinking && <div className="typing"><span /><span /><span /></div>}
            </div>
            {messages.length < 3 && (
              <div className="suggestions">
                {Object.keys(replies).map((prompt) => (
                  <button key={prompt} onClick={() => ask(prompt)}>{prompt}<ArrowRight /></button>
                ))}
              </div>
            )}
            <form onSubmit={(event) => { event.preventDefault(); ask(input); }}>
              <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask GiA anything..." aria-label="Message GiA" />
              <button type="submit" aria-label="Send message"><ArrowUpRight /></button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>
      <motion.button className="chat-launcher" onClick={() => setOpen((value) => !value)} whileTap={{ scale: 0.96 }} aria-expanded={open}>
        <span className="gia-avatar"><ChatCircleDots size={21} weight="fill" /></span>
        <span><strong>Ask GiA</strong><small>How can I help you today?</small></span>
        {open ? <X size={20} /> : <ArrowUpRight size={20} />}
      </motion.button>
    </div>
  );
}

function Footer() {
  return (
    <footer id="resources">
      <BrandMark compact />
      <p>Organizational intelligence for growth that builds capacity.</p>
      <div>
        <a href={localizedPath("/")}>Home</a>
        <a href={localizedPath("/insights")}>Insights</a>
        <a href={localizedPath("/about")}>About Us</a>
        <a href="https://www.linkedin.com/company/coirea" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:hello@coirea.com">hello@coirea.com</a>
      </div>
      <small>Concept prototype. Selected claims and data are illustrative pending owner confirmation.</small>
    </footer>
  );
}

function HomePage() {
  return (
    <main>
      <Hero />
      <Methodology />
      <Platform />
      <ImpactShift />
      <Approach />
      <GiaSection />
      <FitCheck />
      <AnswerEngineFaq />
      <Closing />
    </main>
  );
}

function CurrentPage() {
  const path = window.location.pathname;
  const route = path === "/es" ? "/" : path.replace(/^\/es/, "") || "/";
  if (route === "/insights/what-is-a-people-operating-system") return <InsightArticlePage />;
  if (route.startsWith("/insights/")) {
    const slug = decodeURIComponent(route.replace("/insights/", ""));
    return <MigratedBlogPostPage slug={slug} />;
  }
  if (route === "/insights") return <InsightsPage />;
  if (route === "/conversation") return <ConversationPage />;
  if (route === "/about") return <AboutPage />;
  return <HomePage />;
}

export function App() {
  return (
    <>
      <SEOManager />
      <Header />
      <CurrentPage />
      <Footer />
      <Chatbox />
    </>
  );
}
