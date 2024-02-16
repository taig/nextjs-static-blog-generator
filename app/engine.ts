import { readFile, readdir } from "fs/promises"
import { parse } from "yaml"
import { z } from "zod"

const Article = z.object({
  title: z.string(),
  slug: z.string(),
  body: z.string()
})

export type Article = z.infer<typeof Article>

export const loadArticles = async (): Promise<Article[]> => {
  const entries = await readdir("./content", { withFileTypes: true })
  const files = entries.filter((entry) => entry.isFile() && entry.name.endsWith(".yml"))
  const sources = await Promise.all(files.map((file) => readFile(`${file.path}/${file.name}`, "utf-8")))
  return sources.map(parseArticle)
}

const parseArticle = (input: string): Article => {
  const yaml = parse(input)
  return Article.parse(yaml)
}