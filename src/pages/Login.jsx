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
        <title>Dreamy | Login</title>
      </Helmet>

      <div
        data-aos='zoom-in'
        className='mt-6 w-full mx-auto lg:w-[500px] drop-shadow-2xl bg-white p-6'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex justify-between mb-5'>
            <div className='size-36'>
              <img
                className='w-full'
                src='../../public/Dreamy_Property.png'
                alt=''
              />
            </div>
            <div className='ml-8 divider lg:divider-horizontal'></div>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='backdrop-blur-sm text-4xl text-center pb-5'>
                Login Form
              </h1>
              <p className='pb-10 text-center text-gray-400'>
                Sign in with your authorized email and password
              </p>
            </div>
          </div>
          <div className='space-y-5'>
            {/* <label htmlFor='email' className='block'>
              Email
            </label> */}
            <div className='relative mb-6 '>
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
            {/* <label htmlFor='password' className='block'>
              Password
            </label> */}
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

              <span className='absolute top-1/2 transform -translate-y-1/2 left-0 text-3xl'>
                <TbShieldLockFilled />
              </span>
            </div>
            {errors.password && (
              <p className=' text-red-500'>This field is required</p>
            )}
          </div>

          <button className='mt-6  hover:before:bg-red border-blue-500 relative h-[50px] w-full  border bg-white px-3 text-blue-500  transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-1000 hover:text-white  hover:before:left-0 hover:before:w-full'>
            <span className='z-50 relative'>Login</span>
          </button>
        </form>

        {/* Social Login */}

        <SocialLogin></SocialLogin>
      </div>
    </>
  );
};

export default Login;
