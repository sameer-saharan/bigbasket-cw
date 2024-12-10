import React from 'react'

function Header() {
  return (
    <div className='flex flex-col items-center gap-y-5 bg-white shadow-sm p-5 sticky top-0 md:flex-row md:justify-between'>
      <img src="/BigBasket_Logo.svg" className='w-28'/>
      <div className='border border-[#A0CD4A] rounded-lg md:w-1/2'>
        <img src="" alt="" />
        <input 
          type="text" 
          className='p-2 outline-none bg-transparent'
          placeholder='Search for Products...'
        />
      </div>
      <button className='bg-[#2f2f2f] rounded-md p-2 text-white text-xs font-bold hover:bg-[#000000] hidden md:block'>
        Login/Signup
      </button>
    </div>
  )
}

export default Header