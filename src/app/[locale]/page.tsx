"use client";

import { Suspense, lazy, useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  Check,
  Clock,
  Coins,
  Copy,
  Gift,
  House,
  MapPin,
  MessageCircle,
  Package,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useMessages } from "next-intl";
import { NativeBannerAd, AdBanner } from "@/components/ads";
import { VideoFeature } from "@/components/home/VideoFeature";
import {
  HERO_IMAGE_URL,
  OFFICIAL_LINKS,
  ORGANIZATION_SAME_AS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const HeroStats = lazy(() => import("@/components/home/HeroStats"));
const FAQSection = lazy(() => import("@/components/home/FAQSection"));
const CTASection = lazy(() => import("@/components/home/CTASection"));

const LoadingPlaceholder = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} flex items-center justify-center rounded-xl border border-border bg-white/5 animate-pulse`}
  >
    <div className="text-muted-foreground">Loading...</div>
  </div>
);

export default function HomePage() {
  const t = useMessages() as any;
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const resourceCards = [
    {
      icon: Gift,
      title: "Codes",
      description: "Track RELEASE, redeem steps, and new drops first.",
      href: "#codes",
    },
    {
      icon: TrendingUp,
      title: "Beginner",
      description:
        "Start with short safe routes before you push deeper luck runs.",
      href: "#beginner",
    },
    {
      icon: Package,
      title: "Brainrots",
      description: "Learn how pulls, specials, and offline cash fit together.",
      href: "#brainrots",
    },
    {
      icon: MapPin,
      title: "Locations",
      description: "Compare near, mid, and far routes by risk and return.",
      href: "#locations",
    },
    {
      icon: Users,
      title: "Trading",
      description:
        "Trade around duplicates and specials without breaking income.",
      href: "#trading",
    },
    {
      icon: House,
      title: "Base",
      description: "Turn safe returns into stronger passive income loops.",
      href: "#base",
    },
    {
      icon: Zap,
      title: "Upgrades",
      description: "Prioritize speed, cash growth, and better route control.",
      href: "#upgrades",
    },
    {
      icon: Clock,
      title: "Events",
      description:
        "Watch Saturday patches, live events, and official reminders.",
      href: "#events",
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
      title: "Bank Your First Pulls",
      text: "Bring early Brainrots home quickly instead of gambling on longer detours.",
    },
    {
      step: "4",
      title: "Start Passive Income",
      text: "Place Brainrots at base so your economy keeps moving even when you log off.",
    },
  ];

  const beginnerDo = [
    "Redeem the starter code as soon as you enter the game.",
    "Practice short, repeatable runs before testing far routes.",
    "Turn your first Brainrots into base income immediately.",
    "Rejoin if a fresh code does not work on your current server.",
  ];

  const beginnerDont = [
    "Do not force long routes with no safety net.",
    "Do not hold a strong pull too long while guards are nearby.",
    "Do not ignore passive income while chasing a lucky high roll.",
    "Do not waste time typing codes manually if you can paste them.",
  ];

  const locationTiers = [
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
      playstyle: "Solid value without the longest return path",
    },
    {
      tier: "Far Route",
      luck: "High",
      risk: "High",
      bestFor: "Chasing premium pulls and stronger specials",
      playstyle: "Big reward ceiling with a much harder escape",
    },
  ];

  const locationHighlights = [
    "Near Route: safest first farm for quick cash-ins and early upgrades.",
    "Mid Route: better luck than spawn-side farming without the longest return path.",
    "Far Route: strongest normal-route luck and the best place to chase premium pulls.",
    "Guard Pressure: long return paths make movement speed and clean routes much more important.",
    "Best Progression: move up one distance tier at a time instead of forcing deep runs too early.",
  ];

  const brainrotHighlights = [
    "Current Free Pull: RELEASE gives Brr Brr Patapim.",
    "Base Economy: Brainrots are your main source of steady income once they are secured at home.",
    "Offline Earnings: your Brainrots continue generating cash while you are away.",
    "Core Loop: roll blocks, secure the pull, return to base, and reinvest into better odds.",
    "Visible Public Lines: recent runs already show Strawberry-themed pulls and multiple higher-tier block lines.",
  ];

  const specialBrainrots = [
    "Inferno Secret Block",
    "Divine Block",
    "Void Special",
    "Cyborg Block",
    "Mogging Block Secret",
  ];

  const tradingHighlights = [
    "Best Time to Trade: start after your base income feels stable, not during your first upgrade squeeze.",
    "Best Pieces to Move: duplicates, event pulls, and spare specials are easier to trade than core earners.",
    "Trading Hub: one of the main ways players target secrets they missed on normal rolls.",
    "Community Watchlist: Discord, the Roblox group, X, and YouTube are the fastest places to spot fresh demand.",
  ];

  const baseFlow = [
    {
      title: "Start at Base",
      description:
        "Load into your base first so you can prepare, check your cash, and open the shop before the first run.",
    },
    {
      title: "Claim the Free Boost",
      description:
        "Use RELEASE in Shop > Codes to get Brr Brr Patapim and give your base an early income push.",
    },
    {
      title: "Run Short Before Long",
      description:
        "Use the closest destination first to learn timing, return routes, and guard pressure.",
    },
    {
      title: "Bank Every Good Haul",
      description:
        "Once you get a worthwhile Brainrot, head home and secure it instead of risking everything for one extra roll.",
    },
  ];

  const offlineCash = [
    "Claim RELEASE for an immediate starter Brainrot.",
    "Lock in safe Brainrots at base before ending a session.",
    "Upgrade enough to reach better luck routes consistently.",
    "Log off after a productive return, not after an empty run.",
  ];

  const upgradeLadder = [
    {
      stage: "Early Game",
      focus: "Movement speed",
      reason:
        "More speed makes short runs safer and opens the path to farther destinations with better luck.",
    },
    {
      stage: "After Stable Income",
      focus: "Cash growth",
      reason:
        "Once you can return home reliably, stronger income lets every farming loop scale faster.",
    },
    {
      stage: "Mid Progression",
      focus: "Luck-related value",
      reason:
        "Better luck matters more once you can survive the longer routes where stronger drops show up.",
    },
  ];

  const guardTips = [
    "Use the closest destination until the route feels automatic.",
    "Wait for the guards to roll the Lucky Block before you commit.",
    "Grab the drop quickly and turn back with a plan.",
    "Choose survival over greed when the return window gets tight.",
  ];

  const patchCards = [
    {
      date: "March 21, 2026",
      title: "COSMIC EVENT - Pull Lucky Blocks",
      tag: "New Drop",
      description:
        "A fresh event built around brand-new Lucky Blocks and new secret events.",
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

  const communityCards = [
    {
      title: "Official Roblox Game",
      subtitle: "Launch the experience and check the latest page updates.",
      buttonLabel: "Play Now",
      href: OFFICIAL_LINKS.game,
    },
    {
      title: "Official Roblox Group",
      subtitle: "Watch the broader community activity around the game.",
      buttonLabel: "Open Group",
      href: OFFICIAL_LINKS.group,
    },
    {
      title: "Official Discord",
      subtitle:
        "Best place for announcements, update chatter, and community discussion.",
      buttonLabel: "Join Discord",
      href: OFFICIAL_LINKS.discord,
    },
    {
      title: "Official X",
      subtitle: "Follow xFrozenStudios for studio posts and patch teases.",
      buttonLabel: "Follow on X",
      href: OFFICIAL_LINKS.x,
    },
  ];

  const faqItems = [
    {
      question: "How often does Be a Lucky Block update?",
      answer: "The game advertises a weekly Saturday update schedule.",
    },
    {
      question: "What do farther destinations do?",
      answer:
        "Going farther improves your luck, which increases the chance of better pulls if you can survive the trip home.",
    },
    {
      question: "Why do Brainrots matter?",
      answer:
        "Brainrots are the core of your base economy because they keep earning cash for you, including while you are offline.",
    },
    {
      question: "How do I redeem codes?",
      answer:
        "Open the Shop menu, go to the Codes section, paste the code, and press Verify.",
    },
    {
      question: "Where should I check for new updates and codes first?",
      answer:
        "Watch the Saturday patch cycle, Roblox event pages, and the official Discord for the fastest update flow.",
    },
  ];

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
          "Be A Lucky Block Wiki with active codes, routes, brainrots, and weekly update coverage.",
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
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-reveal-visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    document
      .querySelectorAll(".scroll-reveal")
      .forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative px-4 pb-20 pt-12">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--nav-theme)/0.1)] to-transparent" />
        <div className="container relative z-10 mx-auto text-center">
          <div className="scroll-reveal mb-8 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--nav-theme)/0.3)] bg-[hsl(var(--nav-theme)/0.12)] px-4 py-2">
            <Sparkles className="h-4 w-4 text-[hsl(var(--nav-theme-light))]" />
            <span className="text-sm text-muted-foreground">
              {t.hero.badge}
            </span>
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
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-[hsl(var(--nav-theme))] px-8 py-6 text-lg font-medium text-slate-950 transition-colors hover:bg-[hsl(var(--nav-theme)/0.9)]"
            >
              <Gift className="h-5 w-5" />
              {t.hero.getFreeCodesCTA}
            </a>
            <a
              href={OFFICIAL_LINKS.game}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-border px-8 py-6 text-lg font-medium transition-colors hover:bg-white/10"
            >
              {t.hero.playOnRobloxCTA}
            </a>
          </div>

          <Suspense fallback={<LoadingPlaceholder height="h-32" />}>
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

      <section className="px-4 py-12">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            <VideoFeature
              videoId="90yMVIeJI2k"
              title="Be a Lucky Block brainrot gameplay"
              posterImage="/images/hero.webp"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                {t.gameFeature.title}
              </h2>
              <p className="max-w-2xl text-muted-foreground">
                {t.gameFeature.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="py-8">
        <AdBanner
          type="banner-320x50"
          adKey={process.env.NEXT_PUBLIC_AD_MOBILE_320X50}
        />
      </div>

      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="scroll-reveal mb-4 text-4xl font-bold md:text-5xl">
              {t.tools.title}{" "}
              <span className="text-[hsl(var(--nav-theme-light))]">
                {t.tools.titleHighlight}
              </span>
            </h2>
            <p className="scroll-reveal text-lg text-muted-foreground">
              {t.tools.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {resourceCards.map((card) => (
              <a
                key={card.href}
                href={card.href}
                className="scroll-reveal block rounded-xl border border-border bg-white/5 p-6 transition hover:border-[hsl(var(--nav-theme)/0.5)] hover:bg-white/10"
              >
                <card.icon className="mb-4 h-12 w-12 text-[hsl(var(--nav-theme-light))]" />
                <h3 className="mb-2 text-xl font-bold">{card.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {card.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="codes" className="px-4 py-20 bg-white/[0.02]">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="scroll-reveal mb-4 text-4xl font-bold md:text-5xl">
              Be a Lucky Block{" "}
              <span className="text-[hsl(var(--nav-theme-light))]">Codes</span>
            </h2>
            <p className="scroll-reveal text-lg text-muted-foreground">
              Redeem the current starter code for a free Brainrot and a faster
              first base loop.
            </p>
          </div>

          <div className="scroll-reveal mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {codeStats.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border bg-white/5 p-5"
              >
                <div className="mb-1 text-2xl font-bold text-[hsl(var(--nav-theme-light))]">
                  {item.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="scroll-reveal rounded-xl border border-border bg-white/5 p-6">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-[hsl(var(--nav-theme-light))]">
                    1 active code • 0 expired
                  </p>
                  <h3 className="text-2xl font-bold">{codeCard.code}</h3>
                </div>
                <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                  {codeCard.status}
                </span>
              </div>
              <p className="mb-2 text-muted-foreground">
                Reward: {codeCard.reward}
              </p>
              <p className="mb-6 text-sm text-muted-foreground">
                {codeCard.tag}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => copyCode(codeCard.code)}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[hsl(var(--nav-theme))] px-6 py-3 font-medium text-slate-950 transition hover:bg-[hsl(var(--nav-theme)/0.9)]"
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
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-6 py-3 font-medium transition hover:bg-white/10"
                >
                  Watch Discord for Updates
                </a>
              </div>
            </div>

            <div className="scroll-reveal rounded-xl border border-border bg-white/5 p-6">
              <h3 className="mb-4 text-xl font-bold">Redeem Steps</h3>
              <ol className="space-y-3">
                {redeemSteps.map((step, index) => (
                  <li key={step} className="flex items-start gap-3 text-sm">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-[hsl(var(--nav-theme)/0.3)] bg-[hsl(var(--nav-theme)/0.15)] text-xs font-bold text-[hsl(var(--nav-theme-light))]">
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

      <div className="py-8">
        <AdBanner
          type="banner-468x60"
          adKey={process.env.NEXT_PUBLIC_AD_BANNER_468X60}
        />
      </div>

      <section id="beginner" className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="scroll-reveal mb-4 text-4xl font-bold md:text-5xl">
              Be a Lucky Block{" "}
              <span className="text-[hsl(var(--nav-theme-light))]">
                Beginner Guide
              </span>
            </h2>
            <p className="scroll-reveal text-lg text-muted-foreground">
              Secure a free Brainrot first, learn the shortest safe route, then
              scale into better luck runs.
            </p>
          </div>

          <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {beginnerTimeline.map((item) => (
              <div
                key={item.step}
                className="scroll-reveal rounded-xl border border-border bg-white/5 p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--nav-theme)/0.15)] text-xl font-bold text-[hsl(var(--nav-theme-light))]">
                  {item.step}
                </div>
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="scroll-reveal rounded-xl border border-border bg-white/5 p-6">
              <h3 className="mb-4 text-xl font-bold text-[hsl(var(--nav-theme-light))]">
                Do
              </h3>
              <ul className="space-y-2">
                {beginnerDo.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="scroll-reveal rounded-xl border border-border bg-white/5 p-6">
              <h3 className="mb-4 text-xl font-bold text-[hsl(var(--nav-theme-light))]">
                Avoid
              </h3>
              <ul className="space-y-2">
                {beginnerDont.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 text-red-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="px-4 py-20 bg-white/[0.02]">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="scroll-reveal mb-4 text-4xl font-bold md:text-5xl">
              Be a Lucky Block{" "}
              <span className="text-[hsl(var(--nav-theme-light))]">
                Luck & Locations
              </span>
            </h2>
            <p className="scroll-reveal text-lg text-muted-foreground">
              Distance improves your luck, but every extra step also makes the
              return home more dangerous.
            </p>
          </div>

          <div className="mb-8 grid gap-6 md:grid-cols-3">
            {locationTiers.map((tier) => (
              <div
                key={tier.tier}
                className="scroll-reveal rounded-xl border border-border bg-white/5 p-6"
              >
                <h3 className="mb-3 text-2xl font-bold text-[hsl(var(--nav-theme-light))]">
                  {tier.tier}
                </h3>
                <div className="mb-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Luck</span>
                    <span>{tier.luck}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Risk</span>
                    <span>{tier.risk}</span>
                  </div>
                </div>
                <p className="mb-2 text-sm">{tier.bestFor}</p>
                <p className="text-sm text-muted-foreground">
                  {tier.playstyle}
                </p>
              </div>
            ))}
          </div>

          <div className="scroll-reveal rounded-xl border border-border bg-white/5 p-6">
            <h3 className="mb-4 text-xl font-bold">Route Notes</h3>
            <ul className="grid gap-3 md:grid-cols-2">
              {locationHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--nav-theme-light))]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="brainrots" className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="scroll-reveal mb-4 text-4xl font-bold md:text-5xl">
              Be a Lucky Block{" "}
              <span className="text-[hsl(var(--nav-theme-light))]">
                Brainrots
              </span>
            </h2>
            <p className="scroll-reveal text-lg text-muted-foreground">
              Brainrots are your core reward loop: unlock them, get them home,
              and turn them into passive income.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="scroll-reveal rounded-xl border border-border bg-white/5 p-6">
              <h3 className="mb-4 text-xl font-bold">Why Brainrots Matter</h3>
              <ul className="space-y-3">
                {brainrotHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Coins className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--nav-theme-light))]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="scroll-reveal rounded-xl border border-border bg-white/5 p-6">
              <h3 className="mb-4 text-xl font-bold">
                Special Brainrot Watchlist
              </h3>
              <div className="grid gap-3">
                {specialBrainrots.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-[hsl(var(--nav-theme)/0.25)] bg-[hsl(var(--nav-theme)/0.08)] p-4"
                  >
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-[hsl(var(--nav-theme-light))]" />
                      <span className="font-semibold">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="trading" className="px-4 py-20 bg-white/[0.02]">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="scroll-reveal mb-4 text-4xl font-bold md:text-5xl">
              Be a Lucky Block{" "}
              <span className="text-[hsl(var(--nav-theme-light))]">
                Trading Guide
              </span>
            </h2>
            <p className="scroll-reveal text-lg text-muted-foreground">
              Trade when your base is already stable, not when your whole
              progression still depends on one strong pull.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {tradingHighlights.map((item) => (
              <div
                key={item}
                className="scroll-reveal rounded-xl border border-border bg-white/5 p-6"
              >
                <div className="mb-3 flex items-center gap-2 text-[hsl(var(--nav-theme-light))]">
                  <Users className="h-5 w-5" />
                  <span className="font-semibold">Trading Note</span>
                </div>
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="base" className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="scroll-reveal mb-4 text-4xl font-bold md:text-5xl">
              Be a Lucky Block{" "}
              <span className="text-[hsl(var(--nav-theme-light))]">
                Base & Offline Cash
              </span>
            </h2>
            <p className="scroll-reveal text-lg text-muted-foreground">
              Your base is where every run becomes real progress, because safe
              deliveries turn into passive income.
            </p>
          </div>

          <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {baseFlow.map((item) => (
              <div
                key={item.title}
                className="scroll-reveal rounded-xl border border-border bg-white/5 p-6"
              >
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="scroll-reveal rounded-xl border border-border bg-white/5 p-6">
            <h3 className="mb-4 text-xl font-bold">Offline Cash Priorities</h3>
            <ul className="grid gap-3 md:grid-cols-2">
              {offlineCash.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <House className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--nav-theme-light))]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="upgrades" className="px-4 py-20 bg-white/[0.02]">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="scroll-reveal mb-4 text-4xl font-bold md:text-5xl">
              Be a Lucky Block{" "}
              <span className="text-[hsl(var(--nav-theme-light))]">
                Upgrades & Escape Tips
              </span>
            </h2>
            <p className="scroll-reveal text-lg text-muted-foreground">
              Early progress is mostly about moving faster, banking cleaner
              runs, and escaping with your best pulls.
            </p>
          </div>

          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {upgradeLadder.map((item) => (
              <div
                key={item.stage}
                className="scroll-reveal rounded-xl border border-border bg-white/5 p-6"
              >
                <p className="mb-2 text-sm text-[hsl(var(--nav-theme-light))]">
                  {item.stage}
                </p>
                <h3 className="mb-3 text-xl font-bold">{item.focus}</h3>
                <p className="text-sm text-muted-foreground">{item.reason}</p>
              </div>
            ))}
          </div>

          <div className="scroll-reveal rounded-xl border border-border bg-white/5 p-6">
            <h3 className="mb-4 text-xl font-bold">Guard Escape Checklist</h3>
            <ul className="grid gap-3 md:grid-cols-2">
              {guardTips.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <Shield className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--nav-theme-light))]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="events" className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="scroll-reveal mb-4 text-4xl font-bold md:text-5xl">
              Be a Lucky Block{" "}
              <span className="text-[hsl(var(--nav-theme-light))]">
                Weekly Updates & Events
              </span>
            </h2>
            <p className="scroll-reveal text-lg text-muted-foreground">
              Be a Lucky Block runs on a clear Saturday patch rhythm, with
              Roblox event pages acting as the fastest public update tracker.
            </p>
          </div>

          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {patchCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="scroll-reveal block rounded-xl border border-border bg-white/5 p-6 transition hover:border-[hsl(var(--nav-theme)/0.5)] hover:bg-white/10"
              >
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="rounded-full border border-[hsl(var(--nav-theme)/0.25)] bg-[hsl(var(--nav-theme)/0.08)] px-3 py-1 text-xs font-semibold text-[hsl(var(--nav-theme-light))]">
                    {card.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {card.date}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold">{card.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {card.description}
                </p>
              </a>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {communityCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="scroll-reveal rounded-xl border border-border bg-white/5 p-6 transition hover:border-[hsl(var(--nav-theme)/0.5)] hover:bg-white/10"
              >
                <h3 className="mb-2 text-lg font-bold">{card.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {card.subtitle}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--nav-theme-light))]">
                  {card.buttonLabel}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 bg-white/[0.02]">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="scroll-reveal mb-4 text-4xl font-bold md:text-5xl">
              {t.whatIs.title}{" "}
              <span className="text-[hsl(var(--nav-theme-light))]">
                {t.whatIs.titleHighlight}
              </span>
            </h2>
            <p className="scroll-reveal mx-auto max-w-3xl text-lg text-muted-foreground">
              {t.whatIs.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {t.whatIs.features.map((feature: any) => (
              <div
                key={feature.title}
                className="scroll-reveal rounded-xl border border-border bg-white/5 p-6 transition hover:border-[hsl(var(--nav-theme)/0.5)]"
              >
                <Zap className="mb-4 h-12 w-12 text-[hsl(var(--nav-theme-light))]" />
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={<LoadingPlaceholder />}>
        <FAQSection
          title={t.faq.title}
          titleHighlight={t.faq.titleHighlight}
          subtitle={t.faq.subtitle}
          questions={faqItems}
        />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
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
              <p className="text-sm text-muted-foreground">
                {t.footer.description}
              </p>
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
                    href="#beginner"
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
                    href="#base"
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
              <h4 className="mb-4 font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    {t.footer.privacyPolicy}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    {t.footer.termsOfService}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/copyright"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    Copyright
                  </Link>
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
