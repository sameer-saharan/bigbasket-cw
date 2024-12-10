import {Slideslow, SecondSlideslow, CategoryButton, Dropdown, Promos, About} from "../components"
import {top, bottom} from "../data/slideslow.json"
import {CustomProducts} from "../components/category"
import { Link } from "react-router-dom"

function Home() {

  return (
    <main className="">
        <Slideslow data={top}/>

        <div className="py-20">
          <div>
            <div className="flex justify-between items-center px-5 py-4 outline outline-gray-200 outline-1 rounded-t-md">
              <Dropdown />
              <div className="hidden lg:flex items-center gap-x-1 lg:gap-x-2 xl:gap-x-5">
                <span className="font-bold">Shop by Categories:</span>
                <Link to={"/products/electronics"}>
                  <CategoryButton buttonText={"Electronics"}/>
                </Link>
                <Link to={"/products/grocery"}>
                  <CategoryButton buttonText={"Grocery"}/>
                </Link>
                <Link to={"/products/teacoffee"}>
                  <CategoryButton buttonText={"Beverages"}/>
                </Link>
                <Link to={"/products/household"}>
                  <CategoryButton buttonText={"Household"}/>
                </Link>
                <Link to={"/products/drinks"}>
                  <CategoryButton buttonText={"Drinks"}/>
                </Link>
              </div>
              <div className="flex items-center">
                <Link to={"/products"}>
                <span className="text-xs xl:text-lg text-[#494848] underline font-bold hover:text-black transition-all ease-in-out">View All Products</span>
                </Link>
              </div>
            </div>
          </div>
          <CustomProducts />
        </div>

        <Promos />
        <SecondSlideslow data={bottom}/>
        <About />
    </main>
  )
}

export default Home
