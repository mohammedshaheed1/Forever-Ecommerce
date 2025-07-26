// import React from 'react'
// import { assets } from '../assets/assets'

// const OurPolicy = () => {
//   return (
//     <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
//       <div>
//         <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
//         <p className='font-semibold'>Easy Exchange Policy</p>
//         <p className='text-gray-400'>We Provide hussle free Exchange Policy</p>
//       </div>
//       <div>
//         <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
//         <p className='font-semibold'>7 Days Return Policy</p>
//         <p className='text-gray-400'>We Provide 7 Days free Exchange Policy</p>
//       </div>
//       <div>
//         <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
//         <p className='font-semibold'>Best Customer Support</p>
//         <p className='text-gray-400'>We Provide 24/7 Customer Support</p>
//       </div>
//     </div>
//   )
// }

// export default OurPolicy
import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  const policies = [
    {
      icon: assets.exchange_icon,
      title: "Easy Exchange Policy",
      desc: "Seamless and hassle-free product exchanges.",
    },
    {
      icon: assets.quality_icon,
      title: "7 Days Return Policy",
      desc: "Quick returns within 7 days of purchase.",
    },
    {
      icon: assets.support_img,
      title: "24/7 Customer Support",
      desc: "Always here to help, anytime you need.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {policies.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-14 mx-auto mb-5 transition-transform group-hover:scale-110"
              />
              <h3 className="font-semibold text-lg text-gray-800">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPolicy;
