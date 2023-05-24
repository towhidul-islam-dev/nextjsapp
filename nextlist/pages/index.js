import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import {useSession} from "next-auth/react";
import Head from 'next/head';
import Movie from './subFol/movies';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import {login} from "../components/login-btn";

export default function Home() {
  const router = useRouter();
  const {data: session} = useSession();
  console.log(session);

  useEffect(() => {
    !session ? router.push("/login") : router.push("/");

  },[session] )
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
