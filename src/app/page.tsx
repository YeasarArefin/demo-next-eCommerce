import Products from "@/components/products/Products";
import { product } from "@/types/types";

const getProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products', { next: { revalidate: 10 } });
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Home() {
  const products: product[] = await getProducts()
  return <Products products={products} />
}
