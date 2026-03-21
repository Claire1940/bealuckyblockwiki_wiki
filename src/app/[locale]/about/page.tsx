import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { type Locale } from "@/i18n/routing";
import { buildLanguageAlternates } from "@/lib/i18n-utils";
import {
  CONTACT_EMAILS,
  GAME_NAME,
  HERO_IMAGE_ALT,
  HERO_IMAGE_URL,
  LAST_UPDATED,
  OFFICIAL_LINKS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const path = "/about";

  return {
    title: `About ${SITE_NAME}`,
    description: `Learn about ${SITE_NAME}, an unofficial fan-made resource hub for ${GAME_NAME} guides, codes coverage, routes, trading, and update tracking.`,
    keywords: [
      `about ${SITE_NAME}`,
      `${GAME_NAME} wiki`,
      `${GAME_NAME} fan site`,
      "Roblox guide hub",
      "community resource site",
    ],
    openGraph: {
      type: "website",
      locale,
      url:
        locale === "en" ? `${SITE_URL}${path}` : `${SITE_URL}/${locale}${path}`,
      siteName: SITE_NAME,
      title: `About ${SITE_NAME}`,
      description: `Learn why ${SITE_NAME} exists and what it covers for ${GAME_NAME} players.`,
      images: [
        {
          url: HERO_IMAGE_URL,
          width: 768,
          height: 432,
          alt: HERO_IMAGE_ALT,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `About ${SITE_NAME}`,
      description: `Learn why ${SITE_NAME} exists and what it covers for ${GAME_NAME} players.`,
      images: [HERO_IMAGE_URL],
    },
    alternates: buildLanguageAlternates(path, locale as Locale, SITE_URL),
  };
}

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            About {SITE_NAME}
          </h1>
          <p className="mb-2 text-lg text-slate-300">
            An unofficial resource hub for codes, routes, brainrots, trading,
            and update tracking.
          </p>
          <p className="text-sm text-slate-400">Updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>What This Site Covers</h2>
            <p>
              {SITE_NAME} exists to help players understand the core loop of{" "}
              {GAME_NAME}: redeem the latest code, travel farther for better
              luck, get Brainrots home safely, and build steady offline cash.
            </p>
            <p>
              Our editorial focus is practical and search-friendly. We
              concentrate on the topics players most often need first: codes,
              beginner routes, locations, trading, base growth, upgrades,
              events, and weekly updates.
            </p>

            <h2>Why We Built It</h2>
            <ul>
              <li>To surface the latest useful links in one place.</li>
              <li>To turn scattered update info into readable guides.</li>
              <li>
                To explain how luck, routes, Brainrots, and offline income fit
                together.
              </li>
              <li>To provide a clean fan-made reference for Roblox players.</li>
            </ul>

            <h2>What We Link To</h2>
            <p>
              The site regularly points readers to the game&apos;s public
              official channels, including:
            </p>
            <ul>
              <li>
                Official Roblox game page:{" "}
                <a
                  href={OFFICIAL_LINKS.game}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {OFFICIAL_LINKS.game}
                </a>
              </li>
              <li>
                Official Roblox group:{" "}
                <a
                  href={OFFICIAL_LINKS.group}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {OFFICIAL_LINKS.group}
                </a>
              </li>
              <li>
                Official Discord:{" "}
                <a
                  href={OFFICIAL_LINKS.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {OFFICIAL_LINKS.discord}
                </a>
              </li>
              <li>
                Official X:{" "}
                <a
                  href={OFFICIAL_LINKS.x}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {OFFICIAL_LINKS.x}
                </a>
              </li>
            </ul>

            <h2>Unofficial Status</h2>
            <p>
              {SITE_NAME} is an unofficial fan-made site. We are not affiliated
              with Roblox Corporation, xFrozen x Dudes, xFrozenStudios, or the
              developers/publishers of {GAME_NAME}.
            </p>

            <h2>Contact</h2>
            <p>
              If you want to get in touch, use the email that best matches your
              request:
            </p>
            <ul>
              <li>
                General inquiries:{" "}
                <a href={`mailto:${CONTACT_EMAILS.general}`}>
                  {CONTACT_EMAILS.general}
                </a>
              </li>
              <li>
                Support / corrections:{" "}
                <a href={`mailto:${CONTACT_EMAILS.support}`}>
                  {CONTACT_EMAILS.support}
                </a>
              </li>
              <li>
                Content submissions:{" "}
                <a href={`mailto:${CONTACT_EMAILS.contribute}`}>
                  {CONTACT_EMAILS.contribute}
                </a>
              </li>
              <li>
                Partnership requests:{" "}
                <a href={`mailto:${CONTACT_EMAILS.partnerships}`}>
                  {CONTACT_EMAILS.partnerships}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-4 py-8">
        <div className="container mx-auto max-w-4xl text-center">
          <Link
            href="/"
            className="text-[hsl(var(--nav-theme-light))] hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
