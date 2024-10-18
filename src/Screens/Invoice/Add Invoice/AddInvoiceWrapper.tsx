import { object, string } from 'yup';
import { Form, Formik } from 'formik';
import InvoiceFormLayout from '../Layout/InvoiceFormLayout';
import { useGetCustomerQuery } from '../../../Slice/CustomerSlice';
import { useGetProductQuery } from '../../../Slice/ProductSlice';
import { useCreateInvoiceMutation } from '../../../Slice/Invoiceslice';

export type InvoiceFormValues = {
    name: string;
}

const AddInvoiceWrapper = () => {

    const token = localStorage.getItem("Token")
    const [createInvoice] = useCreateInvoiceMutation()
    const { data: customerData } = useGetCustomerQuery({ token })
    const { data: productData } = useGetProductQuery({ token })

    const initialValues: InvoiceFormValues = {
        name: '',
    };

    const customerValidation = object({
        name: string().required('Name is required'),
    });

    const handleSubmit = (values: InvoiceFormValues) => {

        createInvoice(values)
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
            
    }

    return (
        <Formik initialValues={initialValues} validationSchema={customerValidation} onSubmit={handleSubmit}  >
            {({ handleSubmit, ...formikProps }: any) =>
                <Form onSubmit={handleSubmit}>
                    < InvoiceFormLayout formikProps={formikProps} customerData={customerData} productData={productData} />
                </Form>
            }
        </Formik>
    )
}

export default AddInvoiceWrapper

