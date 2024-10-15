import { object, string } from "yup";
import { Form, Formik } from "formik";
import CategoryFormLayout from "../Layout/CategoryFormLayout";
import { useAddCategoryMutation } from "../../../Slice/CategorySlice";
import { useNavigate } from "react-router-dom";
import toasts from "../../../Toasts/Toasts";

export type CategoryFormValue = {
  categoryname: string;
};

const AddCategoryWrapper = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem("Token");
  const [addCategory] = useAddCategoryMutation();


  const initialvalues: CategoryFormValue = {
    categoryname: "",
  };

  const categoryValidation = object({
    categoryname: string().required("Category is required"),
  });

  const handleSubmit = (values: CategoryFormValue) => {
    addCategory({ categoryData: values, token })
      .then((res: any) => {
        console.log("Response:", res);
        if (res.data?.status === "OK") {
          toasts.successMsg("Category added successfully");
          navigate("/layout/category-list");
        } else {
          toasts.errorMsg(res.data.msg || "Failed to add category");
        }
      })
      .catch((err) => {
        toasts.errorMsg("error");
        console.log("Error:", err);
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

export default AddCategoryWrapper;
