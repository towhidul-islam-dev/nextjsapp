import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Head from 'next/head';
import Movie from './subFol/movies';

export default function Home() {
  return (
    <>
      <Head>
        <title>Movies | Home</title>
        <meta name='keywords' content='Movies' />
      </Head>
      <Movie />
    </>
  )
}
