import PageHead from "@/components/page-head"
import PlantProfileContent from "@/components/plant-profile-content"
import { getPlantProfileBySlug } from "@/lib/data"

type Params = { slug: string }

type Props = { params?: Promise<Params> }

const Page = async ({ params }: Props) => {
  const { slug } = await (params as Promise<Params>)
  const plantProfile = await getPlantProfileBySlug(slug)

  if (!plantProfile) return <p>Još uvek nemamo profil za ovu biljku.</p>
  if (plantProfile.published === "DRAFT")
    return <p>Ovaj profil još uvek nije dovršen.</p>
  if (plantProfile.published === "REVIEW")
    return <p>Ovaj profil se dorađuje.</p>

  return (
    <article>
      <PageHead title={plantProfile.title} pageType="Profili Biljaka" />
      <PlantProfileContent plant={plantProfile} />
    </article>
  )
}

export default Page
