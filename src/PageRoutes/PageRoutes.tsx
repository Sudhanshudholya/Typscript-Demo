import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginWrapper from '../Screens/Login/LoginWrapper';
import AddCustomerFormWrapper from '../Screens/Customer/Add Customer/AddCustomerWrapper';
import EditCustomerFormWrapper from '../Screens/Customer/Edit Customer/EditCustomerLogic';
import CustomerListingWrapper from '../Screens/Customer/List/CustomerListingWrapper';
import Layout from '../Sidebar/Layout';
import ProductListingWrapper from '../Screens/Product/List/ProductListingWrapper';
import AddProductWrapper from '../Screens/Product/Add Product/AddProductWrapper';
import EditProductWrapper from '../Screens/Product/Edit Poduct/EditProductWrapper';

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
          element: <CustomerListingWrapper />,
          children: [
            {
              path: "add-customer", // Path for adding a customer
              element: <AddCustomerFormWrapper />, // Add customer form
            },
            {
              path: "edit-customer/:id", // Path for editing a customer by ID
              element: <EditCustomerFormWrapper />, // Edit customer form
            },
          ] // Listing of customers
        },

        {
          path: "product-list", // Product listing page under layout
          element: <ProductListingWrapper />,
          children: [
            {
              path: "add-product",   // Path for adding a product
              element: <AddProductWrapper /> // Add customer form
            },

            {
              path: "edit-product/:id", // Path for editing a product by ID
              element: <EditProductWrapper /> // Edit customer form 
            }
          ] // Listing of customer
        }


      ],
    },
  ]);

  return (
    <RouterProvider router={router} /> // Provide router to the app
  );
};

export default PageRoutes;