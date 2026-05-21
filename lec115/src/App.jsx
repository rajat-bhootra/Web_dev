import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import User from './components/User'
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:  <><Navbar/> <Home/></>
    },
    {
      path:"/about",
      element: <><Navbar/> <About/></>
    },
    {
      path:"/login",
      element: <><Navbar/> <Login/></>
    },
    {
      path:"/user/:username",
      element: <><Navbar/> <User/></>
    },
  ])

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
