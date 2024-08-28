import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// MUI Components
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import Divider from "@mui/joy/Divider";
import Stack from "@mui/joy/Stack";

// images
import ontime from "../assets/ontime.svg";
import Return from "../assets/return.svg";
import delivery from "../assets/delivery.svg";
import quaility from "../assets/quaility.svg";
import applestore from "../assets/applestore.svg";
import playstore from "../assets/playstore.svg";

// context

import { useAuth } from "../store/Auth";

const SignUp = () => {
  const navigate = useNavigate();
  const [openPage, setOpenPage] = useState(false);
  const [open, setOpen] = useState(false);
  const [registerUser, setRegisterUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { storeTokenLS } = useAuth();

  
  const handleRegisterChange = (e) => {
    setRegisterUser({ ...registerUser, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerUser),
      });

      if (response.ok) {
        const res_data = await response.json();
        console.log("server msg: ", res_data);
        storeTokenLS(res_data.token);
        setRegisterUser({
          name: "",
          email: "",
          password: "",
        });
        toast.success("Register Successfully...");
        navigate("/");
        
      } else {
        toast.error("Invalid Credentials");
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const [LoginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    setLoginUser({ ...LoginUser, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(LoginUser),
      });

      if (response.ok) {
        const res_data = await response.json();
        
        console.log("server msg: ", res_data.token);
        storeTokenLS(res_data.token);
        setLoginUser({
          email: "",
          password: "",
        });
        navigate("/");
        toast.success("Login Successfully...");
        
      } else {
        toast.error("Invalid Credentials");
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="bg-black rounded-sm text-white px-2 flex items-center gap-1 py-2  text-xs"
      >
        Login / Sign Up
      </button>

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            borderRadius: "md",
            bgcolor: "gray",
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="solid" sx={{ m: -6 }} />

          <div className="flex ">
            <div className="bg-slate-100 rounded-ss-lg rounded-es-lg p-10 pt-10 px-14 ">
              <p className="text-xs font-thin ">Why choose Bigbasket?</p>
              <div className=" my-3 grid grid-cols-2 w-full justify-between items-center">
                <div>
                  <img src={ontime} alt="ontime" />
                </div>
                <div>
                  <img src={Return} alt="Return" />
                </div>
                <div>
                  <img src={delivery} alt="delivery" />
                </div>
                <div>
                  <img src={quaility} alt="quaility" />
                </div>
              </div>
              <Divider />
              <div className="my-3 flex items-center justify-between">
                <p className="text-xs font-thin">find us on </p>
                <img src={playstore} alt="playstore" />
                <img src={applestore} alt="applestore" />
              </div>
            </div>
            {openPage ? (
              // Register Model

              <div className="p-3 pt-8  w-96 px-10 bg-black rounded-ee-lg rounded-se-lg">
                <h2 className="text-lg font-bold text-white text-center">
                  Sign Up
                </h2>

                <form className="my-6" onSubmit={handleRegisterSubmit}>
                  <Stack spacing={1}>
                    <div className="flex flex-col">
                      {" "}
                      <label
                        className="text-gray-400 text-xs py-1"
                        htmlFor="name"
                      >
                        Enter Name{" "}
                      </label>
                      <input
                        className="placeholder:text-xs px-2 py-2.5 rounded outline-none text-xs"
                        placeholder="Enter Your Name..."
                        required
                        id="name"
                        name="name"
                        type="text"
                        value={registerUser.name}
                        onChange={handleRegisterChange}
                      />
                    </div>

                    <div className="flex flex-col">
                      {" "}
                      <label
                        className="text-gray-400 text-xs py-1"
                        htmlFor="email"
                      >
                        Enter Email{" "}
                      </label>
                      <input
                        className="placeholder:text-xs px-2 py-2.5 rounded outline-none text-xs"
                        placeholder="Enter Your Email ID..."
                        required
                        id="email"
                        name="email"
                        type="email"
                        value={registerUser.email}
                        onChange={handleRegisterChange}
                      />
                    </div>
                    <div className="flex flex-col pb-3">
                      {" "}
                      <label
                        className="text-gray-400 text-xs py-1"
                        htmlFor="password"
                      >
                        Enter Password{" "}
                      </label>
                      <input
                        className="placeholder:text-xs px-2 py-2.5 rounded outline-none text-xs"
                        placeholder="Enter Password..."
                        required
                        type="password"
                        id="password"
                        name="password"
                        value={registerUser.password}
                        onChange={handleRegisterChange}
                      />
                    </div>
                    <Button color="danger" type="submit">
                      Continue
                    </Button>
                    <div className="flex py-3">
                      <p className="text-[13px] text-gray-500 mr-1">
                        Already have an account?
                      </p>{" "}
                      <button
                        className="text-red-500 text-[13px]"
                        onClick={() => setOpenPage(false)}
                      >
                        Login
                      </button>
                    </div>
                    <p className="text-center font-semibold text-[10px] text-gray-500">
                      By continuing, I accept TCP -{" "}
                      <a className="underline" href="#">
                        bigbasket’s Terms and Conditions & Privacy Policy
                      </a>{" "}
                      This site is protected by reCAPTCHA and the Google -
                      Privacy
                      <a className="underline" href="">
                        Policy and & Terms of Service
                      </a>{" "}
                      apply.
                    </p>
                  </Stack>
                </form>
              </div>
            ) : (
              // Login Model

              <div className="p-3 pt-8 px-8 w-80 bg-black rounded-ee-lg rounded-se-lg">
                <h2 className="text-lg font-bold text-white text-center">
                  Login
                </h2>
                <div className="flex my-3">
                  <p className="text-[12px] text-gray-500 mr-1">
                    Don’t have an account yet?
                  </p>{" "}
                  <button
                    className="text-red-500 text-[12px]"
                    onClick={() => setOpenPage(true)}
                  >
                    Sign up for free!
                  </button>
                </div>
                <form className="my-6" onSubmit={handleLoginSubmit}>
                  <Stack spacing={1}>
                    <div className="flex flex-col">
                      {" "}
                      <label
                        className="text-gray-400 text-xs py-1"
                        htmlFor="email"
                      >
                        Enter Email{" "}
                      </label>
                      <input
                        className="placeholder:text-xs px-2 py-2.5 rounded outline-none text-xs"
                        placeholder="Enter Your Email ID..."
                        required
                        id="email"
                        name="email"
                        type="email"
                        value={LoginUser.email}
                        onChange={handleLoginChange}
                      />
                    </div>
                    <div className="flex flex-col pb-3">
                      {" "}
                      <label
                        className="text-gray-400 text-xs py-1"
                        htmlFor="password"
                      >
                        Enter Password{" "}
                      </label>
                      <input
                        className="placeholder:text-xs px-2 py-2.5 rounded outline-none text-xs"
                        placeholder="Enter Password..."
                        required
                        type="password"
                        id="password"
                        name="password"
                        value={LoginUser.password}
                        onChange={handleLoginChange}
                      />
                    </div>
                    <Button color="danger" type="submit">
                      Continue
                    </Button>
                  </Stack>
                  <button
                    className="text-red-500 text-[12px] my-2"
                    
                  >
                    Forgot your password?
                  </button>
                </form>
              </div>
            )}
          </div>
        </Sheet>
      </Modal>
    </div>
  );
};

export default SignUp;
