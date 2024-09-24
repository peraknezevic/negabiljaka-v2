import Figure from "./ui/figure"
import NoImage from "./ui/no-image"
import P from "./ui/p"
import { Plant } from "@prisma/client"
import Section from "@/components/section"

const PlantCardSingle = ({
  plant,
  genusSlug,
}: {
  plant: Plant
  genusSlug: string
}) => {
  return (
    <Section>
      {plant.synonyms && <P title="Sinonimi" content={plant.synonyms} />}
      {plant.tradeNames && (
        <P title="Trgovački nazivi" content={plant.tradeNames} />
      )}
      {plant.narodniNaziv && (
        <P title="Narodni naziv" content={plant.narodniNaziv} />
      )}
      {plant.namedBy && <P title="Imenovao" content={plant.namedBy} />}
      {plant.inventor && <P title="Izumitelj" content={plant.inventor} />}
      {plant.patent && <P title="Patent" content={plant.patent} />}
      {plant.nativeArea && (
        <P title="Prirodno stanište" content={plant.nativeArea} />
      )}
      {plant.beleske && <P title="*" content={plant.beleske} />}

      {plant.parents && <P title="Roditelj(i)" list={plant.parents} external />}
      {plant.children && (
        <P title="Kultivari i hibridi" list={plant.children} external />
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

export default PlantCardSingle
