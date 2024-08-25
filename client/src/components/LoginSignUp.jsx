import React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Divider from "@mui/joy/Divider"
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';

import ontime from "../assets/ontime.svg";
import Return from "../assets/return.svg";
import delivery from "../assets/delivery.svg";
import quaility from "../assets/quaility.svg";

import applestore from "../assets/applestore.svg";
import playstore from "../assets/playstore.svg";


const LoginSignUp = () => {
  const [open, setOpen] = React.useState(false);
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
            <div className="bg-slate-100 rounded-ss-lg rounded-es-lg p-10 pt-10">
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
            <div className="p-3 pt-8 px-8 w-80 bg-black rounded-ee-lg rounded-se-lg">
              <h2 className="text-md font-bold text-white">Login / Sign Up</h2>
              <p className="text-xs font-thin underline text-white">
                Using OTP
              </p>
              <form className="my-6">
                <Stack spacing={4}>
                  <input
                    className="placeholder:text-xs px-2 py-2.5 rounded outline-none text-xs"
                    placeholder="Enter Phone Number/Email Id"
                    required
                  />

                  <Button color="danger" type="submit">
                    Continue
                  </Button>
                  <p className="text-center font-semibold text-[10px] text-gray-500">
                    By continuing, I accept TCP -{" "}
                    <a className="underline" href="#">
                      bigbasket’s Terms and Conditions & Privacy Policy
                    </a>{" "}
                    This site is protected by reCAPTCHA and the Google - Privacy
                    <a className="underline" href="">
                      Policy and & Terms of Service
                    </a>{" "}
                    apply.
                  </p>
                </Stack>
              </form>
            </div>
          </div>
        </Sheet>
      </Modal>
    </div>
  );
};

export default LoginSignUp;
