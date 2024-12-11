import React from 'react'
import ProductCard from './ProductCard'

function ProductCategory({category, title, unique}) {
  return (
    <div className='outline outline-gray-200 outline-1 rounded-md p-5'>
        <h1 className='text-3xl font-bold mb-5'>{title}</h1>
        <div className='flex flex-wrap justify-center gap-10'>
          {category.map((prod, index) => (
            <ProductCard key={`${unique}${index}`} product={prod}/>
          ))}
        </div>
    </div>
  )
}

export default ProductCategory