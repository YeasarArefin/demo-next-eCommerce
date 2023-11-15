'use client'
import { decreaseCartQuantity, increaseCartQuantity, removeFromCart } from "@/redux/features/cart/cartSlice";
import { product } from "@/types/types";
import { Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
export default function Cart({ product }: { product: product }) {

    const { id, description, title, image, category, price, rating, quantity } = product || {};
    const dispatch = useDispatch();

    return (
        <div key={id} className="flex justify-between px-4 py-4  border border-solid border-gray-200 shadow-xl shadow-slate-100 rounded-lg">
            <div className="flex">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 p-4">
                    <Image src={image} width={100} height={60} alt={title} className="h-full w-full object-cover object-center" />
                </div>
                <div className="px-4 flex flex-col gap-y-3">
                    <div className="flex justify-between text-base font-medium text-gray-900">

                        <Link href={`/${id}`} className="hover:underline font-bold text-black text-lg">{title}</Link>

                    </div>
                    <p className="mt-1 text-sm text-gray-500">{category}</p>
                    <div className="flex items-center gap-x-4">
                        <Button onClick={() => dispatch(increaseCartQuantity(id))} size="compact-xs" variant="light" className="text-black">+</Button>
                        <h1>{quantity}</h1>
                        <Button onClick={() => dispatch(decreaseCartQuantity(id))} size="compact-xs" variant="light" className="text-black">-</Button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-between">
                <p className="ml-4 font-black text-xl">${price}</p>
                <Button onClick={() => dispatch(removeFromCart(id))} size="xs" className="px-1 bg-red-600">Remove</Button>
            </div>
        </div>
    )
}
