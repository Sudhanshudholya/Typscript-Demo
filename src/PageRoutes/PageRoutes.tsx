// import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginWrapper from '../Login/LoginWrapper'

const PageRoutes = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element : <LoginWrapper/>
      }
  
  ])
  
  return (
    
      <RouterProvider router={router}/>
    
  )
}

export default PageRoutes
