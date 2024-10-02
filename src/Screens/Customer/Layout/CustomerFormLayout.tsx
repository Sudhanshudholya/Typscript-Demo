import { ErrorMessage, FormikProps } from 'formik';
import { CustomerFormValues } from '../Add Customer/AddCustomerWrapper';
import ATMTextField from '../../../Components/Atoms/ATM/ATMTextfield';
import ATMNumberfield from '../../../Components/Atoms/ATM/ATMNumberfield';

type Props = {
    formikProps: FormikProps<CustomerFormValues>;
    heading: string;
    buttonName: string;
};

const CustomerFormLayout = ({ formikProps, heading, buttonName }: Props) => {
    const { values, handleChange, isSubmitting } = formikProps; // Destructure handleSubmit from formikProps

    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-center mb-6">{heading}</h2>

                {/* Form wrapping the fields */}

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
                    <ATMNumberfield
                        label="Contact Number"
                        placeholder="Enter your Contact Number"
                        name="contactNumber"
                        value={values.contactNumber}
                        onChange={handleChange}
                        className="w-full"
                    />
                    <p className='text-red-400'><ErrorMessage name='contactNumber' /></p>
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

                    {/* <div>
                        Role : 
                        <select>
                            <option>select</option>
                            <option>contractor</option>
                            <option>dealer</option>
                        </select>
                    </div>
                    */}
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

            </div>
        </div>
    );
};
export default CustomerFormLayout
