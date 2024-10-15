import { object, string } from 'yup';
import { Form, Formik } from 'formik';
import InvoiceFormLayout from '../Layout/InvoiceFormLayout';
import { useGetCustomerQuery } from '../../../Slice/Customerslice';
import { useGetProductQuery } from '../../../Slice/ProductSlice';




export type InvoiceFormValues = {
    name: string;
}

const AddInvoiceWrapper = () => {

    const token = localStorage.getItem("Token")

    const { data: customerData } = useGetCustomerQuery({token})
    const { data: productData } = useGetProductQuery({token})

    const initialValues: InvoiceFormValues = {
        name: '',
    };

    const customerValidation = object({
        name: string().required('Name is required'),
    });

    const handleSubmit = (values: InvoiceFormValues) => {
        console.log(values);
    };

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


// import { object, string } from 'yup';
// import { Form, Formik, FormikHelpers } from 'formik';
// import InvoiceFormLayout from '../Layout/InvoiceFormLayout';
// import { useNavigate } from 'react-router-dom';
// import toasts from '../../../Toasts/Toasts';
// import { useGetCustomerQuery } from '../../../Slice/Customerslice';
// import { useGetProductQuery } from '../../../Slice/ProductSlice';

// export type InvoiceFormValues = {
//     name: string;
// }

// const AddInvoiceWrapper = () => {
//     const { data: customerData} = useGetCustomerQuery({});
//     const { data: productData} = useGetProductQuery({});

//     // Initial form values
//     const initialValues: InvoiceFormValues = {
//         name: '',
//     };

//     // Validation schema
//     const customerValidation = object({
//         name: string().required('Name is required'),
//     });

//     // Handle form submission
//     const handleSubmit = (values: InvoiceFormValues, { setSubmitting }: FormikHelpers<InvoiceFormValues>) => {
//         console.log(values);
//         setSubmitting(false); // Stop submitting state after form submission
//         toasts.successMsg('Invoice added successfully!'); // Example success message
//     };   

//     return (
//         <Formik
//             initialValues={initialValues}
//             validationSchema={customerValidation}
//             onSubmit={handleSubmit}
//         >
//             {({ handleSubmit, ...formikProps }) => (
//                 <Form onSubmit={handleSubmit}>
//                     <InvoiceFormLayout
//                         formikProps={formikProps}
//                         customerData={customerData}
//                         productData={productData}
//                     />
//                 </Form>
//             )}
//         </Formik>
//     );
// }

// export default AddInvoiceWrapper;
