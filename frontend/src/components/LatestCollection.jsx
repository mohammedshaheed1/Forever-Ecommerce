import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import Productitem from './Productitem';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProduct,setLatestProduct]=useState([]);
    useEffect(()=>{
       setLatestProduct(products.slice(0,9))
    },[products])

    return (
        <div className='my-10'>

            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, rerum vero praesentium dolorum dicta quos?</p>
            </div>

            {/* {Rendering Product} */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestProduct.map((items,index)=>(
                       <Productitem key={index} id={items._id} image={items.image} name={items.name} price={items.price}/>
                    )

                    )
                }
            </div>

        </div>
    )
}

export default LatestCollection
