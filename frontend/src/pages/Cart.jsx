// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title';
// import { assets } from '../assets/assets';
// import CartTotal from '../components/CartTotal';

// const Cart = () => {

//   const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {

//     if (products.length > 0) {
//       const tempData = [];
//       for (const items in cartItems) {
//         for (const item in cartItems[items]) {
//           if (cartItems[items][item] > 0) {
//             tempData.push({
//               _id: items,
//               size: item,
//               quantity: cartItems[items][item],
//             })
//           }
//         }
//       }
//       setCartData(tempData)
//     }
//   }, [cartItems, products])


//   return (
//     <div className='border-t pt-14'>
//       <div className='text-2xl mb-3 '>
//         <Title text1={'YOUR'} text2={'CART'} />
//       </div>
//       <div>
//         {
//           cartData.map((item, index) => {
//             const productData = products.find((product) => product._id === item._id);
//             return (
//               <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>

//                 <div className='flex items-start gap-6'>
//                   <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
//                   <div>
//                     <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
//                     <div className='flex items-center gap-5 mt-2'>
//                       <p>{currency}{productData.price}</p>
//                       <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
//                     </div>
//                   </div>
//                 </div>
//                 <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
//                 <img onClick={() => updateQuantity(item._id, item.size, 0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
//               </div>
//             )
//           })
//         }
//       </div>
//       <div className='flex justify-end my-20'>
//         <div className='w-full sm:w-[450px]'>
//           <CartTotal />
//           <div className='w-full text-end'>
//             <button onClick={() => navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Cart
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="border-t pt-14 max-w-6xl mx-auto px-4">
      {/* --- Title --- */}
      <div className="text-3xl font-bold mb-6 text-center">
        <Title text1="YOUR" text2="CART" />
      </div>

      {/* --- Cart Items --- */}
      <div className="space-y-6">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={index}
              className="border rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Product Info */}
              <div className="flex items-start gap-5">
                <img
                  className="w-20 h-20 object-cover rounded-md border"
                  src={productData.image[0]}
                  alt={productData.name}
                />
                <div>
                  <p className="text-base sm:text-lg font-semibold text-gray-900">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-gray-700">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <span className="px-3 py-1 border rounded-md bg-gray-50 text-sm">
                      {item.size}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quantity + Remove */}
              <div className="flex items-center gap-4 sm:gap-6">
                <input
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(
                          item._id,
                          item.size,
                          Number(e.target.value)
                        )
                  }
                  className="w-14 sm:w-20 border rounded-md px-2 py-1 text-center text-sm"
                />
                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className="w-5 cursor-pointer hover:scale-110 transition-transform"
                  src={assets.bin_icon}
                  alt="Remove"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* --- Cart Total --- */}
      <div className="flex justify-end my-12">
        <div className="w-full sm:w-[400px] border rounded-xl p-6 shadow-md bg-white">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-black text-white text-sm mt-6 px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors w-full sm:w-auto"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
