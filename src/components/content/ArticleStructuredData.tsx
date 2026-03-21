import type { ContentFrontmatter, ContentType } from "@/lib/content";
import { HERO_IMAGE_URL, SITE_NAME, SITE_URL } from "@/lib/site";

interface ArticleStructuredDataProps {
  frontmatter: ContentFrontmatter;
  contentType: ContentType;
  locale: string;
  slug: string;
}

export function ArticleStructuredData({
  frontmatter,
  contentType,
  locale,
  slug,
}: ArticleStructuredDataProps) {
  const siteUrl = SITE_URL;
  const articleUrl =
    locale === "en"
      ? `${siteUrl}/${contentType}/${slug}`
      : `${siteUrl}/${locale}/${contentType}/${slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.description,
    image: frontmatter.image || HERO_IMAGE_URL,
    datePublished: frontmatter.date,
    dateModified:
      ("lastModified" in frontmatter && frontmatter.lastModified) ||
      frontmatter.date,
    author: {
      "@type": "Organization",
      name: `${SITE_NAME} Team`,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: siteUrl,
      image: HERO_IMAGE_URL,
      logo: {
        "@type": "ImageObject",
        url: HERO_IMAGE_URL,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
