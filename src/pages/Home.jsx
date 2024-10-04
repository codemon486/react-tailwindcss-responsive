import Card from "../components/Card.jsx";
import { AiOutlineRightCircle, AiOutlineLeftCircle } from "react-icons/ai";
import HomeNavbar from "./HomeNavbar.jsx";
export default function Home() {
  return (
    <div>
      <HomeNavbar />
      <div>
        <div className="w-302 h-49 absolute left-1/2 bg-maincolor -translate-x-1/2 rounded-b-homeframbtmround text-center align-middle">
          <p className="leading-22.97 font-500 top-1/2 translate-y-1/2 text-lg">
            Final Farming Season
          </p>
        </div>
        <div className="left-1/2 -translate-x-1/2 top-72 text-xs  md:text-16 font-500 absolute flex justify-between">
          <span
            className="sm:px-29 px-1 sm:py-6 py-2 hover:cursor-pointer
              rounded-2 border-solid bg-white border-black border-1"
          >
            How it works
          </span>
          <span
            className="sm:px-29 px-1 sm:py-6 py-2 hover:cursor-pointer
              rounded-2 ml-2 border-solid border-black bg-#45E6D6 border-1"
          >
            How it works
          </span>
        </div>
        <img
          className="md:block hidden h-266 w-full"
          src="Rectangle 3.png"
          alt="adsf"
        ></img>
        <img
          className="md:hidden block h-266 w-full"
          src="Screenshot 2024-10-04 054249.png"
          alt="sdf"
        ></img>
      </div>
      <div className="max-w-88% mx-auto">
        <div className="flex justify-around flex-wrap font-500 max-w-648 mt-275 ml-2">
          <div className="flex justify-around bg-#45E6D6 p-7.5 rounded-5">
            <div className="text-14 font-500 ml-1.5">GRA</div>
            <div className="bg-#127BE94D px-1 rounded-3 ml-3 flex justify-around">
              <label className=" inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="relative w-5.5 h-2.5 bg-gray-200  rounded-full peer dark:bg-#127BE9 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[3px] after:bg-white after:border after:rounded-full after:h-2 after:w-2 after:transition-all"></div>
                <span className="-mt-0.1 px-1 font-500 text-black text-12">
                  Animation
                </span>
              </label>
            </div>
          </div>
          <div className="sm:mt-0 mt-1 hover:cursor-pointer flex text-12 text-#526B78 justify-around bg-#B3C0C7 p-7.5 rounded-5 w-110">
            Trending
          </div>{" "}
          <div className="sm:mt-0 mt-1 hover:cursor-pointer flex text-12 text-#526B78 justify-around bg-#B3C0C7 p-7.5 rounded-5 w-110">
            New
          </div>{" "}
          <div className="sm:mt-0 mt-1 hover:cursor-pointer flex text-12 text-#526B78 justify-around bg-#B3C0C7 p-7.5 rounded-5 w-110">
            Top
          </div>{" "}
          <div className="md:mt-0 mt-1 hover:cursor-pointer flex text-12 text-#526B78 justify-around bg-#B3C0C7 p-7.5 rounded-5 w-110">
            Finalized
          </div>
        </div>
        <div className="flex flex-wrap justify-between mt-2">
          <Card bottomColor={"shadow-#127be9"} cardColor={"bg-#FFE958"}></Card>
          {[...Array(14).keys()].map((value) => (
            <Card bottomColor={"shadow-yellow-sm"} status={"w-2/3"}></Card>
          ))}
        </div>
        <div className=" flex justify-between min-w-64 max-w-314 align-middle content-center ml-50% -translate-x-1/2 mt-30">
          <AiOutlineLeftCircle
            className="hover:cursor-pointer "
            size={39}
            color="#999999"
          />

          <div className="text-18 translate-y-1 font-500">
            Showing tokens 1-30
          </div>
          <AiOutlineRightCircle className="hover:cursor-pointer " size={39} />
        </div>
      </div>
    </div>
  );
}
