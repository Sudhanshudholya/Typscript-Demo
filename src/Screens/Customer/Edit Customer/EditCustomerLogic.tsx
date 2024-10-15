import CustomerFormLayout from '../Layout/CustomerFormLayout';
import { object, string } from 'yup';
import { Form, Formik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { useEditCustomerMutation, useGetSingleCustomerQuery } from '../../../Slice/Customerslice';
import toasts from '../../../Toasts/Toasts';

export type CustomerFormValues = {

    name: string | null;
    email: string | null;
    contactNumber: number | string;
    role: string | null

};

const EditCustomerWrapper = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem("Token")
    const [editcustomer] = useEditCustomerMutation()
    const { id } = useParams()
    const { data } = useGetSingleCustomerQuery({ token, id })

    //Initial values for the form 

    const initialValues = {
        name: data?.data?.name,
        email: data?.data?.email,
        contactNumber: data?.data?.contactNumber,
        role: data?.data?.role
    }


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
                console.log(res);
                toasts.successMsg("Customer Edited Successfully")
                navigate("/layout/customer-list")
            }).catch((err) => {
                console.log(err);
            })
    };

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={customerValidation}
            onSubmit={handleSubmit}
        >
            {({ handleSubmit, ...formikProps }: any) =>
                <Form onSubmit={handleSubmit}>
                    < CustomerFormLayout heading={"Edit Customer"} buttonName="Edit" formikProps={formikProps} />
                </Form>
            }
        </Formik>
    )
}

export default EditCustomerWrapper


