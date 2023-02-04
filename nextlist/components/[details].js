import React from 'react'
import { getStaticPaths, getStaticProps } from './[id]'
const url = "https://api.themoviedb.org/3/movie/popular?api_key=68cb9ed528ca834ec647619501b03f57&";

export const getStaticPaths = async () => {
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=68cb9ed528ca834ec647619501b03f57&language=en-US&page=2')
    const data = await res.json();

    const paths = data.map((details) => {
        const {id:detailsId} = details;
        return {
            params : {detailsId : detailsId.toString()}
        }
    });

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const {id: detailsId} = context.params; 
    const res = await fetch(`https://api.themoviedb.org/3/movie/${detailsId}?api_key=68cb9ed528ca834ec647619501b03f57`)
    const data = await res.json();

    return {
        props : {details : data}
    }
}

const details = ({details}) => {
  return (
    <div>
        <h2>{details.overview}</h2>
        <p>{details.release}</p>
        <h2>{details.title}</h2>
    </div>
  )
}

export default details