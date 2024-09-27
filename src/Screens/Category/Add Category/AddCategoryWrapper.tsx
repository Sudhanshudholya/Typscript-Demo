import { object, string } from 'yup';
import { Form, Formik } from 'formik';
import CategoryFormLayout from '../Layout/CategoryFormLayout';

export type CategoryFormValue = {
   categoryName: string
}

const AddCategoryFormWrapper = () => {


    const initialvalues: CategoryFormValue = {
        categoryName: '',
        
    };

    const categoryValidation = object({
        categoryName: string().required('Category is required'),
    });

 const handleSubmit = (values: CategoryFormValue) => {
   console.log(values);   
    };

    return (
       <Formik initialValues={initialvalues} validationSchema={categoryValidation} onSubmit={handleSubmit}>
          {({handleSubmit,...formikProps}:any) => 
                <Form onSubmit={handleSubmit}>
                   <CategoryFormLayout heading={"Add Category"} buttonName="Add" formikProps={formikProps}/>
                </Form>
            }
       </Formik>
    )
}

export default AddCategoryFormWrapper
