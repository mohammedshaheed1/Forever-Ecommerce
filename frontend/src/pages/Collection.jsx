// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { assets } from '../assets/assets';
// import Title from '../components/Title';
// import Productitem from '../components/Productitem';

// const Collection = () => {
//   const {products,search,setSearch,showSearch}=useContext(ShopContext);
//   const [showFilter,setShowFilter]=useState(false)
//   const [filterProduct,setFilterProduct]=useState([])
//   const [category,setCategoty]=useState([]);
//   const [subCategory,setSubCategory]=useState([])
//   const [sortType,setSortType]=useState('relavent')

//   const toggleCategory=(e)=>{

//     if(category.includes(e.target.value)){
//       setCategoty((prev)=>setCategoty(prev.filter((item)=>item!==e.target.value)))
//     }else{
//       setCategoty((prev)=>[...prev,e.target.value])
//     }

//   }

//   const toggleSubCategory=(e)=>{
//     if(subCategory.includes(e.target.value)){
//       setSubCategory((prev)=>setSubCategory(prev.filter((item)=>item!==e.target.value)))
//     }else{
//       setSubCategory((prev)=>[...prev,e.target.value])
//     }

//   }

//   const applyFilter=()=>{
//     let productsCopy=products.slice()

//     if(showSearch && search){
//       productsCopy=productsCopy.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()))
//     }
//     if(category.length>0){
//       productsCopy=productsCopy.filter((item)=>category.includes(item.category))
//     }
//     if(subCategory.length>0){
//       productsCopy=productsCopy.filter((item)=>subCategory.includes(item.subCategory))
//     }
//     setFilterProduct(productsCopy)
//   }

//   const sortProducts=()=>{
//     let fpcopy=filterProduct.slice()
//     switch(sortType){
//       case 'low-high':
//            setFilterProduct(fpcopy.sort((a,b)=>a.price - b.price))
//            break

//       case 'high-low':
//            setFilterProduct(fpcopy.sort((a,b)=>b.price - a.price))
//            break;
//       default:
//           applyFilter()
//           break;
//     }
//   }

//   useEffect(()=>{
//     applyFilter();
//   },[category,subCategory,search,showSearch,products])

//   useEffect(()=>{
//      sortProducts()
//   },[sortType])

//   return (
//     <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

//       {/* {Filter Options} */}
//       <div className='min-w-60'>
//         <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
//           <img className={`h-3 sm:hidden ${showFilter?'rotate-90':''}`} src={assets.dropdown_icon} alt="" />
//         </p>
//         {/* {Category filters} */}
//         <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter?'':'hidden'} sm:block`}>
//           <p className='mb-3 tex-sm font-medium'>CATEGORIES</p>
//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//              <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} />MEN
//              </p>
//              <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} />WOMEN
//              </p>
//              <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} />KIDS
//              </p>
//           </div>
//         </div>
//         {/* {Subcategory filter} */}
//         <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter?'':'hidden'} sm:block`}>
//           <p className='mb-3 tex-sm font-medium'>TYPE</p>
//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//              <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} />TopWear
//              </p>
//              <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} />BottomWear
//              </p>
//              <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} />WinterWear
//              </p>
//           </div>
//         </div>
//       </div>

//       {/* {Right Side} */}

//       <div className='flex-1'>
//         <div className='flex justify-between text-base sm:text-2xl mb-4'>
//           <Title text1={'ALL'} text2={'COLLECTIONS'}/>
//           {/* {Product Sort} */}
//           <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
//             <option value="relavent">Sort by: Relavent</option>
//             <option value="low-high">Sort by: Low to High</option>
//             <option value="high-low">Sort by: High to Low</option>
//           </select>
//         </div>

//         {/* {Map products} */}
//         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
//           {
//             filterProduct.map((items,index)=>(
//               <Productitem key={index} name={items.name} id={items._id} price={items.price} image={items.image} />
//             )

//             )
//           }
//         </div>
//       </div>
      
//     </div>
//   )
// }

// export default Collection



import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import Productitem from "../components/Productitem";

const Collection = () => {
  const { products, search, setSearch, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    setCategory((prev) =>
      prev.includes(e.target.value)
        ? prev.filter((item) => item !== e.target.value)
        : [...prev, e.target.value]
    );
  };

  const toggleSubCategory = (e) => {
    setSubCategory((prev) =>
      prev.includes(e.target.value)
        ? prev.filter((item) => item !== e.target.value)
        : [...prev, e.target.value]
    );
  };

  const applyFilter = () => {
    let productsCopy = [...products];

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProduct(productsCopy);
  };

  const sortProducts = () => {
    let sorted = [...filterProduct];

    switch (sortType) {
      case "low-high":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        applyFilter();
        return;
    }

    setFilterProduct(sorted);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-8 pt-10 border-t max-w-7xl mx-auto px-4">
      {/* Sidebar Filter */}
      <aside className="sm:w-64 w-full">
        <div
          className="flex justify-between items-center sm:block cursor-pointer"
          onClick={() => setShowFilter(!showFilter)}
        >
          <h2 className="text-lg font-semibold flex items-center gap-2">
            Filters
            <img
              src={assets.dropdown_icon}
              alt="Toggle Filters"
              className={`h-4 sm:hidden transition-transform ${
                showFilter ? "rotate-90" : ""
              }`}
            />
          </h2>
        </div>

        {/* Category Filter */}
        <div
          className={`mt-6 border rounded-lg shadow-sm p-4 bg-white ${
            showFilter ? "" : "hidden sm:block"
          }`}
        >
          <h3 className="text-sm font-semibold mb-3 text-gray-800">
            Categories
          </h3>
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            {["Men", "Women", "Kids"].map((cat) => (
              <label key={cat} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={cat}
                  onChange={toggleCategory}
                  className="accent-indigo-600"
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* SubCategory Filter */}
        <div
          className={`mt-6 border rounded-lg shadow-sm p-4 bg-white ${
            showFilter ? "" : "hidden sm:block"
          }`}
        >
          <h3 className="text-sm font-semibold mb-3 text-gray-800">
            Product Type
          </h3>
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            {["Topwear", "Bottomwear", "Winterwear"].map((sub) => (
              <label key={sub} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={sub}
                  onChange={toggleSubCategory}
                  className="accent-indigo-600"
                />
                {sub}
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* Products Section */}
      <main className="flex-1">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <Title text1="All" text2="Collections" />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-500"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterProduct.map((item, index) => (
            <Productitem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Collection;
