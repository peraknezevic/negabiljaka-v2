import PageHead from "@/components/page-head"
import PlantProfileContent from "@/components/plant-profile-content"
import { getPlantProfileBySlug } from "@/lib/data"

const Page = async ({ params }: { params: { slug: string } }) => {
  const plantProfile = await getPlantProfileBySlug(params.slug)

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
