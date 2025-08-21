import PageHead from "@/components/page-head"
import PlantCardSingle from "@/components/plant-card-single"
import ScrollTopFix from "@/components/scroll-fix"
import { getPlantBySlug } from "@/lib/data"

type Params = { slug: string }

type Props = { params?: Promise<Params> }

const Pages = async ({ params }: Props) => {
  const { slug } = await (params as Promise<Params>)
  const plant = await getPlantBySlug(slug)

  if (!plant) return <p>Još uvek nemamo stranicu za ovu biljku.</p>

  return (
    <article>
      <ScrollTopFix />
      <PageHead title={plant.title} pageType="Biljka" />
      <PlantCardSingle plant={plant} genusSlug={plant.genusPageSlug} />
    </article>
  )
}

export default Pages
