// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import axios from 'axios'
// import { backendURL, currency } from '../App'
// import { toast } from 'react-toastify'
// import { assets } from '../assets/assets'

// const Orders = () => {
//   const [orders, setOrders] = useState([])
//   const token = localStorage.getItem('token')
//   const fetchAllOrders = async () => {

//     if (!token) {
//       return null
//     }
//     try {
//       const response = await axios.post(backendURL + '/api/order/list', {}, { headers: { token } })
//       if (response.data.success) {
//         setOrders(response.data.orders)
//       } else {
//         toast.error(response.data.message)
//       }
//     } catch (error) {
//       console.log(error)
//       toast.error(error.message)
//     }

//   }

//   const statusHandler=async(event,orderId)=>{
//               try {
//                  const response = await axios.post(backendURL + '/api/order/status',{orderId,status:event.target.value},{headers:{token}})
//                  if(response.data.success){
//                    await fetchAllOrders()
//                  }
//               } catch (error) {
//                 console.log(error)
//                 toast.error(error.message)
//               }
//   }
//   useEffect(() => {
//     fetchAllOrders()
//   }, [token])
//   return (
//     <div>
//       <h3>Orders Page</h3>
//       <div>
//         {
//           orders.map((order, index) => (
//             <div className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700 ' key={index}>
//               <img className='w-12' src={assets.parcel_icon} alt="" />
//               <div>
//                 <div>
//                   {
//                     order.items.map((item, index) => {
//                       if (index === order.items.length - 1) {
//                         return <p className='py-0.5' key={index}>{item.name} X {item.quantity} <span>{item.size}</span> </p>
//                       } else {
//                         return <p className='py-0.5' key={index}>{item.name} X {item.quantity} <span>{item.size}</span> </p>
//                       }
//                     })
//                   }
//                 </div>
//                 <p className='mt-3 mb-2 font-medium'>{order.address.firstName + " " + order.address.lastName}</p>
//                 <div>
//                   <p>{order.address.street + ","}</p>
//                   <p>{order.address.city + "," + order.address.state + "," + order.address.country + "," + order.address.zipcode}</p>
//                 </div>
//                 <p>{order.address.phone}</p>
//               </div>
//               <div>
//                 <p className='text-sm sm:text-[15px]'>Items :{order.items.length}</p>
//                 <p className='mt-3'>Method :{order.paymentMethod}</p>
//                 <p>Payment :{order.paymen?"Done":"Pending"}</p>
//                 <p>Date :{new Date(order.date).toLocaleDateString()}</p>
//               </div>
//               <p className='text-sm sm:text-[15px]' >{currency}{order.amount}</p>
//               <select onChange={(event)=>statusHandler(event,order._id)} className='p-2 font-semibold' value={order.status}>
//                 <option value="OrderPlaced">Order Placed</option>
//                 <option value="Packing">Packing</option>
//                 <option value="Shipped">Shipped</option>
//                 <option value="Out for delivery">Out for Delivery</option>
//                 <option value="Delivered">Delivered</option>
//               </select>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default Orders
import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendURL, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post(
        backendURL + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendURL + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  const getStatusColor = (status) => {
    switch (status) {
      case "OrderPlaced":
        return "bg-blue-100 text-blue-600";
      case "Packing":
        return "bg-yellow-100 text-yellow-600";
      case "Shipped":
        return "bg-purple-100 text-purple-600";
      case "Out for delivery":
        return "bg-orange-100 text-orange-600";
      case "Delivered":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-6">Orders</h3>
      <div className="flex flex-col gap-4">
        {orders.map((order, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-5 border hover:shadow-lg transition"
          >
            {/* Top Section */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div className="flex items-center gap-3">
                <img
                  className="w-10 h-10 object-contain"
                  src={assets.parcel_icon}
                  alt="parcel"
                />
                <div>
                  <p className="text-sm text-gray-600">
                    Order ID: <span className="font-medium">{order._id}</span>
                  </p>
                  <p className="text-xs text-gray-500">
                    Date: {new Date(order.date).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className={`mt-2 sm:mt-0 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                {order.status}
              </div>
            </div>

            {/* Items List */}
            <div className="mt-4 border-t pt-3">
              {order.items.map((item, i) => (
                <p key={i} className="text-sm text-gray-700">
                  {item.name} × {item.quantity} <span className="text-gray-500">({item.size})</span>
                </p>
              ))}
            </div>

            {/* Customer Info */}
            <div className="mt-4">
              <p className="font-semibold">{order.address.firstName} {order.address.lastName}</p>
              <p className="text-gray-600 text-sm">
                {order.address.street}, {order.address.city}, {order.address.state}, {order.address.country} - {order.address.zipcode}
              </p>
              <p className="text-gray-600 text-sm">📞 {order.address.phone}</p>
            </div>

            {/* Payment & Details */}
            <div className="mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm">
              <div>
                <p>Items: {order.items.length}</p>
                <p>Method: {order.paymentMethod}</p>
                <p>
                  Payment:{" "}
                  <span className={order.payment ? "text-green-600 font-semibold" : "text-red-600"}>
                    {order.payment ? "Done" : "Pending"}
                  </span>
                </p>
              </div>
              <div className="flex flex-col sm:items-end mt-3 sm:mt-0">
                <p className="text-lg font-bold">{currency}{order.amount}</p>
                <select
                  onChange={(event) => statusHandler(event, order._id)}
                  className="mt-2 border rounded-md px-3 py-1 text-sm cursor-pointer"
                  value={order.status}
                >
                  <option value="OrderPlaced">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out for delivery">Out for Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
