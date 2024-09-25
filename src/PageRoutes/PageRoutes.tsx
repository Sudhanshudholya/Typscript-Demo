import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginWrapper from '../Screens/Login/LoginWrapper'
import Layout from '../Screens/Sidebar/Layout'
import AddCustomerFormWrapper from '../Screens/Customer/Add Customer/AddCustomerWrapper'
import EditCustomerFormWrapper from '../Screens/Customer/Edit Customer/EditCustomerLogic'
import CustomerListingWrapper from '../Screens/Customer/List/CustomerListingWrapper'



const PageRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginWrapper />
    },

    {
      path: "/layout",
      element: <Layout />,
      children: [
        {
          path: 'customer-list', element: <CustomerListingWrapper />,
        },
        { path: 'add-customer', element: <AddCustomerFormWrapper /> },
        { path: 'edit-customer/:id', element: <EditCustomerFormWrapper /> }

      ]

    }


  ])

  return (

    <RouterProvider router={router} />

  )
}

export default PageRoutes