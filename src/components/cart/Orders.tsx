'use client';

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Orders() {

    const { cart } = useSelector((state: RootState) => state.cart)

    const totalItems = cart?.reduce((accumulator, current) => accumulator + (current?.quantity ?? 0), 0)
    const totalPrice = cart?.reduce((accumulator, current) => accumulator + current.price * (current?.quantity ?? 0), 0)
    const vatTotal = totalPrice + totalPrice * 20 / 100;


    return (
        <div className="border border-slate-300 border-solid p-5 w-full rounded-lg shadow-lg shadow-slate-100">
            <div className="text-center font-bold text-2xl mb-5">Order Summary</div>
            <div>
                <h1><span className="font-bold">Items : </span>{totalItems}</h1>
                <h1><span className="font-bold">Total : $</span>{totalPrice.toFixed(2)}</h1>
                <h1><span className="font-bold">With Tax : $</span>{vatTotal.toFixed(2)}</h1>
            </div>
        </div>
    )
}
