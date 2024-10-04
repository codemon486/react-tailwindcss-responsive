import React from "react";
import Navbar from "./Navbar";

const Mytoken2 = () => {
  return (
    <>
      <Navbar />
      <div className="md:px-34 py-7 ">
        <div className="font-system-ui text-2xl md:text-left text-center font-medium">
          My Tokens
        </div>

        <div className="flex mt-5.5 justify-center md:justify-start">
          <button
            className="flex-shrink-0 text-base  bg-yellow-350 w-33 h-9.5 text-black rounded-4 shadow-md   "
            type="submit"
          >
            <div className="flex justify-center  font-medium font-system-ui text-base">
              Tokens I hold
            </div>
          </button>
          <button
            className="flex-shrink-0 text-base w-33 h-9.5 ml-3.5 text-black rounded-4 border-black border shadow-md   "
            type="submit"
          >
            <div className="flex justify-center font-medium font-systme-ui  text-base">
              Launch Token
            </div>
          </button>
        </div>
        <div className="flex justify-center mt-46 ">
          <img
            src="./2357d323-88f4-498c-9f49-33f147f703a5.png"
            className="w-16 h-16"
            alt="222"
          />
        </div>
        <div className="text-center font-system-ui text-base font-medium text-gray-350 mt-3 mb-2">
          No tokens found!
        </div>
        <div className="flex justify-center">
          <button
            className="flex-shrink-0 text-base  bg-yellow-350 w-33 h-9.5 text-black rounded-4  shadow-md   "
            type="submit"
          >
            <div className="flex justify-center  font-medium font-system-ui text-base">
              Tokens I hold
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Mytoken2;
