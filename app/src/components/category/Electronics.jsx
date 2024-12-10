import React from 'react'
import ProductCategory from '../ProductCategory'
import {electronics} from "../../data/products.json"

function Electronics() {

  return (
    <ProductCategory category={electronics} title={"Electronics"} unique={'e'}/>
  )
}

export default Electronics