import Header from "./components/Header"
import Footer from "./components/Footer"
import Slideslow from "./components/Slideslow"
import {top, bottom} from "./data/slideslow.json"

function App() {

  return (
   <div className='w-full max-w-screen-sm h-full min-h-screen mx-auto px-5 responsive'>

      <Header />

      <main className="h-screen">
        <Slideslow data={top}/>

      </main>
      <Footer />
   </div>
  )
}

export default App
