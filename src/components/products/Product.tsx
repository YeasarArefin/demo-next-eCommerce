import Image from 'next/image';
import Link from 'next/link';
import { product } from '../../types/types';
import AddToCart from './AddToCart';

export default function Product({ productData }: { productData: product }) {
    const { id, image, title, price } = productData || {}

    return (
        <div className="border border-solid border-slate-300 rounded-lg shadow-xl flex flex-col justify-between">
            <Link href={`/${id}`} className='flex justify-center items-center pt-10'>
                <div className='w-[100px] h-[200px]'>
                    <Image
                        src={image}
                        alt={`product-${title}`}
                        className='w-full h-auto rounded-t-lg'
                        width={100}
                        height={80}
                        placeholder='blur'
                        blurDataURL='/spinner.svg'
                    />
                </div>
            </Link>
            <div className='px-4 py-4 flex flex-col gap-y-5'>
                <Link href={`/${id}`}>
                    <h1 className='text-md  overflow-hidden text-ellipsis font-bold text-black hover:underline hover:text-blue-500'>{title}</h1>
                </Link>
                <h1 className='font-semibold'>{price}&#2547;</h1>
                <AddToCart productData={productData} />
            </div>
        </div>
    )
}
