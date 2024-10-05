import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../Sidebar/Layout';
import LoginWrapper from '../Screens/Login/LoginWrapper';
import CustomerListingWrapper from '../Screens/Customer/List/CustomerListingWrapper';
import AddCustomerFormWrapper from '../Screens/Customer/Add Customer/AddCustomerWrapper';
import EditCustomerFormWrapper from '../Screens/Customer/Edit Customer/EditCustomerLogic';
import ProductListingWrapper from '../Screens/Product/List/ProductListingWrapper';
import AddProductWrapper from '../Screens/Product/Add Product/AddProductWrapper';
import EditProductWrapper from '../Screens/Product/Edit Poduct/EditProductWrapper';
import CategoryListingWrapper from '../Screens/Category/List/CategoryListingWrapper';
import AddCategoryFormWrapper from '../Screens/Category/Add Category/AddCategoryWrapper';
import EditCategoryWrapper from '../Screens/Category/Edit category/EditCategoryWrapper';
import Auth from '../Components/Auth';
import WithoutLogin from '../Components/WithoutLogin';

const PageRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/', // Root path
      element: (
        <WithoutLogin>
          <LoginWrapper />
        // </WithoutLogin>
      ), // Login page
    },
    {
      path: '/layout', // Layout path for the dashboard or main pages
      element: (
        <Auth>
          <Layout />
        // </Auth>
      ), // Main layout that contains a sidebar
      children: [
        {
          path: 'customer-list', // Customer listing page under layout
          element: <CustomerListingWrapper />,
        },
        {
          path: 'customer-list/add-customer', // Path for adding a customer
          element: <AddCustomerFormWrapper />, // Add customer form
        },
        {
          path: 'customer-list/edit-customer/:id', // Path for editing a customer by ID
          element: <EditCustomerFormWrapper />, // Edit customer form
        },
        {
          path: 'product-list', // Product listing page under layout
          element: <ProductListingWrapper />,
        },
        {
          path: 'product-list/add-product', // Path for adding a product
          element: <AddProductWrapper />, // Add product form
        },
        {
          path: 'product-list/edit-product/:id', // Path for editing a product by ID
          element: <EditProductWrapper />, // Edit product form
        },
        {
          path: 'category-list', // Category listing page under layout
          element: <CategoryListingWrapper />,
        },
        {
          path: 'category-list/add-category', // Path for adding a category
          element: <AddCategoryFormWrapper />, // Add category form
        },
        {
          path: 'category-list/edit-category/:id', // Path for editing a category by ID
          element: <EditCategoryWrapper />, // Edit category form
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router} />
  ) // Provide router to the app
};

export default PageRoutes;
