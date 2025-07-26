// import React, { useContext, useState } from 'react'
// import { assets } from '../assets/assets'
// import { Link, NavLink } from 'react-router-dom'
// import { ShopContext } from '../context/ShopContext'

// const Navbar = () => {
//     const [visible,setVisible]=useState(false)
//     const {setShowSearch,getCartCount, navigate , token,setToken,setCartItems}=useContext(ShopContext);

//     const logout = ()=>{
//         navigate('/login')
//         localStorage.removeItem('token');
//         setToken('');
//         setCartItems({})
        
//     }
//     return (
//         <div className='flex items-center justify-between py-5 font-medium'>
//            <Link to='/'>
//             <img src={assets.logo} className='w-36' alt="" />
//             </Link>
//             <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
//                 <NavLink to='/' className='flex flex-col items-center gap-1'>
//                     <p>HOME</p>
//                     <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//                 </NavLink>
//                 <NavLink to='/collection' className='flex flex-col items-center gap-1'>
//                     <p>COLLECTION</p>
//                     <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//                 </NavLink>
//                 <NavLink to='/about' className='flex flex-col items-center gap-1'>
//                     <p>ABOUT</p>
//                     <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//                 </NavLink>
//                 <NavLink to='/contact' className='flex flex-col items-center gap-1'>
//                     <p>CONTACT</p>
//                     <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//                 </NavLink>
//             </ul>

//             <div className='flex items-center gap-6'>
//                 <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
//                 <div className='group relative'>
                    
//                        <img onClick={()=>token?null:navigate('/login')} src={assets.profile_icon} className='w-5 cursor-pointer' alt="Profile Icon" />  
                   
//                    {token && <div className='group-hover:block hidden absolute right-0 pt-4'>
//                         <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
//                             <p className='cursor-pointer hover:text-black'>My Profile</p>
//                             <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
//                             <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
//                         </div>
//                     </div>}
//                 </div>
//                 <Link to='/cart' className='relative'>
//                 <img src={assets.cart_icon} className='w-5 min-w-5' alt="Cart Icon" />
//                 <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
//                 </Link>

//                 <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />

//             </div>

//             {/* {sidebar menu for small screen} */}
//             <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible?'w-full':'w-0'} `}>
//                 <div className='flex flex-col text-gray-600'>
//                     <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
//                         <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
//                         <p>Back</p>
//                     </div>
//                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
//                     <NavLink onClick={()=>setVisible(false)}  className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
//                     <NavLink onClick={()=>setVisible(false)}  className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
//                     <NavLink onClick={()=>setVisible(false)}  className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Navbar


import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const navLinks = [
  { label: "HOME", path: "/" },
  { label: "COLLECTION", path: "/collection" },
  { label: "ABOUT", path: "/about" },
  { label: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-8 py-4">
        {/* Logo */}
        <Link to="/">
          <img src={assets.logo} alt="Company Logo" className="w-15 h-5 " />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-8 text-[15px] font-medium text-gray-700">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) =>
                `relative group transition ${
                  isActive ? "text-blue-600" : "hover:text-blue-500"
                }`
              }
            >
              {link.label}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <img
            src={assets.search_icon}
            alt="Search"
            className="w-5 cursor-pointer hover:opacity-75"
            onClick={() => setShowSearch(true)}
          />

          {/* Profile */}
          <div className="relative group">
            <img
              src={assets.profile_icon}
              alt="Profile"
              className="w-5 cursor-pointer hover:opacity-75"
              onClick={() => (token ? null : navigate("/login"))}
            />
            {token && (
              <div className="absolute right-0 top-6 hidden w-40 bg-white rounded-md shadow-lg border group-hover:block">
                <ul className="flex flex-col text-gray-700 text-sm">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    My Profile
                  </li>
                  <li
                    onClick={() => navigate("/orders")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Orders
                  </li>
                  <li
                    onClick={logout}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <img
              src={assets.cart_icon}
              alt="Cart"
              className="w-5 hover:opacity-75"
            />
            <span className="absolute -right-2 -bottom-2 w-5 h-5 flex items-center justify-center bg-blue-600 text-white text-[10px] rounded-full">
              {getCartCount()}
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <img
            src={assets.menu_icon}
            alt="Menu"
            className="w-6 cursor-pointer sm:hidden"
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0 w-64" : "translate-x-full w-64"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <p className="font-semibold text-gray-700 text-lg">Menu</p>
          <img
            src={assets.dropdown_icon}
            alt="Close"
            className="w-4 rotate-180 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        {/* Links */}
        <ul className="flex flex-col">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className="px-6 py-4 border-b text-gray-700 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
