import { Form, Formik } from "formik";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { object, string } from "yup";
import { useEditProductMutation } from "../../../Slice/ProductSlice";
import toasts from "../../../Toasts/Toasts";
import ProductFormLayout from "../Layout/ProductFormLayout";

export type ProductFormValues = {
    photo: string | null;
    productName: string | null;
    type: string | null;
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

        photo: string().required("Photo is required"),
        productName: string().required("Name is required"),
        type: string().required("Type is required"),
        quantity: string().required("Quantity is required"),
        mrp: string().required("MRP is required"),
        rate: string().required("Rate is required")
    })

    const handleSubmit = (values: ProductFormValues) => {
      editProduct({userData: values, id, token})
      .then((res:any) => {
        console.log(res);
        toasts.successMsg("Product edited successfully")
        navigate("/layout/product-list")
        
      })
    }
  return (
    <Formik 
     initialValues={{
        photo: query.get('photo'),
        productName: query.get('productName'),
        type: query.get('type'),
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
