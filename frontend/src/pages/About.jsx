// import React from 'react'
// import Title from '../components/Title'
// import { assets } from '../assets/assets'
// import NewsLetterBox from '../components/NewsLetterBox'

// const About = () => {
//   return (
//     <div>
//        <div className='text-2xl text-center pt-8 border-t'>
//           <Title text1={'ABOUT'} text2={'US'}/>
//        </div>

//        <div className='my-10 flex flex-col md:flex-row gap-16'>
//          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
//          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
//             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae aperiam tempore ullam ipsam suscipit. Aliquid autem minima iste fugit cumque, ducimus a sed veniam? Quasi vitae qui ipsa omnis fuga!</p>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum itaque minima quia, impedit dolores, adipisci voluptas blanditiis, aliquam voluptatibus dignissimos. Eaque minus atque corporis laborum delectus. Rerum totam reprehenderit cupiditate voluptates? Saepe id vel animi in culpa officiis mollitia aut, sapiente quod veniam, corrupti molestias eligendi quidem incidunt impedit!</p>
//             <b className='text-gray-800'>Our Mission</b>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam iure repudiandae aut minima, consequatur nulla?</p>
//          </div>
//        </div>

//        <div className='text-xl py-4'>
//           <Title text1={'WHy'} text2={'CHOOSE US'}/>
//        </div>
//        <div className='flex flex-col md:flex-row text-sm mb-20'>
//           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
//              <b>Quality Assurance:</b>
//              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, quibusdam reiciendis similique inventore aut totam.</p>
//           </div>
//           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
//              <b>Convenience:</b>
//              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, quibusdam reiciendis similique inventore aut totam.</p>
//           </div>
//           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
//              <b>Exceptional Customer Service:</b>
//              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, quibusdam reiciendis similique inventore aut totam.</p>
//           </div>
//        </div>
//        <NewsLetterBox/>
//     </div>
//   )
// }

// export default About
import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* --- Header Section --- */}
      <div className="text-3xl font-bold text-center pt-10 border-t border-gray-200">
        <Title text1="ABOUT" text2="US" />
      </div>

      {/* --- About Content --- */}
      <div className="my-12 flex flex-col md:flex-row gap-12 items-center">
        <img
          className="w-full md:max-w-[450px] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          src={assets.about_img}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-700 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            aperiam tempore ullam ipsam suscipit. Aliquid autem minima iste
            fugit cumque, ducimus a sed veniam? Quasi vitae qui ipsa omnis fuga!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            earum itaque minima quia, impedit dolores, adipisci voluptas
            blanditiis, aliquam voluptatibus dignissimos. Eaque minus atque
            corporis laborum delectus. Rerum totam reprehenderit cupiditate
            voluptates? Saepe id vel animi in culpa officiis mollitia aut,
            sapiente quod veniam, corrupti molestias eligendi quidem incidunt
            impedit!
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam iure
            repudiandae aut minima, consequatur nulla?
          </p>
        </div>
      </div>

      {/* --- Why Choose Us --- */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">
          <Title text1="WHY" text2="CHOOSE US" />
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          {
            title: "Quality Assurance",
            desc: "We ensure every product meets the highest standards of quality.",
          },
          {
            title: "Convenience",
            desc: "Easy shopping experience with fast delivery and smooth checkout.",
          },
          {
            title: "Exceptional Customer Service",
            desc: "Dedicated support team to help you anytime you need assistance.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="border rounded-xl bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col gap-4 text-center"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* --- Newsletter Box --- */}
      <NewsLetterBox />
    </div>
  );
};

export default About;
