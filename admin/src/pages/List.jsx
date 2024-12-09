import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {backendURL, currency} from '../App'
import { toast } from 'react-toastify';


const List = () => {
    
     const [list,setList]=useState([]);
     console.log(list)
     const token=localStorage.getItem('token')
     
     const fetchList=async()=>{

      try{
        const responce = await axios.get(backendURL + "/api/product/list")
         if(responce.data.success){
             setList(responce.data.products)
         }else{
          toast.error(responce.data.message)
         }
      }catch(error){
        console.log(error)
        toast.error(error.message)
      }
          
     }

     const removeProduct=async(id)=>{
         try{
                const responce= await axios.post(backendURL + '/api/product/remove',{id},{headers:{token}})
                if(responce.data.success){
                  toast.success(responce.data.message)
                  await fetchList();
                }else{
                  toast.error(responce.data.message)
                }
         }catch(error){
          console.log(error)
          toast.error(error.message)
         }
     }

     useEffect(()=>{
         fetchList();
     },[])

  return (
    <>
       <p className='mb-2'>All Products List</p>
       <div className='flex flex-col gap-2'>
           {/* {----List Table title------} */}
           <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b className='text-center'>Action</b>
           </div>

            {/* ---ProductList---- */}
            {
              list.map((item,index)=>(
                  <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
                      <img className='w-12' src={item.image[0]} alt="" />
                      <p>{item.name}</p>
                      <p>{item.category}</p>
                      <p>{currency}{item.price}</p>
                      <p onClick={()=>removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
                  </div>

              ))
            }
           
       </div>
    </>
  )
}

export default List
