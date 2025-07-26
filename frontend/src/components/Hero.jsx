// import React from 'react'
// import { assets } from '../assets/assets'

// const Hero = () => {
//   return (
//     <div className='flex flex-col sm:flex-row border border-gray-400'>

//         {/* {Hero left side} */}
//         <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
//              <div className='text-[#414141]'>
//                 <div className='flex items-center gap-2'>
//                     <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//                     <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
//                 </div>
//                 <h1 className='.prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
//                 <div className='flex items-center gap-2'>
//                    <p className='font-semibold text-sm  md:text-base'>SHOP NOW</p>
//                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
//                 </div>
//              </div>
//         </div>

//         {/* {Hero Right Side} */}
//         <img className='w-full sm:w-1/2' src={assets.download} alt="" />
      
//     </div>
//   )
// }

// export default Hero
import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section className="relative bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 sm:px-12 py-12 sm:py-20">
        
        {/* LEFT SIDE */}
        <div className="w-full sm:w-1/2 text-center sm:text-left">
          {/* Small Badge */}
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
            <span className="w-10 sm:w-12 h-[2px] bg-gray-700"></span>
            <p className="text-gray-600 font-medium text-sm sm:text-base tracking-wide">
              OUR BESTSELLERS
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Discover Our <span className="text-blue-600">Latest Arrivals</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-md mx-auto sm:mx-0">
            Upgrade your style with our handpicked collection. Premium quality,
            timeless designs, and exclusive deals you won’t want to miss.
          </p>

          {/* CTA Button */}
          <div className="flex items-center justify-center sm:justify-start gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md shadow-md transition">
              Shop Now
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-md font-medium transition">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full sm:w-1/2 mt-10 sm:mt-0">
          <img
            src={assets.download}
            alt="Hero Banner"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
