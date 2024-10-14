import { object, string } from 'yup';
import { Form, Formik } from 'formik';
import InvoiceFormLayout from '../Layout/InvoiceFormLayout';



export type InvoiceFormValues = {
    name: string;

}

const AddInvoiceWrapper = () => {


    const initialValues: InvoiceFormValues = {
        name: '',
    };

    const customerValidation = object({
        name: string().required('Name is required'),
    });

    const handleSubmit = (values: InvoiceFormValues) => {
        console.log(values, "Invoices");
    };

    return (
        <Formik initialValues={initialValues} validationSchema={customerValidation} onSubmit={handleSubmit}  >
            {({ handleSubmit, ...formikProps }: any) =>
                <Form onSubmit={handleSubmit}>
                    < InvoiceFormLayout formikProps={formikProps} />
                </Form>
            }
        </Formik>
    )
}

export default AddInvoiceWrapper

