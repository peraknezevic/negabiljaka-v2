import Card from "@/components/card"
import CardGrid from "@/components/cards-grid"
import { Metadata } from "next"
import PageHead from "@/components/page-head"
import { getPublishedGeneras } from "@/lib/data"

const Page = async () => {
  const data = await getPublishedGeneras()

  return (
    <div>
      <PageHead title="Genera Pages" />
      <CardGrid>
        {data.map((item) => (
          <Card
            key={item.id}
            item={item}
            imgFolder="genus"
            pageFolder="rodovi-biljaka"
          />
        ))}
      </CardGrid>
    </div>
  )
}

export const metadata: Metadata = {
  title: "Rodovi biljaka - Nega Biljaka",
  description:
    "Stranice posvećene raznim rodovima biljaka, liste svih vrsta, kultivara i hibrida.",
}

export default Page
