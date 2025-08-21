import Figure from "@/components/ui/figure"
import Markdown from "@/components/ui/markdown"
import PageHead from "@/components/page-head"
import Section from "@/components/section"
import { getArticleBySlug } from "@/lib/data"
import { notFound } from "next/navigation"

type Params = { slug: string }

type Props = { params?: Promise<Params> }

const Page = async ({ params }: Props) => {
  const { slug } = await (params as Promise<Params>)
  const article = await getArticleBySlug(slug)

  if (!article) notFound()

  return (
    <article>
      <PageHead title={article.title} pageType="tekst" />

      {article.intro && (
        <Section>
          <Markdown content={article.intro} />
        </Section>
      )}
      <Section>
        <Markdown content={article.content} />
        <Figure
          imgUrl={`/images/articles/${article.imageSlug}/${article.imageSlug}-1600x900.jpg`}
          alt={article.title}
          caption={article.title}
          credit={article.imageCredits || "Slika: Houseplants.xyz"}
        />
      </Section>
    </article>
  )
}

export default Page
