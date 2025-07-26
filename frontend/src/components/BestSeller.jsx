// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title';
// import Productitem from './Productitem';

// const BestSeller = () => {

//     const {products}=useContext(ShopContext);
//     const [bestSeller,setBestSeller]=useState([]);

//     useEffect(()=>{
//         const BestProduct=products.filter((items)=>items.bestseller);
//         setBestSeller(BestProduct.slice(0,5));
//     },[products])

//   return (
//     <div className='my-10'>
//         <div className='text-center text-3xl py-8'>
//             <Title text1={'BEST'} text2={'SELLERS'}/>
//             <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
//              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi odit voluptas, voluptatem alias nulla dolorum.
//             </p>

//         </div>

//         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>

//             {bestSeller.map((items,index)=>(
//                    <Productitem key={index} id={items._id} image={items.image} name={items.name} price={items.price}/>
//             ))}

//         </div>
      
//     </div>
//   )
// }

// export default BestSeller


import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import Productitem from "./Productitem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const BestProduct = products.filter((item) => item.bestseller);
    setBestSeller(BestProduct.slice(0, 5));
  }, [products]);

  return (
    <section className="my-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          <Title text1="BEST" text2="SELLERS" />
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed">
          Discover our top-selling products loved by our customers for their
          quality, style, and value. Grab them before they're gone!
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {bestSeller.map((item, index) => (
          <Productitem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <button className="px-6 py-3 bg-blue-600 text-white text-sm sm:text-base font-medium rounded-full shadow-md hover:bg-blue-700 transition-all duration-300">
          View All Bestsellers
        </button>
      </div>
    </section>
  );
};

export default BestSeller;
