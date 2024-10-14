import { Formik, FieldArray, FormikProps } from "formik";
import React from "react";

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

const initialProduct = {
    productName: "",
    mrp: "",
    rate: "",
    quantity: ""
};

const InvoiceFormLayout = ({formikProps}: FormValues) => {
    
    return (
        <Formik
            initialValues={{
                date: "",
                invoiceNumber: "",
                customerName: "",
                products: [initialProduct] // Start with one product
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
                                                        value={formikProps.values.products[index].productName}
                                                        onChange={formikProps.handleChange}
                                                        onBlur={formikProps.handleBlur}
                                                    >
                                                        <option>Select</option>
                                                        {/* Add product options here */}
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


                            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
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
                            </div>



                            {/* Submit Button */}
                            <div className="flex justify-center mt-4">
                                <button
                                    type="submit"
                                    className="border rounded bg-blue-800 w-[300px] h-12 p-2 font-dark text-xl text-white"
                                >
                                    Add Invoice
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </Formik>
    );
};

export default InvoiceFormLayout;

