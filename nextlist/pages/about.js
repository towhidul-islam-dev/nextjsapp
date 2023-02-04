import Head from "next/head";
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
    useEffect(() => {
        checkData();
    },[])
    return ( 
    <>
        <Head>
            <title>Next list | About</title>
            <meta name='keywords' content='nextjs' />
        </Head>
        <h2>Aboutpage</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi explicabo magnam, natus ex nulla quaerat ut repudiandae officiis praesentium delectus.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi explicabo magnam, natus ex nulla quaerat ut repudiandae officiis praesentium delectus.</p>

        <Pagination />
    </> );
}
 
export default about;
