import React, {useState, useRef} from 'react'
import {Link} from "react-router-dom"

function Header() {
  const [inputText, setInputText] = useState("");

  return (
    <div className='flex mx-auto max-w-screen-sm flex-col items-center gap-y-5 p-5 sticky top-0 md:flex-row md:justify-between responsive'>
      <Link to={"/"}>
        <img src="/BigBasket_Logo.svg" className='w-28'/>
      </Link>
      <div className='flex justify-between px-2 border border-[#A0CD4A] rounded-lg md:w-1/2'>
        <div className='flex items-center'>
          <img src="/search-alt-1-svgrepo-com.svg" className='w-5'/>
          <input 
            type="text" 
            value={inputText}
            className='p-2 outline-none bg-transparent'
            placeholder='Search for Products...'
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
        <button 
        onClick={() => setInputText("")}
        className={`cursor-pointer ${inputText ? '' : 'hidden'}`}
        >
          <span className="px-2" style={{backgroundImage: `url('/cross-circle-svgrepo-com.svg')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', }}></span>
        </button>
        
      </div>
      <button className='bg-[#2f2f2f] rounded-md p-2 text-white text-xs font-bold hover:bg-[#000000] hidden md:block'>
        Login/Signup
      </button>
    </div>
  )
}

export default Header