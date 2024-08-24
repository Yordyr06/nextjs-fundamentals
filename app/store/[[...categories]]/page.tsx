"use client"
import { FC } from "react"

interface Props {
  params: {
    categories: string[]
  },
  searchParams?: string
}

export default function Categories( props: Props ) {
  const { params, searchParams } = props
  console.log(params.categories)
  console.log(searchParams)

  return (
    <main>
      <h1>Categoría dinámica: { params.categories }</h1>
    </main>
  )
}