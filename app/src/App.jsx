import {Header, Footer} from "./components"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <div className="w-full">
      <div className="w-full bg-white shadow-lg sticky top-0">
        <Header />
      </div>
      
      <div className='w-full max-w-screen-sm h-full min-h-screen mx-auto px-5 responsive'>
        
        <Outlet />
        
      </div>
      <div className="w-full bg-[#231F20]"></div>
      <Footer />
    </div>
   
  )
}

export default App
