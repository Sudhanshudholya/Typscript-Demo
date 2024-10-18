import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../Sidebar/Layout';
import Auth from '../Components/Auth';
import WithoutLogin from '../Components/WithoutLogin';
import LoginWrapper from '../Screens/Login/LoginWrapper';
import CustomerListingWrapper from '../Screens/Customer/List/CustomerListingWrapper';
import AddCustomerWrapper from '../Screens/Customer/Add Customer/AddCustomerWrapper';
import EditCustomerWrapper from '../Screens/Customer/Edit Customer/EditCustomerLogic';
import ProductListingWrapper from '../Screens/Product/List/ProductListingWrapper';
import AddProductWrapper from '../Screens/Product/Add Product/AddProductWrapper';
import EditProductWrapper from '../Screens/Product/Edit Product/EditProductWrapper';
import CategoryListingWrapper from '../Screens/Category/List/CategoryListingWrapper';
import AddCategoryWrapper from '../Screens/Category/Add Category/AddCategoryWrapper';
import EditCategoryWrapper from '../Screens/Category/Edit category/EditCategoryWrapper';
import InvoiceListingWrapper from '../Screens/Invoice/List/InvoiceListingWrapper';
import AddInvoiceWrapper from '../Screens/Invoice/Add Invoice/AddInvoiceWrapper';
import EditInvoiceWrapper from '../Screens/Invoice/Edit Invoice/EditInvoiceWrapper';


const PageRoutes = () => {

  const router = createBrowserRouter([
    {
      path: '/', // Root path
      element: (
        <WithoutLogin>
          <LoginWrapper />
         </WithoutLogin>
      ), // Login page
    },
    {
      path: '/layout', // Layout path for the dashboard or main pages
      element: (
        <Auth>
          <Layout />
         </Auth>
      ), // Main layout that contains a sidebar
      children: [
        {
          path: 'customer-list', // Customer listing page under layout
          element: <CustomerListingWrapper />,
        },
        {
          path: 'customer-list/add-customer', // Path for adding a customer
          element: <AddCustomerWrapper />, // Add customer form
        },
        {
          path: 'customer-list/edit-customer/:id', // Path for editing a customer by ID
          element: <EditCustomerWrapper />, // Edit customer form
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
          element: <AddCategoryWrapper />, // Add category form
        },
        {
          path: 'category-list/edit-category/:id', // Path for editing a category by ID
          element: <EditCategoryWrapper />, // Edit category form
        },
        {
          path: 'invoice-list', //Category listing page under layout
          element: <InvoiceListingWrapper />, 
        },
        {
          path: 'invoice-list/add-invoice', //Category listing page under layout
          element: <AddInvoiceWrapper />, 
        },
        {
          path: 'invoice-list/edit-invoice/:id', //Category listing page under layout
          element: <EditInvoiceWrapper />, 
        },
        
       
      ],
    },
  ]);
  return (
    <RouterProvider router={router} />
  ) // Provide router to the app
};

export default PageRoutes;
