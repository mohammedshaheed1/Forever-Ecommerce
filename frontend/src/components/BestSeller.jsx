import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import Productitem from './Productitem';

const BestSeller = () => {

    const {products}=useContext(ShopContext);
    const [bestSeller,setBestSeller]=useState([]);

    useEffect(()=>{
        const BestProduct=products.filter((items)=>items.bestseller);
        setBestSeller(BestProduct.slice(0,5));
    },[products])

  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi odit voluptas, voluptatem alias nulla dolorum.
            </p>

        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>

            {bestSeller.map((items,index)=>(
                   <Productitem key={index} id={items._id} image={items.image} name={items.name} price={items.price}/>
            ))}

        </div>
      
    </div>
  )
}

export default BestSeller
