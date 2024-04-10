
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAuth from "../hook/useAuth";


const Register = () => {
   const {createUser}=useAuth();

   const { register,  handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = (data) => {
    const {email,password}=data
    createUser(email,password)
    .then(result =>{
        console.log(result);
    })
  }
    return (
      <div>
        <Helmet>
          <title>NS | Register</title>
        </Helmet>
        <div className='w-full max-w-md mx-auto p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800'>
          <h1 className='text-2xl font-bold text-center'>Register</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate=''
            action=''
            className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='username' className='block text-gray-600'>
                Full Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name'
                className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-default-600'
                {...register("fullName", { required: true })}
              />
              {errors.fullName && (
                <span className='text-red-500'>This field is required</span>
              )}
            </div>
            <label htmlFor='password' className='block text-gray-600'>
              Email
            </label>
            <input
              type='text'
              name='email'
              placeholder='Enter your mail'
              className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-default-600'
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className='text-red-500'>This field is required</span>
            )}
            <label htmlFor='password' className='block text-gray-600'>
              Photo Url
            </label>
            <input
              type='text'
              name='text'
              placeholder='Photo Url'
              className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-default-600'
              {...register("image")}
            />

            <div className='space-y-1 text-sm'>
              <label htmlFor='password' className='block text-gray-600'>
                Password
              </label>
              <input
                type='password'
                name='password'
                placeholder='Password'
                className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-default-600'
                {...register("password")}
              />
            </div>
            <button className='block w-full p-3 text-center rounded-sm text-white bg-blue-600 font-semibold '>
              Register
            </button>
          </form>
          <p>
            Already Registered{" "}
            <Link className='text-blue-500 underline' to='/login'>
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    );
};

export default Register;