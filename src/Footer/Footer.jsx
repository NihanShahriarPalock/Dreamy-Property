import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='mt-10'>
      <footer className='w-full text-gray-700 bg-gray-100 '>
        <div className='py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center '>
          <div className=' mb-3 md:mb-3 lg:mb-0 flex flex-col items-center justify-around '>
            <p className=' text-black font-semibold text-3xl'>NS Property</p>
            <p className=' text-gray-800 text-2xl font-medium'>
              Find Your Dream Property
            </p>
            <p className='text-gray-600 text-xl'>Location: Sector-13, Road-09, Uttara Dhaka</p>
          </div>

          <div className='w-full '>
            <h2 className='mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font text-center'>
              About
            </h2>
            <nav className='mb-10 list-none flex flex-col items-center'>
              <li className='mt-3'>
                <a className='text-gray-500 cursor-pointer hover:text-gray-900'>
                  Company
                </a>
              </li>
              <li className='mt-3'>
                <a className='text-gray-500 cursor-pointer hover:text-gray-900'>
                  Careers
                </a>
              </li>
              <li className='mt-3'>
                <a className='text-gray-500 cursor-pointer hover:text-gray-900'>
                  Blog
                </a>
              </li>
            </nav>
          </div>

          <div className='w-full '>
            <h2 className='mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font text-center'>
              Platform
            </h2>
            <nav className='mb-10 list-none flex flex-col items-center'>
              <li className='mt-3'>
                <a className='text-gray-500 cursor-pointer hover:text-gray-900'>
                  Terms &amp; Privacy
                </a>
              </li>
              <li className='mt-3'>
                <a className='text-gray-500 cursor-pointer hover:text-gray-900'>
                  Pricing
                </a>
              </li>
              <li className='mt-3'>
                <a className='text-gray-500 cursor-pointer hover:text-gray-900'>
                  FAQ
                </a>
              </li>
            </nav>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='bg-[#202020] '>
          <div className='container p-3 mx-auto flex justify-evenly'>
            <div className='text-sm text-white capitalize'>
              <p>
                {" "}
                &copy;{" "}
                <span className='text-gray-600'>
                  2024, All rights reserved
                </span>{" "}
                - NS Property
              </p>
              <p>
                <span className='text-gray-600'>Developed By</span> - Nihan
                Shahriar
              </p>
            </div>
            <div className='flex flex-row items-center gap-6 text-2xl text-white cursor-pointer'>
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
