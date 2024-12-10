import React, {useState, useEffect} from 'react'

function SecondSlideslow({data}) {
    const photos = data;
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (
                prevIndex === photos.length - 1 ? 0 : prevIndex + 1
            ))
        }, 3000);
        return () => clearInterval(interval);
    }, [])

  return (
    <div className='overflow-hidden py-20'>
        <div 
        className='h-[100px] bg-cover bg-center rounded-xl md:h-[200px] lg:h-[300px] 2xl:h-[400px] flex items-center justify-between md:justify-center md:items-end'
        style={{backgroundImage: `url(${photos[index]})`}}
        ></div>
    </div>
  )
}

export default SecondSlideslow