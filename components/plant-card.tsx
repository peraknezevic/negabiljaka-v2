import Figure from "@/components/ui/figure"
import H3 from "@/components/ui/H3"
import Link from "next/link"
import NoImage from "@/components/ui/no-image"
import P from "@/components/ui/p"
import { Plant } from "@prisma/client"
import Section from "@/components/section"
import { removeChars } from "@/lib/utils"

const PlantCard = ({
  plant,
  genusSlug,
}: {
  plant: Plant
  genusSlug: string
}) => {
  return (
    <Section id={removeChars(plant.title)}>
      <Link href={"/biljke/" + plant.slug}>
        <H3 title={plant.title} />
      </Link>
      {plant.synonyms && <P title="Sinonimi" content={plant.synonyms} />}
      {plant.tradeNames && (
        <P title="Trgovački nazivi" content={plant.tradeNames} />
      )}
      {plant.narodniNaziv && (
        <P title="Narodni nazivi" content={plant.narodniNaziv} />
      )}
      {plant.namedBy && <P title="Imenovao" content={plant.namedBy} />}
      {plant.inventor && <P title="Izumitelj" content={plant.inventor} />}
      {plant.patent && <P title="Patent" content={plant.patent} />}
      {plant.nativeArea && (
        <P title="Prirodno stanište" content={plant.nativeArea} />
      )}
      {plant.beleske && <P title="*" content={plant.beleske} />}

      {plant.parents && <P title="Roditelj(i)" list={plant.parents} />}
      {plant.children && (
        <P title="Kultivari i hibridi" list={plant.children} />
      )}

      {plant.hasImage ? (
        <Figure
          imgUrl={`/images/genus/${genusSlug}/${plant.slug}.jpg`}
          alt={plant.title}
          caption={plant.title}
          credit={plant.imageCredits || "Photo by Houseplants.xyz"}
        />
      ) : (
        <NoImage title={plant.title} />
      )}
    </Section>
  )
}

export default PlantCard
