import { useState } from "react"
import {Slideslow, SecondSlideslow, CategoryButton, Dropdown, Promos, About} from "../components"
import {top, bottom} from "../data/slideslow.json"
import {CustomProducts, Drinks, Electronics, Grocery, Household, TeaAndCoffee} from "../components/category"
import {Link} from "react-router-dom"

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const renderCategoryComponent = () => {
    switch (selectedCategory) {
      case "Electronics":
        return <Electronics />;
      case "Grocery":
        return <Grocery />;
      case "Beverages":
        return <TeaAndCoffee />;
      case "Household":
        return <Household />;
      case "Drinks":
        return <Drinks />;
      default:
        return <CustomProducts />;
    }
  };

  return (
    <main className="">
        <Slideslow data={top}/>

        <div className="py-20">
          <div>
            <div className="flex justify-between items-center px-5 py-4 outline outline-gray-200 outline-1 rounded-t-md">
              <Dropdown />
              <div className="hidden lg:flex items-center gap-x-1 lg:gap-x-2 xl:gap-x-5">
                <span className="font-bold">Shop by Categories:</span>
                
                  <CategoryButton buttonText={"Electronics"}
                  clickHandler={() => setSelectedCategory("Electronics")}
                  />
                
                  <CategoryButton buttonText={"Grocery"}
                  clickHandler={() => setSelectedCategory("Grocery")}
                  />
                
                  <CategoryButton buttonText={"Beverages"}
                  clickHandler={() => setSelectedCategory("Beverages")}
                  />
                
                  <CategoryButton buttonText={"Household"}
                  clickHandler={() => setSelectedCategory("Household")}
                  />
                
                  <CategoryButton buttonText={"Drinks"}
                  clickHandler={() => setSelectedCategory("Drinks")}
                  />
                
              </div>
              <div className="flex items-center">
                <Link to={"/products"}>
                <span className="text-xs xl:text-lg text-[#494848] underline font-bold hover:text-black transition-all ease-in-out">View All Products</span>
                </Link>
              </div>
            </div>
          </div>
          <div>
            {renderCategoryComponent()}
          </div>
        </div>

        <Promos />
        <SecondSlideslow data={bottom}/>
        <About />
    </main>
  )
}

export default Home
