// import React, { useState } from 'react'
// import { assets } from '../assets/assets'
// import axios from 'axios'
// import {backendURL} from '../App'
// import { toast } from 'react-toastify'

// const Add = () => {
  
//   const [image1,setImage1]=useState(false);
//   const [image2,setImage2]=useState(false);
//   const [image3,setImage3]=useState(false);
//   const [image4,setImage4]=useState(false);

//   const [name,setName]=useState("");
//   const [description,setDescription]=useState("");
//   const [price,setPrice]=useState("");
//   const [category,setCategory]=useState("Men");
//   const [subcategory,setSubcategory]=useState("Topwear");
//   const[bestseller,setBestseller]=useState(false);
//   const [sizes,setSizes]=useState([]);
  
//   const token = localStorage.getItem('token');


//   const onSubmitHandler=async(e)=>{
//           e.preventDefault()
//           try{
//              const formData = new FormData()
//              formData.append("name",name)
//              formData.append("description",description)
//              formData.append("price",price)
//              formData.append("category",category)
//              formData.append("subCategory",subcategory)
//              formData.append("bestseller",bestseller)
//              formData.append("sizes",JSON.stringify(sizes))
//              image1 && formData.append("image1",image1)
//              image2 && formData.append("image2",image2)
//              image3 && formData.append("image3",image3)
//              image4 && formData.append("image4",image4)

//              const response = await axios.post(backendURL+"/api/product/add",formData,{headers:{token}})
//              if(response.data.success){
//                  toast.success(response.data.message)
//                  setName("");
//                  setDescription("")
//                  setPrice("");
//                  setCategory("");
//                  setSubcategory("");
//                  setBestseller(false);
//                  setSizes([]);
//                  setImage1(false);
//                  setImage2(false);
//                  setImage3(false);
//                  setImage4(false)

//              }else{
//                 toast.error(response.data.message)
//              }
//           }catch(error){
//               console.log(error);
//               toast.error(error.message)
//           }
//   }



//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
//          <div>
//           <p className='mb-2'>Upload Image</p>
//          <div className='flex gap-2'>
//           <label htmlFor='image1'>
//             <img className='w-20' src={image1?URL.createObjectURL(image1):assets.upload_area} alt="" />
//             <input type="file" onChange={(e)=>setImage1(e.target.files[0])} id='image1' hidden/>
//           </label>
//           <label htmlFor='image2'>
//             <img className='w-20' src={image2?URL.createObjectURL(image2):assets.upload_area} alt="" />
//             <input type="file" onChange={(e)=>setImage2(e.target.files[0])} id='image2' hidden/>
//           </label>
//           <label htmlFor='image3'>
//             <img className='w-20' src={image3?URL.createObjectURL(image3):assets.upload_area} alt="" />
//             <input type="file" onChange={(e)=>setImage3(e.target.files[0])} id='image3' hidden/>
//           </label>
//           <label htmlFor='image4'>
//             <img className='w-20' src={image4?URL.createObjectURL(image4):assets.upload_area} alt="" />
//             <input type="file" onChange={(e)=>setImage4(e.target.files[0])} id='image4' hidden/>
//           </label>
//          </div>
//          </div>

//          <div className='w-full'>
//           <p className='mb-2'>Product Name</p>
//           <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type Here' required/>
//          </div>
//          <div className='w-full'>
//           <p className='mb-2'>Product Description</p>
//           <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write content here' required/>
//          </div>

//          <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
//           <div>
//             <p className='mb-2'>Product Category</p>
//             <select onChange={(e)=>setCategory(e.target.value)} value={category} className='w-full px-3 py-2'>
//               <option value="Men">Men</option>
//               <option value="Women">Women</option>
//               <option value="Kids">Kids</option>
//             </select>
//           </div>
//           <div>
//             <p className='mb-2'>Sub Category</p>
//             <select onChange={(e)=>setSubcategory(e.target.value)} value={subcategory} className='w-full px-3 py-2'>
//               <option value="Topwear">Topwear</option>
//               <option value="Bottomwear">Bottomwear</option>
//               <option value="Winterwear">Winterwear</option>
//             </select>
//           </div>
//           <div>
//             <p className='mb-2'>Product Price</p>
//             <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder='25' />
//           </div>
//          </div>
//          <div>
//           <p className='mb-2'>Product Sizes</p>
//           <div className='flex gap-3' >
//             <div onClick={()=>setSizes(priv=>priv.includes("S")?priv.filter(item=>item!=="S"):[...priv,"S"])}>
//               <p className={`${sizes.includes("S")?"bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>S</p>
//             </div>
//             <div onClick={()=>setSizes(priv=>priv.includes("M")?priv.filter(item=>item!=="M"):[...priv,"M"])}>
//               <p className={`${sizes.includes("M")?"bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>M</p>
//             </div>
//             <div onClick={()=>setSizes(priv=>priv.includes("L")?priv.filter(item=>item!=="L"):[...priv,"L"])}>
//               <p className={`${sizes.includes("L")?"bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>L</p>
//             </div>
//             <div onClick={()=>setSizes(priv=>priv.includes("XL")?priv.filter(item=>item!=="XL"):[...priv,"XL"])}>
//               <p className={`${sizes.includes("XL")?"bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>XL</p>
//             </div>
//             <div onClick={()=>setSizes(priv=>priv.includes("XXL")?priv.filter(item=>item!=="XXL"):[...priv,"XXL"])}>
//               <p className={`${sizes.includes("XXL")?"bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>XXL</p>
//             </div>
//             <div>
//             </div>
//           </div>
//          </div>

//          <div className='flex gap-2 mt-2'>
//           <input onChange={()=>setBestseller(prev=>!prev)} checked={bestseller} type="checkbox"  id="bestseller" />
//           <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
//          </div>

//          <button className='w-28 py-3 mt-4 bg-black text-white' type='submit'>ADD</button>
//     </form>
//   )
// }

// export default Add
import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendURL } from "../App";
import { toast } from "react-toastify";

const Add = () => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subcategory, setSubcategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const token = localStorage.getItem("token");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subcategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));
      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendURL + "/api/product/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setPrice("");
        setCategory("Men");
        setSubcategory("Topwear");
        setBestseller(false);
        setSizes([]);
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const toggleSize = (size) => {
    setSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl mx-auto flex flex-col gap-5"
    >
      {/* Image Upload */}
      <div>
        <p className="mb-2 font-semibold text-gray-700">Upload Images</p>
        <div className="flex gap-3">
          {[image1, image2, image3, image4].map((img, i) => (
            <label
              key={i}
              htmlFor={`image${i + 1}`}
              className="w-24 h-24 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-400 relative"
            >
              {img ? (
                <img
                  src={URL.createObjectURL(img)}
                  alt="preview"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <img src={assets.upload_area} alt="Upload" className="w-10" />
              )}
              <input
                type="file"
                id={`image${i + 1}`}
                hidden
                onChange={(e) =>
                  [setImage1, setImage2, setImage3, setImage4][i](
                    e.target.files[0]
                  )
                }
              />
            </label>
          ))}
        </div>
      </div>

      {/* Name */}
      <div>
        <p className="mb-1 font-semibold text-gray-700">Product Name</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Type product name..."
          required
        />
      </div>

      {/* Description */}
      <div>
        <p className="mb-1 font-semibold text-gray-700">Description</p>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Write a description..."
          required
        />
      </div>

      {/* Category / Price */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <p className="mb-1 font-semibold text-gray-700">Category</p>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
          >
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>
        </div>
        <div>
          <p className="mb-1 font-semibold text-gray-700">Subcategory</p>
          <select
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
          >
            <option>Topwear</option>
            <option>Bottomwear</option>
            <option>Winterwear</option>
          </select>
        </div>
        <div>
          <p className="mb-1 font-semibold text-gray-700">Price ($)</p>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="25"
          />
        </div>
      </div>

      {/* Sizes */}
      <div>
        <p className="mb-1 font-semibold text-gray-700">Sizes</p>
        <div className="flex gap-2">
          {["S", "M", "L", "XL", "XXL"].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => toggleSize(s)}
              className={`px-4 py-1 rounded-full border ${
                sizes.includes(s)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Bestseller */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="bestseller"
          checked={bestseller}
          onChange={() => setBestseller((prev) => !prev)}
          className="w-4 h-4"
        />
        <label htmlFor="bestseller" className="text-gray-700">
          Mark as Bestseller
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 rounded-lg hover:opacity-90 transition"
      >
        Add Product
      </button>
    </form>
  );
};

export default Add;
