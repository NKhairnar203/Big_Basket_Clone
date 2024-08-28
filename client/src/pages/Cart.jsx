import React from "react";
import { RiAddLine, RiSubtractLine } from "@remixicon/react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const Cart = () => {
  return (
    <div className="pt-28 max-w-screen-lg m-auto px-10">
      <div className="mb-10">
        <div className="text-2xl font-bold text-gray-800">Your Basket</div>
        <div className=" bg-black flex justify-between items-center px-6 py-4 my-6 rounded-lg">
          <div className="">
            <h2 className="text-gray-100 flex text-md font-semibold ">
              Subtotal <p className="mx-1">({0} items)</p> :{" "}
              <h1 className="text-white font-bold ml-1">₹ 577.00</h1>
            </h2>
            <div className="text-lime-400 text-[14px] font-sans flex bg-gradient-to-r rounded from-slate-900 to-gray-600 py-0.5 w-[130px] mt-0.5">
              Savings: <h1 className="mx-1 font-semibold">₹ 59.54</h1>
            </div>
          </div>
          <div>
            <button
              className="bg-red-700 hover:bg-red-600 text-white font-semibold py-
            1 px-4 h-10 w-[220px] rounded"
            >
              Checkout
            </button>
          </div>
        </div>

        <div className=" px-2 font-bold flex justify-between text-gray-500">
          <h1>Items ({2} items)</h1>
          <div className="w-auto flex gap-36 mb-5">
            <h1>Quantity</h1>
            <h1>Sub-total</h1>
          </div>
        </div>
        <div className="divide-y">
          <div className="w-full flex justify-between h-32  ">
            <div className="product-cart flex items-center h-full px-3">
              <div className="h-[100px] pl-7">
                <img
                  className="h-full"
                  src="https://www.bigbasket.com/media/uploads/p/l/20005512_4-faber-castell-colour-pencils.jpg?tr=w-256,q=80"
                  alt="product i"
                />
              </div>
              <div className="ml-7 w-72">
                <h1 className="text-black text-sm font-thin">
                  Colour-Me Grip - Triangular Shape, Regular Size, Super Smooth,
                  Colour Rich
                </h1>
                <h1 className="flex font-semibold items-center">
                  ₹98 <del className="text-gray-500 text-xs ml-1">₹100</del>
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-24">
              <div className="">
                <div className="flex w-[140px] rounded justify-between items-center border border-gray-400 hover:shadow-lg border-1 p-1 mb-1">
                  <button className="px-2 py-[2px] rounded hover:bg-red-600 hover:text-white text-center   ">
                    {" "}
                    <RiSubtractLine />{" "}
                  </button>
                  <h1 className="text-gray-500 text-sm text-center">1</h1>
                  <button className="px-2 py-[2px] rounded hover:bg-red-600 hover:text-white text-center   ">
                    <RiAddLine />
                  </button>
                </div>
                <ButtonGroup variant="text" aria-label="Basic button group">
                  <Button>
                    <h1 className="text-[10px]">Delete</h1>
                  </Button>
                  <Button>
                    <h1 className="text-[10px]">Save for Later</h1>
                  </Button>
                </ButtonGroup>
              </div>
              <div className="text-end mr-4">
                <h1 className="text-md font-bold">₹98</h1>
                <p className="text-sm text-lime-600 mt-1">Saved: ₹2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
