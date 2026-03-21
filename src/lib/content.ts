import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import type { ReactNode } from 'react'
import { CONTENT_TYPES as CONFIG_CONTENT_TYPES } from '@/config/navigation'
import type { Locale } from '@/i18n/routing'

// 通用 Frontmatter 接口
export interface ContentFrontmatter {
  title: string
  description: string
  category?: string
  image?: string
  date?: string
  lastModified?: string
  author?: string
  // 新增：可选的手动颜色配置
  themeColor?: string  // 十六进制颜色，如 "1e40af"
  backgroundText?: string  // 自定义背景文字
  // 扩展字段（用于不同内容类型）
  rarity?: string  // 用于 units
  type?: string    // 用于 traits
  code?: string    // 用于 codes
}

// 从统一配置导入内容类型
export const CONTENT_TYPES = CONFIG_CONTENT_TYPES
export type ContentType = typeof CONTENT_TYPES[number]

// 支持的语言（使用 routing.ts 中的 Locale 类型）
export type Language = Locale

// 内容项接口
export interface ContentItem {
  slug: string
  frontmatter: ContentFrontmatter
}

// 内容数据接口
export interface ContentData {
  content: ReactNode
  frontmatter: ContentFrontmatter
}

const CONTENT_ROOT = path.join(process.cwd(), 'content')

/**
 * 辅助函数：递归获取目录下所有 MDX 文件的 slug
 */
function getSlugsFromDirectory(dir: string, basePath: string[] = []): string[] {
  if (!fs.existsSync(dir)) return []

  const slugs: string[] = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      slugs.push(...getSlugsFromDirectory(fullPath, [...basePath, entry.name]))
    } else if (entry.name.endsWith('.mdx')) {
      const fileName = entry.name.replace('.mdx', '')
      slugs.push([...basePath, fileName].join('/'))
    }
  }
  return slugs
}

function getContentDirectory(language: Language, contentType: ContentType): string {
  return path.join(CONTENT_ROOT, language, contentType)
}

function getContentFilePath(
  language: Language,
  contentType: ContentType,
  slug: string,
): string {
  return path.join(getContentDirectory(language, contentType), `${slug}.mdx`)
}

function resolveContentFilePath(
  language: Language,
  contentType: ContentType,
  slug: string,
): { filePath: string; resolvedLanguage: Language } | null {
  const localizedPath = getContentFilePath(language, contentType, slug)
  if (fs.existsSync(localizedPath)) {
    return { filePath: localizedPath, resolvedLanguage: language }
  }

  if (language !== 'en') {
    const fallbackPath = getContentFilePath('en', contentType, slug)
    if (fs.existsSync(fallbackPath)) {
      return { filePath: fallbackPath, resolvedLanguage: 'en' }
    }
  }

  return null
}

/**
 * 获取所有内容列表（支持递归读取嵌套目录）
 * 使用动态 import 获取 MDX 文件的 metadata
 */
export async function getAllContent(
  contentType: ContentType,
  language: Language
): Promise<ContentItem[]> {
  const items: ContentItem[] = []

  // 获取指定语言的所有 slugs
  const contentDir = getContentDirectory(language, contentType)
  let slugs = getSlugsFromDirectory(contentDir)

  // 如果不是英文，也获取英文目录的 slugs（用于 fallback）
  if (language !== 'en') {
    const enContentDir = getContentDirectory('en', contentType)
    const enSlugs = getSlugsFromDirectory(enContentDir)
    // 合并，去重
    slugs = [...new Set([...slugs, ...enSlugs])]
  }

  // 直接读取 frontmatter，避免构建阶段静态解析 content 目录
  for (const slug of slugs) {
    const resolvedContent = resolveContentFilePath(language, contentType, slug)
    if (!resolvedContent) {
      continue
    }

    try {
      const source = fs.readFileSync(resolvedContent.filePath, 'utf8')
      const { data } = matter(source)
      items.push({
        slug,
        frontmatter: data as ContentFrontmatter,
      })
    } catch {
      // 跳过无法加载的文件
    }
  }

  // 按日期排序(最新的在前)
  return items.sort((a, b) => {
    // 添加 frontmatter 存在性检查(防御性编程)
    if (!a.frontmatter || !b.frontmatter) {
      console.warn('Missing frontmatter in content item:', { a: a.slug, b: b.slug })
      return 0
    }
    if (!a.frontmatter.date || !b.frontmatter.date) return 0
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  })
}

/**
 * 获取所有内容路径（用于 generateStaticParams）
 * 返回格式: [['guide', 'beginner'], ['unit', 'jinwoo'], ...]
 */
export async function getAllContentPaths(): Promise<string[][]> {
  const paths: string[][] = []

  for (const contentType of CONTENT_TYPES) {
    const contentDir = getContentDirectory('en', contentType)

    const scanDirectory = (dir: string, basePath: string[] = []) => {
      if (!fs.existsSync(dir)) return

      const entries = fs.readdirSync(dir, { withFileTypes: true })

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name)

        if (entry.isDirectory()) {
          scanDirectory(fullPath, [...basePath, entry.name])
        } else if (entry.name.endsWith('.mdx')) {
          const fileName = entry.name.replace('.mdx', '')
          paths.push([contentType, ...basePath, fileName])
        }
      }
    }

    scanDirectory(contentDir)
  }

  return paths
}

/**
 * 获取单篇内容并编译 MDX；如果目标语言不存在则自动 fallback 到英文
 */
export async function getContentBySlug(
  contentType: ContentType,
  slug: string,
  language: Language,
): Promise<(ContentData & { resolvedLanguage: Language }) | null> {
  const resolvedContent = resolveContentFilePath(language, contentType, slug)
  if (!resolvedContent) {
    return null
  }

  const source = fs.readFileSync(resolvedContent.filePath, 'utf8')
  const { content, frontmatter } = await compileMDX<ContentFrontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [],
      },
    },
  })

  return {
    content,
    frontmatter,
    resolvedLanguage: resolvedContent.resolvedLanguage,
  }
}

/**
 * 获取所有内容的 slug（用于 generateStaticParams）
 */
export async function getAllContentSlugs(
  contentType: ContentType,
  language: Language
): Promise<string[]> {
  const items = await getAllContent(contentType, language)
  return items.map(item => item.slug)
}

/**
 * 验证内容类型是否有效
 */
export function isValidContentType(type: string): type is ContentType {
  return CONTENT_TYPES.includes(type as ContentType)
}

/**
 * 验证语言是否有效
 */
export function isValidLanguage(lang: string): lang is Language {
  const validLanguages: Language[] = ['en', 'pt', 'es', 'id', 'tr', 'fr', 'de', 'th']
  return validLanguages.includes(lang as Language)
}

/**
 * 获取默认语言
 */
export function getDefaultLanguage(): Language {
  return 'en'
}
