import React from 'react'
import ProductCategory from '../Product/ProductCategory'
import {household} from "../../data/products.json"

function Household() {
  return (
    <ProductCategory category={household} title={"Household"} unique={'h'}/>
  )
}

export default Household