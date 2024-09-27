import CustomerFormLayout from '../Layout/CustomerFormLayout';
import { object, string } from 'yup';
import { Form, Formik } from 'formik';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useEditCustomerMutation } from '../../../Slice/Customerslice';
import toasts from '../../../Toasts/Toasts';

export type CustomerFormValues = {
    name: string | null;
    email: string | null;
    contactNumber: string | null;
    role: string | null
};

const EditCustomerFormWrapper = () => {

    const token = localStorage.getItem("Token")
    const [editcustomer] = useEditCustomerMutation()
    const { id } = useParams()
    const [query] = useSearchParams()
    const navigate = useNavigate()


    const customerValidation = object({
        name: string().required('Name is required'),
        email: string().email('Invalid email format').required('Email is required'),
        contactNumber: string()
            .min(10, 'Mobile number must be at least 10 digits')
            .required('Mobile number is required'),
        role: string().required('Role is required'),
    });

    const handleSubmit = (values: CustomerFormValues) => {
        editcustomer({ userData: values, id, token })
            .then((res: any) => {
                console.log(res)
                toasts.successMsg("User Edited Successfully")
                navigate("/layout/customer-list")
            }).catch((err)=> {
                console.log(err);   
            })
    };

    return (
        <Formik 
        initialValues={{
            name: query.get('name'),
            email: query.get('email'),
            contactNumber: query.get('mobile'),
            role: query.get('role'),
        }} 
     validationSchema={customerValidation} onSubmit={handleSubmit} 
         >
            {({handleSubmit, ...formikProps}:any) =>
                <Form onSubmit={handleSubmit}>
                    < CustomerFormLayout heading={"Edit Customer"} buttonName="Edit" formikProps={formikProps} />
                </Form>
            }
        </Formik>
    )
}

export default EditCustomerFormWrapper


