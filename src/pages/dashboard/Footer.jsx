import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black w-full bottom-0 mt-[65px]">
      <div className="xl:w-[1069px] md:w-2/3  mx-auto text-white  text-[12px]">
        <div className="footer-top xl:flex ">
          <div className="footer-logo flex justify-center">
            <img
              className="h-[156px] w-[156px] xl:ml-[70px] xl:mr-[213px]"
              src="https://s3-alpha-sig.figma.com/img/94c6/eefd/851ee9e38bc23f1ba90142c712524d8b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=amdztQRFAqReDAHyf2uh59O0Wd244aRHW9Arxdg1f3MoM65HzxHn0KD18LhOX2A7sve4oUoqks6blYCOttDdfkR53DiBUCDw~1BMqImwIPWp~-Zg22YQqUk-rgmYP8t5S9PiAhx1n-gmqWJKTK0J-DbXrbSUS6wGtv4lTKL0tUL2QhuhiAm9Ky8O8v0wnC~0xIFVuwD5Mh5zaF8RFsz918sQj1FdKd4maHO6KfoeFz6BWBPAOf5BTtfBrlbuh~AjIFSd7hsbcdWngPURXu-3~~xbJ7PzpPd~WDm~5zDxOfVMCXPvQb3u~OEvpHWDRi-T6lt2so6yM~51msI-QB4ohw__"
              alt="Company name"
            ></img>
          </div>
          <div className="footer-list md:flex justify-center  ">
            <ul className="font-bold lg:w-max md:w-1/2 w-full text-center">
              <li className="mt-[38px]">
                <a href="/#" target="_blank">
                  Explore
                </a>
              </li>
              <li className="mt-[26px]">
                <a href="/#" target="_blank">
                  My tokens
                </a>
              </li>
              <li className="mt-[26px]">
                <a href="/#" className="leading-6" target="_blank">
                  Rewards
                </a>
              </li>
            </ul>
            <ul className="font-bold lg:ml-[105px] lg:w-max md:w-1/2 w-full text-center">
              <li className="mt-[38px]">
                <a href="/#" className="" target="_blank">
                  Refferals
                </a>
              </li>
              <li className="mt-[26px]">
                <a href="/#" target="_blank">
                  Documentation
                </a>
              </li>
              <li className="mt-[26px]">
                <a href="/#" className="leading-6" target="_blank">
                  How it works
                </a>
              </li>
            </ul>
            <ul className="font-bold lg:ml-[105px] lg:w-max md:w-1/2 w-full text-center">
              <li className="mt-[38px]">
                <a href="/#" className="" target="_blank">
                  Twitter
                </a>
              </li>
              <li className="mt-[26px]">
                <a href="/#" target="_blank">
                  Telegram
                </a>
              </li>
              <li className="mt-[26px]">
                <a href="/#" className="leading-6" target="_blank">
                  Youtube
                </a>
              </li>
            </ul>
            <ul className="font-bold lg:ml-[87px] lg:w-max md:w-1/2 w-full text-center">
              <li className="mt-[38px]">
                <a href="/#" className="" target="_blank">
                  Subscribe to notifications:
                </a>
              </li>
              <li className="mt-[26px] flex justify-center">
                <button
                  className="w-[149px] h-[36px] bg-yellow-500 rounded-md text-black flex flex-row items-center justify-center gap-[9px]"
                  data-ripple-light="true"
                >
                  <img
                    className="w-[16px] h-[13px]"
                    src="./assets/img/Vector.svg"
                    alt="sdf"
                  />
                  Telegram bot
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom hidden xl:block w-full">
          <div className="footer-text font-bold text-center pb-[3.25px]">
            Copyright Information & disclaimers: “Disclaimer: Digital assets are
            highly speculative and involve significant risk of loss. Anyone
            considering trading them should be fully prepared for the
            possibility of losing their entire investment. GraFun makes no
            guarantees regarding the success or profitability of any meme coin
            created on the platform and is not liable for any losses, damages,
            or complications that may arise from trading. We strongly encourage
            users to assess their financial situation, evaluate their risk
            tolerance, and conduct thorough research (DYOR) before engaging with
            any meme coins. GraFun assumes no responsibility for content added
            by users of the service, including but not limited to token names,
            descriptions, images, animations, and other media. All content is
            the sole responsibility of the user who submitted it
          </div>
        </div>
        <div className="flex xl:justify-end mt-10 justify-center w-full pb-[34px] ">
          <div className="border-b border-gray-600 cursor-pointer">
            Terms of Use
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
