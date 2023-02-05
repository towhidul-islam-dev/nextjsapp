import Image from 'next/image';
import Link from 'next/link';
import React, { useState,useEffect } from 'react';
const Details = () => {
    const [details, setDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    var currentLocation = window.location.href.split("/");
    let id = null;

    for(let i = 0 ; i<currentLocation.length; i++){
        id = +currentLocation[currentLocation.length - 1];
    }

    const imageUrl = `https://image.tmdb.org/t/p/original${details.poster_path}`;

    const getDetails = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=68cb9ed528ca834ec647619501b03f57`);

        const data = await res.json();
        setDetails(data)
    }
    useEffect(() => {
        getDetails();
        setIsLoading(false);
    },[details]);
    

  return (
    <div className=''>
        
        <div className="grid grid-cols-resLayout container-details m-auto mt-8 px-8 md:px-2">
        {
            isLoading ? <h2 className='flex items-cneter justify-center h-full text-5xl transition-all animate-pulse duration-150 capitalize first-letter:text-7xl first-letter:text-green-400'>Loading for Data...</h2> : (<div className="set_height">
            <Image loader={() => imageUrl} src={imageUrl} width={1000} height={1000} className="block h-full object-cover" />
        </div>)
        }
            
            <div className='flex flex-col justify-center pl-8'>
                <h2 className='text-6xl font-extrabold uppercase'>Title : {details.original_title}</h2>
                <p className='my-8 text-xl'>Overview : {details.overview}</p>
                <h3 className='text-2xl font-bold'>Release Date : {details.release_date}</h3>
            </div>
        </div>
    <button className='mt-12 w-full m-auto'>
        <Link href={'/subFol/movies'} className="capitalize border-none outline-none py-4 px-12 rounded-full cursor-pointer text-base bg-cyan-400">
            Back to Movie
        </Link>
    </button>
    </div>
  )
}
export default Details;