import React from 'react'

function CategoryButton({buttonText}) {
  return (
    <button className='bg-[#749c28] text-[#ffffff] font-mono font-semibold py-2 px-4 rounded-md hover:bg-[#A0CD4A] hover:text-gray-800 hover:shadow-sm hover:shadow-[#4f4d4d] transition-all ease-in-out'>
        {buttonText}
    </button>
  )
}

export default CategoryButton