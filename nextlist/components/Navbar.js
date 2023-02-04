import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {FaAdversal, FaHome} from "react-icons/fa";
import {Ubuntu} from "@next/font/google";
const ubuntu = Ubuntu({
  weight : ["400","500","700"],
  subsets: ["latin"],
  variable: "--font-ubuntu"
})

const Navbar = () => {
  return (
    <div className='bg-gray-300 py-2 text-black flex items-center justify-between gap-8 px-12'>
      <div className='w-20 block object-cover'>
        <FaAdversal className='text-5xl font-bold' />
         {/* <img src='https://unsplash.it/500/500?image=234'/> */}
      </div>
      <div className="search"></div>
      <div className={`${ubuntu.className} flex gap-4 capitalize font-bold`}>
          <Link href="/" legacyBehavior><a className='hover:text-gray-600 transition-colors duration-200'>Movies</a></Link>
      </div>
    </div>
  )
}

export default Navbar