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
  const path = "/terms-of-service";

  return {
    title: `Terms of Service | ${SITE_NAME}`,
    description: `Read the ${SITE_NAME} Terms of Service covering acceptable use, content ownership, disclaimers, and external links for our ${GAME_NAME} resource site.`,
    keywords: [
      "terms of service",
      `${SITE_NAME} terms`,
      `${GAME_NAME} fan site terms`,
      "user agreement",
      "content usage policy",
    ],
    openGraph: {
      type: "website",
      locale,
      url:
        locale === "en" ? `${SITE_URL}${path}` : `${SITE_URL}/${locale}${path}`,
      siteName: SITE_NAME,
      title: `Terms of Service | ${SITE_NAME}`,
      description: `Terms and conditions for using ${SITE_NAME}.`,
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
      title: `Terms of Service | ${SITE_NAME}`,
      description: `Terms and conditions for using ${SITE_NAME}.`,
      images: [HERO_IMAGE_URL],
    },
    alternates: buildLanguageAlternates(path, locale as Locale, SITE_URL),
  };
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Terms of Service
          </h1>
          <p className="mb-2 text-lg text-slate-300">
            Terms and conditions for using {SITE_NAME}.
          </p>
          <p className="text-sm text-slate-400">Last Updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using {SITE_NAME}, you agree to these Terms of
              Service. If you do not agree, please do not use the site.
            </p>

            <h2>2. What the Site Provides</h2>
            <p>
              {SITE_NAME} is an unofficial fan-made website focused on{" "}
              {GAME_NAME}. We publish guides, update coverage, codes tracking,
              strategy pages, and community resource links for informational
              purposes only.
            </p>

            <h2>3. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>
                Use the site in violation of applicable law or regulation.
              </li>
              <li>
                Attempt to interfere with site performance, hosting, or
                analytics systems.
              </li>
              <li>
                Scrape or reproduce the site&apos;s original content at scale
                without permission.
              </li>
              <li>
                Impersonate the site, the game developers, or any official
                community representative.
              </li>
              <li>
                Submit malicious content, spam, or abusive messages through
                contact channels.
              </li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              Original text, page design, and site branding created for{" "}
              {SITE_NAME} are protected by applicable copyright and trademark
              laws. Game-related names, images, logos, and platform marks belong
              to their respective owners.
            </p>

            <h2>5. Fan Site Disclaimer</h2>
            <p>
              {SITE_NAME} is not an official site for {GAME_NAME}. We are not
              affiliated with Roblox Corporation, xFrozen x Dudes,
              xFrozenStudios, or the game&apos;s developers or publishers.
            </p>

            <h2>6. No Warranty</h2>
            <p>
              The site is provided on an &quot;as is&quot; and &quot;as
              available&quot; basis. We do not guarantee that every code, guide,
              event page, or gameplay note is always complete, current, or
              error-free. Game updates can quickly change what is accurate.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, {SITE_NAME} is not liable
              for indirect, incidental, special, or consequential damages
              arising from your use of the site, reliance on its content, or use
              of third-party websites linked from it.
            </p>

            <h2>8. External Links</h2>
            <p>
              The site links to Roblox, Discord, X, YouTube, and other
              third-party platforms. We do not control those services and are
              not responsible for their content, account systems, or privacy
              practices.
            </p>

            <h2>9. Changes to the Site or Terms</h2>
            <p>
              We may update these Terms or modify site content at any time.
              Continued use of the site after a change means you accept the
              revised Terms.
            </p>

            <h2>10. Governing Principles</h2>
            <p>
              These Terms are intended to reflect reasonable rules for a small
              informational fan site. If any part is found unenforceable, the
              remaining sections will remain in effect.
            </p>

            <h2>11. Contact</h2>
            <p>
              For legal or terms-related questions, email{" "}
              <a
                href={`mailto:${CONTACT_EMAILS.legal}`}
                className="text-[hsl(var(--nav-theme-light))] hover:underline"
              >
                {CONTACT_EMAILS.legal}
              </a>
              .
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
