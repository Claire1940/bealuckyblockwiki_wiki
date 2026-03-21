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
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const path = "/copyright";

  return {
    title: `Copyright Notice | ${SITE_NAME}`,
    description: `Copyright, fair use, and DMCA information for ${SITE_NAME}, our unofficial ${GAME_NAME} fan resource site.`,
    keywords: [
      "copyright notice",
      `${SITE_NAME} copyright`,
      "dmca notice",
      "fair use",
      "intellectual property",
    ],
    openGraph: {
      type: "website",
      locale,
      url:
        locale === "en" ? `${SITE_URL}${path}` : `${SITE_URL}/${locale}${path}`,
      siteName: SITE_NAME,
      title: `Copyright Notice | ${SITE_NAME}`,
      description: `Copyright, fair use, and DMCA information for ${SITE_NAME}.`,
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
      title: `Copyright Notice | ${SITE_NAME}`,
      description: `Copyright, fair use, and DMCA information for ${SITE_NAME}.`,
      images: [HERO_IMAGE_URL],
    },
    alternates: buildLanguageAlternates(path, locale as Locale, SITE_URL),
  };
}

export default function Copyright() {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Copyright Notice
          </h1>
          <p className="mb-2 text-lg text-slate-300">
            Fair use, attribution, and DMCA guidance for content published on{" "}
            {SITE_NAME}.
          </p>
          <p className="text-sm text-slate-400">Last Updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>1. Site Content Ownership</h2>
            <p>
              Unless otherwise noted, original written guides, page layouts,
              branding elements, and data compilations published on {SITE_NAME}{" "}
              are owned by the site operators and protected by applicable
              copyright law.
            </p>

            <h2>2. Game Assets and Trademarks</h2>
            <p>
              {GAME_NAME}, Roblox, studio names, logos, screenshots, character
              art, event assets, and other game-related materials remain the
              property of their respective owners.
            </p>

            <h2>3. Fair Use Position</h2>
            <p>
              We use limited excerpts, images, and references for commentary,
              educational explanation, reporting on updates, and player
              guidance. This is intended as transformative, non-official fan
              documentation and not as a replacement for the game itself or its
              official channels.
            </p>

            <h2>4. Reuse of Our Original Content</h2>
            <p>You may:</p>
            <ul>
              <li>Link to our pages freely.</li>
              <li>Quote short excerpts with clear attribution.</li>
              <li>Reference our guides for personal or non-commercial use.</li>
            </ul>
            <p>You may not:</p>
            <ul>
              <li>Republish our guides in full without written permission.</li>
              <li>
                Copy our site branding in a way that suggests affiliation or
                endorsement.
              </li>
              <li>
                Use automated tools to mirror the site or reproduce it
                commercially.
              </li>
            </ul>

            <h2>5. DMCA / Takedown Requests</h2>
            <p>
              If you believe material on {SITE_NAME} infringes your copyright,
              send a detailed notice that identifies the work, the allegedly
              infringing material, your contact information, and a good faith
              statement describing the claim.
            </p>

            <h2>6. Counter-Notices</h2>
            <p>
              If you believe content was removed in error, you may send a
              counter-notice with the basis for your objection and sufficient
              information for us to review it.
            </p>

            <h2>7. Unofficial Fan Site Notice</h2>
            <p>
              {SITE_NAME} is an unofficial fan resource and is not affiliated
              with Roblox Corporation, xFrozen x Dudes, xFrozenStudios, or the
              developers/publishers of {GAME_NAME}.
            </p>

            <h2>8. Contact</h2>
            <p>
              General copyright questions:{" "}
              <a
                href={`mailto:${CONTACT_EMAILS.copyright}`}
                className="text-[hsl(var(--nav-theme-light))] hover:underline"
              >
                {CONTACT_EMAILS.copyright}
              </a>
              <br />
              DMCA notices:{" "}
              <a
                href={`mailto:${CONTACT_EMAILS.dmca}`}
                className="text-[hsl(var(--nav-theme-light))] hover:underline"
              >
                {CONTACT_EMAILS.dmca}
              </a>
            </p>
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
