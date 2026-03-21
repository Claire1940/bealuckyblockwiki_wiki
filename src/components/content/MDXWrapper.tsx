import { getContentBySlug, type ContentType, type Language } from '@/lib/content'

export async function MDXWrapper({
  language,
  slug,
  contentType = 'guide'
}: {
  language: Language
  slug: string
  contentType?: ContentType
}) {
  const contentEntry = await getContentBySlug(contentType, slug, language)

  if (!contentEntry) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Content not found</p>
      </div>
    )
  }

  return contentEntry.content
}
