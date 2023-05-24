import Head from 'next/head'
import React from 'react'
import Products from './subFol/product/Products'

const Product = () => {
  return (
    <>
        <Head>
            <title>Next app || Product</title>
            <meta name='keywords' content='Product' />
        </Head>
        {/* <Products /> */}
        <h2>this is the product page</h2>
    </>
  )
}

export default Product