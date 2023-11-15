'use client'
import { RootState } from "@/redux/store";
import Link from "next/link";
import { BsCart2 } from 'react-icons/bs';
import { useSelector } from "react-redux";


export default function Carticon() {

    const { cart } = useSelector((state: RootState) => state.cart) || {}

    return (
        <Link href={'/cart'}>
            <div className='rounded-full p-1 cursor-pointer relative'>
                <span className="absolute -top-1 -right-1 w-[15px] h-[15px] flex justify-center text-xs rounded-full bg-rose-600 text-white">{cart?.length}</span>
                <BsCart2 className='text-xl text-black' />
            </div>
        </Link>
    )
}
