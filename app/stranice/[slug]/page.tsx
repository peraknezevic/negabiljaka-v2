import Markdown from "@/components/ui/markdown"
import PageHead from "@/components/page-head"
import { getPageBySlug } from "@/lib/data"
import { notFound } from "next/navigation"

type Params = { slug: string }

type Props = { params?: Promise<Params> }

const Page = async ({ params }: Props) => {
  const { slug } = await (params as Promise<Params>)
  const page = await getPageBySlug(slug)
  if (!page) notFound()

  return (
    <article className="prose w-full p-10">
      <PageHead title={page.title} />
      <Markdown content={page.content} />
    </article>
  )
}

export default Page
