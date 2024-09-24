const NoImage = ({ title }: { title: string }) => {
  return (
    <div className="px-8 pb-8 pt-4 text-base">
      <p>
        Još uvek nemamo sliku za ovu biljku. Da li želite da pošaljete vašu?
      </p>
      <p>
        Pošaljite mejlom na{" "}
        <a href={`mailto:negabiljaka@gmail.com?subject=${title} slika`}>
          negabiljaka@gmail.com{" "}
        </a>{" "}
        ili preko instagrama @negabiljaka.xyz
      </p>
    </div>
  )
}

export default NoImage
