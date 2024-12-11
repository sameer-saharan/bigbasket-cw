import React from 'react'
import {Electronics, Grocery, TeaAndCoffee, Household, Drinks} from "../components/category"
import { Slideslow } from '../components'
import {top} from "../data/slideslow.json"

function Products() {

  return (
    <>
      <Slideslow data={top}/>
      <div className='flex flex-col gap-y-10 py-20'>
        <Electronics/>
        <Grocery/>
        <TeaAndCoffee/>
        <Household/>
        <Drinks/>
      </div>
    </>
    
  )
}

export default Products