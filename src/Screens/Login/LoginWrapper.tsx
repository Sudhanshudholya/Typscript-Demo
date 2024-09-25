import { Form, Formik, FormikHelpers } from 'formik'
import Login from './Login'
import { object, string } from 'yup'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../Slice/Authslice'
import toasts from '../../Toasts/Toasts'


const LoginWrapper = () => {

    const navigate = useNavigate()
    const [login] = useLoginMutation()
   

    const initialValues = {
        username: "",
        password: "",
    }

    const validationSchema = object({
        username: string().required("Email is required"),
        password: string().required("Password is required")
    })

    const handleSubmit = (values: any, {setSubmitting}: FormikHelpers<any>) => {
      
     login(values).then((res) => {
      if(res.data.status == 'OK'){
        localStorage.setItem("Token", res.data.data.token)
        toasts.successMsg("Login Successfully")
        navigate('/layout/customer-list')
      }else{
        toasts.errorMsg("Invalid Credential")
      }
     }).catch((err)=>{
      toasts.errorMsg("Invalid credentials")
      console.log(err);
     }).finally(()=>{
      setSubmitting(false)
     })
       
    }
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} >

     {
        (formikProps) => {
            return(
                <Form>
                    <Login formikProps = {formikProps}/>
                </Form>
            )
        }
     }
    </Formik>
  )
}

export default LoginWrapper
