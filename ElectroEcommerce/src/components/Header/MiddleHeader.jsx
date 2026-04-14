import React from 'react';

const MiddleHeader = () => {
  return (
    <div className='flex justify-between p-7 border border-gray-400'>
     <div className='ml-10'>
        <h1 className='text-4xl'>Electro</h1>
     </div>
     <div>
        <input className=' border border-gray-400 rounded-full rounded-r-none h-13 w-70 p-3 outline-none' type="text" placeholder='search anything here...'/>
        <select className='border border-gray-400 rounded-full rounded-l-none h-13 w-30 p-3 outline-none'>
            <option value="All Category">All Category</option>
            <option value="1 Category">1 Category</option>
            <option value="1 Category">1 Category</option>
            <option value="1 Category">1 Category</option>
        </select>
     </div>
     <div>
        <input type="text" />
        <select >
            <option value="All Category">All Category</option>
            <option value="1 Category">1 Category</option>
            <option value="1 Category">1 Category</option>
            <option value="1 Category">1 Category</option>
        </select>
     </div>
    </div>
  );
}

export default MiddleHeader;
