import React from 'react'

function PromoCards({cards, title, width, unique}) {
  return (
    <div className='flex flex-col py-5'>
      <h3 className='text-2xl font-semibold py-3'>{title}</h3>
        <div className='flex flex-wrap justify-center gap-10'>
            {cards.map((png, index) => (
                <img key={`${unique}${index}`} src={png} className={`rounded-lg ${width} shadow-md hover:shadow-2xl cursor-pointer`} />
            ))}
        </div>
    </div>
  )
}

export default PromoCards