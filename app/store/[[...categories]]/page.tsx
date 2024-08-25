"use client"

interface Props {
  params: {
    categories: string[]
  },
  searchParams?: string
}

const Categories = ( props: Props ) => {
  const { params, searchParams } = props

  return (
    <main>
      <h1>Categoría dinámica: { params.categories }</h1>
    </main>
  )
}

export default Categories