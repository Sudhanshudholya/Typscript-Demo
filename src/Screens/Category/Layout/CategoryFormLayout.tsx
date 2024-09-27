import { ErrorMessage, FormikProps } from 'formik';
import { CategoryFormValue } from '../Add Category/AddCategoryWrapper';
import ATMTextField from '../../../Components/Atoms/ATMTextfield/ATMTextfield';

type Props = {
    formikProps: FormikProps<CategoryFormValue>;
    heading: string;
    buttonName: string;
};

const CategoryFormLayout = ({ formikProps, heading, buttonName }: Props) => {
    const { values, handleChange, isSubmitting } = formikProps; // Destructure handleSubmit from formikProps

    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-center mb-6">{heading}</h2>

                {/* Form wrapping the fields */}

                {/* Category */}
                <div className="mb-4">
                    <ATMTextField
                        label="Category Name"
                        placeholder="Enter your category"
                        name="categoryName"
                        value={values.categoryName}
                        onChange={handleChange}
                        className="w-full"
                    />
                    <p className='text-red-400'><ErrorMessage name='categoryName' /></p>

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
export default CategoryFormLayout
