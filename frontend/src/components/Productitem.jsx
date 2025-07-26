// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import {Link} from 'react-router-dom'
// const Productitem = ({id,image,name,price}) => {
  
//     const {currency}=useContext(ShopContext);

//   return (
//    <Link className='text-gray cursor-pointer' to={`/product/${id}`}>
//        <div className='overflow-hidden'>
//         <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
//        </div>
//        <p className='pt-3 pb-1 text-sm'>{name}</p>
//        <p className='text-sm font-medium'>{currency}{price}</p>
//    </Link>
//   )
// }

// export default Productitem


import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const Productitem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={image[0]}
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Product Info */}
      <div className="p-3">
        <p className="text-gray-800 text-sm sm:text-base font-medium truncate group-hover:text-blue-600">
          {name}
        </p>
        <p className="text-gray-900 text-sm font-semibold mt-1">
          {currency}{price}
        </p>
      </div>
    </Link>
  );
};

export default Productitem;
