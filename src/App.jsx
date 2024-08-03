import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import AboutUs from './pages/AboutUs'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route index element={<Home/>} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/services' element={<Services />} />
    </Route>
  )
)








function App() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default App
