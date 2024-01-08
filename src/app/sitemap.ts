import { product } from "@/types/types";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const res = await fetch(`https://fakestoreapi.com/products`)
    const products: product[] = await res.json()

    const productEntries: MetadataRoute.Sitemap = products.map(({ id }) => ({
        url: `${process.env.BASE_URL}/${id}`,
        lastModified: new Date(),
    }))

    return [
        {
            url: `${process.env.BASE_URL}/`,
            lastModified: new Date(),
        },
        ...productEntries
    ]
}