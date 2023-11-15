import { product } from "@/types/types";
import Product from "./Product";

export default async function Products({ products }: { products: product[] }) {

    let content = null;
    if (products.length === 0) content = <h1>No Products available</h1>
    if (products.length > 0) {
        content = products.map((product) => <Product key={product.id} productData={product} />)
    }

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
            {content}
        </div>
    )
}
