import { FC } from "react"

interface Props {
  params: {
    category: string
  }
}

export const Category: FC<Props> = ( props ) => {
  const { category } = props.params
  console.log(category)

  return (
    <main>
      <h1>Categoría dinámica: { category }</h1>
    </main>
  )
}