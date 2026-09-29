import React from 'react'
import ProductCard from '../HomePage/ProductCard'
import { useLoaderData } from 'react-router'

const Products = () => {
  const products = useLoaderData();

  const productSlice = products.slice(4, 13)
console.log(productSlice);

  return (
    <div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {
        productSlice.map(products=><ProductCard product={products} />)
      }
      </div> 
    </div>
  )
}

export default Products
