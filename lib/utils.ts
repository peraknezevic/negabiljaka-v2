import { twMerge } from "tailwind-merge"
import { type ClassValue, clsx } from "clsx"

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const enumToString = (value: string) => {
  return value.charAt(0) + value.slice(1).toLowerCase().replace("_", " ")
}
export const removeChars = (text: string) =>
  text
    .replaceAll("'", "")
    .replaceAll(".", "")
    .replaceAll("‘", "")
    .replaceAll("’", "")
    .replaceAll('"', "")
    .replaceAll(" × ", "-")
    .replaceAll(" ", "-")
    .toLowerCase()

export const enumToSerbian = (value: string) => {
  switch (value) {
    case "EASY":
      return "Laka"
    case "AVARAGE":
      return "Srednja"
    case "DIFFICULT":
      return "Teška"
    case "LOW_LIGHT":
      return "Slabo"
    case "PARTIAL_SHADE":
      return "Delimična senka"
    case "MEDIUM_LIGHT":
      return "Srednje"
    case "BRIGHT_LIGHT":
      return "Jako"
    case "FULL_SUN":
      return "Direktno sunce"
    case "LOW":
      return "Niska"
    case "MEDIUM":
      return "Srednja"
    case "HIGH":
      return "Visoka"
    case "SLOW":
      return "Sporo"
    case "MODERATE":
      return "Umereno"
    case "FAST":
      return "Brzo"
    case "TOXIC":
      return "Otrovno"
    case "NOT_TOXIC":
      return "Nije otrovno"
    case "NO_INFO":
      return "Nema informacije"
    default:
      return value
  }
}
