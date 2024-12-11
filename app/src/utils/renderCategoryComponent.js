import React from "react";
import {CustomProducts, Drinks, Electronics, Grocery, Household, TeaAndCoffee} from "../components/Categories"

export const renderCategoryComponent = (selectedCategory) => {
    switch (selectedCategory) {
      case "Electronics":
        return Electronics ;
      case "Grocery":
        return Grocery ;
      case "Beverages":
        return TeaAndCoffee ;
      case "Household":
        return Household ;
      case "Drinks":
        return Drinks ;
      default:
        return CustomProducts;
    }
};