import React from 'react'
import ProductCategory from '../ProductCategory'
import {teacoffee} from "../../data/products.json"

function TeaAndCoffee() {
  return (
    <ProductCategory category={teacoffee} title={"Tea & Coffee"} unique={'t'}/>
  )
}

export default TeaAndCoffee