import React from 'react'
import {topOffers, fruitAndVeg, yourDailyStaples, beverages, snacksStore, cleaningAndHouse, beautyAndHygine, homeAndKitchen} from "../data/cards.json";
import PromoCards from "../components/cards/PromoCards"

function Promos() {
  return (
    <div className='flex flex-col'>
      <PromoCards cards={topOffers} title={"Top Offers"} width={"w-60"}/>
      <PromoCards cards={fruitAndVeg} title={"Fruits and Vegetables"} width={"w-60"}/>
      <PromoCards cards={yourDailyStaples} title={"Your Daily Staples"} width={"w-40"}/>
      <PromoCards cards={beverages} title={"Beverages"} width={"w-40"}/>
      <PromoCards cards={snacksStore} title={"Snacks Store"} width={"w-60"}/>
      <PromoCards cards={cleaningAndHouse} title={"Cleaning & Household"} width={"w-60"}/>
      <PromoCards cards={beautyAndHygine} title={"Beauty and Hygiene"} width={"w-40"}/>
      <PromoCards cards={homeAndKitchen} title={"Home and Kitchen"} width={"w-40"}/>
      

    </div>
  )
}

export default Promos;