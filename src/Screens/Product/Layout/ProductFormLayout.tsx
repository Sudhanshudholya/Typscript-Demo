import { ErrorMessage, FormikProps } from "formik";
import { ProductFormValues } from "../Add Product/AddProductWrapper";
import ATMTextField from "../../../Components/Atoms/ATMTextfield/ATMTextfield";

export type Props = {
    formikProps: FormikProps<ProductFormValues>;
    heading: string;
    buttonName: string;
};

const ProductFormLayout = ({ formikProps, heading, buttonName }: Props) => {
    const { values, handleChange, isSubmitting } = formikProps; // Destructure handleSubmit from formikProps

    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-center mb-6">{heading}</h2>

                {/* Form wrapping the fields */}

                {/* Photo */}
                {/* <div className="mb-4">
                    <ATMTextField
                        label="Photo"
                        placeholder="Product Photo"
                        name="photo"
                        value={values.photo}
                        onChange={handleChange}
                        className="w-full"
                    />
                    <p className='text-red-400'><ErrorMessage name='photo' /></p>

                </div> */}

                {/* Product Name */}
                <div className="mb-4">
                    <ATMTextField
                        label="Product Name"
                        placeholder="Enter product name"
                        name="product_Name"
                        value={values.product_Name}
                        onChange={handleChange}
                        className="w-full"
                    />
                    <p className='text-red-400'><ErrorMessage name='product_Name' /></p>
                </div>

                {/* category */}
                <div className="mb-4">
                    <ATMTextField
                        label="Category"
                        placeholder="Enter product category"
                        name="category"
                        value={values.category}
                        onChange={handleChange}
                        className="w-full"
                    />
                    <p className='text-red-400'><ErrorMessage name='category' /></p>
                </div>

                {/* Quantity */}

                <div className="mb-4">
                    <ATMTextField
                        label="Quantity"
                        placeholder="Enter product category"
                        name="category"
                        value={values.category}
                        onChange={handleChange}
                        className="w-full"
                    />
                    <p className='text-red-400'><ErrorMessage name='category' /></p>
                </div>
              
                {/* MRP */}
                <div className="mb-4">
                    <ATMTextField
                        label="MRP"
                        placeholder="Enter product mrp"
                        name="mrp"
                        value={values.mrp}
                        onChange={handleChange}
                        className="w-full"
                    />
                    <p className='text-red-400'><ErrorMessage name='mrp' /></p>
                </div>


                {/* RATE */}

                <div className="mb-4">
                    <ATMTextField
                        label="Rate"
                        placeholder="Enter product rate"
                        name="rate"
                        value={values.rate}
                        onChange={handleChange}
                        className="w-full"
                    />
                    <p className='text-red-400'><ErrorMessage name='rate' /></p>
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
export default ProductFormLayout