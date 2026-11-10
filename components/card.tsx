import CldImage from "./cloudinary"
import Link from "next/link"

const Card = ({
  item,
  imgFolder,
  pageFolder,
  headingLevel = "h2",
}: {
  item: {
    id: string
    slug: string
    title: string
    imageSlug?: string | null
  }
  imgFolder: string
  pageFolder: string
  // h2 na stranicama sa listom (odmah ispod h1), h3 u blokovima na naslovnoj.
  headingLevel?: "h2" | "h3"
}) => {
  const Heading = headingLevel

  return (
    <li className="h-fit overflow-hidden rounded-xl bg-white text-center shadow-md transition-shadow hover:shadow-xl dark:bg-zinc-900">
      <Link href={`/${pageFolder}/${item.slug}/`}>
        <CldImage
          src={
            item.imageSlug
              ? `/images/${imgFolder}/${item.imageSlug}/${item.imageSlug}.jpg`
              : `/images/${imgFolder}/${item.slug}/${item.slug}.jpg`
          }
          width={400}
          height={500}
          // Naslov ispod već imenuje link, pa bi alt bio pročitan dva puta.
          alt=""
        />
        <Heading className="mb-2 px-4 py-4 text-xl leading-8">
          {item.title}
        </Heading>
      </Link>
    </li>
  )
}

export default Card
