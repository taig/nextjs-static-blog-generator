import { loadArticles } from "@/app/engine"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import Markdown from "react-markdown"

export default async ({ params }: { params: { slug: string } }) => {
  const articles = await loadArticles()

  const article = articles.find((article) => article.slug === params.slug)

  if (article === undefined) notFound()

  return (
    <>
      <h1>{article.title}</h1>
      <Markdown>{article.body}</Markdown>
      <hr />
      <a href="/">Back to overview</a>
    </>
  )
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const articles = await loadArticles()
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const articles = await loadArticles()

  const article = articles.find((article) => article.slug === params.slug)

  if (article === undefined) notFound()

  return {
    title: article.title,
  }
}
