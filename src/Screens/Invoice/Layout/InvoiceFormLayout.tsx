import { Formik, FieldArray, FormikProps } from "formik";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const initialProduct = {
    productName: "",
    mrp: "",
    rate: "",
    quantity: "",
};

type Product = {
    productName: string;
    mrp: string;
    rate: string;
    quantity: string;
};

type FormValues = {
    date: string;
    invoiceNumber: string;
    customerName: string;
    products: Product[]; // Array of products
};

const InvoiceFormLayout = ({
    formikProps,
    customerData,
    productData,
}:  any) => {

    const { values, handleBlur, handleChange, handleSubmit }: any = formikProps;

    const [totalAmount, setTotalAmount]: any = useState("");
    const [paidAmount, setPaidAmount]: any = useState("");
    const [dueAmount, setDueAmount]: any = useState("");


    const handleTotalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value) || "";
        setTotalAmount(value);
    };

  
    const handlePaidChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value) || "";
        setPaidAmount(value);
    };


    useEffect(() => {
        setDueAmount(totalAmount - paidAmount);
    }, [totalAmount, paidAmount]);

    return (
        <Formik
            initialValues={{
                date: "",
                invoiceNumber: "",
                customerName: "",
                products: [initialProduct], // Start with one product
            }}
            onSubmit={(values) => {
                console.log(values); // Submit logic here
            }}
        >
            {(formikProps: FormikProps<FormValues>) => (
                <form onSubmit={formikProps.handleSubmit}>
                    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#67e8f9] to-purple-900">
                        <div className="w-full max-w-5xl bg-white shadow-xl rounded-lg p-2 md:p-8">
                            <h1>Add Invoice</h1>
                            <br />

                            {/* Group 1: Date and Invoice Number */}
                            <div className="flex flex-row gap-4 mb-4">
                                <div className="flex flex-col gap-2 w-full">
                                    <label>Date</label>
                                    <input
                                        type="date"
                                        placeholder="Enter date"
                                        className="placeholder-gray-500 placeholder-italic text-black border py-2 rounded px-4 w-full"
                                        name="date"
                                        value={formikProps.values.date}
                                        onChange={formikProps.handleChange}
                                        onBlur={formikProps.handleBlur}
                                    />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label>Invoice</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Invoice number"
                                        className="placeholder-gray-500 placeholder-italic text-black border py-2 rounded px-4 w-full"
                                        name="invoiceNumber"
                                        value={formikProps.values.invoiceNumber}
                                        onChange={formikProps.handleChange}
                                        onBlur={formikProps.handleBlur}
                                    />
                                </div>
                            </div>

                            {/* Group 2: Customer */}
                            <div className="flex flex-row gap-4 mb-4">
                                <div className="flex flex-col gap-2 w-full">
                                    <label>Customer</label>
                                    <select
                                        className="placeholder-gray-500 placeholder-italic text-black border py-2 rounded px-4 w-full"
                                        name="customerName"
                                        value={formikProps.values.customerName}
                                        onChange={formikProps.handleChange}
                                        onBlur={formikProps.handleBlur}
                                    >
                                        <option>Select</option>
                                        {/* Add customer options here */}
                                        {customerData?.data?.map((customer: any) => (
                                            <option key={customer._id} value={customer._id}>
                                                {customer.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Group 3: Product Array */}
                            <FieldArray name="products">
                                {({ push, remove }) => (
                                    <>
                                        {formikProps.values.products.map((product, index) => (
                                            <div className="flex flex-row gap-4 mb-4" key={index}>
                                                <div className="flex flex-col gap-2 w-full">
                                                    <label>Product</label>
                                                    <select
                                                        className="placeholder-gray-500 placeholder-italic text-black border py-2 rounded px-4 w-full"
                                                        name={`products[${index}].productName`}
                                                        value={
                                                            formikProps.values.products[index].productName
                                                        }
                                                        onChange={formikProps.handleChange}
                                                        onBlur={formikProps.handleBlur}
                                                    >
                                                        <option>Select</option>
                                                        {/* Add product options here */}
                                                        {productData?.data?.map((product: any) => (
                                                            <option key={product._id} value={product._id}>
                                                                {product.product_Name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>

                                                {/* MRP  */}
                                                <div className="flex flex-col gap-2 w-full">
                                                    <label>MRP</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter MRP"
                                                        className="placeholder-gray-500 placeholder-italic text-black border py-2 rounded px-4 w-full"
                                                        name={`products[${index}].mrp`}
                                                        value={formikProps.values.products[index].mrp}
                                                        onChange={formikProps.handleChange}
                                                        onBlur={formikProps.handleBlur}
                                                    />
                                                </div>

                                                {/* Rate */}
                                                <div className="flex flex-col gap-2 w-full">
                                                    <label>Rate</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter Rate"
                                                        className="placeholder-gray-500 placeholder-italic text-black border py-2 rounded px-4 w-full"
                                                        name={`products[${index}].rate`}
                                                        value={formikProps.values.products[index].rate}
                                                        onChange={formikProps.handleChange}
                                                        onBlur={formikProps.handleBlur}
                                                    />
                                                </div>

                                                {/* Quantity */}
                                                <div className="flex flex-col gap-2 w-full">
                                                    <label>Quantity</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter Quantity"
                                                        className="placeholder-gray-500 placeholder-italic text-black border py-2 rounded px-4 w-full"
                                                        name={`products[${index}].quantity`}
                                                        value={formikProps.values.products[index].quantity}
                                                        onChange={formikProps.handleChange}
                                                        onBlur={formikProps.handleBlur}
                                                    />
                                                </div>

                                                <div className="flex flex-col gap-2 w-full">
                                                    <label>Total</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter Total"
                                                        className="placeholder-gray-500 placeholder-italic text-black border py-2 rounded px-4 w-full"
                                                        name={`products[${index}].quantity`}
                                                        value={formikProps.values.products[index].quantity}
                                                        onChange={formikProps.handleChange}
                                                        onBlur={formikProps.handleBlur}
                                                    />
                                                </div>

                                                {/* Remove Product Button */}
                                                <div className="flex mt-8 m-9 items-center">
                                                    <button
                                                        type="button"
                                                        className="border rounded bg-red-700 text-white p-2"
                                                        onClick={() => remove(index)}
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        ))}

                                        {/* Add Product Button */}
                                        <div className="flex justify-center">
                                            <button
                                                type="button"
                                                className="border rounded bg-green-600 w-[300px] h-12 p-2 font-dark text-xl text-white"
                                                onClick={() => push(initialProduct)}
                                            >
                                                Add Another Product
                                            </button>
                                        </div>
                                    </>
                                )}
                            </FieldArray>

                            {/* Calculation  */}

                            {/* <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
                                <div className="flex space-x-4">
                                    <div className="w-1/3">
                                        <label className="block text-gray-700 font-semibold mb-2">Total Amount</label>
                                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>

                                    <div className="w-1/3">
                                        <label className="block text-gray-700 font-semibold mb-2">Paid Amount</label>
                                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>

                                    <div className="w-1/3">
                                        <label className="block text-gray-700 font-semibold mb-2">Due Amount</label>
                                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                </div>
                            </div> */}

                            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
                                <div className="flex space-x-4">
                                    {/* Total Amount */}
                                    <div className="w-1/3">
                                        <label className="block text-gray-700 font-semibold mb-2">
                                            Total Amount
                                        </label>
                                        <input
                                            type="number"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={totalAmount}
                                            onChange={handleTotalChange}
                                        />
                                    </div>

                                    {/* Paid Amount */}
                                    <div className="w-1/3">
                                        <label className="block text-gray-700 font-semibold mb-2">
                                            Paid Amount
                                        </label>
                                        <input
                                            type="number"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={paidAmount}
                                            onChange={handlePaidChange}
                                        />
                                    </div>

                                    {/* Due Amount */}
                                    <div className="w-1/3">
                                        <label className="block text-gray-700 font-semibold mb-2">
                                            Due Amount
                                        </label>
                                        <input
                                            type="number"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={dueAmount}
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center mt-4">
                                <Link to={"/layout/invoice-list"}>
                                    <button
                                        type="submit"
                                        className="border rounded bg-blue-800 w-[300px] h-12 p-2 font-dark text-xl text-white"
                                    >
                                        Add Invoice
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </Formik>
    );
};

export default InvoiceFormLayout;

// import React, { useEffect } from "react";
// import { ErrorMessage, FieldArray } from "formik";
// // import AtmDateField from "../../../Components/Atoms/AtmDateField/AtmDate";
// // import ATMTextField from "../../../Components/Atoms/AtmTextField/AtmTextField";
// // import AtmNumberField from "../../../Components/Atoms/AtmNumberField/AtmNumberField";

// type Props = {
//     Heading: string,
//     formikProps: any,
//     customerData: any,
//     productData: any,
//     buttonName: string,
// };

// const InvoiceLayout = ({ Heading, formikProps, customerData, productData, buttonName }: Props) => {
//     const { values, handleChange, setFieldValue, isSubmitting } = formikProps;

//     useEffect(() => {
//         if (values.customerName) {
//             const selectedCustomer = customerData?.data?.find(customer => customer.name === values.customerName);
//             if (selectedCustomer) {
//                 setFieldValue('email', selectedCustomer.email);
//                 setFieldValue('customerId', selectedCustomer._id);
//             }
//         } else {
//             setFieldValue('email', '');
//             setFieldValue('customerId', '');
//         }
//     }, [values.customerName, customerData, setFieldValue]);

//     const handleProductChange = (index: number, productName: string) => {
//         const selectedProduct = productData?.data.find(product => product.productName === productName);
//         if (selectedProduct) {
//             setFieldValue(`products[${index}].productName`, selectedProduct.productName);
//             setFieldValue(`products[${index}].price`, selectedProduct.sellingPrice);
//             setFieldValue(`products[${index}].productId`, selectedProduct._id); // Set product ID
//         } else {
//             setFieldValue(`products[${index}].price`, 0);
//             setFieldValue(`products[${index}].productId`, ''); // Clear product ID if no product is selected
//         }
//     };

//     // Calculate total price
//     const totalPrice = values.products?.reduce((total, product) => total + (product.quantity * product.price), 0);
//     const dueAmount = totalPrice - (values.amountPaid || 0); // Use values.amountPaid for calculation

//     return (
//         <div className='flex justify-center mt-5 '>
//             <div className="w-full max-w-3xl h-[550px] p-4 border shadow-xl rounded-lg shadow-slate-300">
//                 {/* Heading */}
//                 <h1 className="text-2xl mb-4">{Heading}</h1>

//                 <div className="mb-5 flex">
//                     <div className="w-1/2 pr-2">
//                         <input
//                             type="date"
//                             label="Date"
//                             name="date"
//                             onChange={handleChange}
//                             value={values.date}
//                             className="block w-full p-5 border border-gray-300 rounded-md"
//                         />
//                         <p className="text-red-400 h-2 p-1">
//                             <ErrorMessage name="date" />
//                         </p>
//                     </div>
//                     <div className="w-1/2 pl-2">
//                         <input
//                             type="text"
//                             name="invoiceNumber"
//                             label="Invoice number"
//                             value={values.invoiceNumber}
//                             onChange={handleChange}
//                             placeholder="Enter invoice number"
//                             className="block w-full p-5 border border-gray-300 rounded-md"
//                         />
//                         <p className="text-red-400 h-2 p-1 text-sm ">
//                             <ErrorMessage name="invoiceNumber" />
//                         </p>
//                     </div>
//                 </div>

//                 <div className="mb-4 flex">
//                     {/* Customer Name Dropdown */}
//                     <div className="w-1/2 pr-2">
//                         <label className="block text-xl text-slate-800 mb-1">Customer Name</label>
//                         <select
//                             name="customerName"
//                             value={values.customerName}
//                             onChange={handleChange}
//                             className="block w-full p-2 border border-gray-300 rounded-md"
//                         >
//                             <option value="">Select name</option>
//                             {customerData?.data?.map((customer) => (
//                                 <option key={customer._id} value={customer.name}>
//                                     {customer.name}
//                                 </option>
//                             ))}
//                         </select>
//                         <p className="text-red-400 h-2">
//                             <ErrorMessage name="customerName" />
//                         </p>
//                     </div>

//                     {/* Customer Email */}
//                     <div className="w-1/2 pl-2">
//                         <label className="block text-xl text-slate-800 mb-1">Customer Email</label>
//                         <input
//                             name="email"
//                             value={values.email}
//                             onChange={handleChange}
//                             className="block w-full p-2 border border-gray-300 rounded-md"
//                             readOnly // Email field is always read-only
//                         />
//                         <p className="text-red-400 h-2">
//                             <ErrorMessage name='email' />
//                         </p>
//                     </div>
//                 </div>

//                 <input type="hidden" name="customerId" value={values.customerId} />

//                 <h1 className="text-2xl mb-2">Products</h1>
//                 <FieldArray name="products">
//                     {({ push, remove }) => (
//                         <div>
//                             <div className="overflow-y-auto h-44 border border-gray-300 mb-4">
//                                 <table className="min-w-full table-auto">
//                                     <thead className="bg-gray-100 sticky top-0 z-8 text-center">
//                                         <tr>
//                                             <th className="px-4 py-2 text-left">Product Name</th>
//                                             <th className="px-4 py-2 text-left">Quantity</th>
//                                             <th className="px-4 py-2 text-left">Price</th>
//                                             <th className="px-4 py-2 text-left">Total</th>
//                                             <th className="px-4 py-2 text-left">Actions</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {values.products.map((product, index) => (
//                                             <tr key={index}>
//                                                 <td className="px-4 py-2">
//                                                     <select
//                                                         name={`products[${index}].productName`}
//                                                         value={product.productName}
//                                                         onChange={(e) => {
//                                                             handleProductChange(index, e.target.value);
//                                                         }}
//                                                         className="block w-full p-2 border border-gray-300 rounded-md"
//                                                     >
//                                                         <option value="">Select product</option>
//                                                         {productData?.data?.map((product) => (
//                                                             <option key={product._id} value={product.productName}>
//                                                                 {product.productName}
//                                                             </option>
//                                                         ))}
//                                                     </select>
//                                                     <p className="text-red-400 h-2">
//                                                         <ErrorMessage name={`products[${index}].productName`} />
//                                                     </p>
//                                                 </td>
//                                                 <td className="border px-4 py-2">
//                                                     <ATMTextField
//                                                         name={`products[${index}].quantity`}
//                                                         value={product.quantity}
//                                                         onChange={handleChange}
//                                                         placeholder="Quantity"
//                                                     />
//                                                     <p className="text-red-400 h-2">
//                                                         <ErrorMessage name={`products[${index}].quantity`} />
//                                                     </p>
//                                                 </td>
//                                                 <td className="border px-4 py-2">
//                                                     {/* Display price based on selection, no user input allowed */}
//                                                     <ATMTextField
//                                                         name={`products[${index}].price`}
//                                                         value={product.price}
//                                                         placeholder="Price"
//                                                         readOnly // Price field is read-only
//                                                     />
//                                                     <p className="text-red-400 h-2">
//                                                         <ErrorMessage name={`products[${index}].price`} />
//                                                     </p>
//                                                 </td>
//                                                 <td className="border px-4 py-2">
//                                                     {product.quantity * product.price}
//                                                 </td>
//                                                 <td className="border px-4 py-2">
//                                                     <button
//                                                         type="button"
//                                                         onClick={() => remove(index)}
//                                                         className="bg-red-500 text-white px-2 py-1 rounded"
//                                                     >
//                                                         Remove
//                                                     </button>
//                                                 </td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                             <button
//                                 type="button"
//                                 onClick={() => push({ productName: '', quantity: 0, price: 0, productId: '' })}
//                                 className="bg-blue-500 text-white px-4 py-2 rounded"
//                             >
//                                 Add Product
//                             </button>
//                         </div>
//                     )}
//                 </FieldArray>

//                 <div className="mb-4 flex mt-2">
//                     {/* Total Price */}
//                     <div className="w-1/2 pl-2">
//                         <label className="block text-xl text-slate-800 mb-1">Total Price</label>
//                         <input
//                             type="text"
//                             value={totalPrice}
//                             readOnly
//                             className="block w-full p-2 border border-gray-300 rounded-md"
//                         />
//                     </div>
//                     {/* Amount Paid */}
//                     <div className="w-1/2 pl-2">
//                         <label className="block text-xl text-slate-800 mb-1">Amount Paid</label>
//                         <AtmNumberField
//                             value={values.amountPaid}
//                             onChange={handleChange}
//                             name="amountPaid"
//                             className="block w-full p-2 border border-gray-300 rounded-md"
//                         />

//                     </div>

//                     {/* Due Amount */}
//                     <div className="w-1/2 pl-2">
//                         <label className="block text-xl text-slate-800 mb-1">Due Amount</label>
//                         <input
//                             type="text"
//                             value={dueAmount}
//                             readOnly
//                             className="block w-full p-2 border border-gray-300 rounded-md"
//                         />
//                     </div>
//                 </div>

//                 <div>
//                     <button
//                         type="submit"
//                         disabled={isSubmitting}
//                         className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium w-full rounded-lg text-lg px-5 py-2.5 text-center me-2 mt-6 mb-2'
//                     >
//                         {isSubmitting ? 'Submitting...' : buttonName}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default InvoiceLayout;
