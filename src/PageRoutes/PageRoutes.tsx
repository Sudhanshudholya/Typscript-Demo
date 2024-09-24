import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginWrapper from '../Screens/Login/LoginWrapper'
import Layout from '../Screens/Sidebar/Layout'



const PageRoutes = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element : <LoginWrapper/>
      },

     {
      path: "/layout",
      element: <Layout/>,
  
     }

  
  ])
  
  return (
    
      <RouterProvider router={router}/>
    
  )
}

export default PageRoutes