import { Form, Formik, FormikHelpers } from 'formik'
import Login from './Login'
import { object, string } from 'yup'
import { useLoginMutation } from '../Slice/AuthSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const LoginWrapper = () => {

    const navigate = useNavigate()

    const [login] = useLoginMutation()

    const initialValues = {
      userName: "",
        password: "",
    }

    const validationSchema = object({
        username: string().required("Email is required"),
        password: string().required("Password is required")
    })

    const handleSubmit = (values: any, {setSubmitting}: FormikHelpers) => {
       console.log(values);

       login(values)
       .then((res) => {
        if (res.data.status === "OK") {
          localStorage.setItem("token", res.data.data.token);
          toast.success("Login Successfully")
          navigate("/")
        } else {
          toast.error("Invalid Creadentials")
        }
      }).catch((err) => {
        console.log(err)
        toast.error("Invalid Creadentials")
      }).finally(() => {
        setSubmitting(false);
      })
       
    }
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} >

     {
        (formikProps) => {
            return(
                <Form>
                    <Login formikProps = {formikProps}>

                    </Login>
                </Form>
            )
        }
     }
    </Formik>
  )
}

export default LoginWrapper
