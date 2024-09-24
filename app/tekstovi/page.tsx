import Card from "@/components/card"
import CardGrid from "@/components/cards-grid"
import { Metadata } from "next"
import PageHead from "@/components/page-head"
import { getPublishedArticles } from "@/lib/data"

const Page = async () => {
  const data = await getPublishedArticles()

  return (
    <>
      <PageHead title="Tekstovi" />
      <CardGrid>
        {data.map((item) => (
          <Card
            key={item.id}
            item={item}
            imgFolder="articles"
            pageFolder="tekstovi"
          />
        ))}
      </CardGrid>
    </>
  )
}

export const metadata: Metadata = {
  title: "Tekstovi - Nega Biljaka",
  description: "Tekstovi o sobnim biljkama",
}

export default Page
