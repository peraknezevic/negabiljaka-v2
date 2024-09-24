// Homepage stuff

import { Article, GenusPage, Page, Plant, PlantProfile } from "@prisma/client"

import prisma from "@/prisma/client"

export const getPlantBySlug = async (slug: Plant["slug"]) =>
  await prisma.plant.findUnique({
    where: {
      slug,
    },
  })

export const getPlantProfileBySlug = async (slug: PlantProfile["slug"]) =>
  await prisma.plantProfile.findUnique({
    where: {
      slug,
    },
  })

export const getPublishedPlantProfiles = async () =>
  await prisma.plantProfile.findMany({
    where: {
      published: "PUBLISHED",
    },
    orderBy: {
      slug: "asc",
    },
    select: {
      id: true,
      title: true,
      slug: true,
    },
  })

const getLatestPlantProfiles = async () =>
  await prisma.plantProfile.findMany({
    where: {
      published: "PUBLISHED",
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      slug: true,
    },
    take: 3,
  })

const getRecentlyUpdatedGenera = async () =>
  await prisma.genusPage.findMany({
    where: {
      published: "PUBLISHED",
    },
    orderBy: {
      updatedAt: "desc",
    },
    select: {
      id: true,
      title: true,
      slug: true,
    },
    take: 3,
  })

export const getPublishedGeneras = async () =>
  await prisma.genusPage.findMany({
    where: {
      published: "PUBLISHED",
    },
    select: {
      id: true,
      title: true,
      slug: true,
    },
  })

export const getGenusBySlug = async (slug: GenusPage["slug"]) =>
  await prisma.genusPage.findUnique({
    where: {
      slug,
    },
  })

export const getPlantsByGenusSlug = async (
  genusPageSlug: Plant["genusPageSlug"]
) =>
  await prisma.plant.findMany({
    where: {
      genusPageSlug,
    },
    orderBy: {
      genusPageSlug: "asc",
    },
  })

const getLatestArticles = async () =>
  prisma.article.findMany({
    where: {
      published: "PUBLISHED",
      language: "SRPSKI",
    },
    orderBy: {
      updatedAt: "desc",
    },
    select: {
      id: true,
      title: true,
      slug: true,
    },
    take: 3,
  })
export const getPageBySlug = async (slug: Page["slug"]) =>
  await prisma.page.findUnique({
    where: {
      slug: slug,
    },
  })

export const getPublishedArticles = async () =>
  await prisma.article.findMany({
    where: {
      published: "PUBLISHED",
      language: "SRPSKI",
    },
    select: {
      id: true,
      title: true,
      slug: true,
    },
  })

export const getArticleBySlug = async (slug: Article["slug"]) =>
  await prisma.article.findUnique({
    where: {
      slug,
    },
  })

export const getHomePageData = async () =>
  await Promise.all([
    getLatestPlantProfiles(),
    getRecentlyUpdatedGenera(),
    getLatestArticles(),
  ])

export const getGenusPageData = async (slug: GenusPage["slug"]) =>
  await Promise.all([getGenusBySlug(slug), getPlantsByGenusSlug(slug)])
