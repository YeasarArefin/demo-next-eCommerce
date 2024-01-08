import Product from '@/components/product/product'
import { product } from '@/types/types'
export default async function page({ params }: { params: { id: string } }) {

    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    const product = await res.json()

    return (
        <Product product={product} />
    )
}
export async function generateStaticParams() {
    const res = await fetch(`https://fakestoreapi.com/products`)
    const products: product[] = await res.json()

    return products.map((product) => ({
        id: product.id.toString()
    }))

}