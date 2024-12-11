import React from 'react'
import ProductCategory from '../Product/ProductCategory'
import {grocery} from "../../data/products.json"

function Grocery() {
  return (
    <ProductCategory category={grocery} title={"Grocery"} unique={'g'}/>
  )
}

export default Grocery