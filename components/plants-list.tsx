import { Plant } from "@prisma/client"
import PlantListItem from "@/components/plant-list-item"
import Section from "@/components/section"

const PlantsList = ({ plants }: { plants: Plant[] }) => {
  return (
    <Section>
      <ul className="space-y-2 pb-8 text-lg font-medium sm:columns-2">
        {plants.map((plant) => (
          <PlantListItem key={plant.id} title={plant.title} />
        ))}
      </ul>
    </Section>
  )
}

export default PlantsList
