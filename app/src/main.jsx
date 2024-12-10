import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import {Electronics, Grocery, TeaAndCoffee, Household, Drinks} from "./components/category"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />}/>
      <Route path='/products' element={<Products />}/> 
      <Route path='/products/electronics' element={<Electronics />}/>
      <Route path='/products/grocery' element={<Grocery />}/>
      <Route path='/products/teacoffee' element={<TeaAndCoffee />}/>
      <Route path='/products/household' element={<Household />}/>
      <Route path='/products/drinks' element={<Drinks />}/>

    </Route>
))
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)