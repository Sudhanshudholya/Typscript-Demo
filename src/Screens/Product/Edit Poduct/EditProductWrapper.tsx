import { useNavigate, useParams } from "react-router-dom";
import { useEditProductMutation, useGetSingleProductQuery } from "../../../Slice/ProductSlice";
import { object, string } from "yup";
import toasts from "../../../Toasts/Toasts";
import { Form, Formik } from "formik";
import ProductFormLayout from "../Layout/ProductFormLayout";


export type ProductFormValues = {
    // photo: string | null;
    product_Name: string | null;
    category: string | null;
    quantity:  number | string;
    mrp: number | string;
    rate: number | string;
}

const EditProductWrapper = () => {
    
    const navigate = useNavigate()
    const token = localStorage.getItem("Token")
    const [editProduct] = useEditProductMutation()
    const {id} = useParams()
    const {data} = useGetSingleProductQuery({token, id})
   
    //Initial values for the form
    
    const initialValues = {
      photo: data?.data?.photo,
      product_Name: data?.data?.product_Name,
      category: data?.data?.category,
      quantity: data?.data?.quantity,
      mrp: data?.data?.mrp,
      rate: data?.data?.rate,
    }

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
        if(res.data.msg){
          toasts.successMsg("Product edited successfully")
        }
        navigate("/layout/product-list")
      }).catch((err)=>{
        toasts.errorMsg(err)
      })
    }
  return (
    <Formik
     enableReinitialize
     initialValues={initialValues}
     validationSchema={productValidation}
     onSubmit={handleSubmit} 
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