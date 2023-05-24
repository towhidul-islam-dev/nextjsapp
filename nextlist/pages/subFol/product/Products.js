import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const productUrl = "https://dummyjson.com/products"

const Products = () => {
    const [product,setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const [isError ,setIsError] = (true);
    
    const myProduct = async () => {
        const res = await fetch("https://dummyjson.com/products");
        const productData = await res.json();
        // const allProduct = [...productData.results];

        if(!res.ok) throw new Error("url might not be available right now😞😔");

        console.log(productData);
        setProduct([productData]);
    }
    useEffect(() => {
        myProduct();
        setIsLoading(false);

        const checkOnlineOrNot = window.navigator.onLine;
        checkOnlineOrNot ? "you'r online" : "you'r offline"; 
        // console.log(checkOnlineOrNot ? "onLine" : "offline"); 
        // setIsError(checkOnlineOrNot);
    },[])
    console.log(product);
    return ( 
        <div className="flex justify-center">
            {/* <div className="m-8 w-10/12 container">
                <h2 className="text-4xl font-bold text-center mb-10 first-letter:text-7xl first-letter:text-green-400 capitalize">Movie Data will be shown here...</h2>
                {
                    isLoading ? <h2 className="flex items-cneter justify-center h-full text-5xl transition-all animate-pulse duration-150 capitalize first-letter:text-7xl first-letter:text-green-400">"Loading..."</h2> : <div className="grid grid-cols-resLayoutMovie gap-5  rounded-xl overflow-hidden">
                    {
                        product.map(mov => {
                            const {backdrop_path:bp,original_title:ot,release_date:rd,poster_path:pp,overview,title,id} = mov;
                            const imagePath = `https://image.tmdb.org/t/p/original${pp}`;
                            return (
                                
                                <div key={id} className="border-4 border-gray-400 bg-slate-600 p-4 rounded-lg drop-shadow-lg overflow-hidden">
                                    <Link href={`/subFol/${id}`}>
                                        <div className="rounded-lg overflow-hidden mb-4">
                                            <Image className="block object-cover" loader={() => imagePath} src={imagePath} alt={title} width={400} height={400} />
                                        </div>
                                        <p>Title : {title}</p>
                                        <p>Original Title : {ot}</p>
                                        <h2>Release Date : {rd}</h2>
                                    </Link>
                                </div>
                            )
                        })
                    }
                    </div>    
                }
                
            </div> */}
        </div>
     );
}
 
export default Products;