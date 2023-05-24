import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Pagination from "../components/pagination";
const about = () => {
    const [data, setData] = useState([]);

    const checkData = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=68cb9ed528ca834ec647619501b03f57&language=en-US&page=2`)
        const data = await res.json();
        setData([data])
        const detId = data.results.map(Detailid => {
            return{
                Detailid
            }
        })
        
    }
    const myProduct = async () => {
        const res = await fetch("https://dummyjson.com/products");
        const productData = await res.json();
        // const allProduct = [...productData.results];

        if(!res.ok) throw new Error("url might not be available right now😞😔");

        console.log(productData.products);
        setData([...productData.products]);
    }
    useEffect(() => {
        myProduct();
    },[])
    console.log(data);

    return ( 
    <>
        <Head>
            <title>Next list | About</title>
            <meta name='keywords' content='nextjs' />
        </Head>
        <div className="flex items-center justify-center my-20">
            <div className="container">
                <div className="grid grid-cols-resLayoutMovie gap-4">
                    {
                        data.map(product => {
                            const {id,brand:title,description,thumbnail:pp,price} = product;
                            // const imagePath = `https://image.tmdb.org/t/p/original${pp}`;
                            return (
                                
                                <div key={id} className="border-4 border-gray-400 bg-slate-600 p-4 rounded-lg drop-shadow-lg overflow-hidden">
                                    <Link href={`/subFol/product/${id}`}>
                                        <div className="flex flex-col h-full justify-between">
                                            <div className="rounded-lg overflow-hidden mb-4 max-h-52">
                                                <Image className="block object-cover" loader={() => pp} src={pp} alt={title} width={400} height={400} />
                                            </div>
                                            <div>
                                                <p>Brand : {title}</p>
                                                <p>Description : {description}</p>
                                                <h2>Price : {price}</h2>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </> );
}
 
export default about;
