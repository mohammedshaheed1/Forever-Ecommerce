// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title'
// import Productitem from './Productitem';

// const LatestCollection = () => {

//     const { products } = useContext(ShopContext);
//     const [latestProduct,setLatestProduct]=useState([]);
//     useEffect(()=>{
//        setLatestProduct(products.slice(0,9))
//     },[products])

//     return (
//         <div className='my-10'>

//             <div className='text-center py-8 text-3xl'>
//                 <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
//                 <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, rerum vero praesentium dolorum dicta quos?</p>
//             </div>

//             {/* {Rendering Product} */}
//             <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
//                 {
//                     latestProduct.map((items,index)=>(
//                        <Productitem key={index} id={items._id} image={items.image} name={items.name} price={items.price}/>
//                     )

//                     )
//                 }
//             </div>

//         </div>
//     )
// }

// export default LatestCollection
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import Productitem from "./Productitem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    setLatestProduct(products.slice(0, 9));
  }, [products]);

  return (
    <section className="py-16 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800"><Title text1={"LATEST"} text2={"COLLECTIONS"} /></h2>
        <p className="max-w-2xl mx-auto mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
          Explore our newest arrivals carefully curated for modern style and
          comfort. Handpicked pieces that bring quality, elegance, and
          sophistication to your wardrobe.
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 sm:px-6 lg:px-8">
        {latestProduct.map((item, index) => (
          <Productitem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>

      {/* View More Button */}
      {products.length > 9 && (
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md shadow-md transition">
            View All Collections
          </button>
        </div>
      )}
    </section>
  );
};

export default LatestCollection;
