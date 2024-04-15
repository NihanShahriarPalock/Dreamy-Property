import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../components/body/SocialLogin";
import useAuth from "../hook/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { TbShieldLockFilled } from "react-icons/tb";
import { TbMailFilled } from "react-icons/tb";


const Login = () => {
  const { signInUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
 

  // for navigation
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    signInUser(email, password)
      .then((result) => {
        if (result.user) {
          toast.success("Login Successful");
          navigate(from);
        }
      })
      .catch(() => {
        toast.error("Login Failed!");
      });
  };

  return (
    <>
      <Helmet>
        <title>NS | Login</title>
      </Helmet>

      <div className='w-full mx-auto lg:w-[500px] drop-shadow-2xl bg-white p-6'>
        <form onSubmit={handleSubmit(onSubmit)} className=' '>
          <h1 className='backdrop-blur-sm text-4xl text-center pb-5'>
            Login Form
          </h1>
          <p className='pb-10 text-center text-gray-400'>
            Sign in with your authorized email and password
          </p>
          <div className='space-y-5'>
            <label htmlFor='email' className='block'>
              Email
            </label>
            <div className='relative'>
              <input
                name='email'
                type='email'
                placeholder='Enter Your Email'
                className='p-3 block w-full pl-10 drop-shadow-lg outline-none'
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className='text-red-500'>This field is required</span>
              )}
              <span className='absolute top-1/4 left-0 text-3xl'>
                <TbMailFilled />
              </span>
            </div>
            <label htmlFor='password' className='block'>
              Password
            </label>
            <div className='relative flex items-center'>
              <input
                name='password'
                type={showPassword ? "text" : "password"}
                placeholder='Enter Your Password'
                className='p-3 block w-full pl-10 pr-10 drop-shadow-lg outline-none'
                {...register("password", { required: true })}
              />
              <span
                className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              {errors.password && (
                <span className='text-red-500'>This field is required</span>
              )}
              <span className='absolute top-1/2 transform -translate-y-1/2 left-0 text-3xl'>
                <TbShieldLockFilled />
              </span>
            </div>
          </div>

          <button className='py-2 px-5 w-full text-white hover:text-blue-500 mb-4 mt-6 shadow-lg before:block before:-left-1 before:-top-1 before:bg-blue-500 before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-blue-500 after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-blue-500 hover:bg-white relative inline-block'>
            Login
          </button>
        </form>

        {/* Social Login */}

        <SocialLogin></SocialLogin>
      </div>
    </>
  );
};

export default Login;
