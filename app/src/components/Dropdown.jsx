import React, {useState} from 'react'
import CategoryButton from './CategoryButton';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedCategory } from '../store/categorySlice';

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectedCategory = useSelector((state) => state.selectedCategory);
    const dispatch = useDispatch();


  return (
    <div className='lg:hidden '>
        <div className='flex items-center gap-x-2'>
            <button
            onClick={toggleDropdown}
            className=''
            >
                <span className={`block w-6 h-0.5 mb-1 ${isOpen ? "bg-[#A0CD4A]" : "bg-black"}`}></span>
                <span className={`block w-6 h-0.5 mb-1 ${isOpen ? "bg-[#A0CD4A]" : "bg-black"}`}></span>
                <span className={`block w-6 h-0.5 ${isOpen ? "bg-[#A0CD4A]" : "bg-black"}`}></span> 
            </button>
            <span className={`font-bold text-xs md:text-sm ${isOpen ? 'hidden' : ''}`}>Shop by Categories:</span>

        </div>

        {isOpen && (
            <div className="absolute w-1/2 min-w-52 bg-white border border-gray-300 rounded-md shadow-lg mt-4 px-5 py-4 z-50">
                <span className="font-bold ">Shop by Categories:</span>
                <div className='flex flex-col gap-y-2 pt-4'>
                  <CategoryButton buttonText={"Electronics"}
                  clickHandler={() => {dispatch(setSelectedCategory("Electronics")); setIsOpen(false);}}
                  />
                
                  <CategoryButton buttonText={"Grocery"}
                  clickHandler={() => {dispatch(setSelectedCategory("Grocery")); setIsOpen(false);}}
                  />
                
                  <CategoryButton buttonText={"Beverages"}
                  clickHandler={() => {dispatch(setSelectedCategory("Beverages")); setIsOpen(false);}}
                  />
                
                  <CategoryButton buttonText={"Household"}
                  clickHandler={() => {dispatch(setSelectedCategory("Household")); setIsOpen(false);}}
                  />
                
                  <CategoryButton buttonText={"Drinks"}
                  clickHandler={() => {dispatch(setSelectedCategory("Drinks")); setIsOpen(false);}}
                  />
                </div>
               
            </div>
        )}
    </div>
  )
}

export default Dropdown