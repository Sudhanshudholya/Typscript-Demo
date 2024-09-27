import { useNavigate } from "react-router-dom";
import { useAddProductMutation } from "../../../Slice/ProductSlice";
import { number, object, string } from "yup";
import toasts from "../../../Toasts/Toasts";
import { Form, Formik } from "formik";
import ProductFormLayout from "../Layout/ProductFormLayout";

export type ProductFormValues = {
  // photo: string;
  product_Name: string;
  category: string;
  quantity: string;
  mrp: string;
  rate: string
}
const AddProductWrapper = () => {

  const [addProduct] = useAddProductMutation()

  const navigate = useNavigate()

  const initialvalues: ProductFormValues = {

    // photo: '',
    product_Name: '',
    category: '',
    quantity: '',
    mrp: '',
    rate: ''
  }

  const productValidation = object({
    // photo: string().required("Photo is required"),
    product_Name: string().required("Name is required"),
    category: string().required("category is required"),
    quantity: string().required("Quantity is required"),
    mrp: string().required("MRP is required"),
    rate: string().required("Rate is required")
  })

  const handleSubmit = (values: ProductFormValues) => {
    console.log(values)
    const token = localStorage.getItem("Token")
    addProduct({ productData: values, token }).then((res: any) => {
      
      if (res.data.msg) {
        console.log(res.data.msg)
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