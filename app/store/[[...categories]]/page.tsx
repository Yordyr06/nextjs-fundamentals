import { FC } from "react"

interface Props {
  params: {
    categories: string[]
  },
  searchParams?: string
}

export const Categories: FC<Props> = ( props ) => {
  const { params, searchParams } = props
  console.log(params.categories)
  console.log(searchParams)

  return (
    <main>
      <h1>Categoría dinámica: { params.categories }</h1>
    </main>
  )
}