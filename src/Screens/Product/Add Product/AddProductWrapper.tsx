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
  quantity: string | number;
  mrp: string | number;
  rate: string | number;
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
    quantity: number().required("Quantity is required"),
    mrp: number().required("MRP is required"),
    rate: number().required("Rate is required")
  })

  const handleSubmit = (values: ProductFormValues) => {
    
    const token = localStorage.getItem("Token")
    addProduct({ productData: values, token })
      .then((res: any) => {
        if (res.data.status === "OK") {
          toasts.successMsg("Product added successfully")
          navigate('/layout/product-list')
        } else {
          toasts.errorMsg(res.data.msg || "Failed to add product");
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
