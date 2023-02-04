import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Movie = () => {
    const [movie,setMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const [isError ,setIsError] = (true);
    
    const myMovie = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=68cb9ed528ca834ec647619501b03f57&language=en-US&page=4`);
        const movieData = await res.json();
        const allMovies = [...movieData.results];
        setMovie([...allMovies]);
    }
    useEffect(() => {
        myMovie();
        setIsLoading(false);

        const checkOnlineOrNot = window.navigator.onLine;
        checkOnlineOrNot ? "you'r online" : "you'r offline"; 
        console.log(checkOnlineOrNot); 
        // setIsError(checkOnlineOrNot);
    },[])
    return ( 
        <div className="flex justify-center">
        <div className="m-8 w-10/12 container">
            <h2 className="text-4xl font-bold text-center mb-10 first-letter:text-7xl first-letter:text-green-400 capitalize">Movie Data will be shown here...</h2>
            {
                isLoading ? <h2 className="flex items-cneter justify-center h-full text-5xl transition-all animate-pulse duration-150 capitalize first-letter:text-7xl first-letter:text-green-400">"Loading..."</h2> : <div className="grid grid-cols-resLayoutMovie gap-5  rounded-xl overflow-hidden">
                {
                    movie.map(mov => {
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
            
        </div>
        </div>
     );
}
 
export default Movie;