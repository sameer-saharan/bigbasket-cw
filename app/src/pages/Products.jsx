import React from 'react'
import {Electronics, Grocery, TeaAndCoffee, Household, Drinks} from "../components/category"

function Products() {

  return (
    <div className='flex flex-col gap-y-10'>
      <Electronics/>
      <Grocery/>
      <TeaAndCoffee/>
      <Household/>
      <Drinks/>
    </div>
  )
}

export default Products