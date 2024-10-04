import React from "react";
import Navbar from "./Navbar.jsx";

const LaunchToken = () => {
  return (
    <>
      <Navbar />
      <div className="mb-16">
        <div className="flex justify-center mt-12.5 ">
          <div className="bg-gray-150 w-22 h-22 p-3.5 rounded-5">
            <img src="./e86ce3b9-3122-4142-a0ac-bae8c1167092.png" alt="aaa" />
          </div>
        </div>
        <div className="text-center font-medium text-sm">
          Upload Token Avatar
        </div>
        <div className="text-center font-medium text-sm text-gray-350">
          <div className="text-center font-medium text-sm">
            (.png, .jpg, gif)
          </div>
        </div>
        <div className=" flex justify-center mt-12.5">
          <div className="sm:w-505 w-full sm:p-0 px-4">
            <div className="font-medium text-xl">Basic Token Info</div>
            <div className="md:flex justify-between items-center mt-3.25">
              <div className="text-gray-500 font-medium ">Token Name</div>
              <input className="md:w-96 w-full h-10.5 border border-black rounded-5" />
            </div>
            <div className="md:flex justify-between items-center mt-3.25">
              <div className="text-gray-500 font-medium ">Token Symbol</div>
              <input className="md:w-96 w-full h-10.5 border border-black rounded-5" />
            </div>
            <div className="md:flex justify-between mt-3.25">
              <div className="text-gray-500 font-medium ">
                Description (Optional)
              </div>
              <div className="w-full md:w-96">
                <textarea className="md:w-96 w-full h-26.5 border border-black rounded-5" />
              </div>
            </div>
            <button
              className="flex-shrink-0 text-base  bg-yellow-350 w-full text-black rounded-4 shadow-md   "
              type="submit"
            >
              <div className="flex justify-center p-2.25 font-medium font-system-ui text-base">
                Add social links
              </div>
            </button>
            <div className="font-medium text-xl mt-12.5">
              Token Sale Methodology
            </div>
            <div className="flex mt-3.25">
              <button
                className="flex-shrink-0 text-base  bg-yellow-350 w-1/2 text-black rounded-s-4 shadow-md   "
                type="submit"
              >
                <div className="flex justify-center p-2.25 font-medium font-system-ui text-base">
                  Fair Bonding Curve
                </div>
              </button>
              <button
                className="flex-shrink-0 text-base  bg-gray-350 w-1/2 text-black rounded-e-4 shadow-md   "
                type="submit"
              >
                <div className="flex justify-center text-gray-600 p-2.25 font-medium font-system-ui text-base">
                  Classic Bonding Curve
                </div>
              </button>
            </div>
            <div className="font-medium text-xsm text-gray-600 w-full mt-3.25 pb-3">
              If this setting is enabled, upon listing and completion of
              the Fair Bonding Curve progression, a DAO is automatically
              created. This DAO governs the Treasury and comprises liquidity
              charges and contribution fees. Each token holder receives voting
              rights within the DAO. More info...
            </div>
            <div className="flex items-center">
              <div className="text-base font-medium">Token Sale Duration </div>
              <img
                src="./a5292b04-cfb2-4eaa-b58d-483630b679e1.png"
                alt="asdf"
                className="w-4 h-4 mx-1"
              />
            </div>
            <input
              type="text"
              placeholder=" DAYS 5"
              className="w-full border border-black h-10.5 rounded-4"
            />
            <div className="flex items-center justify-between mt-12.5">
              <div className="font-medium text-xl  flex ">
                Advanced Settings
                <img
                  src="./fd0921ca-c4cd-4263-a3d7-55884d126ccc.png"
                  alt="arrow"
                  className="w-6 h-6 m-1"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-8.5 h-4 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 rounded-full peer dark:bg-blue-600 peer-checked:bg-gray-350"></div>
                    <div className="absolute left-0.5 top-0.5 w-3.5 h-3 bg-white border rounded-full transition-transform peer-checked:translate-x-full"></div>
                  </label>
                </div>
              </div>
            </div>
            <div className="font-medium text-xsm text-gray-600 w-full mt-3.25 pb-3">
              7% Single Buyer Limit
              <br /> Limit the maximum number of tokens a single buyer can
              purchase to 7% of the total supply. This setting ensures a fairer
              distribution of tokens. More info…
            </div>
            <div className="font-medium text-xl mt-12.5">
              Token Sale Methodology
            </div>
            <div className="font-medium text-xsm text-gray-400 w-full ">
              Specify the number of tokens you want to purchase as a privileged
              buyer
            </div>
            <div className="flex justify-between items-center m-2.5">
              <div className="font-medium text-xl items-center flex ">
                <img
                  src="./50a45617-8361-46af-9328-f46044c8fdf3.png"
                  alt="arrow"
                  className="w-4.75 h-4.75 mr-2.5"
                />
                BNB Insert your amount
              </div>
              <div className="rounded-4 bg-yellow-350">
                <img
                  src="./a8a76928-df97-473c-bce6-e1517e00ab05.png"
                  className="w-4.5 h-4.5 m-0.25"
                  alt="asdf"
                />
              </div>
            </div>
            <div className="text-base text-gray-600 font-medium flex justify-end">
              Tokens go to DAO's treasury 0
            </div>
            <div className="font-medium text-base mt-12.5 flex items-center">
              <input type="checkbox" className="mr-1" />I agree to the GraFun
              Terms of Use
            </div>
            <button
              className="flex-shrink-0 text-base mt-5.5 bg-yellow-350 w-full text-black rounded-4 shadow-md   "
              type="submit"
            >
              <div className="flex justify-center p-2.25 font-medium font-system-ui text-base">
                Launch Token
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LaunchToken;
