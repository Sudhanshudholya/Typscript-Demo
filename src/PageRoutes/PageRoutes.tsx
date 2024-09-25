import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginWrapper from '../Screens/Login/LoginWrapper';
import Layout from '../Screens/Sidebar/Layout';
import AddCustomerFormWrapper from '../Screens/Customer/Add Customer/AddCustomerWrapper';
import EditCustomerFormWrapper from '../Screens/Customer/Edit Customer/EditCustomerLogic';
import CustomerListingWrapper from '../Screens/Customer/List/CustomerListingWrapper';

const PageRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/", // Root path
      element: <LoginWrapper />, // Login page
    },
    {
      path: "/layout", // Layout path for the dashboard or main pages
      element: <Layout />, // Main layout that contains a sidebar
      children: [
        {
          path: "customer-list", // Customer listing page under layout
          element: <CustomerListingWrapper />, // Listing of customers
        },
        {
          path: "add-customer", // Path for adding a customer
          element: <AddCustomerFormWrapper />, // Add customer form
        },
        {
          path: "edit-customer/:id", // Path for editing a customer by ID
          element: <EditCustomerFormWrapper />, // Edit customer form
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} /> // Provide router to the app
  );
};

export default PageRoutes;
