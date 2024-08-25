const getProducts = async () => {
  const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`, {
    headers: new Headers({
      'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || ""
    })
  })

  const data = await response.json()
  return data.products
}

export const MainProducts = async () =>{
  const products = await getProducts()
  console.log(products)

  return (
    <section>
      <h1>MainProduct</h1>
    </section>
  )
}