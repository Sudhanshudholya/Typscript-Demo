import { object, string } from "yup";
import CategoryFormLayout from "../Layout/CategoryFormLayout";
import { Form, Formik } from "formik";
import { useSearchParams } from "react-router-dom";

export type CategoryFormValue = {
    categoryName: string;
};

const EditCategoryWrapper = () => {

    const [query] = useSearchParams()


    const categoryValidation = object({
        categoryName: string().required('Name is required'),
    });

    const handleSubmit = (values: CategoryFormValue) => {
        console.log(values);

    };

    return (
        <Formik
            initialValues={{
                categoryName: query.get('categoryName'),
            }}
             validationSchema={categoryValidation} onSubmit={handleSubmit}
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


