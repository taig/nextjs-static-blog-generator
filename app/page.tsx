import { loadArticles } from "./engine"

export default async () => {
  const articles = await loadArticles()

  return (
    <>
      <h1>Welcome to my blog</h1>
      <ol>
        {articles.map((article) => (
          <li key={article.slug}>
            <a href={`/${article.slug}`}>{article.title}</a>
          </li>
        ))}
      </ol>
    </>
  )
}
