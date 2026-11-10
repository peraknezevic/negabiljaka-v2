import "./globals.css"

import { Outfit, Zilla_Slab } from "next/font/google"

import Footer from "@/components/footer"
import Header from "@/components/header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nega Biljaka",
  description: "Profili i saveti za negu sobnih biljaka",
}

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
})

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-zilla-slab",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sr-Latn" className={`${outfit.variable} ${zillaSlab.variable}`}>
      <body className="bg-pink-50 text-emerald-950 dark:bg-emerald-950 dark:text-zinc-300">
        <a
          href="#sadrzaj"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-emerald-950 focus:shadow-lg"
        >
          Preskoči na sadržaj
        </a>
        <Header />
        <main
          id="sadrzaj"
          tabIndex={-1}
          className="mx-auto my-8 min-h-screen max-w-4xl focus:outline-none md:py-16"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
