// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { assets } from '../assets/assets'

// const Sidebar = () => {
//   return (
//     <div className='w-[18%] min-h-screen border-r-2' >
//         <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
//             <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1 ' to='/add'>
//              <img className='w-5 h-5' src={assets.add_icon} alt="" />
//              <p className='hidden md:block'>Add Items</p>
//             </NavLink>
//             <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1 ' to='/list'>
//              <img className='w-5 h-5' src={assets.order_icon} alt="" />
//              <p className='hidden md:block'>List Items</p>
//             </NavLink>
//             <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1 ' to='/orders'>
//              <img className='w-5 h-5' src={assets.order_icon} alt="" />
//              <p className='hidden md:block'>Orders</p>
//             </NavLink>
//         </div>
//     </div>
//   )
// }

// export default Sidebar
import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const linkClass =
    "flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 text-gray-700 hover:bg-gray-100";

  const activeClass =
    "bg-gray-200 font-semibold border-l-4 border-blue-500 text-blue-600";

  return (
    <div className="w-[18%] min-h-screen border-r bg-white shadow-sm hidden sm:block">
      <div className="flex flex-col gap-2 pt-6 pl-4">
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          <img className="w-5 h-5" src={assets.add_icon} alt="Add" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="List" />
          <p className="hidden md:block">List Items</p>
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="Orders" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
