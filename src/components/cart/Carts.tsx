'use client'
import { RootState } from "@/redux/store";
import { Button } from "@mantine/core";
import Link from "next/link";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import Orders from "./Orders";

export default function Carts() {

    const { cart } = useSelector((state: RootState) => state.cart)

    let content = null;
    if (cart.length === 0) content = <div className="text-center">
        <h1 className="mb-5 text-2xl">Your Cart Is Empty !</h1>
        <Link href='/'>
            <Button variant="filled">Shop</Button>
        </Link>
    </div>
    if (cart.length > 0) {
        content = cart.map((product) => <Cart key={product.id} product={product} />)
    }

    return (
        <div className="grid gap-10 lg:grid-cols-5 flex">
            <div className="lg:col-span-3">
                <div className="flex flex-col gap-y-5 ">{content}</div>
            </div>
            <div className="lg:col-span-2">
                <Orders />
            </div>
        </div>
    )
}
