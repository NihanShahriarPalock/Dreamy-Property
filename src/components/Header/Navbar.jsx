import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const allLink = (
  <>
    <NavLink
      to='/'
      className={({ isActive }) =>
        isActive
          ? "text-lg mr-4 text-[#23BE0A] font-semibold rounded-lg border border-[#23BE0A] px-5 py-3"
          : "text-[#131313CC] text-lg mr-4 rounded-lg font-normal  px-5 py-3"
      }>
      Home
    </NavLink>

    <NavLink
      to='/updateProfile'
      className={({ isActive }) =>
        isActive
          ? "text-lg mr-4 text-[#23BE0A] font-semibold  rounded-lg border border-[#23BE0A] px-5 py-3"
          : "text-[#131313CC] text-lg mr-4 rounded-lg font-normal px-5 py-3"
      }>
      Update Profile
    </NavLink>

    <NavLink
      to='/faq'
      className={({ isActive }) =>
        isActive
          ? "text-lg mr-4 text-[#23BE0A] font-semibold  rounded-lg border border-[#23BE0A] px-5 py-3"
          : "text-[#131313CC] text-lg mr-4 rounded-lg font-normal px-5 py-3"
      }>
      FAQ
    </NavLink>
    <NavLink
      to='/contact'
      className={({ isActive }) =>
        isActive
          ? "text-lg mr-4 text-[#23BE0A] font-semibold  rounded-lg border border-[#23BE0A] px-5 py-3"
          : "text-[#131313CC] text-lg mr-4 rounded-lg font-normal px-5 py-3"
      }>
      Contact Us
    </NavLink>
  </>
);

const Navbar = () => {
  const {logout,user}=useAuth();
  return (
    <div className='navbar bg-white '>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52'>
            {allLink}
          </ul>
        </div>
        <button>
          <NavLink to='/' className='text-3xl font-bold text-[#131313] '>
            NS Property
          </NavLink>
        </button>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>{allLink}</ul>
      </div>
      <div className='navbar-end'>
        {user ? (
          <div className='dropdown dropdown-end flex'>
            <label tabIndex={0} className='btn btn-circle avatar'>
              <div
                className='w-10 rounded-full tooltip'
                data-tip={user?.displayName || "User Name not Available"}>
                <img
                  src={
                    user?.photoURL || "https://i.ibb.co/9cZ7vD2/user-icon.jpg"
                  }
                  alt='Profile'
                  className='w-full h-full object-cover rounded-full'
                />
              </div>
            </label>
            <div>
              <button
                onClick={logout}
                className='btn bg-red-500  rounded-lg text-white font-semibold py-4 px-6 mr-0'>
                Logout
              </button>
            </div>
            {/* <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-auto lg:w-52'>
              <li>
                <button className='btn btn-sm  btn-ghost'>
                  {user?.displayName || "User Name not Available"}
                </button>
              </li>
              <li></li>
            </ul> */}
          </div>
        ) : (
          <Link to='/login'>
            <button className='btn bg-[#23BE0A] rounded-lg text-white font-semibold py-4 px-6 mr-0'>
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
