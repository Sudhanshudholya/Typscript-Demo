import { object, string } from "yup";
import CategoryFormLayout from "../Layout/CategoryFormLayout";
import { Form, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useEditCategoryMutation, useGetSingleCategoryQuery } from "../../../Slice/CategorySlice";
import toasts from "../../../Toasts/Toasts";

export type CategoryFormValue = {
    categoryname: string | null;
};

const EditCategoryWrapper = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem("Token")
    const [editCategory] = useEditCategoryMutation()
    const {id} = useParams()
    const {data} = useGetSingleCategoryQuery({token, id})

    const initialValues = {
        categoryname: data?.data?.categoryname 
    }
    const categoryValidation = object({
        categoryname: string().required('Name is required'),
    });

    const handleSubmit = (values: CategoryFormValue) => {
        editCategory({categoryData: values, id, token})
        .then((res: any)=> {
           if(res.data.msg){
            toasts.successMsg("Category edited successfully")
           }
           navigate("/layout/category-list")
        }).catch((err)=> {
            toasts.errorMsg(err)
        })

    };

    return (
        <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={categoryValidation} 
        onSubmit={handleSubmit}
        >
            {({ handleSubmit, ...formikProps }: any) =>
                <Form onSubmit={handleSubmit}>
                    < CategoryFormLayout heading={"Edit Category"} buttonName="Edit" formikProps={formikProps} />
                </Form>
            }
        </Formik>
    )
}

export default EditCategoryWrapper


