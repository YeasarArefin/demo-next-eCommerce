import Product from '@/components/product/product'
export default async function page({ params }: { params: { id: string } }) {

    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    const product = await res.json()

    return (
        <Product product={product} />
    )
}
