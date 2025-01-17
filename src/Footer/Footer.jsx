import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='mt-10 mb-2'>
      <footer className='w-full text-gray-700 bg-[#181818] '>
        <div className='py-5 px-5 lg:px-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 '>
          <div className=' '>
            <img
              className='size-40 w-96 pl-0 md:pl-56 lg:pl-0 '
              src='https://i.ibb.co/SQd0HcX/Dreamy-Property.png'
              alt=''
            />
          </div>

          <div className='w-full pl-40 md:pl-72 lg:pl-0 '>
            <h2 className='mb-3 text-sm font-medium tracking-widest text-white uppercase title-font  underline'>
              About
            </h2>
            <nav className='mb-10 list-none flex flex-col'>
              <li className='mt-3'>
                <a className='text-[#c2c4c4] cursor-pointer  hover:text-white hover:underline'>
                  Company
                </a>
              </li>
              <li className='mt-3'>
                <a className='text-[#c2c4c4] cursor-pointer  hover:text-white hover:underline'>
                  Careers
                </a>
              </li>
              <li className='mt-3'>
                <a className='text-[#c2c4c4] cursor-pointer hover:text-white hover:underline'>
                  Blog
                </a>
              </li>
            </nav>
          </div>

          <div className='w-full pl-40 md:pl-72 lg:pl-0  '>
            <h2 className='mb-3 text-sm font-medium tracking-widest text-white uppercase title-font  underline'>
              Platform
            </h2>
            <nav className='mb-10 list-none flex flex-col  '>
              <li className='mt-3'>
                <a className='text-[#c2c4c4] cursor-pointer hover:text-white hover:underline'>
                  Terms &amp; Privacy
                </a>
              </li>
              <li className='mt-3'>
                <a className='text-[#c2c4c4] cursor-pointer hover:text-white hover:underline'>
                  Pricing
                </a>
              </li>
              <li className='mt-3'>
                <a className='text-[#c2c4c4] cursor-pointer hover:text-white hover:underline'>
                  FAQ
                </a>
              </li>
            </nav>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='bg-[#202020] '>
          <div className='container px-5  lg:px-20 flex flex-col md:flex-row justify-between'>
            <div className='text-sm text-white capitalize'>
              <p>
                {" "}
                &copy;{" "}
                <span className='text-gray-600'>
                  2024, All rights reserved
                </span>{" "}
                - Dreamy Property
              </p>
              <p>
                <span className='text-gray-600'>Developed By</span> - Nihan
                Shahriar
              </p>
            </div>
            <div className='flex flex-row items-center mt-2 md:mt-0 gap-6 text-2xl text-white cursor-pointer'>
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
