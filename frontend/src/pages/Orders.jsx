// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title';
// import axios from 'axios';
// import api from '../utils/axiosInstance';


// const Orders = () => {

//   const {currency,token}=useContext(ShopContext);
//   const [orderData,setOrderData]=useState([])

//   const loadOrderData=async()=>{
//     try {
//         if(!token){
//           return null
//         }

//         const response=await api.post('/api/order/userorders',{},{headers:{token}})
//         if(response.data.success){
//           let allOrdersItem=[]
//           response.data.orders.map((order)=>{
//                   order.items.map((item)=>{
//                      item['status']=order.status;
//                      item['payment']=order.payment
//                      item['paymentMethod']=order.paymentMethod
//                      item['date']=order.date
//                      allOrdersItem.push(item)
//                   })
//           })
//           setOrderData(allOrdersItem.reverse())
//         }
//     } catch (error) {
      
//     }
//   }

//   useEffect(()=>{
//      loadOrderData()
//   },[token])


//   return (
//     <div className='border-t pt-16'>
//          <div className='text-2xl'>
//              <Title text1={'MY'} text2={'ORDERS'}/>
//          </div>

//          <div>
//            {
//             orderData.slice(1,4).map((item,index)=>(
//               <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>

//                 <div className='flex items-start gap-6 text-sm '>
//                    <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
//                    <div>
//                      <p className='sm:text-base font-medium'>{item.name}</p>
//                      <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
//                         <p >{currency}{item.price}</p>
//                         <p>Quantity: {item.quantity}</p>
//                         <p>Size: {item.size}</p>
//                      </div>
//                      <p className='mt-2'>Date: <span className='text-gray-400'>{new Date(item.date).toDateString()}</span></p>
//                      <p className='mt-2'>Payment: <span className='text-gray-400'>{item.paymentMethod}</span></p>
//                     </div>
//                 </div>
//                  <div className='md:w-1/2 flex justify-between'>
//                       <div className='flex items-center gap-2'>
//                         <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
//                         <p className='text-sm md:text-base'>{item.status}</p>
//                       </div>
//                       <button onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Orders</button>
//                  </div>
//               </div>
//             ))
//            }
//          </div>
//     </div>
//   )
// }

// export default Orders


import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import api from "../utils/axiosInstance";

const Orders = () => {
  const { currency, token } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const response = await api.post(
        "/api/order/userorders",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            item.status = order.status;
            item.payment = order.payment;
            item.paymentMethod = order.paymentMethod;
            item.date = order.date;
            allOrdersItem.push(item);
          });
        });
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.error("Error loading orders:", error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16 max-w-5xl mx-auto px-4">
      {/* --- Page Title --- */}
      <div className="text-3xl font-bold mb-10 text-center">
        <Title text1="MY" text2="ORDERS" />
      </div>

      {/* --- Orders List --- */}
      <div className="space-y-6">
        {orderData.slice(0, 5).map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* --- Left: Product Info --- */}
            <div className="flex items-start gap-5">
              <img
                className="w-20 h-20 object-cover rounded-lg border"
                src={item.image[0]}
                alt={item.name}
              />
              <div>
                <p className="text-base sm:text-lg font-semibold text-gray-900">
                  {item.name}
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-700 text-sm sm:text-base">
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <p>Qty: {item.quantity}</p>
                  <p>Size: {item.size}</p>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Date:{" "}
                  <span className="text-gray-500">
                    {new Date(item.date).toDateString()}
                  </span>
                </p>
                <p className="text-sm text-gray-600">
                  Payment:{" "}
                  <span className="text-gray-500">{item.paymentMethod}</span>
                </p>
              </div>
            </div>

            {/* --- Right: Status + Button --- */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full md:w-auto gap-3">
              <div className="flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full ${
                    item.status === "Delivered"
                      ? "bg-green-500"
                      : item.status === "Shipped"
                      ? "bg-blue-500"
                      : "bg-yellow-500"
                  }`}
                ></span>
                <p className="text-sm sm:text-base font-medium text-gray-800">
                  {item.status}
                </p>
              </div>
              <button
                onClick={loadOrderData}
                className="bg-gray-900 text-white text-sm px-5 py-2 rounded-lg hover:bg-black transition-colors"
              >
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
