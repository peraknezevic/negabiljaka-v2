import Figure from "./ui/figure"
import Markdown from "./ui/markdown"
import P from "./ui/p"
import { PlantProfile } from "@prisma/client"
import Section from "./section"
import { enumToSerbian } from "@/lib/utils"

const PlantProfileContent = ({ plant }: { plant: PlantProfile }) => {
  return (
    <>
      <Section>
        <P title="Botanički naziv" content={plant.botanicalName} />
        {plant.synonyms && <P title="Sinonimi" content={plant.synonyms} />}
        {plant.namedBy && <P title="Imenovao" content={plant.namedBy} />}
        {plant.family && <P title="Porodica" content={plant.family} />}
        {plant.subFamily && <P title="Potporodica" content={plant.subFamily} />}
        <P title="Rod" content={plant.genus} />
        {plant.nativeArea && (
          <P title="Prirodno stanište" content={plant.nativeArea} />
        )}
        {plant.tradeNames && (
          <P title="Trgovački nazivi" content={plant.tradeNames} />
        )}
        {plant.inventor && <P title="Izumitelj" content={plant.inventor} />}
        {plant.patent && <P title="Patent" content={plant.patent} />}
        {plant.narodniNaziv && (
          <P title="Narodni naziv" content={plant.narodniNaziv} />
        )}
        <Figure
          imgUrl={`/images/plants/${plant.slug}/${plant.slug}-01.jpg`}
          alt={plant.title}
          caption={plant.botanicalName}
          credit={plant.imageCredits || "Photo by Nega Biljaka"}
        />
      </Section>

      <Section>
        <P title="Težina nege" content={enumToSerbian(plant.care)} />
        <P title="Svetlo" content={enumToSerbian(plant.light)} />
        <P
          title="Minimalna temperatura"
          content={`${plant.minimalT}\u00B0 C`}
        />
        <P
          title="Optimalna temperatura"
          content={`${plant.optimalT}\u00B0 C`}
        />
        <P title="Vlažnost vazduha" content={enumToSerbian(plant.humidity)} />
        <P title="Zalivanje" content={plant.zalivanje} />
        <P title="Prihrana" content={plant.prihrana} />
        <P title="Supstrat" content={plant.supstrat} />
        <P title="PH supstrata" content={plant.soilPH} />
        <P title="Presađivanje" content={plant.presadjivanje} />

        <Figure
          imgUrl={`/images/plants/${plant.slug}/${plant.slug}-02.jpg`}
          alt={plant.title}
          caption={plant.botanicalName}
          credit={plant.imageCredits || "Photo by Nega Biljaka"}
        />
      </Section>

      <Section>
        <P title="Brzina rasta" content={enumToSerbian(plant.speedOfGrowth)} />
        <P title="Veličina" content={plant.velicina} />
        <P title="Cvet" content={plant.cvet} />
        <P title="Razmnožavanje" content={plant.razmnozavanje} />
        <P title="Štetočine" content={plant.stetocine} />
        <P title="Bolesti" content={plant.bolesti} />
        <P title="Toksicnost" content={enumToSerbian(plant.toxicity)} />
        <Figure
          imgUrl={`/images/plants/${plant.slug}/${plant.slug}-03.jpg`}
          alt={plant.title}
          caption={plant.botanicalName}
          credit={plant.imageCredits || "Photo by Nega Biljaka"}
        />
      </Section>

      {plant.beleske && (
        <Section>
          <Markdown title="Beleške" content={plant.beleske} />
        </Section>
      )}
    </>
  )
}

export default PlantProfileContent
