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
              <a href={item.url} className="underline underline-offset-4">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <nav aria-label="Podnožje">
        <ul className="flex gap-4 md:gap-8">
          <li>
            <Link
              href="/stranice/politika-privatnosti"
              className="underline underline-offset-4"
            >
              Politika privatnosti
            </Link>
          </li>
          <li>
            <a
              href="mailto:negabiljaka@gmail.com"
              className="underline underline-offset-4"
            >
              Kontakt preko e-maila
            </a>
          </li>
        </ul>
      </nav>
      <p className="mx-auto text-center">
        &copy; 2021.-2024. Dizajnirao i razvio{" "}
        <a
          href="https://peraknezevic.com"
          className="underline underline-offset-4"
        >
          Pera Knezevic
        </a>. Sva prava
        zadržana. v2 beta
      </p>
    </footer>
  )
}

export default Footer
