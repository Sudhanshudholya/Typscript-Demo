import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useEditProductMutation } from "../../../Slice/ProductSlice";
import { object, string } from "yup";
// import toasts from "../../../Toasts/Toasts";
import { Form, Formik } from "formik";
import ProductFormLayout from "../Layout/ProductFormLayout";
import toasts from "../../../Toasts/Toasts";

export type ProductFormValues = {
    // photo: string | null;
    product_Name: string | null;
    category: string | null;
    quantity: string | null;
    mrp: string | null;
    rate: string | null
}

const EditProductWrapper = () => {
    
    const token = localStorage.getItem("Token")
    const [editProduct] = useEditProductMutation()
    const {id} = useParams()
    const [query] = useSearchParams()
    const navigate = useNavigate()

    const productValidation = object({

        // photo: string().required("Photo is required"),
        product_Name: string().required("Name is required"),
        category: string().required("Category is required"),
        quantity: string().required("Quantity is required"),
        mrp: string().required("MRP is required"),
        rate: string().required("Rate is required")
    })

    const handleSubmit = (values: ProductFormValues) => {
      editProduct({productData: values, id, token})
      .then((res:any) => {
        console.log(res);
        toasts.successMsg("Product edited successfully")
        navigate("/layout/product-list")
      })
    }
  return (
    <Formik
     initialValues={{
        // photo: query.get('photo'),
        product_Name: query.get('product_Name'),
        category: query.get('category'),
        quantity: query.get('quantity'),
        mrp: query.get('mrp'),
        rate: query.get('rate')
     }}
     onSubmit={handleSubmit} validationSchema={productValidation}
    >
         {({handleSubmit, ...formikProps}:any) =>

         <Form onSubmit={handleSubmit}>
             < ProductFormLayout heading={"Edit Customer"} buttonName="Edit" formikProps={formikProps} />
         </Form>

     }
    </Formik>
  )
}

export default EditProductWrapper