import Slideslow from "../components/Slideslow"
import SecondSlideslow from "../components/SecondSlideslow"
import {top, bottom} from "../data/slideslow.json"
import {CustomProducts} from "../components/category"
import { Link } from "react-router-dom"
import CategoryButton from "../components/CategoryButton"

function Home() {

  return (
    <main className="">
        <Slideslow data={top}/>

        <div className="py-20">
          <div>
            <div className="flex justify-between px-5 py-4 outline outline-gray-200 outline-1 rounded-t-md">
              <div className="flex items-center gap-x-5">
                <span className="font-bold">Shop by Categories:</span>
                <Link to={"/products/electronics"}>
                  <CategoryButton buttonText={"Electronics"}/>
                </Link>
                <Link to={"/products/grocery"}>
                  <CategoryButton buttonText={"Grocery"}/>
                </Link>
                <Link to={"/products/teacoffee"}>
                  <CategoryButton buttonText={"Tea & Coffee"}/>
                </Link>
                <Link to={"/products/household"}>
                  <CategoryButton buttonText={"Household"}/>
                </Link>
                <Link to={"/products/drinks"}>
                  <CategoryButton buttonText={"Beverages"}/>
                </Link>
              </div>
              <div className="flex items-center">
                <Link to={"/products"}>
                <span className="text-xl text-[#494848] underline font-bold hover:text-black transition-all ease-in-out">View All Products</span>
                </Link>
              </div>
            </div>
          </div>
          <CustomProducts />
        </div>

        <div className="py-20">
            Cards
        </div>

        <SecondSlideslow data={bottom}/>
    </main>
  )
}

export default Home
