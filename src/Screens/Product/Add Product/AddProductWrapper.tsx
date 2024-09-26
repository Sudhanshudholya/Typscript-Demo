import ProductFormLayout from '../Layout/ProductFormLayout';
import { object, string } from 'yup';
import { useNavigate } from 'react-router-dom';
import { useAddProductMutation } from '../../../Slice/ProductSlice';
import { Form, Formik } from 'formik';
import toasts from '../../../Toasts/Toasts';

export type ProductFormValues = {
  photo: string;
  productName: string;
  type: string;
  quantity: string;
  mrp: string;
  rate: string
}
const AddProductWrapper = () => {

  const [addProduct] = useAddProductMutation()

  const navigate = useNavigate()

  const initialvalues: ProductFormValues = {

    photo: '',
    productName: '',
    type: '',
    quantity: '',
    mrp: '',
    rate: ''
  }

  const productValidation = object({
    photo: string().required("Photo is required"),
    productName: string().required("Name is required"),
    type: string().required("Type is required"),
    quantity: string().required("Quantity is required"),
    mrp: string().required("MRP is required"),
    rate: string().required("Rate is required")
  })

  const handleSubmit = (values: ProductFormValues) => {
    const token = localStorage.getItem("Token")
    addProduct({ userData: values, token }).then((res: any) => {
      if (res.data.msg) {
        toasts.successMsg("Product added successfully")
        navigate('/layout/product-list')
      } else {
        toasts.errorMsg(res.data.msg)
      }
    }).catch((err) => {
      toasts.errorMsg("error")
      console.log(err);
    })
  }
  return (
    <Formik initialValues={initialvalues} validationSchema={productValidation} onSubmit={handleSubmit}>
      {({ handleSubmit, ...formikProps }: any) =>
        <Form onSubmit={handleSubmit}>
          <ProductFormLayout heading={"Add Product"} buttonName="Add" formikProps={formikProps} />
        </Form>
      }
    </Formik>
  )
}

export default AddProductWrapper
