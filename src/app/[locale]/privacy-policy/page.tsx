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
  const path = "/privacy-policy";

  return {
    title: `Privacy Policy | ${SITE_NAME}`,
    description: `Read the ${SITE_NAME} Privacy Policy to understand how we handle analytics, cookies, and contact requests for our ${GAME_NAME} fan site.`,
    keywords: [
      "privacy policy",
      `${SITE_NAME} privacy`,
      `${GAME_NAME} privacy`,
      "cookies policy",
      "analytics disclosure",
    ],
    openGraph: {
      type: "website",
      locale,
      url:
        locale === "en" ? `${SITE_URL}${path}` : `${SITE_URL}/${locale}${path}`,
      siteName: SITE_NAME,
      title: `Privacy Policy | ${SITE_NAME}`,
      description: `Learn how ${SITE_NAME} collects limited technical data and protects visitor privacy.`,
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
      title: `Privacy Policy | ${SITE_NAME}`,
      description: `Learn how ${SITE_NAME} collects limited technical data and protects visitor privacy.`,
      images: [HERO_IMAGE_URL],
    },
    alternates: buildLanguageAlternates(path, locale as Locale, SITE_URL),
  };
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mb-2 text-lg text-slate-300">
            How {SITE_NAME} handles analytics, cookies, and contact requests.
          </p>
          <p className="text-sm text-slate-400">Last Updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>1. Scope</h2>
            <p>
              {SITE_NAME} is an unofficial fan-made resource site for{" "}
              {GAME_NAME}. This Privacy Policy explains what limited information
              we may collect when you browse the site and how we use it.
            </p>

            <h2>2. Information We Collect</h2>
            <ul>
              <li>
                <strong>Technical usage data:</strong> IP address, browser type,
                device type, page views, referrer data, and approximate location
                derived from analytics tools.
              </li>
              <li>
                <strong>Preference data:</strong> Theme and language preferences
                stored locally in your browser so the site remembers your
                settings.
              </li>
              <li>
                <strong>Contact information:</strong> If you email us, we
                receive the address and message you choose to send.
              </li>
            </ul>

            <h2>3. How We Use Data</h2>
            <ul>
              <li>Operate, secure, and improve the website.</li>
              <li>
                Measure which guides and pages are most useful to visitors.
              </li>
              <li>Diagnose bugs, performance problems, and abuse.</li>
              <li>Respond to support, privacy, or copyright requests.</li>
            </ul>

            <h2>4. Cookies, Analytics, and Advertising</h2>
            <p>
              We may use cookies or similar browser storage for site
              preferences, analytics, and advertising integrations. These tools
              help us understand traffic patterns and keep the site free to use.
            </p>
            <ul>
              <li>
                Analytics may include page view, click, and device-level
                behavior reporting.
              </li>
              <li>
                Advertising partners may use cookies subject to their own
                privacy policies.
              </li>
              <li>
                You can clear or block cookies in your browser settings, though
                some site preferences may no longer persist.
              </li>
            </ul>

            <h2>5. Third-Party Services</h2>
            <p>
              {SITE_NAME} links to third-party sites such as Roblox, Discord, X,
              YouTube, and other external resources. Those services operate
              under their own policies, and we are not responsible for their
              content or privacy practices.
            </p>

            <h2>6. Children&apos;s Privacy</h2>
            <p>
              The site is intended for a general audience. We do not knowingly
              collect personal information from children under 13, except for
              passive technical data that may be gathered automatically by
              analytics or advertising tools. If you believe a child has
              provided us with personal information, email us and we will review
              the request promptly.
            </p>

            <h2>7. Data Retention and Security</h2>
            <p>
              We retain analytics and operational records only as long as
              reasonably necessary for site operation, troubleshooting, legal
              compliance, and abuse prevention. No internet service is perfectly
              secure, but we use reasonable safeguards appropriate for a small
              informational site.
            </p>

            <h2>8. Your Choices</h2>
            <ul>
              <li>Block or clear cookies through your browser settings.</li>
              <li>
                Use privacy tools or browser extensions to limit analytics
                tracking.
              </li>
              <li>
                Contact us to request deletion of email correspondence you sent
                directly to us.
              </li>
            </ul>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Material
              changes will be reflected by a new &quot;Last Updated&quot; date
              on this page.
            </p>

            <h2>10. Unofficial Fan Site Notice</h2>
            <p>
              {SITE_NAME} is an unofficial fan project. We are not affiliated
              with Roblox Corporation, xFrozen x Dudes, xFrozenStudios, or the
              developers/publishers of {GAME_NAME}.
            </p>

            <h2>11. Contact</h2>
            <p>
              For privacy questions or requests, contact{" "}
              <a
                href={`mailto:${CONTACT_EMAILS.privacy}`}
                className="text-[hsl(var(--nav-theme-light))] hover:underline"
              >
                {CONTACT_EMAILS.privacy}
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
