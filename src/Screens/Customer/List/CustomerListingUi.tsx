import { ErrorMessage, FormikProps } from 'formik';
import ATMTextField from '../../../Components/Atoms/ATMTextfield/ATMTextfield';
import { CustomerFormValues } from '../Add Customer/AddCustomerWrapper';


type Props = {
    formikProps: FormikProps<CustomerFormValues>;
    heading: string;
    buttonName: string;
};

const CustomerFormLayout = ({ formikProps, heading, buttonName }: Props) => {
    const { values, handleChange, handleSubmit ,isSubmitting} = formikProps; // Destructure handleSubmit from formikProps

    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-center mb-6">{heading}</h2>

                {/* Form wrapping the fields */}
                <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="mb-4">
                        <ATMTextField
                            label="Name"
                            placeholder="Enter your name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            className="w-full"
                        />
                        <p className='text-red-400'><ErrorMessage name='name' /></p>
                        
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <ATMTextField
                            label="Email"
                            placeholder="Enter your email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            className="w-full"
                        />
                          <p className='text-red-400'><ErrorMessage name='email' /></p>
                    </div>

                    {/* Mobile */}
                    <div className="mb-4">
                        <ATMTextField
                            label="Mobile"
                            placeholder="Enter your mobile"
                            name="mobile"
                            value={values.mobile}
                            onChange={handleChange}
                            className="w-full"
                        />
                               <p className='text-red-400'><ErrorMessage name='mobile' /></p>
                    </div>

                    {/* Role */}
                    <div className="mb-4">
                        <ATMTextField
                            label="Role"
                            placeholder="Enter your role"
                            name="role"
                            value={values.role}
                            onChange={handleChange}
                            className="w-full"
                        />
                               <p className='text-red-400'><ErrorMessage name='role' /></p>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="border rounded bg-blue-600 w-full h-12 p-2 font-light text-xl text-white"
                            disabled={isSubmitting}
                        >
                            {buttonName}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CustomerFormLayout;



// type Props = {
//     data: any,
//     isLoading: boolean,
//     isError: boolean
// }

// const CustomerListing = ({ data, isLoading, isError, HandleEdit, HandleDelete}: Props) => {

//     if (isLoading) return <div className='flex justify-center text-sky-800 text-4xl p-44'>Loading...</div>;
//     if (isError) return <div className="flex justify-center text-sky-800 text-4xl p-44">Error fetching customers</div>;
 
//         return (

//             <div className="max-w-4xl mx-auto p-6 mt-16 bg-white rounded-md shadow-md">
//                 <h1 className="text-2xl font-bold mb-4 text-center">Customer Details</h1>

//                 <div className="overflow-auto max-h-[500px]">
//                     <table className="min-w-full bg-white table-auto">
//                         <thead>
//                             <tr>
//                                 <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Name</th>
//                                 <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Email</th>
//                                 <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Mobile</th>
//                                 <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Role</th>
//                                 <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {data?.data?.slice().reverse().map((customer) => (
//                                 <tr key={customer._id}>
//                                     <td className="px-4 py-3 whitespace-no-wrap border-b text-sm text-gray-700">{customer.name}</td>
//                                     <td className="px-4 py-3 whitespace-no-wrap border-b text-sm text-gray-700">{customer.email}</td>
//                                     <td className="px-4 py-3 whitespace-no-wrap border-b text-sm text-gray-700">{customer.mobile}</td>
//                                     <td className="px-4 py-3 whitespace-no-wrap border-b text-sm text-gray-700">{customer.role}</td>
//                                     <td className="px-4 py-3 whitespace-no-wrap border-b text-sm text-gray-700">
//                                         <button
//                                             onClick={() => HandleEdit(customer._id)}
//                                             className="px-2 py-1 bg-blue-500 text-white rounded-md mr-2"
//                                         >
//                                             Edit
//                                         </button>
//                                         <button
//                                             onClick={() => HandleDelete(customer._id)}
//                                             className="px-2 py-1 bg-red-500 text-white rounded-md"
//                                         >
//                                             Delete
//                                         </button>
//                                     </td>
//                                 </tr>
//                             )


//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         );
// };

// export default CustomerListing;