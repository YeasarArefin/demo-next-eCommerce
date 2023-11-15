import { product } from "@/types/types"
import Image from "next/image"


export default async function Product({ product }: { product: product }) {

    const { title, price, description, image } = product || {}

    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-x-10">

            <div className="flex justify-center">
                <Image
                    src={image}
                    width={300}
                    height={200}
                    alt={title}
                    className="w-full h-full rounded"
                    placeholder="blur"
                    blurDataURL="/spinner.svg"
                />
            </div>

            <div className="flex flex-col justify-center items-start gap-y-3">
                <h1 className="text-5xl">{title}</h1>
                <h1 className="text-2xl">Price : {price}&#2547;</h1>
                <h1 className="text-2xl">Description : {description}</h1>
            </div>
        </div>
    )
}
