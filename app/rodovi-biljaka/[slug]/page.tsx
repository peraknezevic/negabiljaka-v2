import H2 from "@/components/ui/H2"
import Markdown from "@/components/ui/markdown"
import PageHead from "@/components/page-head"
import PlantCard from "@/components/plant-card"
import PlantsList from "@/components/plants-list"
import Section from "@/components/section"
import { getCldOgImageUrl } from "next-cloudinary"
import { getGenusPageData } from "@/lib/data"

const Page = async ({ params }: { params: { slug: string } }) => {
  const [genusPage, plants] = await getGenusPageData(params.slug)

  if (!genusPage) return <p>Rod nije pronađen.</p>
  if (genusPage.published === "DRAFT")
    return <p>Stranica za ovaj rod je još uvek u pripremi.</p>
  if (genusPage.published === "REVIEW")
    return <p>Stranica za ovaj rod se dorađuje.</p>

  return (
    <article>
      <PageHead title={genusPage.title} pageType="Rod" />

      {genusPage.uvod && (
        <Section>
          <Markdown content={genusPage.uvod} />
        </Section>
      )}

      <H2 title={`Lista ${genusPage.title} biljaka`} />
      <PlantsList plants={plants} />

      <H2 title={`${genusPage.title} biljke`} />
      {plants.map((plant) => (
        <PlantCard plant={plant} genusSlug={params.slug} key={plant.slug} />
      ))}

      {genusPage.hvala && (
        <Section>
          <Markdown title="Hvala" content={genusPage.hvala} />
        </Section>
      )}

      {genusPage.promene && (
        <Section>
          <Markdown title="Promene" content={genusPage.promene} />
        </Section>
      )}
    </article>
  )
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const publicId = `images/genus/${params.slug}/genus-${params.slug}-og-en.jpg`
  const url = "https://negabiljaka.com"
  const pageUrl = `${url}/rodovi-biljaka/${params.slug}`
  const pageTitle = params.slug[0].toUpperCase() + params.slug.slice(1)
  const title = `${pageTitle} vrste, kultivari i hibridi - rod ${pageTitle}`
  const description = `Lista svih ${pageTitle} biljaka`
  const keywords = `${pageTitle}, ${pageTitle} vrste, ${pageTitle} kultivari, ${pageTitle} hibridi`
  return {
    title: title,
    description: description,
    keywords: keywords,
    openGraph: {
      title: title,
      description: description,
      url: pageUrl,
      siteName: "Nega Biljaka",
      images: [
        {
          width: 1200,
          height: 627,
          url: getCldOgImageUrl({
            src: publicId,
            effects: [{ colorize: "100,co_black" }],
            overlays: [
              {
                publicId,
                width: 2400,
                height: 1254,
                crop: "fill",
                effects: [
                  {
                    opacity: 30,
                  },
                ],
              },
              {
                width: 1400,
                crop: "fit",
                text: {
                  alignment: "center",
                  color: "white",
                  fontFamily: "Source Sans Pro",
                  fontSize: 160,
                  fontWeight: "bold",
                  text: pageTitle,
                },
                position: {
                  y: -100,
                },
              },
              {
                width: 1400,
                crop: "fit",
                text: {
                  alignment: "center",
                  color: "white",
                  fontFamily: "Source Sans Pro",
                  fontSize: 74,
                  text: description,
                },
                position: {
                  y: 100,
                },
              },
            ],
          }),
        },
      ],
      type: "article",
      authors: ["Pera Knezevic / Nega Biljaka"],
      locale: "en_US",
    },
  }
}

export default Page
