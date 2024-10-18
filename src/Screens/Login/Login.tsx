import { useState } from 'react';
import { ErrorMessage, FormikProps } from 'formik';
import { FaEye, FaRegEyeSlash, FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from 'react-icons/ri';

type Props = {
  formikProps: FormikProps<any>
}

const Login = ({ formikProps }: Props) => {

  const { values, handleChange, isSubmitting} = formikProps;

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='flex justify-center items-center h-screen'>
      {/* Container for the form elements */}
      <div className='space-y-4 w-[400px] flex flex-col border border-gray-400 bg-slate-300 p-8'>
        <h1 className='text-3xl font-bold text-center'>Login</h1>

        {/* Username */}
        <div className='flex flex-col gap-1'>

          <label>
            <span className='flex items-center gap-1'>
              <FaUser />
              Username
            </span>
          </label>

          <input
            type="text"
            name="username"
            value={values.userName}
            onChange={handleChange}
            placeholder='Enter your Email'
            className='p-2 rounded border shadow-md'
          />
          <p className='text-red-600'>
            <ErrorMessage name='username' />
          </p>
        </div>

        {/* Password */}
        <div className='flex flex-col gap-1 relative'>
          <label>
            <span className='flex items-center gap-1'>
              <RiLockPasswordFill />
              Password
            </span>
          </label>
          <input
            type={showPassword ? 'text' : 'password'} // Toggle input type based on state
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder='Enter your Password'
            className='p-2 rounded border shadow-md'
          />
          <span
            className='absolute right-1.5 top-10 cursor-pointer'
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEye /> : <FaRegEyeSlash />} {/* This is a simple eye/hidden icon toggle */}
          </span>
          <p className='text-red-600'>
            <ErrorMessage name='password' />
          </p>
        </div>

        {/* Button */}
        <div>
          <button
            className='px-4 py-2 text-white bg-sky-500 font-medium rounded-md w-full'
            type='submit'
            disabled={isSubmitting} // Disable the button while submitting
          >
            {isSubmitting ? "Logging in..." : " Login"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default Login;



