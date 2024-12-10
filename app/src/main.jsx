import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />}/>
      <Route path='/products' element={<Products />}/> 
    </Route>
))
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)