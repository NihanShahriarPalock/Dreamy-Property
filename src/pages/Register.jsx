import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAuth from "../hook/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, updateUserProfile, setUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const [registerError, setRegisterError] = useState("");

  // for navigation
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { email, password, image, fullName } = data;
    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("Password less than 6 character");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setRegisterError("Password must contain at least one uppercase letter");
      return false;
    }

    if (!/[a-z]/.test(password)) {
      setRegisterError("Password must contain at least one lowercase letter");
      return false;
    }

    //Create User and update profile
    createUser(email, password)
      .then(() => {
        updateUserProfile(fullName, image)
          .then(() => {
            setUser({ displayName: fullName, photoURL: image });
            toast.success(`Welcome ${fullName}`);
            navigate("/");
            // window.location.reload();
          })
          .catch((error) => {
            console.error(error);
            toast.error("Registration Failed!");
            setRegisterError(error.message);
          });
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
        toast.error("Registration Incomplete!");
      });
  };
  return (
    <div>
      <Helmet>
        <title>Dreamy | Register</title>
      </Helmet>
      <div
        data-aos='zoom-in'
        className='mt-6 w-full mx-auto lg:w-[500px] drop-shadow-2xl bg-white p-6'>
        <h1 className='backdrop-blur-sm text-4xl text-center pb-5'>
          Register Form
        </h1>
        <p className='pb-10 text-center text-gray-400'>
          Fill up all the information to register
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=''
          action=''
          className='space-y-5'>
          <div className='space-y-1 text-sm'>
            <label htmlFor='username' className='block text-gray-600'>
              Full Name
            </label>
            <input
              type='text'
              name='name'
              placeholder='Enter Your Name'
              className='w-full px-4 py-3 rounded-md  bg-gray-50 text-gray-800 drop-shadow-lg outline-none'
              {...register("fullName")}
            />
            {errors.fullName && (
              <span className='text-red-500'>This field is required</span>
            )}
          </div>
          <div className='space-y-1 text-sm'>
            <label htmlFor='email' className='block text-gray-600'>
              Email
            </label>
            <input
              type='email'
              name='email'
              placeholder='Enter Your Mail'
              className='w-full px-4 py-3 rounded-md  bg-gray-50 text-gray-800 drop-shadow-lg outline-none'
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className='text-red-500'>This field is required</span>
            )}
          </div>
          <div className='space-y-1 text-sm'>
            <label htmlFor='Photo' className='block text-gray-600 '>
              Photo Url
            </label>
            <input
              type='text'
              placeholder='Photo Url'
              className='w-full px-4 py-3 rounded-md bg-gray-50 text-gray-800 drop-shadow-lg outline-none'
              {...register("image")}
            />
          </div>
          <div className='space-y-1 text-sm'>
            <label htmlFor='password' className='block text-gray-600'>
              Password
            </label>
            <div className='flex items-center justify-between'>
              <input
                type={showPassword ? "text" : "password"}
                name='password'
                placeholder='Password'
                className='w-full px-4 py-3 rounded-md bg-gray-50 text-gray-800 drop-shadow-lg outline-none'
                {...register("password", { required: true })}
              />
              <span
                className='cursor-pointer '
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
            {registerError && <h2 className='text-red-600'>{registerError}</h2>}
          </div>

          <button className='hover:before:bg-red border-blue-500 relative h-[50px] w-full  border bg-white px-3 text-blue-500  transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-1000 hover:text-white  hover:before:left-0 hover:before:w-full'>
            <span className='z-50 relative'>Register</span>
          </button>
        </form>

        <p className='text-center mt-4'>
          Already Registered ?{" "}
          <Link className='text-blue-500 hover:underline underline-offset-4' to='/login'>
            Click to Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
