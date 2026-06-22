"use client";

import { setRequestLocale } from 'next-intl/server'
import { Suspense, lazy, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronDown,
  Check,
  CircleHelp,
  Clock3,
  Coins,
  Compass,
  Copy,
  Gift,
  Handshake,
  House,
  Layers3,
  MapPinned,
  MessageCircle,
  Package,
  PartyPopper,
  PiggyBank,
  PlayCircle,
  Rocket,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  TriangleAlert,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { useMessages } from "next-intl";
import { AdBanner, NativeBannerAd, SidebarAd } from "@/components/ads";
import { VideoFeature } from "@/components/home/VideoFeature";
import {
  HERO_IMAGE_URL,
  OFFICIAL_LINKS,
  ORGANIZATION_SAME_AS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const HeroStats = lazy(() => import("@/components/home/HeroStats"));
const CTASection = lazy(() => import("@/components/home/CTASection"));

const LoadingPlaceholder = ({
  height = "h-64",
  label = "Loading Be A Lucky Block Wiki...",
}: {
  height?: string;
  label?: string;
}) => (
  <div
    className={`${height} flex items-center justify-center rounded-3xl border border-border bg-white/5`}
  >
    <div className="text-muted-foreground">{label}</div>
  </div>
);

const sectionTitleClass = "scroll-reveal mb-4 text-4xl font-bold md:text-5xl";
const panelClass =
  "scroll-reveal rounded-3xl border border-border bg-white/5 p-6 backdrop-blur-sm";
const accentPanelClass =
  "scroll-reveal rounded-3xl border border-[hsl(var(--nav-theme)/0.28)] bg-[linear-gradient(135deg,hsl(var(--nav-theme)/0.14),hsl(var(--nav-theme-light)/0.08))] p-6 backdrop-blur-sm";

function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description: string;
}) {
  return (
    <div className="mb-12 text-center">
      {eyebrow ? (
        <p className="scroll-reveal mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[hsl(var(--nav-theme-light))]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={sectionTitleClass}>
        {title}{" "}
        {highlight ? (
          <span className="text-[hsl(var(--nav-theme-light))]">{highlight}</span>
        ) : null}
      </h2>
      <p className="scroll-reveal mx-auto max-w-3xl text-lg text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function MetricCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className={panelClass}>
      <div className="mb-2 text-2xl font-bold text-[hsl(var(--nav-theme-light))]">
        {value}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export default function HomePage() {
  const t = useMessages() as any;
  const loadingLabel =
    t.homepage?.loading || "Loading Be A Lucky Block Wiki...";
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  const resourceCards = [
    {
      icon: Gift,
      title: t.tools.codes.title,
      description: t.tools.codes.description,
      href: "#codes",
    },
    {
      icon: BookOpen,
      title: t.tools.redeemGuide.title,
      description: t.tools.redeemGuide.description,
      href: "#wiki",
    },
    {
      icon: Compass,
      title: t.tools.trainingPaths.title,
      description: t.tools.trainingPaths.description,
      href: "#beginner-guide",
    },
    {
      icon: Sparkles,
      title: t.tools.breathingTier.title,
      description: t.tools.breathingTier.description,
      href: "#luck-guide",
    },
    {
      icon: MapPinned,
      title: t.tools.demonArtTier.title,
      description: t.tools.demonArtTier.description,
      href: "#locations",
    },
    {
      icon: Package,
      title: t.tools.oniRoute.title,
      description: t.tools.oniRoute.description,
      href: "#brainrots",
    },
    {
      icon: Trophy,
      title: t.tools.specialBrainrots.title,
      description: t.tools.specialBrainrots.description,
      href: "#special-brainrots",
    },
    {
      icon: Handshake,
      title: t.tools.controls.title,
      description: t.tools.controls.description,
      href: "#trading-guide",
    },
    {
      icon: House,
      title: t.tools.questMap.title,
      description: t.tools.questMap.description,
      href: "#base-guide",
    },
    {
      icon: PiggyBank,
      title: t.tools.bossDrops.title,
      description: t.tools.bossDrops.description,
      href: "#offline-cash",
    },
    {
      icon: Rocket,
      title: t.tools.currencyFarm.title,
      description: t.tools.currencyFarm.description,
      href: "#upgrades-guide",
    },
    {
      icon: Shield,
      title: t.tools.resetPlanner.title,
      description: t.tools.resetPlanner.description,
      href: "#guard-escape",
    },
    {
      icon: CalendarDays,
      title: t.tools.buildPlanner.title,
      description: t.tools.buildPlanner.description,
      href: "#weekly-updates",
    },
    {
      icon: PartyPopper,
      title: t.tools.thunderBreathing.title,
      description: t.tools.thunderBreathing.description,
      href: "#events",
    },
    {
      icon: MessageCircle,
      title: t.tools.fastLeveling.title,
      description: t.tools.fastLeveling.description,
      href: "#community",
    },
    {
      icon: CircleHelp,
      title: t.tools.finalSelection.title,
      description: t.tools.finalSelection.description,
      href: "#faq",
    },
    {
      icon: PlayCircle,
      title: t.tools.clanSystem.title,
      description: t.tools.clanSystem.description,
      href: "#video",
    },
  ];

  const codeCard = {
    code: "RELEASE",
    reward: "Brr Brr Patapim",
    status: "Active",
    tag: "Starter Freebie",
  };

  const codeStats = [
    { label: "Working Codes", value: "1" },
    { label: "Expired Codes", value: "0" },
    { label: "Current Reward", value: "Brr Brr Patapim" },
    { label: "Update Rhythm", value: "Every Saturday" },
  ];

  const redeemSteps = [
    "Open Be a Lucky Block in Roblox.",
    "Tap the Shop button on the side of the screen.",
    "Open the Codes tab or scroll to the code box in the shop menu.",
    "Paste the code and press Verify.",
    "Place your new Brainrot at base to start earning.",
  ];

  const codeInfoChips = [
    "Free Brainrots speed up early cash generation.",
    "A fresh server can help if a newly added code does not verify.",
    "Discord is the fastest place to watch for new drops.",
  ];

  const wikiStats = [
    { label: "Developer", value: "xFrozen x Dudes" },
    { label: "Release Date", value: "2026-02-24" },
    { label: "Latest Update", value: "2026-03-21" },
    { label: "Rating", value: "96%" },
  ];

  const overviewCards = [
    {
      title: "What You Are",
      text: "You play as the Lucky Block itself instead of opening one, which flips the usual Roblox reward loop on its head.",
    },
    {
      title: "Why Distance Matters",
      text: "Further destinations improve your luck, but each extra step makes the return harder and more expensive to fumble.",
    },
    {
      title: "Why Brainrots Matter",
      text: "Brainrots are both collection pieces and the base economy that keeps generating cash while you are offline.",
    },
  ];

  const coreLoopTimeline = [
    {
      step: "1",
      title: "Head Out",
      text: "Travel away from base to reach a better luck zone.",
    },
    {
      step: "2",
      title: "Wait for the Roll",
      text: "Let the guards roll the Lucky Block and see what you get.",
    },
    {
      step: "3",
      title: "Escape Back",
      text: "Run home before greed or guard pressure ruins the pull.",
    },
    {
      step: "4",
      title: "Build Income",
      text: "Bring Brainrots home and let them keep paying even when you log off.",
    },
  ];

  const beginnerTimeline = [
    {
      step: "1",
      title: "Claim Your Free Start",
      text: "Redeem RELEASE before your first serious run so you begin with a free Brainrot.",
    },
    {
      step: "2",
      title: "Learn the Return Path",
      text: "Use short routes first so you can consistently get back to base without wasting early rolls.",
    },
    {
      step: "3",
      title: "Bank the First Good Pull",
      text: "Bring early Brainrots home quickly instead of gambling everything on one extra detour.",
    },
    {
      step: "4",
      title: "Start Passive Income",
      text: "Place Brainrots at base so your economy keeps moving even when you are offline.",
    },
    {
      step: "5",
      title: "Scale Gradually",
      text: "Push into farther routes only after your early base income already feels reliable.",
    },
  ];

  const beginnerDo = [
    "Redeem the starter code as soon as you load into Be a Lucky Block.",
    "Practice short, repeatable runs before testing far routes.",
    "Turn early Brainrots into base income immediately.",
    "Rejoin if a fresh code does not work on your current server.",
  ];

  const beginnerDont = [
    "Do not force long routes with no safety net.",
    "Do not hold a strong pull too long while guards are nearby.",
    "Do not ignore passive income while chasing one lucky spike.",
    "Do not waste time typing codes manually if you can paste them.",
  ];

  const riskRewardCards = [
    {
      tier: "Near Route",
      luck: "Low",
      risk: "Low",
      bestFor: "First runs and safe cash flow",
      playstyle: "Fast resets and steady banking",
    },
    {
      tier: "Mid Route",
      luck: "Medium",
      risk: "Medium",
      bestFor: "Balanced farming after your base is running",
      playstyle: "Solid value without overcommitting",
    },
    {
      tier: "Far Route",
      luck: "High",
      risk: "High",
      bestFor: "Pushing for stronger rolls and standout pulls",
      playstyle: "Big ceiling with a much harder return",
    },
  ];

  const routeLadder = [
    "Start with the closest route until you can return cleanly almost every time.",
    "Move up one layer when your base can absorb a failed run without stalling progress.",
    "Use far routes when you want ceiling, not when you need guaranteed money.",
  ];

  const tipCallouts = [
    "Distance improves luck, but survival decides whether the run pays.",
    "The return path matters as much as the roll itself.",
    "A smaller reward delivered safely beats a bigger reward lost on the way home.",
    "Passive cash from Brainrots lets you take smarter risks later.",
  ];

  const locationCards = [
    {
      title: "Near Route",
      description:
        "Safest first farm for quick cash-ins, early upgrades, and cleaner reset timing.",
      range: "Closest band",
    },
    {
      title: "Mid Route",
      description:
        "Better luck than spawn-side farming without the longest and highest-pressure return path.",
      range: "Middle band",
    },
    {
      title: "Far Route",
      description:
        "Best normal-route luck ceiling and strongest place to chase premium pulls before sprinting home.",
      range: "Longest band",
    },
  ];

  const routeComparison = [
    {
      label: "Reset Speed",
      near: "Fast",
      mid: "Balanced",
      far: "Slowest",
    },
    {
      label: "Luck Ceiling",
      near: "Starter",
      mid: "Strong",
      far: "Best",
    },
    {
      label: "Return Pressure",
      near: "Forgiving",
      mid: "Noticeable",
      far: "Punishing",
    },
  ];

  const locationHighlights = [
    "Guard pressure rises hardest on long return routes, so movement speed and clean lines matter more at far distance tiers.",
    "Move up one route tier at a time instead of forcing deep runs too early.",
    "The best progression path is the farthest distance band you can clear consistently and safely.",
  ];

  const locationsCta =
    "Compare the route table, then commit to the farthest tier you can finish consistently.";

  const rarityCards = [
    {
      title: "Starter Brainrots",
      description:
        "Use them to lock in your first passive-cash layer and keep the base economy moving.",
    },
    {
      title: "Standout Brainrots",
      description:
        "Mid-value pulls that make route farming feel efficient and fund your next upgrades faster.",
    },
    {
      title: "Premium Brainrots",
      description:
        "High-interest pieces that combine collection flex, trade demand, and event visibility.",
    },
  ];

  const brainrotExplainers = [
    "Current free pull reminder: RELEASE gives Brr Brr Patapim.",
    "Brainrots are the core reward loop: roll blocks, secure the pull, return to base, and reinvest into better odds.",
    "Base economy grows through Brainrots because they continue generating cash while you are offline.",
    "Public runs already show Strawberry-themed pulls and stronger block lines that support rarity sorting and value tracking.",
  ];

  const brainrotFilters = [
    "Starter Income",
    "Offline Earner",
    "Collection Flex",
    "Trade Target",
  ];

  const specialBrainrots = [
    {
      name: "Inferno Secret Block",
      tier: "Secret Tier",
      note: "Recent secret-tier chase target shown in public runs.",
    },
    {
      name: "Divine Block",
      tier: "Divine Tier",
      note: "High-end progression target tied to premium pull routes.",
    },
    {
      name: "Void Special",
      tier: "Special Tier",
      note: "Standout special reward often shown after Divine progression.",
    },
    {
      name: "Cyborg Block",
      tier: "Special Tier",
      note: "Named upgrade target already visible in current gameplay examples.",
    },
    {
      name: "Mogging Block Secret",
      tier: "Secret Tier",
      note: "Late-game flex piece built for long-term collection appeal.",
    },
  ];

  const raritySpotlight = [
    "Special and secret pulls are the biggest late-game chase targets for players and collectors.",
    "Keep this module separate from general Brainrots so both broad discovery and high-intent rarity searches are covered.",
    "Use community signals to compare which named special line is worth hunting next.",
  ];

  const wishlistPanel = [
    "Track your current chase target and the next special line in queue.",
    "Split duplicates from long-term keepers before you enter the trade market.",
    "Hold spotlight specials until your base income is already stable.",
  ];

  const tradeTips = [
    "Start trading after your base income feels stable, not during your first upgrade squeeze.",
    "Move duplicates, event pulls, and spare specials before touching core earners.",
    "Trading hub activity is one of the fastest paths to target secrets missed on normal rolls.",
    "Red Carpet, Escape Tsunami, Jailbreak, and trading all feed the same chase economy.",
    "Use Discord, the Roblox Group, X, and YouTube to track where demand is accelerating.",
  ];

  const valueNotes = [
    {
      title: "Best Time to Trade",
      text: "Trade after your base income is stable, not while your account still depends on one fragile run.",
    },
    {
      title: "Best Pieces to Move",
      text: "Duplicates, event pulls, and spare specials are easier to move without disrupting your income setup.",
    },
    {
      title: "Best Use of Community",
      text: "Community channels reveal demand shifts fastest around secrets, specials, and event-linked pulls.",
    },
  ];

  const tradingGuardrails = [
    "Check value notes before every swap.",
    "Protect your base earners first.",
    "Only move pieces that will not break your current income loop.",
  ];

  const baseFlowCards = [
    {
      icon: House,
      title: "Start at Base",
      description:
        "Load into your base first so you can prepare, check your cash, and open the shop before the first run.",
    },
    {
      icon: Gift,
      title: "Claim the Free Boost",
      description:
        "Use the active code RELEASE in Shop > Codes to get Brr Brr Patapim and give your base an early income push.",
    },
    {
      icon: Compass,
      title: "Run Short Before Long",
      description:
        "Use the closest destination first to learn the timing, the route back, and how quickly guards become a problem.",
    },
    {
      icon: PiggyBank,
      title: "Bank Every Good Haul",
      description:
        "Once you get a worthwhile Brainrot, head home and secure it instead of risking everything for one extra roll.",
    },
  ];

  const basePriorityBoard = [
    "Redeem RELEASE before your first serious farming loop.",
    "Learn the nearest route before pushing into longer luck runs.",
    "Turn safe returns into steady base income.",
    "Upgrade after banking cash, then move farther out.",
  ];

  const baseTipsGrid = [
    {
      icon: Shield,
      text: "Closer runs are the safest way to build your first income loop.",
    },
    {
      icon: MapPinned,
      text: "Farther destinations offer better luck, but the return trip is more dangerous.",
    },
    {
      icon: TrendingUp,
      text: "A base that keeps growing is better than a flashy run that never makes it home.",
    },
    {
      icon: CalendarDays,
      text: "Check Saturday updates for new reasons to revisit your route plan.",
    },
  ];

  const offlineEarningsExplainer = [
    {
      icon: Coins,
      title: "What Generates Offline Cash",
      description:
        "Brainrots collected and secured at your base keep your income loop working even when you are not actively farming.",
    },
    {
      icon: Gift,
      title: "Why Early Brainrots Matter",
      description:
        "The RELEASE code reward is useful because it gives you one more income source right away instead of making you wait for pure RNG.",
    },
    {
      icon: MapPinned,
      title: "Why Route Choice Matters",
      description:
        "Pushing farther destinations can improve your luck, which helps you bring home better Brainrots and strengthen your idle gains.",
    },
  ];

  const offlineStackPriorities = [
    "Claim RELEASE for an immediate starter Brainrot.",
    "Lock in safe Brainrots at base before ending a session.",
    "Upgrade enough to reach better luck routes consistently.",
    "Log off after a productive return, not after an empty run.",
  ];

  const offlineReminderStrip = [
    { icon: Gift, text: "Free reward first." },
    { icon: House, text: "Safe delivery second." },
    { icon: Coins, text: "Offline income keeps working after you leave." },
    { icon: CalendarDays, text: "Saturday updates can change the best farming rhythm." },
  ];

  const upgradeLadder = [
    {
      icon: Rocket,
      stage: "Early Game",
      focus: "Movement speed",
      reason:
        "More speed makes short runs safer and opens the path to farther destinations with better luck.",
    },
    {
      icon: Coins,
      stage: "After Your First Stable Income",
      focus: "Cash growth",
      reason:
        "Once you can return home reliably, stronger income lets every farming loop scale faster.",
    },
    {
      icon: Star,
      stage: "Mid Progression",
      focus: "Luck-related value",
      reason:
        "Better luck matters more once you can actually survive the longer routes where stronger drops show up.",
    },
    {
      icon: CalendarDays,
      stage: "Update Windows",
      focus: "Event-ready flexibility",
      reason:
        "Weekly Saturday updates can shift what feels worth farming, so staying flexible beats overspending too early.",
    },
  ];

  const upgradePriorityChips = [
    "Early Priority: Speed",
    "Stability Priority: Income",
    "Push Priority: Better Luck",
    "Always Useful: Weekly Update Awareness",
  ];

  const beforeAfterCards = [
    {
      icon: Zap,
      title: "Before Speed",
      before: "Short range, slower escapes, lower confidence on return trips.",
      after: "Cleaner farming loops, safer escapes, better access to farther destinations.",
    },
    {
      icon: PiggyBank,
      title: "Before Stronger Income",
      before: "Every mistake feels expensive and progress slows down fast.",
      after: "Your base recovers faster and upgrades stop feeling delayed.",
    },
    {
      icon: Sparkles,
      title: "Before Better Luck Runs",
      before: "Mostly starter-value drops and limited upside.",
      after: "A better shot at stronger Brainrots when your route can support the risk.",
    },
  ];

  const escapeChecklist = [
    "Use the closest destination until the route feels automatic.",
    "Wait for the guards to roll the Lucky Block before you commit.",
    "Grab the drop quickly and turn back with a plan.",
    "Choose survival over greed when the return window gets tight.",
  ];

  const routeTips = [
    {
      icon: MapPinned,
      title: "Learn One Safe Path First",
      description:
        "A repeatable route beats a random long run, especially when you are still building base income.",
    },
    {
      icon: TrendingUp,
      title: "Respect the Risk Curve",
      description:
        "Farther destinations can improve luck, but they also stretch the time you need to survive on the way back.",
    },
    {
      icon: Zap,
      title: "Escape Speed Matters",
      description:
        "Movement upgrades make guard-heavy runs more forgiving and help you convert risky drops into real progress.",
    },
  ];

  const failStateCards = [
    {
      icon: TriangleAlert,
      title: "Overcommitting",
      description:
        "Going one area farther than your movement can handle usually turns a good run into a lost one.",
    },
    {
      icon: CircleHelp,
      title: "Greedy Last-Second Farming",
      description:
        "Trying to squeeze in one more pickup is often worse than banking the Brainrots you already secured.",
    },
    {
      icon: Shield,
      title: "Ignoring the Return Trip",
      description: "The drop is only valuable if you actually get it back to base.",
    },
  ];

  const weeklyBadge = {
    label: "Update Cadence",
    value: "Every Saturday",
  };

  const weeklyQuickFacts = [
    {
      icon: Compass,
      label: "Core Hook",
      value: "Go farther for better luck",
    },
    {
      icon: Coins,
      label: "Base Economy",
      value: "Brainrots earn cash offline",
    },
    {
      icon: CalendarDays,
      label: "Patch Rhythm",
      value: "Saturday updates",
    },
  ];

  const patchCards = [
    {
      date: "March 21, 2026",
      title: "COSMIC EVENT - Pull Lucky Blocks",
      tag: "New Drop",
      description:
        "A fresh event built around brand-new Lucky Blocks and new Secret Events.",
      href: OFFICIAL_LINKS.liveEvent,
    },
    {
      date: "March 21, 2026",
      title: "NEXT UPDATE?!",
      tag: "Follow Event",
      description:
        "A live follow page for players who want the next update reminder as soon as it goes up.",
      href: OFFICIAL_LINKS.updateEvent,
    },
    {
      date: "March 14, 2026",
      title: "ADMIN ABUSE - Break a Lucky Block!",
      tag: "Recent Event",
      description:
        "A short-run special event centered on a Lucky Block gimmick and a one-week event window.",
      href: OFFICIAL_LINKS.recentEvent,
    },
  ];

  const eventCountdownChip = {
    label: "Live Window",
    value: "Mar 21-23, 2026",
  };

  const eventCards = [
    {
      title: "COSMIC EVENT - Pull Lucky Blocks",
      status: "Live Now",
      dateRange: "Mar 21-23, 2026",
      highlights: [
        "Brand-new Lucky Blocks",
        "New Secret Events",
        "Follow and stay tuned",
      ],
      href: OFFICIAL_LINKS.liveEvent,
    },
    {
      title: "NEXT UPDATE?!",
      status: "Follow",
      dateRange: "Current follow page",
      highlights: [
        "Built for update reminders",
        "Easy entry point for the next patch",
        "Official Roblox event page",
      ],
      href: OFFICIAL_LINKS.updateEvent,
    },
    {
      title: "ADMIN ABUSE - Break a Lucky Block!",
      status: "Recent",
      dateRange: "Mar 14-21, 2026",
      highlights: [
        "Short weekly event window",
        "Special Lucky Block twist",
        "Time-limited event format",
      ],
      href: OFFICIAL_LINKS.recentEvent,
    },
  ];

  const creatorCard = {
    label: "Creator",
    value: "xFrozen x Dudes",
  };

  const communityCards = [
    {
      icon: PlayCircle,
      title: "Official Roblox Game",
      subtitle: "Launch the experience and check the latest game page updates.",
      buttonLabel: "Play Now",
      href: OFFICIAL_LINKS.game,
    },
    {
      icon: MessageCircle,
      title: "Official Discord",
      subtitle: "Best place for announcements, update chatter, and community discussion.",
      buttonLabel: "Join Discord",
      href: OFFICIAL_LINKS.discord,
    },
    {
      icon: Users,
      title: "Official X",
      subtitle: "Follow @xFrozenStudios for Roblox update teasers and studio posts.",
      buttonLabel: "Follow on X",
      href: OFFICIAL_LINKS.x,
    },
  ];

  const communityHighlights = [
    "Discord is the fastest place to watch announcement flow.",
    "Roblox event pages are used for update reminders and limited-time drops.",
    "X is useful for broader studio teasers around Saturday content pushes.",
  ];

  const faqQuickAnswerChips = [
    "Saturday updates",
    "Farther routes = better luck",
    "Brainrots earn cash offline",
    "Shop > Codes > Verify",
  ];

  const faqItems = [
    {
      question: "How often does Be a Lucky Block update?",
      answer: "The game advertises a weekly Saturday update schedule.",
    },
    {
      question: "What do farther destinations do?",
      answer:
        "Going to farther destinations gives you better luck, so pushing deeper routes is part of the core progression.",
    },
    {
      question: "Why do Brainrots matter?",
      answer:
        "Brainrots are your base economy. Once you bring them back, they keep earning cash for you, including while you are offline.",
    },
    {
      question: "What happens after the guards roll the Lucky Block?",
      answer:
        "Once the Lucky Block is rolled, you need to run back to your base before the guards catch you.",
    },
    {
      question: "How do I redeem codes?",
      answer:
        "Open the Shop menu, go to the Codes section, enter the code, and press Verify.",
    },
    {
      question: "Where should I check for new updates and codes?",
      answer:
        "Watch the Saturday patch cycle, follow the Roblox event pages, and keep an eye on the official Discord for announcements.",
    },
  ] as Array<{
    question: string;
    answer: string;
  }>;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description:
          t.seo?.home?.description ||
          "Be A Lucky Block Wiki with codes, routes, Brainrots, and update coverage.",
        image: HERO_IMAGE_URL,
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: HERO_IMAGE_URL,
        image: HERO_IMAGE_URL,
        sameAs: ORGANIZATION_SAME_AS,
      },
    ],
  };

  const copyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 1800);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="sticky top-20 z-20 border-b border-border py-2 bg-background/95 backdrop-blur-sm">
        <AdBanner
          type="banner-320x50"
          adKey={process.env.NEXT_PUBLIC_AD_MOBILE_320X50}
        />
      </div>

      <div className="hidden lg:block fixed left-4 top-24 z-10">
        <SidebarAd
          type="sidebar-160x600"
          adKey={process.env.NEXT_PUBLIC_AD_SIDEBAR_160X600}
        />
      </div>

      <div className="hidden lg:block fixed right-4 top-24 z-10">
        <SidebarAd
          type="sidebar-160x300"
          adKey={process.env.NEXT_PUBLIC_AD_SIDEBAR_160X300}
        />
      </div>

      <section className="relative overflow-hidden px-4 pb-20 pt-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--nav-theme-light)/0.18),transparent_30%),radial-gradient(circle_at_20%_30%,hsl(var(--nav-theme)/0.15),transparent_22%),linear-gradient(180deg,hsl(var(--background)),transparent)]" />
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[hsl(var(--nav-theme)/0.08)] blur-3xl" />
        <div className="container relative z-10 mx-auto text-center">
          <div className="scroll-reveal mb-8 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--nav-theme)/0.3)] bg-[hsl(var(--nav-theme)/0.12)] px-4 py-2">
            <Sparkles className="h-4 w-4 text-[hsl(var(--nav-theme-light))]" />
            <span className="text-sm text-muted-foreground">{t.hero.badge}</span>
          </div>

          <h1 className="scroll-reveal mb-6 text-5xl font-bold md:text-7xl">
            {t.hero.title}
          </h1>
          <p className="scroll-reveal mx-auto mb-10 max-w-3xl text-lg text-muted-foreground md:text-xl">
            {t.hero.description}
          </p>

          <div className="scroll-reveal mb-16 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#codes"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[hsl(var(--nav-theme))] px-8 py-4 text-base font-semibold text-slate-950 transition hover:brightness-95"
            >
              <Gift className="h-5 w-5" />
              {t.hero.getFreeCodesCTA}
            </a>
            <a
              href={OFFICIAL_LINKS.game}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[hsl(var(--nav-theme-light)/0.32)] bg-white/5 px-8 py-4 text-base font-semibold transition hover:bg-white/10"
            >
              <PlayCircle className="h-5 w-5 text-[hsl(var(--nav-theme-light))]" />
              {t.hero.playOnRobloxCTA}
            </a>
          </div>

          <Suspense
            fallback={
              <LoadingPlaceholder height="h-32" label={loadingLabel} />
            }
          >
            <HeroStats
              stats={[
                {
                  value: t.hero.stats.stat1.value,
                  label: t.hero.stats.stat1.label,
                },
                {
                  value: t.hero.stats.stat2.value,
                  label: t.hero.stats.stat2.label,
                },
                {
                  value: t.hero.stats.stat3.value,
                  label: t.hero.stats.stat3.label,
                },
                {
                  value: t.hero.stats.stat4.value,
                  label: t.hero.stats.stat4.label,
                },
              ]}
            />
          </Suspense>
        </div>
      </section>

      <NativeBannerAd adKey={process.env.NEXT_PUBLIC_AD_NATIVE_BANNER || ""} />

      <section id="video" className="scroll-mt-28 px-4 py-12">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] border border-[hsl(var(--nav-theme-light)/0.2)]">
            <VideoFeature
              videoId="90yMVIeJI2k"
              title="Be a Lucky Block brainrot gameplay"
              posterImage="/images/hero.webp"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-8">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                {t.gameFeature.title}
              </h2>
              <p className="max-w-2xl text-sm text-slate-200 md:text-base">
                {t.gameFeature.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdBanner
        type="banner-728x90"
        adKey={process.env.NEXT_PUBLIC_AD_BANNER_728X90}
      />

      <section className="px-4 py-20">
        <div className="container mx-auto">
          <SectionHeading
            eyebrow="Scroll Navigator"
            title={t.tools.title}
            highlight={t.tools.titleHighlight}
            description={t.tools.subtitle}
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            {resourceCards.map((card) => (
              <a
                key={card.href}
                href={card.href}
                className="scroll-reveal group rounded-3xl border border-border bg-white/5 p-6 transition hover:border-[hsl(var(--nav-theme)/0.45)] hover:bg-white/10"
              >
                <card.icon className="mb-5 h-10 w-10 text-[hsl(var(--nav-theme-light))]" />
                <h3 className="mb-2 text-lg font-bold">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <AdBanner
        type="banner-300x250"
        adKey={process.env.NEXT_PUBLIC_AD_BANNER_300X250}
      />

      <section id="codes" className="scroll-mt-28 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Module 01"
            title="Be a Lucky Block"
            highlight="Codes"
            description="Redeem the current starter code for a free Brainrot, then use the homepage modules to build a safer first income loop."
          />

          <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {codeStats.map((item) => (
              <MetricCard key={item.label} label={item.label} value={item.value} />
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className={accentPanelClass}>
              <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-sm font-semibold text-[hsl(var(--nav-theme-light))]">
                    1 active code • 0 expired
                  </p>
                  <h3 className="text-3xl font-bold">{codeCard.code}</h3>
                  <p className="mt-2 text-muted-foreground">
                    Reward: {codeCard.reward}
                  </p>
                </div>
                <span className="rounded-full border border-[hsl(var(--nav-theme)/0.32)] bg-[hsl(var(--nav-theme)/0.16)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--nav-theme-light))]">
                  {codeCard.status}
                </span>
              </div>

              <p className="mb-6 text-sm text-muted-foreground">{codeCard.tag}</p>

              <div className="mb-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => copyCode(codeCard.code)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[hsl(var(--nav-theme))] px-6 py-3 font-semibold text-slate-950 transition hover:brightness-95"
                >
                  {copiedCode === codeCard.code ? (
                    <>
                      <Check className="h-4 w-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy RELEASE
                    </>
                  )}
                </button>
                <a
                  href={OFFICIAL_LINKS.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[hsl(var(--nav-theme-light)/0.32)] bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10"
                >
                  <MessageCircle className="h-4 w-4 text-[hsl(var(--nav-theme-light))]" />
                  Watch Discord for Updates
                </a>
              </div>

              <div className="flex flex-wrap gap-2">
                {codeInfoChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-border bg-background/40 px-3 py-2 text-xs text-muted-foreground"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className={panelClass}>
              <h3 className="mb-4 text-xl font-bold">Redeem Steps</h3>
              <ol className="space-y-3">
                {redeemSteps.map((step, index) => (
                  <li key={step} className="flex items-start gap-3 text-sm">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-[hsl(var(--nav-theme)/0.32)] bg-[hsl(var(--nav-theme)/0.15)] text-xs font-bold text-[hsl(var(--nav-theme-light))]">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <AdBanner
        type="banner-468x60"
        adKey={process.env.NEXT_PUBLIC_AD_BANNER_468X60}
      />

      <section id="wiki" className="scroll-mt-28 px-4 py-20 bg-white/[0.02]">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Module 02"
            title="Be a Lucky Block"
            highlight="Wiki"
            description="Use this module as the homepage overview for the game loop, the public update snapshot, and the reason distance, Brainrots, and base security all matter together."
          />

          <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {wikiStats.map((item) => (
              <MetricCard key={item.label} label={item.label} value={item.value} />
            ))}
          </div>

          <div className="mb-8 grid gap-6 md:grid-cols-3">
            {overviewCards.map((card) => (
              <div key={card.title} className={panelClass}>
                <BookOpen className="mb-4 h-8 w-8 text-[hsl(var(--nav-theme-light))]" />
                <h3 className="mb-2 text-xl font-bold">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>

          <div className={panelClass}>
            <div className="mb-6 flex items-center gap-3">
              <Layers3 className="h-6 w-6 text-[hsl(var(--nav-theme-light))]" />
              <h3 className="text-2xl font-bold">Core Loop Timeline</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              {coreLoopTimeline.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-[hsl(var(--nav-theme)/0.2)] bg-background/40 p-5"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--nav-theme)/0.16)] font-bold text-[hsl(var(--nav-theme-light))]">
                    {item.step}
                  </div>
                  <h4 className="mb-2 text-lg font-bold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AdBanner
        type="banner-320x50"
        adKey={process.env.NEXT_PUBLIC_AD_MOBILE_320X50}
      />

      <section id="beginner-guide" className="scroll-mt-28 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Module 03"
            title="Be a Lucky Block"
            highlight="Beginner Guide"
            description="New players should secure a free Brainrot first, learn the shortest safe route, and build a small base economy before chasing high-risk runs."
          />

          <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {beginnerTimeline.map((item) => (
              <div key={item.step} className={panelClass}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--nav-theme)/0.16)] text-xl font-bold text-[hsl(var(--nav-theme-light))]">
                  {item.step}
                </div>
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className={panelClass}>
              <div className="mb-4 flex items-center gap-2">
                <Check className="h-5 w-5 text-[hsl(var(--nav-theme-light))]" />
                <h3 className="text-xl font-bold">Do</h3>
              </div>
              <ul className="space-y-3">
                {beginnerDo.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--nav-theme-light))]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={panelClass}>
              <div className="mb-4 flex items-center gap-2">
                <TriangleAlert className="h-5 w-5 text-[hsl(var(--nav-theme-light))]" />
                <h3 className="text-xl font-bold">Avoid</h3>
              </div>
              <ul className="space-y-3">
                {beginnerDont.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <TriangleAlert className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--nav-theme-light))]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="luck-guide"
        className="scroll-mt-28 px-4 py-20 bg-white/[0.02]"
      >
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Module 04"
            title="Be a Lucky Block"
            highlight="Luck Guide"
            description="Luck scales with distance, but the trip home gets more dangerous, so the best route is the one you can finish consistently."
          />

          <div className="mb-8 grid gap-6 md:grid-cols-3">
            {riskRewardCards.map((card) => (
              <div key={card.tier} className={panelClass}>
                <h3 className="mb-4 text-2xl font-bold text-[hsl(var(--nav-theme-light))]">
                  {card.tier}
                </h3>
                <div className="mb-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Luck</span>
                    <span>{card.luck}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Risk</span>
                    <span>{card.risk}</span>
                  </div>
                </div>
                <p className="mb-2 text-sm">{card.bestFor}</p>
                <p className="text-sm text-muted-foreground">{card.playstyle}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className={accentPanelClass}>
              <div className="mb-4 flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-[hsl(var(--nav-theme-light))]" />
                <h3 className="text-2xl font-bold">Route Ladder</h3>
              </div>
              <ul className="space-y-3">
                {routeLadder.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--nav-theme-light))]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={panelClass}>
              <div className="mb-4 flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-[hsl(var(--nav-theme-light))]" />
                <h3 className="text-2xl font-bold">Tip Callouts</h3>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {tipCallouts.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[hsl(var(--nav-theme)/0.2)] bg-background/40 p-4 text-sm text-muted-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdBanner
        type="banner-300x250"
        adKey={process.env.NEXT_PUBLIC_AD_BANNER_300X250}
        className="my-8"
      />

      <section id="locations" className="scroll-mt-28 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Module 05"
            title="Be a Lucky Block"
            highlight="Locations"
            description="Locations are built around distance and return pressure: the farther you go, the stronger your luck gets, but the trip home becomes much harder."
          />

          <div className="mb-8 grid gap-6 md:grid-cols-3">
            {locationCards.map((card) => (
              <div key={card.title} className={panelClass}>
                <MapPinned className="mb-4 h-8 w-8 text-[hsl(var(--nav-theme-light))]" />
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--nav-theme-light))]">
                  {card.range}
                </p>
                <h3 className="mb-2 text-xl font-bold">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>

          <div className={panelClass}>
            <div className="mb-4 flex items-center gap-3">
              <Compass className="h-6 w-6 text-[hsl(var(--nav-theme-light))]" />
              <h3 className="text-2xl font-bold">Route Comparison</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-3 font-semibold text-muted-foreground">Metric</th>
                    <th className="pb-3 font-semibold">Near</th>
                    <th className="pb-3 font-semibold">Mid</th>
                    <th className="pb-3 font-semibold">Far</th>
                  </tr>
                </thead>
                <tbody>
                  {routeComparison.map((row) => (
                    <tr key={row.label} className="border-b border-border/60">
                      <td className="py-4 text-muted-foreground">{row.label}</td>
                      <td className="py-4">{row.near}</td>
                      <td className="py-4">{row.mid}</td>
                      <td className="py-4">{row.far}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className={panelClass}>
              <div className="mb-4 flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-[hsl(var(--nav-theme-light))]" />
                <h3 className="text-2xl font-bold">Route Highlights</h3>
              </div>
              <ul className="space-y-3">
                {locationHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--nav-theme-light))]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={accentPanelClass}>
              <div className="mb-4 flex items-center gap-3">
                <MapPinned className="h-6 w-6 text-[hsl(var(--nav-theme-light))]" />
                <h3 className="text-2xl font-bold">Route Decision CTA</h3>
              </div>
              <p className="text-sm text-muted-foreground">{locationsCta}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="brainrots" className="scroll-mt-28 px-4 py-20 bg-white/[0.02]">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Module 06"
            title="Be a Lucky Block"
            highlight="Brainrots"
            description="Brainrots are the core reward loop and income engine: unlock them from Lucky Blocks, secure them at base, and let them grow your account even while offline."
          />

          <div className="mb-8 grid gap-6 md:grid-cols-3">
            {rarityCards.map((card) => (
              <div key={card.title} className={panelClass}>
                <Star className="mb-4 h-8 w-8 text-[hsl(var(--nav-theme-light))]" />
                <h3 className="mb-2 text-xl font-bold">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className={panelClass}>
              <div className="mb-4 flex items-center gap-3">
                <Coins className="h-6 w-6 text-[hsl(var(--nav-theme-light))]" />
                <h3 className="text-2xl font-bold">Earnings Explainer</h3>
              </div>
              <ul className="space-y-3">
                {brainrotExplainers.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--nav-theme-light))]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={accentPanelClass}>
              <div className="mb-4 flex items-center gap-3">
                <Package className="h-6 w-6 text-[hsl(var(--nav-theme-light))]" />
                <h3 className="text-2xl font-bold">Quick Filters</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {brainrotFilters.map((filter) => (
                  <span
                    key={filter}
                    className="rounded-full border border-[hsl(var(--nav-theme)/0.25)] bg-background/45 px-4 py-2 text-sm"
                  >
                    {filter}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="special-brainrots"
        className="scroll-mt-28 px-4 py-20"
      >
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Module 07"
            title="Be a Lucky Block"
            highlight="Special Brainrots"
            description="Special and secret pulls are the biggest late-game chase targets, so this section spotlights named pieces players already track in public gameplay."
          />

          <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {specialBrainrots.map((item) => (
              <div key={item.name} className={accentPanelClass}>
                <div className="mb-4 flex items-center gap-3">
                  <Trophy className="h-7 w-7 text-[hsl(var(--nav-theme-light))]" />
                  <h3 className="text-xl font-bold">{item.name}</h3>
                </div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--nav-theme-light))]">
                  {item.tier}
                </p>
                <p className="text-sm text-muted-foreground">{item.note}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className={panelClass}>
              <h3 className="mb-4 text-2xl font-bold">Rarity Spotlight</h3>
              <ul className="space-y-3">
                {raritySpotlight.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--nav-theme-light))]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={panelClass}>
              <h3 className="mb-4 text-2xl font-bold">Wishlist Panel</h3>
              <ul className="space-y-3">
                {wishlistPanel.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Star className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--nav-theme-light))]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <AdBanner
        type="banner-728x90"
        adKey={process.env.NEXT_PUBLIC_AD_BANNER_728X90}
        className="my-8"
      />

      <section
        id="trading-guide"
        className="scroll-mt-28 px-4 py-20 bg-white/[0.02]"
      >
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Module 08"
            title="Be a Lucky Block"
            highlight="Trading Guide"
            description="Trading works best once your base income is stable, with duplicates and event pieces moved first while core earners stay protected."
          />

          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {tradeTips.map((item) => (
              <div key={item} className={panelClass}>
                <div className="mb-3 flex items-center gap-2 text-[hsl(var(--nav-theme-light))]">
                  <Handshake className="h-5 w-5" />
                  <span className="font-semibold">Trade Tip</span>
                </div>
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {valueNotes.map((item) => (
              <div key={item.title} className={accentPanelClass}>
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className={accentPanelClass}>
              <div className="mb-4 flex items-center gap-3">
                <TriangleAlert className="h-6 w-6 text-[hsl(var(--nav-theme-light))]" />
                <h3 className="text-2xl font-bold">Trading Guardrails</h3>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {tradingGuardrails.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[hsl(var(--nav-theme)/0.22)] bg-background/45 p-4 text-sm text-muted-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="base-guide" className="scroll-mt-28 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Module 09"
            title="Be a Lucky Block"
            highlight="Base Guide"
            description="Your base is the center of every run: load in, claim the free reward, head to a destination, wait for the guards to roll the Lucky Block, carry Brainrots home, and turn each safe return into stronger passive income."
          />

          <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {baseFlowCards.map((item) => (
              <div key={item.title} className={panelClass}>
                <item.icon className="mb-4 h-8 w-8 text-[hsl(var(--nav-theme-light))]" />
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className={panelClass}>
              <h3 className="mb-4 text-2xl font-bold">Priority Board</h3>
              <ul className="space-y-3">
                {basePriorityBoard.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--nav-theme-light))]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={accentPanelClass}>
              <h3 className="mb-4 text-2xl font-bold">Compact Tips Grid</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {baseTipsGrid.map((item) => (
                  <div
                    key={item.text}
                    className="rounded-2xl border border-[hsl(var(--nav-theme)/0.22)] bg-background/45 p-4 text-sm text-muted-foreground"
                  >
                    <item.icon className="mb-3 h-4 w-4 text-[hsl(var(--nav-theme-light))]" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      <section
        id="offline-cash"
        className="scroll-mt-28 px-4 py-20 bg-white/[0.02]"
      >
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Module 10"
            title="Be a Lucky Block"
            highlight="Offline Cash"
            description="Offline cash is one of the biggest progression engines in Be a Lucky Block. The stronger your base is before you log off, the more value you create while you are away."
          />

          <div className="mb-8 grid gap-6 md:grid-cols-3">
            {offlineEarningsExplainer.map((item) => (
              <div key={item.title} className={panelClass}>
                <item.icon className="mb-4 h-8 w-8 text-[hsl(var(--nav-theme-light))]" />
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className={accentPanelClass}>
              <div className="mb-4 flex items-center gap-3">
                <Coins className="h-6 w-6 text-[hsl(var(--nav-theme-light))]" />
                <h3 className="text-2xl font-bold">Stack Priorities</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {offlineStackPriorities.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[hsl(var(--nav-theme)/0.22)] bg-background/45 px-4 py-2 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className={panelClass}>
              <div className="mb-4 flex items-center gap-3">
                <Clock3 className="h-6 w-6 text-[hsl(var(--nav-theme-light))]" />
                <h3 className="text-2xl font-bold">Reminder Strip</h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {offlineReminderStrip.map((item) => (
                  <div
                    key={item.text}
                    className="rounded-2xl border border-[hsl(var(--nav-theme)/0.22)] bg-background/45 p-4 text-sm text-muted-foreground"
                  >
                    <item.icon className="mb-3 h-4 w-4 text-[hsl(var(--nav-theme-light))]" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      <AdBanner
        type="banner-468x60"
        adKey={process.env.NEXT_PUBLIC_AD_BANNER_468X60}
        className="my-8"
      />

      <section id="upgrades-guide" className="scroll-mt-28 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Module 11"
            title="Be a Lucky Block"
            highlight="Upgrades Guide"
            description="Upgrades are about converting safer movement into better drops and stronger income. Early progress is mostly about reaching, escaping, and repeating the loop faster."
          />

          <div className="mb-8 grid gap-4 md:grid-cols-2">
            {upgradeLadder.map((item) => (
              <div key={item.stage} className={panelClass}>
                <item.icon className="mb-4 h-8 w-8 text-[hsl(var(--nav-theme-light))]" />
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[hsl(var(--nav-theme-light))]">
                  {item.stage}
                </p>
                <h3 className="mb-3 text-xl font-bold">{item.focus}</h3>
                <p className="text-sm text-muted-foreground">{item.reason}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className={accentPanelClass}>
              <h3 className="mb-4 text-2xl font-bold">Priority Chips</h3>
              <div className="flex flex-wrap gap-3">
                {upgradePriorityChips.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[hsl(var(--nav-theme)/0.22)] bg-background/45 px-4 py-2 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {beforeAfterCards.map((item) => (
                <div key={item.title} className={panelClass}>
                  <item.icon className="mb-4 h-8 w-8 text-[hsl(var(--nav-theme-light))]" />
                  <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                  <p className="mb-2 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Before: </span>
                    {item.before}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">After: </span>
                    {item.after}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section
        id="guard-escape"
        className="scroll-mt-28 px-4 py-20 bg-white/[0.02]"
      >
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Module 12"
            title="Be a Lucky Block"
            highlight="Guard Escape Tips"
            description="Guard pressure is the risk layer of every farming run. The winning pattern is simple: wait for the roll, collect fast, pick the cleanest route home, and avoid greedy mistakes."
          />

          <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className={panelClass}>
              <div className="mb-4 flex items-center gap-3">
                <Shield className="h-6 w-6 text-[hsl(var(--nav-theme-light))]" />
                <h3 className="text-2xl font-bold">Escape Checklist</h3>
              </div>
              <ul className="space-y-3">
                {escapeChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--nav-theme-light))]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={accentPanelClass}>
              <div className="mb-4 flex items-center gap-3">
                <Compass className="h-6 w-6 text-[hsl(var(--nav-theme-light))]" />
                <h3 className="text-2xl font-bold">Route Tips</h3>
              </div>
              <div className="grid gap-3">
                {routeTips.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[hsl(var(--nav-theme)/0.22)] bg-background/45 p-4"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <item.icon className="h-4 w-4 text-[hsl(var(--nav-theme-light))]" />
                      <h4 className="text-sm font-semibold">{item.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {failStateCards.map((card) => (
              <div key={card.title} className={panelClass}>
                <card.icon className="mb-4 h-8 w-8 text-[hsl(var(--nav-theme-light))]" />
                <h3 className="mb-2 text-xl font-bold">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section id="weekly-updates" className="scroll-mt-28 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Module 13"
            title="Be a Lucky Block"
            highlight="Weekly Updates"
            description="Be a Lucky Block runs on a clear Saturday update rhythm, with fresh event pages, themed drops, and limited-time twists appearing around each weekly patch."
          />

          <div className="mb-8 flex justify-center">
            <div className="rounded-full border border-[hsl(var(--nav-theme)/0.3)] bg-[hsl(var(--nav-theme)/0.12)] px-5 py-3 text-sm font-semibold text-[hsl(var(--nav-theme-light))]">
              {weeklyBadge.label}: {weeklyBadge.value}
            </div>
          </div>

          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {weeklyQuickFacts.map((fact) => (
              <div key={fact.label} className={panelClass}>
                <fact.icon className="mb-4 h-6 w-6 text-[hsl(var(--nav-theme-light))]" />
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[hsl(var(--nav-theme-light))]">
                  {fact.label}
                </p>
                <h3 className="text-xl font-bold">{fact.value}</h3>
              </div>
            ))}
          </div>

          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {patchCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="scroll-reveal rounded-3xl border border-border bg-white/5 p-6 transition hover:border-[hsl(var(--nav-theme)/0.45)] hover:bg-white/10"
              >
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="rounded-full border border-[hsl(var(--nav-theme)/0.25)] bg-[hsl(var(--nav-theme)/0.12)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--nav-theme-light))]">
                    {card.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{card.date}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </a>
            ))}
          </div>

        </div>
      </section>

      <AdBanner
        type="banner-300x250"
        adKey={process.env.NEXT_PUBLIC_AD_BANNER_300X250}
        className="my-8"
      />

      <section id="events" className="scroll-mt-28 px-4 py-20 bg-white/[0.02]">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Module 14"
            title="Be a Lucky Block"
            highlight="Events"
            description="Roblox event pages are the fastest way to spot live drops, preview pages, and follow-to-notify reminders for Be a Lucky Block."
          />

          <div className="mb-8 flex justify-center">
            <div className="rounded-full border border-[hsl(var(--nav-theme-light)/0.32)] bg-white/5 px-5 py-3 text-sm font-semibold text-[hsl(var(--nav-theme-light))]">
              {eventCountdownChip.label}: {eventCountdownChip.value}
            </div>
          </div>

          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {eventCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="scroll-reveal rounded-3xl border border-border bg-white/5 p-6 transition hover:border-[hsl(var(--nav-theme)/0.45)] hover:bg-white/10"
              >
                <div className="mb-4 flex items-center justify-between gap-2">
                  <span className="rounded-full border border-[hsl(var(--nav-theme)/0.25)] bg-[hsl(var(--nav-theme)/0.12)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--nav-theme-light))]">
                    {card.status}
                  </span>
                  <span className="text-xs text-muted-foreground">{card.dateRange}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold">{card.title}</h3>
                <ul className="mb-4 space-y-2">
                  {card.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--nav-theme-light))]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--nav-theme-light))]">
                  Open Event Page
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>

        </div>
      </section>

      <section id="community" className="scroll-mt-28 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Module 15"
            title="Be a Lucky Block"
            highlight="Discord & Community"
            description="The community loop runs through Roblox, Discord, and X, where players keep up with updates, event teasers, and code drops."
          />

          <div className="mb-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className={accentPanelClass}>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--nav-theme-light))]">
                {creatorCard.label}
              </p>
              <h3 className="mb-4 text-3xl font-bold">{creatorCard.value}</h3>
              <p className="text-sm text-muted-foreground">
                Official channels are the fastest way to follow update notes, event reminders, and new code announcements.
              </p>
            </div>
            <div className={panelClass}>
              <h3 className="mb-4 text-2xl font-bold">Community Highlights</h3>
              <ul className="space-y-3">
                {communityHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--nav-theme-light))]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {communityCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="scroll-reveal rounded-3xl border border-border bg-white/5 p-6 transition hover:border-[hsl(var(--nav-theme)/0.45)] hover:bg-white/10"
              >
                <card.icon className="mb-4 h-8 w-8 text-[hsl(var(--nav-theme-light))]" />
                <h3 className="mb-2 text-lg font-bold">{card.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{card.subtitle}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--nav-theme-light))]">
                  {card.buttonLabel}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>

        </div>
      </section>

      <section id="faq" className="scroll-mt-28 px-4 py-20 bg-white/[0.02]">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Module 16"
            title="Be a Lucky Block"
            highlight="FAQ"
            description="Quick answers for the most common questions new players ask when they first load into Be a Lucky Block."
          />

          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {faqQuickAnswerChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[hsl(var(--nav-theme)/0.24)] bg-background/45 px-4 py-2 text-sm"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const expanded = expandedFaqIndex === index;

              return (
                <div
                  key={item.question}
                  className="scroll-reveal rounded-3xl border border-border bg-white/5 p-6 transition hover:border-[hsl(var(--nav-theme)/0.45)]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedFaqIndex(expanded ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-4 text-left"
                    aria-expanded={expanded}
                  >
                    <h3 className="text-lg font-semibold">{item.question}</h3>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-[hsl(var(--nav-theme-light))] transition-transform duration-300 ${
                        expanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expanded ? "max-h-72 pt-4 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Suspense fallback={<LoadingPlaceholder label={loadingLabel} />}>
        <CTASection
          title={t.cta.title}
          description={t.cta.description}
          joinCommunity={t.cta.joinCommunity}
          joinGame={t.cta.joinGame}
          joinCommunityHref={OFFICIAL_LINKS.discord}
          joinGameHref={OFFICIAL_LINKS.game}
        />
      </Suspense>

      <footer className="border-t border-border bg-white/[0.02]">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xl font-bold text-[hsl(var(--nav-theme-light))]">
                {t.footer.title}
              </h3>
              <p className="text-sm text-muted-foreground">{t.footer.description}</p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">{t.footer.resources}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#codes"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    {t.footer.activeCodes}
                  </a>
                </li>
                <li>
                  <a
                    href="#beginner-guide"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    {t.footer.trainingGuides}
                  </a>
                </li>
                <li>
                  <a
                    href="#locations"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    {t.footer.breathingStyles}
                  </a>
                </li>
                <li>
                  <a
                    href="#upgrades-guide"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    {t.footer.clanGuides}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">{t.footer.moreTools}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href={OFFICIAL_LINKS.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    {t.footer.discord}
                  </a>
                </li>
                <li>
                  <a
                    href={OFFICIAL_LINKS.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    {t.footer.trello}
                  </a>
                </li>
                <li>
                  <a
                    href={OFFICIAL_LINKS.group}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    Official Roblox Group
                  </a>
                </li>
                <li>
                  <a
                    href={OFFICIAL_LINKS.game}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    {t.footer.playNow}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Official Updates</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href={OFFICIAL_LINKS.updateEvent}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    Next Update Event
                  </a>
                </li>
                <li>
                  <a
                    href={OFFICIAL_LINKS.liveEvent}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    Live Event Page
                  </a>
                </li>
                <li>
                  <a
                    href={OFFICIAL_LINKS.recentEvent}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    Recent Event Archive
                  </a>
                </li>
                <li>
                  <a
                    href={OFFICIAL_LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    Featured YouTube Video
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
