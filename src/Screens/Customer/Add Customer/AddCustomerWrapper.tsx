import CustomerFormLayout from '../Layout/CustomerFormLayout';
// import { toast } from 'react-toastify';
import { object, string } from 'yup';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';



export type CustomerFormValues = {
    name: string;
    email: string;
    mobile: string;
    role: string

}


const AddCustomerFormWrapper = () => {

    const navigate =useNavigate()

    const initialvalues: CustomerFormValues = {
        name: '',
        email: '',
        mobile: '',
        role: '',
    };

    const customerValidation = object({
        name: string().required('Name is required'),
        email: string().email('Invalid email format').required('Email is required'),
        mobile: string()
            .matches(/^[0-9]+$/, 'Mobile number must be numeric')
            .min(10, 'Mobile number must be at least 10 digits')
            .required('Mobile number is required'),
        role: string().required('City is required'),
    });

 const handleSubmit = (values: CustomerFormValues) => {
        console.log(values);
    };

    return (
        <Formik initialValues={initialvalues} onSubmit={handleSubmit} validationSchema={customerValidation} >
            {(formikProps) => {
                return (

                    < CustomerFormLayout heading={"Add Customer"} buttonName="Add" formikProps={formikProps} />
                )
            }}
        </Formik>
    )
}

export default AddCustomerFormWrapper
