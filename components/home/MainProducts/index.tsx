"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'


interface Product {
  id: number;
  title: string;
  body_html: string;
  vendor: string;
  product_type: string;
  created_at: string;
  handle: string;
  updated_at: string;
  published_at: string;
  template_suffix: string | null;
  published_scope: string;
  tags: string;
  status: string;
  admin_graphql_api_id: string;
  variants: Array<{}>;
  options: Array<{}>;
  images: Array<{}>
  image: {
    id: number;
    alt: string | null;
    position: number;
    product_id: number;
    created_at: string;
    updated_at: string;
    admin_graphql_api_id: string;
    width: number;
    height: number;
    src: string;
    variant_ids: Array<number>;
  }
}

const getProducts = async (): Promise<Product[]> => {
  try {
    const url = `${process.env.NEXT_PUBLIC_SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`
    const key = process.env.NEXT_PUBLIC_SHOPIFY_API_KEY
    console.log({url, key})

    const response = await fetch(url, {
      headers: new Headers ({
        'X-Shopify-Access-Token': key || ""
      })
    })


    console.log(response)

    const data = await response.json()

    console.log(data)

    return data.products
  } catch (error) {
    console.error(`Error: ${error}`)
    return []
  }
}

export const MainProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts()
      setProducts(products)
    }

    fetchProducts()
  }, [])

  return (
    <section className={styles.MainProducts}>
      <h3>✨ New Products Released</h3>
      <div className={styles.MainProducts__grid}>
        {
          products.map((product) => {
            const imgSrc = product.image.src
            return (
              <article key={product.id}>
                <p>{product.title}</p>
                <Image 
                  fill
                  src={imgSrc}
                  alt={product.title}
                  loading='eager'
                />
              </article>
            )
          })
        }
      </div>
    </section>
  )
}