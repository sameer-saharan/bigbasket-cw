import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import CategoryButton from './CategoryButton';

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className='lg:hidden relative'>
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
            <div className="absolute w-1/2 min-w-52 bg-white border border-gray-300 rounded-md shadow-lg px-5 py-4 z-50">
                <span className="font-bold ">Shop by Categories:</span>
                <div className='flex flex-col gap-y-2 pt-4'>
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
               
            </div>
        )}
    </div>
  )
}

export default Dropdown