import React from 'react';
import { FaHome } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const MiddleHeader = () => {
  return (
    <div className='flex items-center justify-between px-15 py-6 border border-gray-400'>
     <div className=' flex items-center ml-10'>
      <FaHome className='text-6xl text-blue-600'/>
        <h1 className='text-4xl font-medium'>Electro</h1>
     </div>
     <div className='flex'>
        <input className=' border border-gray-400 rounded-full rounded-r-none h-13 w-70 p-3 outline-none' type="text" placeholder='search anything here...'/>
        <select className='border border-gray-400  h-13 w-30 p-3 outline-none'>
            <option value="All Category">All Category</option>
            <option value="1 Category">1 Category</option>
            <option value="1 Category">1 Category</option>
            <option value="1 Category">1 Category</option>
        </select>
        <div className='flex items-center justify-center bg-blue-600 text-white-900 border border-gray-400 rounded-full rounded-l-none h-13 w-30 p-3 outline-none'>
            <CiSearch className='text-2xl'/>
        </div>
     </div>
     <div className='flex items-center gap-4 text-1xl text-gray-400'>
      <div className='flex items-center justify-center w-10 h-10 rounded-full border border-gray-300'>
        <FaShuffle  />
      </div>
      <div className='flex items-center justify-center w-10 h-10 rounded-full border border-gray-300'>
        <FaHeart />
      </div>
      <div className='flex items-center justify-center w-10 h-10 rounded-full border border-gray-300'>
        <FaShoppingCart />
      </div>    
        <p className='-ml-3'>$0.00</p>
     </div>
    </div>
  );
}

export default MiddleHeader;
