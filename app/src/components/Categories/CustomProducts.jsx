import React from 'react'
import {custom} from "../../data/custom.json"
import ProductCategory from "../Product/ProductCategory"

function CustomProducts() {
  return (
    <ProductCategory category={custom} title={""} unique={"cc"}/>
  )
}

export default CustomProducts