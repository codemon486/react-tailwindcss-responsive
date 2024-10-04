import React from "react";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import { data } from "../config/data.js";
import Navbar from "./Navbar.jsx";

const Mytoken = () => {
  return (
    <div>
      <Navbar />
      <div className="lg:px-34 py-7 ">
        <div className="font-system-ui text-xl font-medium text-center lg:text-left">
          🔥Trending tokens
        </div>
        <div className="md:flex md:justify-between justify-center flex-wrap">
          <div className="sm:w-2/3 w-5/6 divide-purple-200 mx-auto">
            <div className="lg:flex w-full lg:justify-between  flex-wrap">
              <div className="mt-4 border lg:w-1/2 mac:w-[188px] w-full h-[103px] rounded-10 border-black shadow-yellow-sm">
                <div className="font-bold text-xl text-center mt-[29px]">
                  0.08786 BNB
                </div>
                <div className="flex justify-center itmes-center my-[10px]">
                  <div className="items-center text-sm text-gray-500 mx-2">
                    Price
                  </div>
                  <div className="flex justify-center items-center text-xss rounded-sm w-[45px] h-4 bg-gray-350">
                    <img
                      src="./fd344ed7-f2d7-436a-807a-6ceb7e586bae.png"
                      alt="safd"
                      className="w-[7.5px] h-[8.7px]"
                    />
                    1.46%
                  </div>
                </div>
              </div>
              <div className="mt-4 border lg:w-1/2 mac:w-[188px] w-full h-[103px] rounded-10 border-black shadow-yellow-sm">
                <div className="font-bold text-xl text-center mt-[29px]">
                  $ 4729.66
                </div>
                <div className="flex justify-center itmes-center my-[10px]">
                  <div className="items-center text-sm text-gray-500 mx-2">
                    Market Cap
                  </div>
                </div>
              </div>
              <div className="mt-4 border lg:w-1/2 mac:w-[188px] w-full h-[103px] rounded-10 border-black shadow-yellow-sm">
                <div className="font-bold text-xl text-center mt-[29px]">
                  $ 73.78
                </div>
                <div className="flex justify-center itmes-center my-[10px]">
                  <div className="items-center flex text-sm">
                    Virtual Liquidity
                    <img
                      src="./d79effb8-6866-4d36-aafc-cfb5d9200ad4.png"
                      className="w-[7px] h-[7px] items-center ml-1"
                      alt="asdf"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 border lg:w-1/2 mac:w-[188px] w-full h-[103px] rounded-10 border-black shadow-yellow-sm">
                <div className="font-bold text-xl text-center mt-[29px]">
                  $ 45.93
                </div>
                <div className="flex justify-center itmes-center my-[10px]">
                  <div className="items-center text-sm text-black mx-2">
                    24h volume
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-black w-full h-[388px] mt-5 rounded-5 ">
              <div className="flex px-5 justify-between w-[43%] text-sm font-medium text-gray-25 mt-6">
                <div>1m</div>
                <div>5m</div>
                <div>15m</div>
                <div>1h</div>
                <div>4h</div>
                <div>1d</div>
              </div>
              <img
                src="./Rectangle 43.png"
                className="w-full h-[307px]"
                alt="graph"
              />
              <div className="flex px-11 w-[86%] text-xss justify-between font-medium text-gray-25">
                <div>03:33</div>
                <div>06:03</div>
                <div>09:03</div>
                <div>12:03</div>
                <div>15:03</div>
                <div>18:00</div>
                <div>21:00</div>
                <div>29日</div>
              </div>
            </div>
            <div className="border border-black w-full rounded-5 mt-[52px] h-[581px] overflow-y-auto  scrollbar-hide">
              <div className=" bg-white p-3 rounded-5">
                <table className=" text-left rounded-5 text-base w-full font-medium ">
                  <thead className=" tracking-wider rounded-5 ">
                    <tr className="bg-gray-150 rounded-5">
                      <th scope="col" className="px-6 ml-4 py-3 rounded-s-5">
                        Time
                      </th>
                      <th scope="col" className="px-6 py-2">
                        Type
                      </th>
                      <th scope="col" className="px-6 py-2">
                        USD
                      </th>
                      <th scope="col" className="px-6 py-2">
                        Token
                      </th>
                      <th scope="col" className="px-6 py-2">
                        BNB
                      </th>
                      <th scope="col" className="px-6 py-2">
                        Address
                      </th>
                      <th scope="col" className="px-6 py-2 rounded-e-5">
                        Txn
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {data.map((val, idx) => (
                      <tr>
                        <td className="px-6 py-4">{val.time}</td>
                        <td className="px-6 py-4 text-green-400">{val.type}</td>
                        <td className="px-6 py-4">{val.usd}</td>
                        <td className="px-6 py-4">{val.token}k</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <img
                              src="./image 1.png"
                              alt="img"
                              className="pr-1"
                            />
                            {val.bnb}k
                          </div>
                        </td>
                        <td className="px-6 py-4">{val.address}</td>
                        <td className="px-6 py-4">
                          <LuArrowUpRightFromCircle />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="lg:w-[322px] sm:w-2/3 w-5/6 flex-wrap mx-auto justify-center">
            <div className="mt-4 border lg:w-[322px] w-full h-[268px] rounded-10 border-black shadow-yellow-sm ">
              <div className="flex mt-3.5 lg:justify-start justify-center">
                <div className="w-[98px] ml-28 h-[102px] bg-gray-150 rounded-5"></div>
                <div className="flex justify-end pl-20">
                  <img
                    src="./b6de77d7-7795-4bfa-ac62-091bf7e74155.png"
                    className="h-4.5 w-4.5"
                    alt="global"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="text-[22px] font-medium">BabyGra </div>
                <div>
                  <div className="text-[22px] font-medium text-gray-500 flex items-center">
                    (BABYGRA)
                    <img
                      src="./9af7436c-2e20-4e86-9414-c155d02406bc.png"
                      alt="window"
                      className="w-4.5 h-4.5"
                    />
                  </div>
                </div>
              </div>
              <div className="text-gray-500 text-center text-sm font-medium">
                We all like the baby gra~
              </div>
              <div className="flex justify-between px-[18px] mt-4 text-sm font-medium">
                <div className="flex justify-center">
                  <div className="text-gray-500">Creator: </div>
                  <div>0xbc81...76e0</div>
                </div>
                <div className="flex justify-center">
                  <div className="text-gray-500">Creator: </div>
                  <div>11 min ago</div>
                </div>
              </div>
              <div className="text-xss text-gray-500 text-center mx-4 my-2">
                Disclaimer: The tokens listed are not associated with this
                platform. Engage with them at your own discretion.
              </div>
            </div>
            <div className="mt-4 border lg:w-[322px] w-full h-[363px] rounded-10 border-black shadow-yellow-sm">
              <div className="flex  itmes-center my-[10px]">
                <div className="items-center text-gray-500 ml-4 flex text-sm">
                  Fair Bonding Curve progress
                  <img
                    src="./d79effb8-6866-4d36-aafc-cfb5d9200ad4.png"
                    className="w-[7px] h-[7px] items-center ml-1"
                    alt="asdf"
                  />
                </div>
              </div>
              <div
                className="flex items-center justify-center"
                x-data="{ circumference: 2 * 22 / 7 * 120 }"
              >
                <svg className="transform -rotate-90 w-72 h-60 absolute">
                  <circle
                    cx="120"
                    cy="120"
                    r="100"
                    stroke="currentColor"
                    stroke-width="20"
                    fill="transparent"
                    className="text-gray-500"
                  />

                  <circle
                    cx="120"
                    cy="120"
                    r="100"
                    stroke="currentColor"
                    stroke-width="20"
                    fill="transparent"
                    className="text-[#45E6D6] rounded-5"
                  />
                </svg>
                <div className="text-xl font-bold absolute mt-10">1.01%</div>
                <div className="absolute mt-24">791.6M left </div>
                <img
                  src="./18e2f5a8-cb2a-4d0d-b000-4a4f1023cb9a.png"
                  alt="asd"
                  className="h-40 w-40 mt-12"
                />
              </div>

              <div className="text-center text-blue-500 text-sm mt-11">
                0.0671 BNB collected
              </div>
              <div className="text-center p-[14px] text-gray-500 text-xs">
                0 BNB left
              </div>
            </div>
            <div className="mt-4 border lg:w-[322px] w-full h-[271px] rounded-10 border-black shadow-yellow-sm">
              <div className="flex m-3.25 items-center">
                <button
                  className="flex-shrink-0 text-base  bg-yellow-350 w-[129px] h-9 text-black rounded-s-4 shadow-md   "
                  type="submit"
                >
                  <div className="flex justify-center font-medium font-system-ui text-xl">
                    Buy
                  </div>
                </button>
                <button
                  className="flex-shrink-0 text-base  bg-gray-350 w-[129px] h-9 text-black rounded-e-4 shadow-md   "
                  type="submit"
                >
                  <div className="flex justify-center text-gray-600 text-xl font-medium font-system-ui ">
                    Sell
                  </div>
                </button>
                <div className="border border-black rounded-5 ml-2">
                  <img
                    src="./c71e81be-bec0-4a3d-a76e-ddc161e1cc48.png"
                    alt="asdf"
                    className="w-4 h-4 m-1"
                  />
                </div>
              </div>
              <div className="flex justify-between px-7 pt-[50px]">
                <div className="font-normal text-3xl">0</div>
                <div className="font-normal text-3xl flex items-center">
                  <img
                    src="./50a45617-8361-46af-9328-f46044c8fdf3.png"
                    alt="arrow"
                    className="w-[19px] h-[19px] "
                  />
                  BNB
                </div>
              </div>
              <div className="flex justify-between px-3 py-1.5">
                <div className="h-6 w-36 border text-center border-slate-800 rounded-5">
                  1 BNB
                </div>
                <div className="h-6 w-36 border text-center border-slate-800 rounded-5">
                  2 BNB
                </div>
              </div>
              <div className="flex justify-between px-3">
                <div className="h-6 w-36 border text-center border-slate-800 rounded-5">
                  5 BNB
                </div>
                <div className="h-6 w-36 border text-center border-slate-800 rounded-5">
                  10 BNB
                </div>
              </div>
              <div className="px-3.5 py-3">
                <button
                  className="flex-shrink-0 text-base  bg-gray-350 w-full text-black rounded-4"
                  type="submit"
                >
                  <div className="flex justify-center p-1 text-base font-normal font-system-ui ">
                    Connect wallet
                  </div>
                </button>
              </div>
            </div>
            <div className="mt-4 border lg:w-[322px] w-full h-[181px]  rounded-10 border-black shadow-yellow-sm">
              <div className="flex justify-between text-sm py-[7px] bg-gray-150 rounded-5 m-2">
                <div className="px-[11px]">Holders</div>
                <div className="px-[11px]">%</div>
              </div>
              <div className="flex justify-between text-sm py-[7px] rounded-5 m-2">
                <div className="px-[11px]">0x8341...6451</div>
                <div className="px-[11px]">99.04</div>
              </div>
              <div className="flex justify-between text-sm py-[7px] rounded-5 m-2">
                <div className="px-[11px]">0x8341...6451</div>
                <div className="px-[11px]">99.04</div>
              </div>
              <div className="flex justify-between text-sm py-[7px] rounded-5 m-2">
                <div className="px-[11px]">0x8341...6451</div>
                <div className="px-[11px]">99.04</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mytoken;
