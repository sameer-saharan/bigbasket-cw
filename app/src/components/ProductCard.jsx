import React from 'react'

function ProductCard({product}) {
  return (
    <div className='flex flex-col shadow-xl rounded-xl p-5'>
      <div className='outline outline-gray-200 outline-4 rounded-xl p-5'>
        <img src={product.png} className='w-60' />
      </div>
      <div className='flex flex-col py-2 h-24'>
        <span className='text-gray-400'>{product.subtitle}</span>
        <span className='w-60 font-semibold'>{product.title}</span>
      </div>
      <div className='flex flex-col'>
        <span className='line-through text-[#5c5a5a] font-semibold text-xs'>&#x20b9;{product.mrp}</span>
        <span className='font-bold text-lg'>&#x20b9;{product.price} <span className='text-xs font-normal text-[#5c5a5a]'>{product.quantity}</span> </span>
        <span className='text-[#6dcd4a] text-xs'>You Save: <span className='font-bold'>{product.discount} OFF</span></span>
        <span className='text-[#5c5a5a] text-xs'>(Incl. of all taxes)</span>
      </div>
      <div className='flex justify-between pt-5'>
        <div className='flex items-center outline outline-gray-200  outline-1 cursor-pointer rounded-sm hover:outline-gray-900'>
          <img src="/save-svgrepo-com.svg" className='w-10'/>
        </div>
        <button className='font-semibold outline outline-[#F61B2C] outline-1 text-[#F61B2C] px-16 sm:px-20 md:px-24 py-2 rounded-md hover:bg-[#F61B2C] hover:text-white transition-all ease-in-out'>
          Add
        </button>
      </div>
    </div>
  )
}

export default ProductCard