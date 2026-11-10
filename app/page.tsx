import HomePageBlock from "@/components/homepage-block"
import { getHomePageData } from "@/lib/data"

const [plants, genera, articles] = await getHomePageData()
const Home = () => {
  return (
    <>
      {/* Logo nije naslov, pa stranica dobija h1 vidljiv samo čitačima ekrana. */}
      <h1 className="sr-only">Nega Biljaka: profili i saveti za negu sobnih biljaka</h1>
      <HomePageBlock
        title="Ažurirane stranice rodova biljaka"
        data={genera}
        imgFolder="genus"
        pageFolder="rodovi-biljaka"
        linkTitle="Vidi sve rodove biljaka"
        link="/rodovi-biljaka"
      />
      <HomePageBlock
        title="Najnoviji profili biljaka"
        data={plants}
        imgFolder="plants"
        pageFolder="profili-biljaka"
        linkTitle="Vidi sve profile biljaka"
        link="/profili-biljaka"
      />
      <HomePageBlock
        title="Najnoviji tekstovi"
        data={articles}
        imgFolder="articles"
        pageFolder="tekstovi"
        linkTitle="Vidi sve tekstove"
        link="/tekstovi"
      />
    </>
  )
}

export default Home
