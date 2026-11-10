import Card from "@/components/card"
import CardGrid from "@/components/cards-grid"
import { Metadata } from "next"
import PageHead from "@/components/page-head"
import { getPublishedPlantProfiles } from "@/lib/data"

const Page = async () => {
  const data = await getPublishedPlantProfiles()

  return (
    <>
      <PageHead title="Profili Biljaka" />
      <CardGrid>
        {data.map((item) => (
          <Card
            key={item.id}
            item={item}
            imgFolder="plants"
            pageFolder="profili-biljaka"
          />
        ))}
      </CardGrid>
    </>
  )
}

export const metadata: Metadata = {
  title: "Profili biljaka - Nega Biljaka",
  description: "Vodiči za negu sobnih biljaka",
}

export default Page
