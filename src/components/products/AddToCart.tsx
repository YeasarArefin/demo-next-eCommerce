'use client'
import { addToCart } from "@/redux/features/cart/cartSlice";
import { product } from "@/types/types";
import { Button } from "@mantine/core";
import { useDispatch } from "react-redux";

export default function AddToCart({ productData }: { productData: product }) {

    const dispatch = useDispatch()
    const handleAddToCart = () => dispatch(addToCart({ ...productData, quantity: 1 }))

    return (
        <Button onClick={handleAddToCart} variant='light' color='blue'>Add To Cart</Button>
    )
}
