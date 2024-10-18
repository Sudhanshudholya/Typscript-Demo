import CustomerFormLayout from '../Layout/CustomerFormLayout';
import { object, string } from 'yup';
import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import toasts from '../../../Toasts/Toasts';
import { useAddCustomerMutation } from '../../../Slice/CustomerSlice';


export type CustomerFormValues = {
    name: string;
    email: string;
    contactNumber: string;
    role: string
}

const AddCustomerWrapper = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem('Token')
    const [addCustomer] = useAddCustomerMutation()

    const initialvalues: CustomerFormValues = {
        name: '',
        email: '',
        contactNumber: '',
        role: '',
    };


    const customerValidation = object({
        name: string().required('Name is required').transform(value => value.toLocaleUpperCase()),
        email: string().email('Invalid email format').required('Email is required'),
        contactNumber: string().required('Contact number  is required'),
        role: string().required('Role is required'),
    });

    const handleSubmit = (values: CustomerFormValues) => {

        addCustomer({ userData: values, token }).then((res: any) => {
            if (res.data.msg) {
                toasts.successMsg("Customer added successfully")
                navigate("/layout/customer-list")
            } else {
                toasts.errorMsg(res.data.msg)
            }
        }).catch((err) => {
            console.log(err);
            toasts.errorMsg("Error")
        })
    };

    return (
        <Formik initialValues={initialvalues} validationSchema={customerValidation} onSubmit={handleSubmit}  >
            {({ handleSubmit, ...formikProps }: any) =>
                <Form onSubmit={handleSubmit}>
                    < CustomerFormLayout heading={"Add Customer"} buttonName="Add" formikProps={formikProps} />
                </Form>
            }
        </Formik>
    )
}

export default AddCustomerWrapper

