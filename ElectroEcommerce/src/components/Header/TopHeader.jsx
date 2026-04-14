import React from 'react';

const TopHeader = () => {
  return (
    <div className='flex justify-between items-center border border-gray-300 p-3'>
     <div className='flex gap-1 text-sm text-gray-500 ml-10'>
        <a href="#">Help</a>/
        <a href="#">Support</a>/
        <a href="#">Contact</a>
     </div>
     <div className='flex gap-1 text-sm text-gray-500 ml-10'>
        <span>Call Us:+92318-3861xxx</span>
     </div>
      <div className='flex gap-1 text-sm text-gray-500 mr-10'>
        <a href="#">USD</a>/
        <a href="#">English</a>/
        <a href="#">My Dashboard</a>
     </div>
    </div>
  );
}

export default TopHeader;
