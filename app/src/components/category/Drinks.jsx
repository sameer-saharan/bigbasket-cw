import React from 'react'
import ProductCategory from '../ProductCategory'
import {drinks} from "../../data/products.json"

function Drinks() {
  return (
    <ProductCategory category={drinks} title={"Drinks"} unique={'d'}/>
  )
}

export default Drinks