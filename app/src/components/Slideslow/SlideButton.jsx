import React from 'react'

function SlideButton({upperText, lowerText, photoIndex, isVisible, slideHandler}) {
  return (
    <button
    className='flex flex-col items-center font-sans p-2'
    onClick={() => slideHandler(photoIndex)}
    >
        <span className='text-[#0b0b0b]'>{upperText}</span>
        <span className='text-[#4e4d4d]'>{lowerText}</span>
        <span className={`bg-[#43bb14] h-1 w-full ${isVisible}`}></span>
    </button>
  )
}

export default SlideButton