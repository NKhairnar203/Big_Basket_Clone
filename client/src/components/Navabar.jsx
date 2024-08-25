import React from "react";
import logo from "../assets/logo.png";
import Location from "../assets/location.svg";
import Cart from "../assets/cart.svg";
import { RiCloseCircleFill, RiSearchLine } from "@remixicon/react";
import MenuDrewer from "./MenuDrawer";
import { Link } from "react-router-dom";
import DrawerMenu from "../components/DrawerMenu";
import Smart from "../assets/Smart_basket-250124-1.png"
import Offers from "../assets/offers.png"


import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import LoginSignUp from "./LoginSignUp";


const Navabar = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: 2,
      top: 15,
      border: `1px solid ${theme.palette.background.paper}`,
      
    },
  }));
  return (
    <div className="w-full z-40 fixed h-auto border-1 bg-white border-black shadow-lg">
      <nav className=" m-auto h-auto max-w-screen-lg ">
        <div className="h-12 flex w-full items-center justify-center ">
          <div className="logo h-10  ">
            <img src={logo} className="h-full" alt="logo" />
          </div>
          <div className="search-box flex items-center border-1 border my-1 rounded-sm focus:border-lime-500 ml-5 py-1 ">
            <RiSearchLine className="text-lime-500 w-4 mx-2" />
            <input
              className="max-w-screen-xl w-[450px] h-5 outline-none text-xs focus:border-lime-500 focus:right-1"
              type="text"
              placeholder="Search for Products..."
            />
            <RiCloseCircleFill className="mx-2 w-4 text-gray-500" />
          </div>
          <div className="buttons flex items-center ml-5 gap-4">
            <button
              className="bg-gray-200 text-white py-1 px-2 rounded-sm
             flex items-center gap-1"
            >
              <img src={Location} alt="location" />
              <p className="text-black text-xs text-center">Select Location</p>
            </button>

            <LoginSignUp />
            <div className="bg-red-100">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={2} color="secondary">
                  <img src={Cart} width={18} alt="cart" />
                </StyledBadge>
              </IconButton>
            </div>
          </div>
        </div>
        <div className="h-12 flex w-full items-center px-12 ">
          <MenuDrewer />
          <div className="mx-10">
            <ul className=" w-[550px] flex justify-between items-center">
              <li>
                <Link to={"#"}>Exotic Fruits & V...</Link>
              </li>
              <li>
                <Link to={"#"}>Tea</Link>
              </li>
              <li>
                <Link to={"#"}>Ghee</Link>
              </li>
              <li>
                <Link to={"#"}>Nandini</Link>
              </li>
              <li>
                <DrawerMenu />
              </li>
            </ul>
          </div>

          <div className="flex gap-5">
            <div>
              <img src={Smart} alt="image" />
            </div>
            <div>
              <img src={Offers} alt="image" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navabar;
