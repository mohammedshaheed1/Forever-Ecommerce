// import React from 'react'

// const NewsLetterBox = () => {
//     const onSubmitHandler=(event)=>{
//          event.preventDefault()
//     }
//   return (
//     <div className='text-center'>
//        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
//        <p className='text-gray-400 mt-3'>
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, nobis.
//        </p>
//        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
//         <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />
//         <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
//        </form>
//     </div>
//   )
// }

// export default NewsLetterBox


import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    // Add your logic (API call, success message, etc.)
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-2xl mx-auto text-center px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Subscribe & Get <span className="text-indigo-600">20% Off</span>
        </h2>
        <p className="text-gray-500 mt-3 text-sm sm:text-base">
          Join our newsletter to receive exclusive offers, the latest trends,
          and style tips.
        </p>

        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col sm:flex-row items-center gap-3 mt-8 bg-white p-2 rounded-full shadow-md border border-gray-200"
        >
          <input
            className="flex-1 px-5 py-3 rounded-full outline-none text-gray-700 placeholder-gray-400"
            type="email"
            placeholder="Enter your email address"
            required
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-md"
          >
            Subscribe
          </button>
        </form>

        <p className="text-xs text-gray-400 mt-3">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsLetterBox;
