import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { Navigate, useNavigate,Link } from "react-router-dom";
import { useAuth } from "../store/Auth";


export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { LogoutUser } = useAuth();
  

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>N</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <p className="text-sm">My account</p>
        </MenuItem>
        <MenuItem onClick={handleClose}>
           <Link to={"/user-product-cart"} className="flex justify-between gap-12 text-sm">
            <p>My Basket</p>
            <div className="bg-red-600 px-2 rounded-lg text-white">
              {5} item
            </div>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <div className="text-sm">My Order</div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <div className="text-sm">My Smart Basket</div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <div className="flex justify-between gap-12 text-sm">
            <p>My Wallet</p>
            <div className="bg-red-600 px-2 rounded-lg ml-6 text-white">
              ₹ 0
            </div>
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <div className="text-sm">Contact Us</div>
        </MenuItem>
        <MenuItem onClick={LogoutUser}>
          <p className="text-sm"> Logout</p>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
