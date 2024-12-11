import {Slideslow, SecondSlideslow, CategoryButton, Dropdown, Promos, About} from "../components"
import {top, bottom} from "../data/slideslow.json"
import {Link} from "react-router-dom"
import {renderCategoryComponent} from "../utils/renderCategoryComponent"
import {useSelector, useDispatch} from "react-redux"
import {setSelectedCategory, clearCategory} from "../store/categorySlice"

function Home() {
  const selectedCategory = useSelector((state) => state.selectedCategory)
  const dispatch = useDispatch();
  const SelectedCategoryComponent = renderCategoryComponent(selectedCategory);

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
                  clickHandler={() => dispatch(setSelectedCategory("Electronics"))}
                  />
                
                  <CategoryButton buttonText={"Grocery"}
                  clickHandler={() => dispatch(setSelectedCategory("Grocery"))}
                  />
                
                  <CategoryButton buttonText={"Beverages"}
                  clickHandler={() => dispatch(setSelectedCategory("Beverages"))}
                  />
                
                  <CategoryButton buttonText={"Household"}
                  clickHandler={() => dispatch(setSelectedCategory("Household"))}
                  />
                
                  <CategoryButton buttonText={"Drinks"}
                  clickHandler={() => dispatch(setSelectedCategory("Drinks"))}
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
            <SelectedCategoryComponent />
          </div>
        </div>

        <Promos />
        <SecondSlideslow data={bottom}/>
        <About />
    </main>
  )
}

export default Home
