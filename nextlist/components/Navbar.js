import React, { useEffect, useRef, useState } from 'react'
import Link from "next/link";
import {useRouter} from "next/router";
import Image from "next/image";
import {FaAdversal, FaHome} from "react-icons/fa";
import {Ubuntu} from "@next/font/google";
import { useSession, signIn, signOut } from 'next-auth/react';
const ubuntu = Ubuntu({
  weight : ["400","500","700"],
  subsets: ["latin"],
  variable: "--font-ubuntu"
})

const Navbar = () => {
  const {data : session} = useSession();
  const navRef = useRef(null);
  const router = useRouter();
  const params = router.pathname;
  // var userImage = `${session.user.image}`; 
  
  // console.log(userImage);
  useEffect(() => {
    if(session) console.log(session);
    const height = navRef.current.clientHeight;
  },[])

  return (
    <div ref={navRef} className='bg-gray-300 py-2 text-black flex items-center justify-between gap-8 px-12'>
      <div className='w-20 block object-cover'>
        <FaAdversal className='text-5xl font-bold' />
      </div>
      <div className="search"></div>
      <div className={`${ubuntu.className} flex items-center gap-4 capitalize font-bold`}>
          <Link href="/" legacyBehavior><a className={params === "/" ? "navLink text-green-600" : "navLink"}>Movies</a></Link>
          <Link href="/about" legacyBehavior><a className={params === "/about" ? "navLink text-green-600" : "navLink"}>Product</a></Link>
          <Link href="/login" onClick={() => signOut()} legacyBehavior><a className={params === "/about" ? "navLink text-green-600" : "navLink"}>{session ? "Sign Out" : "Sign In"}</a></Link>
          <div className='w-10 h-10 bg-cyan-600 flex items-center justify-center rounded-full drop-shadow-lg'>
              <Link href="/login" legacyBehavior><a className={params === "/about" ? "navLink text-green-600" : "navLink"}>{session && <span className='text-2xl rounded-full bg-cyan-600 text-gray-100'>{session.user.name.slice(0,1)}</span>}</a></Link>
          </div>
      </div> 
    </div>
  )
}

export default Navbar