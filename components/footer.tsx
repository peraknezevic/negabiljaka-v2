import Link from "next/link"
import { socialNavItems } from "@/lib/constants"

const Footer = () => {
  return (
    <footer className="mt-auto flex flex-col items-center justify-center gap-6 bg-pink-950 px-4 py-6 text-white dark:bg-emerald-950 md:gap-8 md:px-6 md:py-12">
      <div className="flex flex-wrap gap-4 md:flex-nowrap md:gap-8">
        <span className="w-full md:w-auto">Pratite nas na:</span>
        <ul className="flex justify-between gap-x-8">
          {socialNavItems.map((item) => (
            <li key={item.id}>
              <a href={item.url} className="underline">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <nav>
        <ul className="flex gap-4 md:gap-8">
          <li>
            <Link href="/stranice/politika-privatnosti">
              Politika privatnosti
            </Link>
          </li>
          <li>
            <a href="mailto:negabiljaka@gmail.com">Kontakt preko e-maila</a>
          </li>
        </ul>
      </nav>
      <p className="mx-auto text-center">
        &copy; 2021.-2024. Dizajnirao i razvio{" "}
        <a href="https://peraknezevic.com">Pera Knezevic</a>. Sva prava
        zadržana.
      </p>
    </footer>
  )
}

export default Footer
