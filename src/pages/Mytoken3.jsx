import React from "react";
import Navbar from "./Navbar";

const Mytoken3 = () => {
  return (
    <>
      <Navbar />
      <div className="px-34 py-7 md:flex-wrap ">
        <div className="font-system-ui text-2xl font-medium md:text-left text-center w-full">
          {" "}
          My Tokens
        </div>

        <div className="md:flex mt-5.5 md:justify-between  flex-wrap">
          <div className="md:w-auto w-full justify-center flex">
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
          <div className="md:w-auto w-full flex justify-center md:mt-0 mt-5">
            <button
              className="flex-shrink-0 text-base  bg-yellow-350 w-33 h-9.5 text-black rounded-4 shadow-md   "
              type="submit"
            >
              <div className="flex justify-center font-medium items-center font-system-ui text-sm">
                <img
                  src="./2bbe6be4-8ffe-49a6-9dc7-477a8ebcc4c1.png"
                  alt="plus"
                  className="w-4 h-4 mr-2.5"
                />
                Tokens I hold
              </div>
            </button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-start">
          <div className="mt-4 border w-56.5 h-77 rounded-10 border-black shadow-yellow-sm">
            <div className="rounded-t-10 rounded-b-5 bg-gray-50 w-56.3 h-45">
              <button
                className="flex-shrink-0 mt-38 ml-0.5 bg-#FDB43E w-24 h-4.5 text-black rounded-4 shadow-md   "
                type="submit"
              >
                <div className="flex justify-center leading-sm font-system-ui text-xxs">
                  FAIR BONDING CURVE
                </div>
              </button>
            </div>
            <div className="flex px-2.5">
              <div className=" font-medium text-lg">We care Cryp.. </div>
              <div className=" font-medium text-lg text-gray-350"> (WcCN)</div>
            </div>
            <div className="text-xss flex h-11.5 w-53 px-2.5 font-medium leading-sm text-gray-350">
              $WcCN is the is native Tocken release by We care Crypto Network
              and this Tocken activity for futur...
            </div>
            <div className="flex justify-between px-2.5">
              <div className="text-blue-600 font-medium text-sm">0.03%</div>
              <div className="font-medium text-sm">MC $4662.51 </div>
            </div>
            <div class="relative h-2 bg-gray-50 rounded mx-2">
              <div class="absolute top-0 left-0 w-2/3 h-2 bg-gradient-to-r from-green-300 to-yellow-200 rounded"></div>
            </div>
            <div className="flex px-2.5 items-center">
              <div>
                <img
                  className="w-2 h-2"
                  src="./4af2678d-5224-446d-801b-6221b4fc2830.png"
                  alt="ad"
                />
              </div>
              <div className="text-xs font-medium ml-1 text-gray-350">
                8min 2 txns / $1.26 24h vol
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mytoken3;
