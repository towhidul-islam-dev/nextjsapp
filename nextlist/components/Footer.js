import React, { useRef,useEffect } from 'react'

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const height = footerRef.current.clientHeight;
    console.log(height);
  },[])
  return (
    <div ref={footerRef} className='text-center bg-slate-600 py-4'>
        <h3>Copyright 2022 Towhid List</h3>
    </div>
  )
}

export default Footer