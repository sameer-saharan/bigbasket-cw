import React from 'react'

function CategoryButton({buttonText, clickHandler}) {
  return (
    <button onClick={clickHandler}
    className='bg-[#749c28] text-[#ffffff] font-mono font-semibold py-1 px-2 text-xs xl:text-sm 2xl:text-base xl:py-2 xl:px-4 rounded-md hover:bg-[#A0CD4A] hover:text-gray-800 hover:shadow-sm hover:shadow-[#4f4d4d] transition-all ease-in-out'>
        {buttonText}
    </button>
  )
}

export default CategoryButton