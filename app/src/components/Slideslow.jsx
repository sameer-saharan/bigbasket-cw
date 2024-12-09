import React, { useEffect, useState } from 'react'
import SlideButton from './SlideButton';

function Slideslow({data}) {
    const photos = data;
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (
                prevIndex === photos.length - 1 ? 0 : prevIndex + 1
            ))
        }, 3500);
        return () => clearInterval(interval);
    }, [])

    const slideHandler = (thatIndex) => {
        setIndex(thatIndex);
    }

    const prevSlide = () => {
        setIndex((prevIndex) => (
            prevIndex === 0 ? photos.length - 1 : prevIndex - 1
        ))
    }

    const nextSlide = () => {
        setIndex((prevIndex) => (
            prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        ))
    }

  return (
    <div className='overflow-hidden px-5'>
        <div 
        className='h-[100px] bg-cover bg-center rounded-xl md:h-[200px] lg:h-[300px] 2xl:h-[400px] flex items-center justify-between md:justify-center md:items-end'
        style={{backgroundImage: `url(${photos[index]})`}}
        >
            <div className='hidden bg-white md:text-xs rounded-md gap-x-5 px-2 md:flex'>
                <SlideButton upperText={"Offer on"} lowerText={"Domex"} photoIndex={0} isVisible={index == 0 ? '' : 'hidden'} slideHandler={slideHandler}/>
                <SlideButton upperText={"Shower"} lowerText={"Experience"} photoIndex={1} isVisible={index == 1 ? '' : 'hidden'} slideHandler={slideHandler}/>
                <SlideButton upperText={"Offer on"} lowerText={"Tea Coffee"} photoIndex={2} isVisible={index == 2 ? '' : 'hidden'} slideHandler={slideHandler}/>
                <SlideButton upperText={"Offer on"} lowerText={"Soap"} photoIndex={3} isVisible={index == 3 ? '' : 'hidden'} slideHandler={slideHandler}/>
                <SlideButton upperText={"Home care"} lowerText={"Heroes"} photoIndex={4} isVisible={index == 4 ? '' : 'hidden'} slideHandler={slideHandler}/>
            </div>
            <button onClick={prevSlide} className='bg-white text-black p-1 rounded-full shadow-md text-[8px] sm:p-2 md:hidden'
            style={{
                backgroundImage: `url('/left-arrow-svgrepo-com.svg')`,
                backgroundSize: 'cover', backgroundPosition: 'center'
            }}
            ></button>
            <button onClick={nextSlide} className='bg-white text-black p-1 rounded-full shadow-md text-[8px] sm:p-2 md:hidden'
            style={{
                backgroundImage: `url('/right-arrow-svgrepo-com.svg')`,
                backgroundSize: 'cover', backgroundPosition: 'center'
            }}
            ></button>
        </div>
    
    </div>
  )
}

export default Slideslow