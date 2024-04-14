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

  const handleSubmit =  (e) => {
    e.preventDefault();
    // setReload(true);
    setUpdateData(true);
    window.location.reload();
    
    try {
      updateUserProfile(displayName, image);
      setUpdateData(false);
      toast.success("Profile updated successfully");
    } catch (error) {
      setUpdateData(false);
      toast.error("Something went wrong !");
    }
  };

  return (
    <>
      <Helmet>
        <title>NS | Update Profile</title>
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
        <div className='w-1/2 mt-10 p-6 bg-white rounded-lg shadow-2xl '>
          <h2 className='text-2xl underline font-semibold text-center mb-4'>
            Update Your Profile
          </h2>

          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label htmlFor='displayEmail' className='block text-gray-700'>
                 Email:
              </label>
              <input
                type='text'
                value={user?.email || "User Email not Found"}
                
                className='mt-1 block input-lg border border-gray-500 w-full rounded-md  shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' disabled
              />
            </div>

            {/* Name */}
            <div className='mb-4'>
              <label htmlFor='displayName' className='block text-gray-700'>
                Full Name:
              </label>
              <input
                type='text'
                value={displayName}
                onChange={handleDisplayNameChange}
                className='mt-1 block input-lg border border-gray-500 w-full rounded-md  shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='image' className='block text-gray-700'>
                Image URL:
              </label>
              <input
                type='text'
                id='image'
                value={image}
                onChange={handleImageChange}
                className='mt-1 block input-lg border border-gray-500 w-full rounded-md  shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
              />
            </div>
            <button
              type='submit'
              disabled={updateData}
              className='w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:shadow-outline'>
              {updateData ? "Updating " : "Updated"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
