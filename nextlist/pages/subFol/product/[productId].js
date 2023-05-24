import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import Image from 'next/image';
import Head from 'next/head';

const url = "https://dummyjson.com/products";

const ProductId = () => {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const routerId = useRouter();
    const currProduct = routerId.query.productId;

    const getSpecificProduct = async () => {
        const res = await fetch(`https://dummyjson.com/products/${currProduct}`)
        const resData = await res.json();

        if(!res.ok) throw new Error("Please check the url🤗🤗");

        setProduct([resData]);
    }
    useEffect(() => {
        getSpecificProduct();
        setIsLoading(false);
    },[])
    
  return (
    <>
        <div className='productContainer flex flex-col items-center justify-center'>
        <Head>
            <title>Next App | About/subFol/product{`${currProduct}`}</title>
        </Head>
            <div className=''>
                {
                    product.map(singleProduct => {
                        const {id, brand, description, price, thumbnail} = singleProduct;

                        return (
                            <div key={id} className="dynamic grid grid-cols-resLayout container-details px-8 md:px-2">
                            {
                                isLoading ? <h2 className='flex items-cneter justify-center h-full text-5xl transition-all animate-pulse duration-150 capitalize first-letter:text-7xl first-letter:text-green-400'>Loading for Data...</h2> : (<div className="set_height rounded-tl-lg overflow-hidden rounded-bl-lg">
                                <Image loader={() => thumbnail} src={thumbnail} width={800} height={800} className="block h-full object-cover" />
                            </div>)
                            }
                                
                                <div className='border-y border-r border-red-100 flex flex-col justify-center p-8 rounded-tr-lg rounded-br-lg overflow-hidden'>
                                    <h2 className='text-6xl font-extrabold uppercase'>brand : {brand}</h2>
                                    <p className='my-8 text-xl capitalize'>description : {description}</p>
                                    <h3 className='text-2xl font-bold capitalize'>price : {price}$</h3>
                                </div>
                            </div>
                        )
                    })
                }
            <button className='mt-12 w-full  m-auto'>
                <Link href={'/about'} className="capitalize border-none outline-none py-4 px-12 rounded-full cursor-pointer text-base bg-cyan-400">
                    Back to product
                </Link>
            </button>
            </div>
        </div>
    </>
  )
}

export default ProductId