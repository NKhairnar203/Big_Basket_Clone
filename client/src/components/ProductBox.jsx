import React from 'react'
import Save from "../assets/saveIcon.svg";


const ProductBox = () => {
  return (
    <div className=''>
      <div className="relative w-full border border-gray-300 rounded-md">
        <div className="absolute bg-lime-700 text-white text-[10px] p-2 px-3 rounded-ss-md rounded-ee-md">
          32% OFF
        </div>
        <img
          src="https://www.bigbasket.com/media/uploads/p/m/10000067_26-fresho-capsicum-green.jpg?tr=w-1920,q=80"
          className="p-6"
          alt=""
        />
      </div>
      <div className="text-start mt-6">
        <p className="text-[16px] text-gray-500">fresho!</p>
        <h3 className="text-[17px]">Capsicum - Green (Loose)</h3>
        <div className="flex gap-1 my-6 items-center">
          <p className="text-[18px] text-black font-bold">₹78</p>
          <p className="text-[14px] text-gray-500 ">
            <del>₹120</del>
          </p>
        </div>
      </div>
      <div className="w-full flex gap-2 h-auto">
        <button className="w-8 p-1 border hover:shadow-md border-gray-400 rounded">
          <img className="w-full" src={Save} alt="saveicon" />
        </button>
        
        <button className="border p-1 w-full border-red-500 text-sm font-bold  text-red-500 rounded hover:text-white hover:bg-red-500">
          Add
        </button>
      </div>
    </div>
  );
}

export default ProductBox
