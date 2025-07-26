// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import {backendURL, currency} from '../App'
// import { toast } from 'react-toastify';


// const List = () => {
    
//      const [list,setList]=useState([]);
//      console.log(list)
//      const token=localStorage.getItem('token')
     
//      const fetchList=async()=>{

//       try{
//         const responce = await axios.get(backendURL + "/api/product/list")
//          if(responce.data.success){
//              setList(responce.data.products)
//          }else{
//           toast.error(responce.data.message)
//          }
//       }catch(error){
//         console.log(error)
//         toast.error(error.message)
//       }
          
//      }

//      const removeProduct=async(id)=>{
//          try{
//                 const responce= await axios.post(backendURL + '/api/product/remove',{id},{headers:{token}})
//                 if(responce.data.success){
//                   toast.success(responce.data.message)
//                   await fetchList();
//                 }else{
//                   toast.error(responce.data.message)
//                 }
//          }catch(error){
//           console.log(error)
//           toast.error(error.message)
//          }
//      }

//      useEffect(()=>{
//          fetchList();
//      },[])

//   return (
//     <>
//        <p className='mb-2'>All Products List</p>
//        <div className='flex flex-col gap-2'>
//            {/* {----List Table title------} */}
//            <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
//             <b>Image</b>
//             <b>Name</b>
//             <b>Category</b>
//             <b>Price</b>
//             <b className='text-center'>Action</b>
//            </div>

//             {/* ---ProductList---- */}
//             {
//               list.map((item,index)=>(
//                   <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
//                       <img className='w-12' src={item.image[0]} alt="" />
//                       <p>{item.name}</p>
//                       <p>{item.category}</p>
//                       <p>{currency}{item.price}</p>
//                       <p onClick={()=>removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
//                   </div>

//               ))
//             }
           
//        </div>
//     </>
//   )
// }

// export default List
import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendURL, currency } from "../App";
import { toast } from "react-toastify";

const List = () => {
  const [list, setList] = useState([]);
  const token = localStorage.getItem("token");

  const fetchList = async () => {
    try {
      const response = await axios.get(backendURL + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendURL + "/api/product/remove",
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4">All Products</h2>

      {/* Desktop Table Header */}
      <div className="hidden md:grid grid-cols-[80px_2fr_1fr_1fr_100px] items-center px-4 py-2 bg-gray-100 border rounded-t-lg text-sm font-medium sticky top-0">
        <span>Image</span>
        <span>Name</span>
        <span>Category</span>
        <span>Price</span>
        <span className="text-center">Action</span>
      </div>

      {/* Product List */}
      <div className="flex flex-col">
        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[80px_2fr_1fr_1fr_100px] md:grid-cols-[80px_2fr_1fr_1fr_100px] items-center px-4 py-3 border-b hover:bg-gray-50 transition text-sm"
          >
            <img className="w-14 h-14 object-cover rounded-md" src={item.image[0]} alt={item.name} />
            <p className="truncate">{item.name}</p>
            <p>{item.category}</p>
            <p>{currency}{item.price}</p>
            <button
              onClick={() => removeProduct(item._id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs mx-auto"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Mobile View: Card Layout */}
      <div className="md:hidden flex flex-col gap-4 mt-4">
        {list.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-3 shadow-sm bg-white flex flex-col gap-2"
          >
            <div className="flex items-center gap-3">
              <img className="w-16 h-16 object-cover rounded" src={item.image[0]} alt={item.name} />
              <div className="flex flex-col">
                <span className="font-semibold">{item.name}</span>
                <span className="text-gray-500 text-sm">{item.category}</span>
              </div>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="font-medium text-gray-700">{currency}{item.price}</span>
              <button
                onClick={() => removeProduct(item._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
