import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { MdLogout } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { FaBarsStaggered } from "react-icons/fa6";
const allLink = (
  <>
    <NavLink
      to='/'
      className={({ isActive }) =>
        isActive
          ? "text-lg mr-4 text-white underline underline-offset-8  font-semibold    px-5 py-3"
          : "text-[#131313CC] text-lg mr-4 hover:underline hover:underline-offset-8    rounded-lg font-normal px-5 py-3"
      }>
      Home
    </NavLink>

    <NavLink
      to='/updateProfile'
      className={({ isActive }) =>
        isActive
          ? "text-lg mr-4 text-white underline underline-offset-8 font-semibold    px-5 py-3"
          : "text-[#131313CC] text-lg mr-4 hover:underline hover:underline-offset-8   rounded-lg font-normal px-5 py-3"
      }>
      Update Profile
    </NavLink>

    <NavLink
      to='/sellProperty'
      className={({ isActive }) =>
        isActive
          ? "text-lg mr-4 text-white underline underline-offset-8  font-semibold    px-5 py-3"
          : "text-[#131313CC] text-lg mr-4 hover:underline hover:underline-offset-8   rounded-lg font-normal px-5 py-3"
      }>
      Sell Property
    </NavLink>
  </>
);

const Navbar = () => {
  const {logout,user}=useAuth();
  return (
    <div className='navbar bg-blue-400 '>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='lg:hidden'>
            <span className='text-4xl'>
              <FaBarsStaggered />
            </span>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-white rounded-box w-52'>
            {allLink}
          </ul>
        </div>
        <button>
          <NavLink to='/' className='text-xl md:text-2xl lg:text-3xl font-bold text-[#131313] '>
            Dreamy Property
          </NavLink>
        </button>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>{allLink}</ul>
      </div>
      <div className='navbar-end'>
        {user ? (
          <div className='dropdown dropdown-end flex justify-center items-center'>
            <div
              className='tooltip tooltip-left size-14 mr-6'
              data-tip={user?.displayName || "User Name not Available"}>
              <span className=''>
                {" "}
                <img
                  src={
                    user?.photoURL || "https://i.ibb.co/9cZ7vD2/user-icon.jpg"
                  }
                  alt='Profile'
                  className='w-full h-full object-cover rounded-full'
                />
              </span>
            </div>

            <div>
              <button
                onClick={logout}
                className=' bg-red-500 flex justify-center items-center rounded-lg text-white font-semibold py-4 px-6 mr-0'>
                Logout{" "}
                <span className='pl-2 pt-1 text-xl'>
                  <MdLogout />
                </span>
              </button>
            </div>
          </div>
        ) : (
          <Link to='/login'>
            <button className=' hover:before:bg-red rounded-lg  relative h-[50px] w-full border-2 bg-green-400 border-green-500  px-5 py-3 text-black transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:h-full before:w-0 before:bg-green-600 before:transition-all before:duration-500 hover:text-white  hover:before:left-0 hover:before:w-full'>
              <div className='flex'>
                {" "}
                <span className='z-50 relative'>Login</span>
                <span className='z-50 relative pl-2 pt-1 text-xl'>
                  <VscAccount />
                </span>
              </div>
            </button>

            {/* </button> */}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
