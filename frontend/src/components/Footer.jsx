// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <div>
//       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
//         <div>
//             <img src={assets.logo} className='mb-5 w-32 ' alt="" />
//             <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime non beatae ab, perferendis id velit.</p>
//         </div>
//         <div>
//             <p className='text-xl font-medium mb-5'>COMPANY</p>
//             <ul className='flex flex-col gap-1 text-gray-600'>
//                 <li>Home</li>
//                 <li>About us</li>
//                 <li>Delivery</li>
//                 <li>Privacy Policy</li>
//             </ul>
//         </div>

//         <div>
//             <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
//             <ul className='flex flex-col gap-1 text-gray-600'>
//                 <li>+91-7510185527</li>
//                 <li>contat@swiftcart.com</li>
//             </ul>
//         </div>
//       </div>

//       <div>
//         <hr />
//         <p className='py-5 text-sm text-center'>Copright 2024@swiftcart.com - All Right Reserved .</p>
//       </div>
//     </div>
//   )
// }

// export default Footer
import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 mt-20">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm">
        {/* Logo + Description */}
        <div>
          <img src={assets.logo} className="mb-5 w-36" alt="SwiftCart Logo" />
          <p className="text-gray-600 leading-relaxed text-base">
            Your trusted shopping destination for premium products, fast delivery,
            and 24/7 support.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 uppercase tracking-wide">
            Company
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-indigo-600 transition cursor-pointer">Home</li>
            <li className="hover:text-indigo-600 transition cursor-pointer">About Us</li>
            <li className="hover:text-indigo-600 transition cursor-pointer">Delivery</li>
            <li className="hover:text-indigo-600 transition cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 uppercase tracking-wide">
            Get in Touch
          </h3>
          <ul className="space-y-2 text-gray-600 text-base">
            <li className="flex items-center gap-2">
              <span className="text-xl">📞</span> +91-7510185527
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl">📧</span> contact@swiftcart.com
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200">
        <p className="py-5 text-xs sm:text-sm text-gray-500 text-center">
          © 2024 SwiftCart. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
