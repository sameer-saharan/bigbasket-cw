import {Header, Footer} from "./components"
import { Outlet } from "react-router-dom"

function App() {

  return (
   <div className='w-full max-w-screen-sm h-full min-h-screen mx-auto px-5 responsive'>
      <Header />
      <Outlet />
      <Footer />
   </div>
  )
}

export default App
