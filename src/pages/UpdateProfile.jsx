import { useState } from "react";
import useAuth from "../hook/useAuth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useAuth();
  const [displayName, setDisplayName] = useState(user.displayName || "");
  const [image, setImage] = useState(user.photoURL || "");
  const [updateData, setUpdateData] = useState(false);

  const handleDisplayNameChange = (e) => {
    setDisplayName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(updateData);
    setUpdateData(false);
    
    try {
      updateUserProfile(displayName, image);
      setUpdateData(true);
      console.log(user);
      toast.success("Profile updated successfully");

    } catch (error) {
      setUpdateData(false);
      toast.error("Something went wrong !");
    }
  };

  return (
    <>
      <Helmet>
        <title>Dreamy | Update Profile</title>
      </Helmet>
      <div className='flex flex-col justify-center items-center md:flex-row lg:flex-row md:gap-10 lg:gap-10 '>
        <div className='flex justify-center lg:justify-end items-center '>
          <img
            data-aos='zoom-in'
            data-aos-duration='1000'
            className='rounded-full  shadow-2xl size-64'
            src={image}
            alt=''
          />
        </div>
        <div className='w-full md:w-1/2 mt-10 p-6 bg-white rounded-lg shadow-2xl '>
          <h2 className='text-2xl underline font-semibold text-center mb-4'>
            Update Your Profile
          </h2>

          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='text-gray-700'> Email: </label>
              <input
                type='text'
                value={user?.email || "User Email not Found"}
                className='mt-1 input  input-lg input-bordered w-full rounded-md'
                disabled
              />
            </div>

            <div className='mb-4'>
              <label className='text-gray-700'> Full Name: </label>
              <input
                type='text'
                value={displayName}
                onChange={handleDisplayNameChange}
                className='mt-1 input-lg border border-gray-500 w-full rounded-md'
              />
            </div>
            <div className='mb-4'>
              <label className=' text-gray-700'> Image URL: </label>
              <input
                type='text'
                id='image'
                value={image}
                onChange={handleImageChange}
                className='mt-1 input-lg border border-gray-500 w-full rounded-md'
              />
            </div>
            <button
              type='submit'
              className='hover:before:bg-red border-blue-500 relative h-[50px] w-full  border bg-white px-3 text-blue-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-1000 hover:text-white hover:shadow-blue-500 hover:before:left-0 hover:before:w-full'>
              <span className='z-50 relative'>Update</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
