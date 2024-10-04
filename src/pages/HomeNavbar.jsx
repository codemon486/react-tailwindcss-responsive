import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";

const HomeNavbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const handleHamburger = () => {
    setHamburger(!hamburger);
  };
  return (
    <div className="w-full">
      <nav className="bg-yellow-350  shadow ">
        <div className="px-28 mx-auto">
          <div className="flex items-center justify-between h-19">
            <div className=" flex items-center">
              <a className="flex-shrink-0" href="/">
                <img
                  className="w-18 h-18"
                  src="/8b617bf2f78517c12473c03092d0c844.png"
                  alt="Workflow"
                />
              </a>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-8 ">
                  <a
                    className="text-black hidden lg:block  hover:text-gray-800  py-2 rounded-md text-md font-medium"
                    href="/#"
                  >
                    MyTokens
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block ">
              <div className="flex items-center">
                <div className="xl:block hidden ">
                  <div className="flex items-center absolute p-[2px]">
                    <LuSearch className=" text-2xl "></LuSearch>
                  </div>
                  <input
                    type="search"
                    className="h-7.5 rounded-4 mr-1.5 w-[348px] pl-7 outline-none border border-black"
                  />
                </div>
                <button
                  className="flex-shrink-0 m-1.5 w-7.5 ml-1.5 h-7.5 text-base font-semibold text-black rounded-4 border-black border shadow-md   "
                  type="submit"
                >
                  <div className="flex justify-center">
                    <img
                      src="./63796692-7d48-453d-887a-300e787fd2e4.png"
                      className="w-4 h-3"
                      alt="sdf"
                    />
                  </div>
                </button>
                <button
                  className="flex-shrink-0 m-1.5 justify-center w-7.5 h-7.5 text-base font-semibold text-black rounded-4 border-black border shadow-md   "
                  type="submit"
                >
                  <div className="flex justify-center">
                    <img
                      src="./3263e262-4872-49e6-827a-7e32bb5edfb8.png"
                      alt="sdf"
                      className="w-4 h-3"
                    />
                  </div>
                </button>
                <button className="flex-shrink-0 m-1.5" type="submit">
                  <div className="flex justify-center">
                    <img
                      src="./ed4b9319-872d-4ce1-b2d5-2e274fb7dfc6.png"
                      alt="sdf"
                      className="rounded-4 w-7.5 h-7.5"
                    />
                  </div>
                </button>
                <button className="flex-shrink-0 m-1.5" type="submit">
                  <div className="flex justify-center">
                    <img
                      src="./19999870-e252-4bee-90af-29da5ebf2e31.png "
                      alt="sdf"
                      className="rounded-4 w-7.5 h-7.5"
                    />
                  </div>
                </button>
                <button
                  className="flex-shrink-0 m-1.5 h-7.5 text-base font-semibold text-black rounded-4 border-black border shadow-md   "
                  type="submit"
                >
                  <a href="/launch_token">
                    <div className="flex justify-center px-2">Launch Token</div>
                  </a>
                </button>
                <button
                  className="flex-shrink-0 ml-1.5 my-1.5 h-7.5 text-base bg-slate-350 font-semibold text-black rounded-s-4  border-blue-500 border shadow-md   "
                  type="submit"
                >
                  <div className="flex justify-center px-2">dfljo...g6596</div>
                </button>
                <button
                  className="flex-shrink-0 my-1.5 text-base bg-slate-350 font-semibold text-black shadow-md   "
                  type="submit"
                >
                  <div className="flex justify-center">
                    <img
                      src="./65958a99-0891-4614-ae93-a10b8f13f6a7.png"
                      alt="sdf"
                      className="rounded-4 w-7.5 h-7.5"
                    />
                  </div>
                </button>
              </div>
              <div className="flex items-center ml-4 md:ml-6"></div>
            </div>
            <button
              data-collapse-toggle="navbar-solid-bg"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
              aria-controls="navbar-solid-bg"
              aria-expanded="false"
              onClick={handleHamburger}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="justify-center flex w-full">
          <div className="xl:hidden block ">
            <div className="flex items-center absolute p-[2px]">
              <LuSearch className=" text-2xl "></LuSearch>
            </div>
            <input
              type="search"
              className="h-7.5 rounded-4 mr-1.5 w-[348px] pl-7 outline-none border border-black"
            />
          </div>
        </div>
      </nav>
      <div
        className={`${
          hamburger === false ? `hidden` : `block`
        }  w-full absolute z-50`}
      >
        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-yellow-350">
          <li>
            <a
              href="/#"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              aria-current="page"
            >
              Launch Token
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Telegram
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Youtube
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Log out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeNavbar;
