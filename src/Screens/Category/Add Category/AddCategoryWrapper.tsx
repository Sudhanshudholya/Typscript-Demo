import { object, string } from "yup";
import { Form, Formik } from "formik";
import CategoryFormLayout from "../Layout/CategoryFormLayout";
import { useAddCategoryMutation } from "../../../Slice/CategorySlice";
import { useNavigate } from "react-router-dom";
import toasts from "../../../Toasts/Toasts";

export type CategoryFormValue = {
  categoryName: string;
};

const AddCategoryFormWrapper = () => {
  const [addCategory] = useAddCategoryMutation();
  const navigate = useNavigate();

  const initialvalues: CategoryFormValue = {
    categoryName: "",
  };

  const categoryValidation = object({
    categoryName: string().required("Category is required"),
  });

  const handleSubmit = (values: CategoryFormValue) => {
    const token = localStorage.getItem("Token");
    addCategory({ categoryData: values, token })
      .then((res: any) => {
        if (res.data.status == "OK") {
          toasts.successMsg("Category added successfully");
          navigate("/layout/category-list");
        } else {
          toasts.errorMsg(res.data.msg || "Failed to add category");
        }
      })
      .catch((err) => {
        toasts.errorMsg("error");
        console.log(err);
      });
  };

  return (
    <Formik
      initialValues={initialvalues}
      validationSchema={categoryValidation}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, ...formikProps }: any) => (
        <Form onSubmit={handleSubmit}>
          <CategoryFormLayout
            heading={"Add Category"}
            buttonName="Add"
            formikProps={formikProps}
          />
        </Form>
      )}
    </Formik>
  );
};

export default AddCategoryFormWrapper;
