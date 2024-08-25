import React from "react";
import {Link} from "react-router-dom"
import { RiArrowDownSFill, RiArrowUpSFill } from "@remixicon/react";

export default function MenuDrawer() {
  const [anchorEl, setAnchorEl] = React.useState(false);

  return (
    <div className="relative">
      <button
        className="drawer-button bg-lime-600 flex px-2 py-0.5 w-[140px] justify-between items-center text-white rounded-md"
        onClick={() => {
          setAnchorEl(!anchorEl);
        }}
      >
        <div>
          <p className=" text-start text-[10px] font-bold">Shop by</p>
          <h3 className="-mt-1 font-semibold">Category</h3>
        </div>
        <RiArrowDownSFill className={`${anchorEl ? "hidden" : "block"}`} />
        <RiArrowUpSFill className={`${anchorEl ? "block" : "hidden"}`} />
      </button>

      <div
        className={`absolute top-11 left-0 w-[300px] h-auto ${
          anchorEl ? "block" : "hidden"
        }`}
      >
        <div className=" rounded-md flex flex-col bg-neutral-900 text-white">
          <div className="  p-2 font-light text-[17px]">
            <Link to={"#"}>Apparel</Link>
          </div>
          <div className="p-2 font-light text-[17px]">
            <Link to={"#"}>Fruit & Vegetables</Link>
          </div>
          <div className="p-2 font-light text-[17px]">
            <Link to={"#"}>Foodgrains, Oil & Masale</Link>
          </div>
          <div className="p-2 font-light text-[17px]">
            <Link to={"#"}>Bakery, Cakes & Dairy</Link>
          </div>
          <div className="p-2 font-light text-[17px]">
            <Link to={"#"}>Beverages</Link>
          </div>
          <div className="p-2 font-light text-[17px]">
            <Link to={"#"}>Snacks & Branded Foods</Link>
          </div>
          <div className="p-2 font-light text-[17px]">
            <Link to={"#"}>Beauty & Hygiene</Link>
          </div>
          <div className="p-2 font-light text-[17px]">
            <Link to={"#"}>Kitchen, Garden & Pets</Link>
          </div>
          <div className="p-2 font-light text-[17px]">
            <Link to={"#"}>Lunch Boxes & Bags</Link>
          </div>
          <div className="py-2 font-light text-[17px]">
            <Link to={"#"}>Umbrellas & Rainwear</Link>
          </div>
          <div className="p-2 font-light text-[17px]">
            <Link to={"#"}>Eggs,Meat & Fish</Link>
          </div>
          <div className="p-2 font-light text-[17px]">
            <Link to={"#"}>Gourmet & World Food</Link>
          </div>
          <div className="p-2 font-light text-[17px]">
            <Link to={"#"}>Baby Care</Link>
          </div>
          <div className="p-2 font-light text-[17px]">
            <Link to={"#"}>Paan Corner</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
